import React from "react";
import Footer from "../../Container/Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
    return (
        <>
        <Navbar/>
            <div className="container">
                <div className="breadcrumbs"> </div>
                <div className="page contacts-page full-width">
                    <div className="wrap">
                        <div className="wrap_float">
                            <div className="page_head">
                                <h1 className="title">Let’s have a talk together</h1>
                                <p className="subtitle">
                                    <b>Your Satisfaction is Our Acheivememnt</b>
                                </p>
                            </div>
                            <div className="page_body">
                                <div className="contacts-left">
                                    <div className="tel">
                                        <a href="/">
                                            +92 313 5693011
                                            <br />
                                            +92 312 9903699
                                        </a>
                                        <p>Round the clock support</p>
                                    </div>
                                    <div className="email">
                                        <a href="/">info@rinor.pk</a>
                                        <p>
                                            <b>Email Us At</b>
                                        </p>
                                    </div>
                                    <p className="address">
                                        RINOR Jamia Masjid Road, Skardu, Gilgit-Baltistan
                                        <br />
                                        Pakistan
                                    </p>
                                    <div className="socials social-links">
                                        <a href="/" className="link facebook">
                                            <span></span>
                                        </a>
                                        <a href="/" className="link instagram">
                                            <span></span>
                                        </a>
                                        <a href="/" className="link pinterest">
                                            <span></span>
                                        </a>
                                        <a href="/" className="link twitter">
                                            <span></span>
                                        </a>
                                        <a href="/" className="link youtube">
                                            <span></span>
                                        </a>
                                    </div>
                                    <a className="btn button js-popup-open" href="/">
                                        Contact Us
                                    </a>
                                </div>
                                <div className="contacts-right">
                                    <div className="map">map link</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Contact;
