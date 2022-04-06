import styles from './Camera.module.css'
import Image from 'next/image'

export function Camera({
  userName,
  userIcon,
}: {
  userName: string
  userIcon: string
  micOn: boolean
}) {
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
        <Image src={userIcon} height={36} width={36} alt="User image" />
      </div>
      <label>{userName}</label>
      <div className={styles.cam__sound}></div>
    </div>
  )
}

export default Camera
