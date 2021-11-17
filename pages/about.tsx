import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header'

const About: NextPage = () => {
    return (
      <object className="open">
        <div>
          <h1>This is /about</h1> 
        </div>
      </object>
      
    )
}

  export default About