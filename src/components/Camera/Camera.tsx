import styles from './Camera.module.css'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export function Camera({
  userName,
  stream,
}: {
  userName: string
  stream: any
}) {
  const videoRef = useRef(document.createElement('video'))
  const getVideo = (stream: any) => {
    let video = videoRef.current
    video.srcObject = stream
    video.play()
  }

  useEffect(() => {
    getVideo(stream)
  })

  return (
    <div className={styles.app__cam}>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <video
          style={{ width: '100%', height: '100%', transform: 'scale(-1, 1)' }}
          autoPlay
          ref={videoRef}
        ></video>
      </div>
      <label>{userName}</label>
      {/*<div className={styles.cam__sound}></div>*/}
    </div>
  )
}

export default Camera
