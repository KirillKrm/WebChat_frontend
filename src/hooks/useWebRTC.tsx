import { useEffect, useRef, useCallback } from 'react'
import useStateWithCallback from './useStateWithCallback'
import socket from 'socket'

export const LOCAL_VIDEO = 'LOCAL_VIDEO'

export default function useWebRTC(roomID: any) {
  const [clients, updateClients] = useStateWithCallback([])

  const addNewClient = useCallback(
    (newClient, cb) => {
      updateClients((list: any) => {
        if (!list.includes(newClient)) {
          return [...list, newClient]
        }

        return list
      }, cb)
    },
    [clients, updateClients]
  )

  const peerConnections = useRef<any>({})
  const localMediaStream = useRef<any>(null)
  const peerMediaElements = useRef<any>({
    [LOCAL_VIDEO]: null,
  })

  useEffect(() => {
    async function handleNewPeer({
      peerID,
      createOffer,
    }: {
      peerID: any
      createOffer: any
    }) {
      if (peerID in peerConnections.current) {
        return console.warn(`Already connected to peer ${peerID}`)
      }

      peerConnections.current[peerID] = new RTCPeerConnection({
        iceServers: [
          {
            urls: [
              'stun.l.google.com:19302',
              'stun1.l.google.com:19302',
              'stun2.l.google.com:19302',
              'stun3.l.google.com:19302',
              'stun4.l.google.com:19302',
            ],
          },
        ],
      })

      peerConnections.current[peerID].onicecandidate = (event: any) => {
        if (event.candidate) {
          socket.emit('relay-ice', {
            peerID,
            iceCandidate: event.candidate,
          })
        }
      }

      let tracksNumber = 0
      peerConnections.current[peerID].ontrack = ({
        streams: [remoteStream],
      }: {
        streams: any
      }) => {
        tracksNumber++

        if (tracksNumber === 2) {
          tracksNumber = 0
          addNewClient(peerID, () => {
            if (peerMediaElements.current[peerID]) {
              peerMediaElements.current[peerID].srcObject = remoteStream
            } else {
              let settled = false
              const interval = setInterval(() => {
                if (peerMediaElements.current[peerID]) {
                  peerMediaElements.current[peerID].srcObject = remoteStream
                  settled = true
                }

                if (settled) {
                  clearInterval(interval)
                }
              }, 1000)
            }
          })
        }
      }

      localMediaStream.current.getTracks().forEach((track: any) => {
        peerConnections.current[peerID].addTrack(
          track,
          localMediaStream.current
        )
      })

      if (createOffer) {
        const offer = await peerConnections.current[peerID].createOffer()

        await peerConnections.current[peerID].setLocalDescription(offer)

        socket.emit('relay-sdp', {
          peerID,
          sessionDescription: offer,
        })
      }
    }

    socket.on('add-peer', handleNewPeer)

    return () => {
      socket.off('add-peer')
    }
  }, [])

  useEffect(() => {
    async function setRemoteMedia({
      peerID,
      sessionDescription: remoteDescription,
    }: {
      peerID: any
      sessionDescription: any
    }) {
      await peerConnections.current[peerID]?.setRemoteDescription(
        new RTCSessionDescription(remoteDescription)
      )

      if (remoteDescription.type === 'offer') {
        const answer = await peerConnections.current[peerID].createAnswer()

        await peerConnections.current[peerID].setLocalDescription(answer)

        socket.emit('relay-sdp', {
          peerID,
          sessionDescription: answer,
        })
      }
    }

    socket.on('session-description', setRemoteMedia)

    return () => {
      socket.off('session-description')
    }
  }, [])

  useEffect(() => {
    socket.on('ice-candidate', ({ peerID, iceCandidate }) => {
      peerConnections.current[peerID]?.addIceCandidate(
        new RTCIceCandidate(iceCandidate)
      )
    })

    return () => {
      socket.off('ice-candidate')
    }
  }, [])

  useEffect(() => {
    const handleRemovePeer = ({ peerID }: { peerID: any }) => {
      if (peerConnections.current[peerID]) {
        peerConnections.current[peerID].close()
      }

      delete peerConnections.current[peerID]
      delete peerMediaElements.current[peerID]

      updateClients((list: any) => list.filter((c: any) => c !== peerID))
    }

    socket.on('remove-peer', handleRemovePeer)

    return () => {
      socket.off('remove-peer')
    }
  }, [])

  useEffect(() => {
    async function startCapture() {
      localMediaStream.current = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      })

      addNewClient(LOCAL_VIDEO, () => {
        const localVideoElement = peerMediaElements.current[LOCAL_VIDEO]

        if (localVideoElement) {
          localVideoElement.volume = 0
          localVideoElement.srcObject = localMediaStream.current
        }
      })
    }

    startCapture()
      .then(() => socket.emit('join', { room: roomID }))
      .catch((e) => console.error('Error getting userMedia:', e))

    return () => {
      localMediaStream.current.getTracks().forEach((track: any) => track.stop())

      socket.emit('leave')
    }
  }, [roomID])

  const provideMediaRef = useCallback((id, node) => {
    peerMediaElements.current[id] = node
  }, [])

  return {
    clients,
    provideMediaRef,
  }
}
