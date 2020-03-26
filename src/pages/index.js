import React from 'react'
import '../styles/main.css'
import Home from '../components/Home'
import SideNav from '../components/SideNav'
import Helmet from "react-helmet"
function index() {
    return (
        <div>
            <Helmet>
                <title>Anmol Chaudhary - UI/UX Designer & Developer</title>
            </Helmet>
            <SideNav page="home" />
            <Home />
        </div>
    )
}

export default index

