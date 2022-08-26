import React from 'react'

const ForgotPassword = () => {
    return (
        <>
            <div className="popup forgot-pass" id="recovery-pass">
                <div className="scroll">
                    <div className="scroll_wrap">
                        <div className="popup-head">
                            <div className="title">Forgot password?</div>
                        </div>
                        <div className="popup-body">
                            <div className="subtitle">
                                Use the e-mail and password that you specified when registering on the site
                            </div>
                            <div className="form">
                                <input type="email" className="input" placeholder="Email" />
                                <button className="submit button js-submit">Reset password</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="close"></div>
            </div>
        </>
    )
}

export default ForgotPassword
