

import React from 'react'

function Navbar() {
    return (
        <>
            <div className="container">
                <div className="top_panel">
                    <div className="wrap">
                        <div className="wrap_float">
                            <div className="left">

                                <a href="/" className="logo">
                                    <img
                                        alt=""
                                        src="img/nav-logo.png"
                                        style={{ width: "100px;" }}
                                    />
                                </a>
                            </div>
                            <div className="menu_wrap" id="menu_wrap">
                                <div className="scroll">
                                    <div className="center">
                                        <div className="menu">
                                            <ul>
                                                <li>
                                                    <a href="/"><span>Home</span></a>
                                                </li>
                                                <li className="dropdown_li">
                                                    <a href="/" className="active"><span> Tours</span></a>
                                                    <ul className="dropdown_ul">
                                                        <li>
                                                            <a href="family-tour.html">Family Tour </a>
                                                        </li>
                                                        <li>
                                                            <a href="trekking-in-pakistan.html">
                                                                Trekking In Pakistan</a>
                                                        </li>
                                                        <li>
                                                            <a href="moutaineering.html">Mountaineering </a>
                                                        </li>
                                                        <li>
                                                            <a href="honeymoon-tour.html">Honeymoon Tour </a>
                                                        </li>
                                                        <li>
                                                            <a href="customized-tour.html">Customized Tour </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown_li">
                                                    <a href="/" className="active"><span> Destinations</span></a>
                                                    <ul className="dropdown_ul">
                                                        <li>
                                                            <a href="Skardu.html"> Skardu</a>
                                                        </li>
                                                        <li>
                                                            <a href="Ghanche.html">Ghanche </a>
                                                        </li>
                                                        <li>
                                                            <a href="Shigar.html">Shigar </a>
                                                        </li>
                                                        <li>
                                                            <a href="Kharmang.html"> Kharmang</a>
                                                        </li>
                                                        <li>
                                                            <a href="Astore.html"> Astore</a>
                                                        </li>
                                                        <li>
                                                            <a href="Hunza">Hunza </a>
                                                        </li>
                                                        <li>
                                                            <a href="Ghizer.html">Ghizer </a>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <a href="/"><span>Blog</span></a>
                                                </li>


                                                <li>
                                                    <a href="/"><span>About</span></a>
                                                </li>



                                                <li>
                                                    <a href="/"><span>Contact Us</span></a>
                                                </li>
                                            </ul>
                                            <div className="mobile_content">
                                                <div className="tel">
                                                    <a href="tel:+0034411345777">+ 00 344 113 457 77</a>
                                                    <p>Round the clock support</p>
                                                </div>
                                                <div className="social">
                                                    <a href="#" className="link facebook"><span></span></a>
                                                    <a href="#" className="link instagram"><span></span></a>
                                                    <a href="#" className="link pinterest"><span></span></a>
                                                    <a href="#" className="link twitter"><span></span></a>
                                                    <a href="#" className="link youtube"><span></span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="close" id="menu-close">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>

                                    <div className="right">
                                        <div className="tel"><a href="tel:05815457424"><span>(058154)57424</span></a></div>

                                    </div>

                                    <div className="user" id="userblock">
                                        <div className="userlink" id="userlink"></div>
                                        <div className="usermenu" id="usermenu">
                                            <ul>
                                                <li><a href="#" className="js-popup-open" data-href="#login">Login</a></li>
                                                <li><a href="#" className="js-popup-open" data-href="#registration">Registration</a></li>
                                                <li><a href="#" className="js-popup-open" data-href="#recovery-pass">Forgot password?</a></li>
                                                <li><a href="#" className="js-popup-open" data-href="#profile-setting">Setting</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mobile_btn" id="mobile_btn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
