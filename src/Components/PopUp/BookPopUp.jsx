import React from 'react'

const BookPopUp = () => {
    return (
        <>
            <div className="popup book-now-popup" id="book-now">
                <div className="scroll">
                    <div className="scroll_wrap">
                        <div className="popup-head">
                            <div className="title">Book Now</div>
                        </div>
                        <div className="popup-body">
                            <div className="tour-title">
                                <div className="img">
                                    <img src="img/demo-bg.jpg" alt="" />
                                </div>
                                <div className="tour-name">
                                    Tour to the Arctic is an exotic journey on the verge of extreme
                                </div>
                            </div>
                            <div className="tour-info">
                                <div className="col">
                                    <div className="label">Check In</div>
                                    <div className="date">
                                        <div className="day">09</div>
                                        <div className="month">May</div>
                                        <div className="year">2019</div>
                                    </div>
                                    <div className="label">Aduld: <span>3</span></div>
                                </div>
                                <div className="col">
                                    <div className="label">Check Out</div>
                                    <div className="date">
                                        <div className="day">09</div>
                                        <div className="month">May</div>
                                        <div className="year">2019</div>
                                    </div>
                                    <div className="label">Children: <span>0</span></div>
                                </div>
                            </div>
                            <div className="form">
                                <input type="text" className="input" placeholder="Your First Name" />
                                <input type="text" className="input" placeholder="Your Last Name" />
                                <input type="email" className="input" placeholder="Your Email" />
                                <input type="tel" className="input" placeholder="Your Number Phone" />
                                <textarea className="textarea" placeholder="Where are your address?"></textarea>
                                <textarea className="textarea" placeholder="Note:"></textarea>
                                <button className="submit button js-submit">Book Now | <b>$356</b></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="close"></div>
            </div>

        </>
    )
}

export default BookPopUp
