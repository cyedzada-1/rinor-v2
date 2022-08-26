import React from 'react'

const Success = () => {
    return (
        <>
            <div className="popup success-popup" id="contact-us-success">
                <div className="scroll">
                    <div className="scroll_wrap">
                        <div className="popup-head">
                            <div className="title">Success</div>
                        </div>
                        <div className="popup-body">
                            <div className="subtitle">
                                Your message was successfully sent. We will contact you shortly
                            </div>
                        </div>
                    </div>
                </div>
                <div className="close"></div>
            </div>

        </>
    )
}

export default Success
