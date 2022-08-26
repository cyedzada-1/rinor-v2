import React from "react";
import { Link } from "react-router-dom";
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
                                        src="img/logo-white.png"
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
                                                    <Link to="/tours">
                                                        <span>Tours</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/destinations">
                                                        <span>Destinations</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/gallery">
                                                        <span>Gallery</span>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link to="/about">
                                                        <span>About</span>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link to="/contact">
                                                        <span>Contact</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="mobile_content">
                                                <div className="tel">
                                                    <a href="tel:05815457424">05815-457424</a>
                                                    <p>Round the clock support</p>
                                                </div>
                                                <div className="social">
                                                    <a
                                                        href="https://www.facebook.com/Rinor.pakistan"
                                                        className="link facebook"
                                                    >
                                                        <span></span>
                                                    </a>
                                                    <a
                                                        href="https://www.instagram.com/rinor.pakistan/"
                                                        className="link instagram"
                                                    >
                                                        <span></span>
                                                    </a>
                                                    <a
                                                        href="https://www.pinterest.com/"
                                                        className="link pinterest"
                                                    >
                                                        <span></span>
                                                    </a>
                                                    <a
                                                        href="https://twitter.com/"
                                                        className="link twitter"
                                                    >
                                                        <span></span>
                                                    </a>
                                                    <a
                                                        href="https://www.youtube.com/"
                                                        className="link youtube"
                                                    >
                                                        <span></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="close" id="menu-close">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>



                                    <div className="user" id="userblock">
                                        <div className="userlink" id="userlink"></div>
                                        <div className="usermenu" id="usermenu">
                                            <ul>

                                                <li>
                                                    <Link
                                                        to="/login"
                                                        className="js-popup-open"

                                                    >
                                                        <span>Login</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/registration"
                                                        className="js-popup-open"
                                                        data-href="#registration"
                                                    >
                                                        <span>Registration</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/forgot-password"
                                                        className="js-popup-open"
                                                        data-href="#recovery-pass"
                                                    >
                                                        <span>Forgot Password</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/forgot-password"
                                                        className="js-popup-open"
                                                        data-href="#profile-setting"
                                                    >
                                                        <span>Setting</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="tel"><a href="tel:05815457424"><span>058154-57424</span></a></div>

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
    );
}

export default Navbar;
