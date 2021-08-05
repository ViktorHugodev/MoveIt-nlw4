/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const {level} = useContext(ChallengeContext)
  
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/viktorhugodev.png" alt="Foto perfil" />
      <div>
        <strong>Victor Hugo</strong>
        <p>
          <img src="icons/level.svg" alt="Level up icone"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}