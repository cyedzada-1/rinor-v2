import React from 'react'

const ProfileSetting = () => {
    return (
        <>
            <div className="popup profile-setting" id="profile-setting">
                <div className="scroll">
                    <div className="scroll_wrap">
                        <div className="select-userpic">
                            <div className="userpic">V</div>
                            <div className="select">
                                <input type="file" id="profile-pic" />
                                <label htmlFor="profile-pic">Select photo</label>
                            </div>
                        </div>
                        <div className="popup-head">
                            <div className="title">Setting</div>
                        </div>
                        <div className="popup-body">
                            <div className="form">
                                <input type="text" className="input" placeholder="Username" value="Victor777" />
                                <input type="text" className="input" placeholder="Name" value="Victor" />
                                <input type="text" className="input" placeholder="Surename" value="Shibut" />
                                <input type="email" className="input" placeholder="Email" value="test@test.com" />
                                <div className="label">Change password</div>
                                <input type="password" className="input" placeholder="Current password" />
                                <input type="password" className="input" placeholder="Enter new password" />
                                <input type="password" className="input" placeholder="New password repeat" />
                                <div className="label">Authorization through social networks</div>
                                <div className="social-links">
                                    <a href="/" className="link facebook active"><span></span></a>
                                    <a href="/" className="link twitter"><span></span></a>
                                </div>
                                <button className="submit button js-submit">Save Setting</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="close"></div>
            </div>
        </>
    )
}

export default ProfileSetting
