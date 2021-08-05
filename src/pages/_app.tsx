import '../styles/global.css'
import { ChallengeProvider} from '../contexts/ChallengeContext'
import React from 'react'
import { CountdownProvider } from '../contexts/CountdownContext'

function MyApp({ Component, pageProps }) {
  return (
    
    <ChallengeProvider>
      <Component {...pageProps} />
    </ChallengeProvider>
    
    
  )
}

export default MyApp
