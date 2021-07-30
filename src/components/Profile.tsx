import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/viktorhugodev.png" alt="Foto perfil" />
      <div>
        <strong>Victor Hugo</strong>
        <p>
          <img src="icons/level.svg" alt="Level up icone"/>
          Level 1
        </p>
      </div>
    </div>
  )
}