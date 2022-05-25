import styles from '../styles/main.module.css'
import { Button, Input, Camera } from 'components'
import socket from 'socket'
import { useEffect, useState } from 'react'
import Conv from 'pages/conv'

function Main() {
  const [userName, setUserName] = useState('')
  const [roomID, setRoomID] = useState('')
  const [activeUsers, setActiveUsers] = useState<any>()
  const [localStream, setLocalStream] = useState<any>()
  const [showConv, setShowConv] = useState(false)

  useEffect(() => {
    const localVideo = {
      video: true,
      audio: true,
    }
    async function enableStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(localVideo)
        setLocalStream(stream)
      } catch (error) {
        console.warn(error)
      }
    }
    if (!localStream) {
      enableStream()
    } else {
      return function cleanup() {
        localStream.getTracks().forEach((track: any) => {
          track.stop()
        })
      }
    }
  }, [localStream])

  socket.on('status', (data: string) => {
    console.log(data)
  })

  socket.on('update-room', (userName, socketID, roomId) => {
    setRoomID(roomId)
  })

  socket.on('update-user-list', ({ users }) => {
    setActiveUsers(users)
  })

  const handleClickCreate = () => {
    if (userName.length == 0) {
      alert('Невірно введено значення')
    } else {
      socket.emit('create-room', userName, socket.id)
      setShowConv(true)
      //window.location.assign('http://localhost:3000/conv')
    }
  }

  const handleClickConnect = () => {
    if (roomID.length == 0 || userName.length == 0) {
      alert('Невірно введено значення')
    } else {
      socket.emit('connect-room', userName, roomID)
      setShowConv(true)
      //window.location.assign('http://localhost:3000/conv')
    }
  }

  const handleInputRoomID = (data: any) => {
    setRoomID(data)
  }

  const handleInputName = (data: any) => {
    setUserName(data)
  }

  return (
    <>
      {!showConv ? (
        <div className={styles.app}>
          <a href="conv">
            <button style={{ position: 'absolute', left: '0', top: '0' }}>
              Go Conv
            </button>
          </a>
          <main className={styles.app__profileData}>
            <Camera userName={userName} key={'0'} stream={localStream} />
            <article className={styles.app__buttons}>
              <Button>M</Button>
              <Button>C</Button>
            </article>
            <Input name="Name:" handleInput={handleInputName} />
            <article className={styles.app__panels}>
              <section className={styles.panels__connect}>
                <div className={styles.connect__form}>
                  <p>Connect to room</p>
                  <Input name="Room ID:" handleInput={handleInputRoomID} />
                  <button onClick={handleClickConnect}>Connect</button>
                </div>
              </section>
              <div className={styles.panels__create}>
                <p>Create room</p>
                <button onClick={handleClickCreate}>Create</button>
              </div>
            </article>
          </main>
        </div>
      ) : (
        <Conv roomID={roomID} users={activeUsers} />
      )}
    </>
  )
}

export default Main
