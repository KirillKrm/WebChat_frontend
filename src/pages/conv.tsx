import styles from 'styles/conv.module.css'
import { Button, Camera, Input } from 'components'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const micOnUrl = '' //TODO
const micOffUrl = '' //TODO
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
      <Button name={micOn ? 'MIC' : 'NOMIC'} />
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

function Conv({ usersDataset, roomID, messagesDataset }: any) {
  // const [time, setTime] = useState(0)

  // useEffect(() => {
  //   let secTimer = setInterval(() => {
  //     setTime(Date.now() - date)
  //   }, 1000)

  //   return () => clearInterval(secTimer)
  // }, [date])

  return (
    <div className={styles.app}>
      <a href="main">
        <button style={{ position: 'absolute' }}>Go Main</button>
      </a>
      <div className={styles.app__wrapper}>
        <main className={styles.wrapper__main}>
          <article className={styles.main__cameras}>
            <div className={styles.cameras__list}>
              {usersDataset.map((user: any, i: any) => {
                return (
                  <Camera
                    userIcon={user.avatarURL}
                    userName={user.username}
                    micOn={user.micOn}
                    key={user.userId}
                  />
                )
              })}
            </div>
          </article>
          <div className={styles.main__rightColumn}>
            <section className={styles.rightColumn__users}>
              <h2>People</h2>
              <div className={styles.users__list}>
                {usersDataset.map((user: any, i: any) => {
                  return (
                    <UserStatus
                      url={user.avatarURL}
                      nickname={user.username}
                      micOn={user.micOn}
                      key={user.userId}
                    />
                  )
                })}
              </div>
            </section>
            <section className={styles.rightColumn__chat}>
              <div className={styles.chat__list}>
                {messagesDataset.map((message: any, i: any) => {
                  return (
                    <UserMessage
                      nickname={message.username}
                      date={message.date}
                      message={message.text}
                      key={message.userId}
                    />
                  )
                })}
              </div>
              <form className={styles.chat__sender}>
                <input></input>
                <button type="submit" onClick={() => alert('Send')}>
                  Send
                </button>
              </form>
            </section>
          </div>
        </main>
        <footer className={styles.wrapper__footer}>
          <section className={styles.footer__roomID}>
            <p>Room ID: {roomID}</p>
          </section>
          <section className={styles.footer__buttons}>
            <Button name="M" />
            <Button name="C" />
            <Button name="X" />
          </section>
          <section className={styles.footer__time}>
            <p>Time: {/*Date.now() - date*/}</p>
          </section>
        </footer>
      </div>
    </div>
  )
}

export async function getServerSideProps({ params }: any) {
  const usersDataset = [
    {
      userId: '0',
      username: 'User_1',
      avatarURL: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      micOn: true,
    },
    {
      userId: '1',
      username: 'User_2',
      avatarURL: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      micOn: false,
    },
    {
      userId: '2',
      username: 'User_3',
      avatarURL: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      micOn: false,
    },
    {
      userId: '3',
      username: 'User_4',
      avatarURL: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      micOn: false,
    },
    {
      userId: '4',
      username: 'User_5',
      avatarURL: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      micOn: false,
    },
    {
      userId: '5',
      username: 'User_6',
      avatarURL: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      micOn: false,
    },
    {
      userId: '6',
      username: 'User_7',
      avatarURL: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      micOn: false,
    },
  ]
  const messagesDataset = [
    {
      userId: '0',
      username: 'User_1',
      date: '15:00',
      text: 'Hello!',
    },
    {
      userId: '1',
      username: 'User_2',
      date: '15:01',
      text: 'Bye!',
    },
    {
      userId: '2',
      username: 'User_3',
      date: '15:02',
      text: 'Bye!',
    },
    {
      userId: '3',
      username: 'User_4',
      date: '15:03',
      text: 'Bye!',
    },
    {
      userId: '4',
      username: 'User_5',
      date: '15:04',
      text: 'Bye!',
    },
    {
      userId: '5',
      username: 'User_6',
      date: '15:04',
      text: 'Bye!',
    },
  ]
  const roomID = Math.floor(Math.random() * 1000000)
  // const date = Date.now()

  return { props: { usersDataset, roomID, messagesDataset } }
}

export default Conv
