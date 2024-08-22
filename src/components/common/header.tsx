/*
|-----------------------------------------
| setting up Header for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import Image from 'next/image'

import Link from 'next/link'
import Nav from './nav/nav'

const navData = [
  { id: '1.1', href: '/doc', name: 'Doc', title: 'Doc' },
]

const Header = () => {
  return (
    <div className="border-b bg-slate-900 w-full h-[8vh]">
  
      <Nav />
    </div>
  )
}
export default Header
