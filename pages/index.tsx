import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header'
import { Gallery } from '../components/Gallery'

const Home: NextPage = () => {
  return (
    
    <div>
      {/* Header with navigation */}
      <Gallery/>
    </div>
  )
}

export default Home
