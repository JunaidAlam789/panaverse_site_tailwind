
import Image from 'next/image'
import { Inter } from '@next/font/google'
import NavBar from './components/NavBar'
import Main_Section from './components/Main_Section'
import Section2 from './components/Section2'
//import Metaverse from './components/Metaverse'
import Footer from './components/Footer'
//import Slide from './components/Slide'
import MetaverseAnimate from './components/MetaverseAnimate'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <NavBar/>
    <Main_Section/>
    <Section2/>
    <MetaverseAnimate/>
    <Footer/>
    </>

  )
}
