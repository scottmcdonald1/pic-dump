import React, { ReactNode } from "react"
import Link from "next/link"

export function Header() {
  return (
    <div>
      <div className="title">
          <h1 className="font1">SCOTT MCDONALD</h1>
          </div>
      <NavBar/>

    </div>
  )
}


function NavBar() {
  return (
    <nav className="flex-nav">

        <a className="toggle-nav font1">☰ Menu</a>

        <ul className="font0">
          <NavLink href="/">HOME</NavLink>
          <NavLink href="/artwork">ARTWORK</NavLink>
          <NavLink href="/web-dev">WEB DEVELOPMENT</NavLink>
          <NavLink href="/about">ABOUT</NavLink>
        </ul>

    </nav>
  )
}

function NavLink({href, children} : {href: string, children: ReactNode}){
  return (
    <li className="nav-button">
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  )
}