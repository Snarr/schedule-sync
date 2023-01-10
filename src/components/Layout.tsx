import type { ReactNode } from "react";
import Navbar from '../components/Navbar'

function Layout({children}: {children: ReactNode}) {
  return (
    <>
      {children}
      <Navbar/>
    </>
  )
}

export default Layout;