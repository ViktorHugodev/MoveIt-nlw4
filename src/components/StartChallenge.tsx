import styles from '../styles/components/StartChallenge.module.css'

export function StartChallenge() {
  return (
    <div className={styles.startChallengeContainer}>
      <div>
        <p>
          Inicie um ciclo para receber desafios
        </p>
        </div>
      <div>
        <img src="icons/arrowLevel.svg" alt="Level up" />
      </div>
      <div>
        <p>
          Avance de level completando os desafios.
        </p>
      </div>
    </div>
    
  )
}