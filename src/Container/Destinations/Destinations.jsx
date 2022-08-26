import React from 'react'

import Footer from '../Footer/Footer.jsx';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Destination from '../../Components/Destination/Destination.jsx';
import Newsletter from '../../Components/Newsletter/Newsletter.jsx';

function Destinations() {
    return (
        <>
            <Navbar />
            <Destination />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Destinations
