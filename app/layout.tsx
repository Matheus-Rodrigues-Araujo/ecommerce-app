import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './styles/navbar.css'
import './styles/footer.css'
import './styles/products.css'
import { GlobalContextProvider } from './context/store'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MKS Sistemas',
  description: 'E-commerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
            {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
