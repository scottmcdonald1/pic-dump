import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header'

const About: NextPage = () => {
    return (
      <div>
        <Header /> 
        <h1>About</h1> 
      </div>
    )
}

  export default About