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
    <div
      style={{
        display: 'flex',
        padding: '4px',
        flexDirection: 'row',
        background: 'pink',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Image src={url} height={36} width={36} alt="User image" />
      <h4>{nickname}</h4>
      <Button name={micOn ? 'MIC' : 'NOMIC'} />
      {/* <Image src={micOn ? micOnUrl : micOffUrl} alt="Mic status" /> */}
    </div>
  )
}

function Conv({ usersDataset }: any) {
  const [randomID, setID] = useState(Math.floor(Math.random() * 1000000))

  return (
    <div className={styles.app}>
      <a href="main">
        <button style={{ position: 'absolute' }}>Go Main</button>
      </a>
      <div className={styles.app__wrapper}>
        <main className={styles.wrapper__main}>
          <article className={styles.main__cameras}>cameras</article>
          <div className={styles.main__rightColumn}>
            <section className={styles.rightColumn__users}>
              <h2 style={{ textAlign: 'center', marginTop: '10px' }}>People</h2>
              <div
                style={{
                  display: 'flex',
                  flex: '1 1 0',
                  flexDirection: 'column',
                  marginTop: '8px',
                  marginBottom: '16px',
                  width: '100%',
                  height: '100%',
                  overflowY: 'scroll',
                  gap: '8px',
                }}
              >
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
            <section className={styles.rightColumn__chat}>chat</section>
          </div>
        </main>
        <footer className={styles.wrapper__footer}>
          <section className={styles.footer__roomID}>
            <p>Room ID: </p>
          </section>
          <section className={styles.footer__buttons}>
            <Button name="M" />
            <Button name="C" />
            <Button name="X" />
          </section>
          <section className={styles.footer__time}>
            <p>Time:</p>
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
      username: 'People1',
      avatarURL: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      micOn: true,
    },
    {
      userId: '1',
      username: 'People2',
      avatarURL: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      micOn: false,
    },
  ]

  return { props: { usersDataset } }
}

export default Conv
