import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"


const Layout = () => {
  return (
    <div className='flex flex-col h-screen max-w-screen-sm mx-auto'>
      <Header />
      <div className="flex-1 overflow-y-auto">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout