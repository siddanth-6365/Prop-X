import { ReactNode } from 'react'
import Footer from '../Footer'
import Header from '../Header'


export default function BaseLayout({ children}: any) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}
