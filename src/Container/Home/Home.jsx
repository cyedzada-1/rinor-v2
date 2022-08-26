import React from 'react'

import Footer from '../Footer/Footer.jsx';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Header from '../../Components/Header/Header.jsx';
import TourList from '../../Components/Tour/TourList.jsx';
import TourType from '../../Components/Tour/TourType.jsx';
import Newsletter from '../../Components/Newsletter/Newsletter.jsx';





function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <TourType />
            <TourList />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home
