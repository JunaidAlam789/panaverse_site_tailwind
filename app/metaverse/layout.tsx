import Footer from "app/components/Footer"
import NavBar from "app/components/NavBar"

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
     
      <section className=''>
        <NavBar/>
        {children}
        <Footer/>
       
      </section>
  )
}
