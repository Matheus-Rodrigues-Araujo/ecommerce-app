'use client'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Products from './components/products'
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

export default async function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <SkeletonTheme baseColor='black' highlightColor='#525252' >
        <main>
          <Navbar/>
          <Products/>
          <Footer/>
        </main>
      </SkeletonTheme>
    </QueryClientProvider>
  )
}
