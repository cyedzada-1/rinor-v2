import React from 'react'

const Header = () => {
    return (
        <>
            <div className="main_slider js_height">
                <div className="slider_wrap" id="main_slider_wrap">
                    <div className="slide">
                        <div className="bg-img" style={{ backgroundImage: "url(img/hero.jpg)" }}></div>
                        <div className="wrap">
                            <div className="wrap_float js_height">
                                <div className="slide_content">
                                    <div className="title_wrap">
                                        <p className="country"> FLIGHT RESERVATIONS </p>
                                        <h2 className="slide_title"> RINOR</h2>
                                    </div>

                                    <div className="buttons">
                                        <a href="/" className="btn button">Reservation </a>
                                        <a href="/" className="link"><span>Flight Schedule</span></a>
                                    </div>
                                    <div className="next_title">Activities</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide">
                        <div className="bg-img" style={{ backgroundImage: "url(img/hero-img-1.jpg)" }}></div>
                        <div className="wrap">
                            <div className="wrap_float js_height">
                                <div className="slide_content">
                                    <div className="title_wrap">
                                        <p className="country"> Activities </p>
                                        <h2 className="slide_title"> RINOR</h2>
                                    </div>

                                    <div className="buttons">
                                        <a href="/" className="btn button">Book now</a>
                                        <a href="/" className="link"><span>Explore Activities</span></a>
                                    </div>
                                    <div className="next_title">Tours</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide">
                        <div className="bg-img" style={{ backgroundImage: "url(img/hero-img-3.jpg)" }}></div>
                        <div className="wrap">
                            <div className="wrap_float js_height">
                                <div className="slide_content">
                                    <div className="title_wrap">
                                        <p className="country">Tours</p>
                                        <h2 className="slide_title">RINOR</h2>
                                    </div>

                                    <div className="buttons">
                                        <a href="/" className="btn button">Book now</a>
                                        <a href="/" className="link"><span>Choose tour</span></a>
                                    </div>
                                    <div className="next_title">Flight Reservations</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arrows">
                    <div className="arrow prev"></div>
                    <div className="arrow next"></div>
                </div>
            </div>

        </>
    )
}

export default Header
