import React from 'react'

const ContactUs = () => {
    return (
        <>
            <div className="popup contact-us" id="contact-us">
                <div className="scroll">
                    <div className="scroll_wrap">
                        <div className="popup-head">
                            <div className="title">Contact Us</div>
                        </div>
                        <div className="popup-body">
                            <div className="subtitle">
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                            </div>
                            <div className="form">
                                <input type="text" className="input" placeholder="Name" />
                                <input type="email" className="input" placeholder="Email" />
                                <input type="text" className="input" placeholder="Phone" />
                                <textarea className="textarea" placeholder="Your Massage"></textarea>
                                <button className="submit button js-submit">Send Massage</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="close"></div>
            </div>
        </>
    )
}

export default ContactUs
