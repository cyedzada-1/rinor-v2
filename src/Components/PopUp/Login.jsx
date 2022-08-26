import React from 'react'

const Login = () => {
    return (
        <>
                <div className="popup login" id="login">
                    <div className="scroll">
                        <div className="scroll_wrap">
                            <div className="popup-head">
                                <div className="title">Sign In</div>
                                <a className="link js-popup-open" data-href="#registration">Sign Up</a>

                            </div>
                            <div className="popup-body">
                                <div className="subtitle">
                                    Use the e-mail and password that you specified when registering on the site
                                </div>
                                <div className="form">
                                    <input type="text" className="input" placeholder="Login" />
                                    <input type="text" className="input" placeholder="Password" />
                                    <button className="submit button">Sign In</button>
                                    <a href="/" className="link">Forgot password?</a>
                                </div>
                            </div>
                            <div className="popup-foot">
                                <p>Login via social networks</p>
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

export default Login
