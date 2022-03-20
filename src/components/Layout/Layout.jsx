import react from 'react'
import { Footer } from '../Footer/Footer'
import {Navbar} from '../Navbar/Navbar'
import { Outlet } from 'react-router'

export const Layout = (props) => {
    return (
        <div>
            <Navbar/>
                <Outlet/>
            <Footer/>
        </div>
    )
}
