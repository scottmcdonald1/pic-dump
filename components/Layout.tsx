import React, { ReactNode } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"

export function Layout({children} : {children: ReactNode}) {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}


