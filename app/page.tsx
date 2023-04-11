
import Image from 'next/image'
import { Inter } from '@next/font/google'
import NavBar from './components/NavBar'
import Main_Section from './components/Main_Section'
import Community from './components/Community'
//import Metaverse from './components/Metaverse'
import Footer from './components/Footer'
//import Slide from './components/Slide'
import MetaverseAnimate from './components/MetaverseAnimate'
import Nutshell from './components/Nutshell'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className=" bg-gradient-to-br from-indigo-900 to-gray-900">
    <NavBar/>
    <Main_Section/>
    <Nutshell/>
    <Community/>
    <MetaverseAnimate/>
    <Footer/>
    </div>
    </>

  )
}
