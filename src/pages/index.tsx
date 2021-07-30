
import React from "react"
import { CompleteChallenges } from "../components/CompleteChallenges"
import { Countdown } from "../components/Countdown"
import { ExperienceBar } from "../components/ExperienceBar"
import { StartChallenge } from "../components/StartChallenge"
import {Profile } from "../components/Profile"
import styles from '../styles/pages/Home.module.css'
import Head from 'next/head'


export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar/>
      <Head>
        <title>Inicio | move.It</title>
      </Head>
      <section>
        <div className={styles.container}>
          <Profile/>
          <CompleteChallenges/>
          <Countdown/>
        </div>
          <StartChallenge/>
        <div>

        </div>
      </section> 

      
    </div>
    
  )
} 