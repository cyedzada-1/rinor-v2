import React from 'react'

const Registration = () => {
    return (
        <>
            <div className="popup registration" id="registration">
                <div className="scroll">
                    <div className="scroll_wrap">
                        <div className="popup-head">
                            <div className="title">Sign Up</div>
                            <a className="link js-popup-open" data-href="#login">Sign In</a>
                        </div>
                        <div className="popup-body">
                            <div className="subtitle">
                                Fill in the registration form and save your favorite tours, synchronize them on all devices
                            </div>
                            <div className="form">
                                <input type="text" className="input" placeholder="Username" />
                                <input type="text" className="input" placeholder="Name" />
                                <input type="text" className="input" placeholder="Surename" />
                                <input type="email" className="input" placeholder="Email" />
                                <input type="password" className="input" placeholder="Password" />
                                <input type="password" className="input" placeholder="Password Repeat" />
                                <button className="submit button js-submit">Registration</button>
                            </div>
                        </div>
                        <div className="popup-foot">
                            <p>Sign Up via social networks</p>
                            <div className="social-links">
                                <a href="/" className="link facebook"><span></span></a>
                                <a href="/" className="link twitter"><span></span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="close"></div>
            </div>


        </>
    )
}

export default Registration
