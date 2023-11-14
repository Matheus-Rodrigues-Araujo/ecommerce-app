'use client'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Products from './components/products'

export default async function Home() {
  return (
    <main>
      <Navbar/>
      <Products/>
      <Footer/>
    </main>
  )
}
