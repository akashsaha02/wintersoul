import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
    return (
        <div>
            <Header />
            <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
                <Outlet />
                <Toaster />
            </div>
            <Footer />
        </div>
    )
}

export default Layout
