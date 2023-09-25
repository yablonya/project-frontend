import './globals.css'
import type { Metadata } from 'next'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: 'My Project',
  description: 'It`s front side of my project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
