
import React from "react"
import {GetServerSideProps } from 'next'
import Head from 'next/head'
import { CompleteChallenges } from "../components/CompleteChallenges"
import { Countdown } from "../components/Countdown"
import { ExperienceBar } from "../components/ExperienceBar"
import { ChallengeBox } from "../components/ChallengeBox"
import {Profile } from "../components/Profile"
import styles from '../styles/pages/Home.module.css'
import { CountdownProvider } from "../contexts/CountdownContext"
import { ChallengeProvider } from "../contexts/ChallengeContext"

interface HomeProps {
  level: number
  currentExperience: number
  challengeCompleted: number
}

export default function Home(props:HomeProps ) {
  console.log(props)
  
  return (
    <ChallengeProvider
    level={props.level}
    currentExperience={props.currentExperience}
    challengeCompleted={props.challengeCompleted}>
      <div className={styles.container}>
        <Head>
          <title>Inicio  | move.it</title>
        </Head>
        
        <ExperienceBar/>
        <CountdownProvider>
          <section>
            <div>
              <Profile/>
              <CompleteChallenges/>
              <Countdown/>
            </div>
            <div>
            <ChallengeBox/>
            </div>
          </section> 
        </CountdownProvider>
      </div>
    </ChallengeProvider>
  )
} 

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {level, currentExperience, challengeCompleted } = ctx.req.cookies
  
  return {
    props: {
      level: Number(level), 
      currentExperience: Number(currentExperience),
      challengeCompleted: Number(challengeCompleted)
    }
  }
}