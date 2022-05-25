import styles from 'styles/conv.module.css'
import { Button, Input, Clock, Camera } from 'components'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import socket from 'socket'

const UserStatus = ({
  url,
  nickname,
  micOn,
}: {
  url: string
  nickname: string
  micOn: boolean
}) => {
  return (
    <div className={styles.list__userStatus}>
      <Image src={url} height={36} width={36} alt="User image" />
      <h4>{nickname}</h4>
      <Button>{micOn ? 'MIC' : 'NOMIC'}</Button>
      {/* <Image src={micOn ? micOnUrl : micOffUrl} alt="Mic status" /> */}
    </div>
  )
}

const UserMessage = ({
  nickname,
  message,
  date,
}: {
  nickname: string
  message: string
  date: string
}) => {
  return (
    <div className={styles.list__UserMessage}>
      <p>
        <b>
          {nickname} {date}
        </b>
      </p>
      <p>{message}</p>
    </div>
  )
}

export default function Conv({
  roomID,
  users,
}: {
  roomID: string
  users: any
}) {
  const messagesDataset: any[] = []
  const avatarURL = 'https://cdn-icons-png.flaticon.com/512/147/147142.png'
  const micOn = true

  const handleSend = () => {
    alert('Send')
  }

  return (
    <div className={styles.app}>
      <a href="main">
        <button style={{ position: 'absolute', left: '0', top: '0' }}>
          Go Main
        </button>
      </a>
      <div className={styles.app__wrapper}>
        <main className={styles.wrapper__main}>
          <article className={styles.main__cameras}>
            <div className={styles.cameras__list}>
              {users.map((userID: any, index: any) => {
                return (
                  <Camera userName={userID} key={index} stream={undefined} />
                )
              })}
            </div>
          </article>
          <div className={styles.main__rightColumn}>
            <section className={styles.rightColumn__users}>
              <h2>People</h2>
              <div className={styles.users__list}>
                {users.map((userID: any, index: any) => {
                  return (
                    <UserStatus
                      url={avatarURL}
                      nickname={userID}
                      micOn={micOn}
                      key={index}
                    />
                  )
                })}
              </div>
            </section>
            <section className={styles.rightColumn__chat}>
              <div className={styles.chat__list}>
                {messagesDataset.map((message: any, index: any) => {
                  return (
                    <UserMessage
                      nickname={message.username}
                      date={message.date}
                      message={message.text}
                      key={index}
                    />
                  )
                })}
              </div>
              <div className={styles.chat__sender}>
                <input></input>
                <button onClick={handleSend}>Send</button>
              </div>
            </section>
          </div>
        </main>
        <footer className={styles.wrapper__footer}>
          <section className={styles.footer__roomID}>
            <p>Room ID: {roomID}</p>
          </section>
          <section className={styles.footer__buttons}>
            <Button>M</Button>
            <Button>C</Button>
            <Button>X</Button>
          </section>
          <section className={styles.footer__time}>
            <p>Time: {<Clock />}</p>
          </section>
        </footer>
      </div>
    </div>
  )
}

// export async function getServerSideProps({ params }: any) {
//   // {
//   //   username: 'User_1',
//   //   avatarURL: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
//   //   micOn: true,
//   // },
//   const messagesDataset = [
//     {
//       username: 'User_1',
//       date: '15:00',
//       text: 'Hello!',
//     },
//   ]
//   const roomID = Math.floor(Math.random() * 1000000)

//   return { props: { roomID, messagesDataset } }
// }
