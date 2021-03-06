import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengeContext } from "./ChallengeContext";

interface CountdownProviderProps {
  children: ReactNode
}

interface CountdownContextData {
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  startCoundown: () => void
  resetCountdown: () => void
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout

export function CountdownProvider({children}: CountdownProviderProps) {
  const {startNewChallenge} = useContext(ChallengeContext)
  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  
  function startCoundown() {
    setIsActive(true)
  }
  
  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setHasFinished(false)
    setTime(25 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])
  
  
  return (
    <CountdownContext.Provider value={
     { minutes,
      seconds,
      hasFinished,
      isActive,
      startCoundown,
      resetCountdown,}
    }>
      {children}
    </CountdownContext.Provider>
  )
}