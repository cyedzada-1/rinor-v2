import React from 'react'

import Footer from '../Footer/Footer.jsx';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import TourList from '../../Components/Tour/TourList.jsx';
import Newsletter from '../../Components/Newsletter/Newsletter.jsx';


function Tours() {
    return (
        <>
            <Navbar />
            <TourList />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Tours
