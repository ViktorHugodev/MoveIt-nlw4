import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/CompleteChallenges.module.css'

export function CompleteChallenges() {
  const {challengeCompleted} = useContext(ChallengeContext)
  
  return (
    <div className={styles.CompleteChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengeCompleted}</span>
    </div>
  )
}