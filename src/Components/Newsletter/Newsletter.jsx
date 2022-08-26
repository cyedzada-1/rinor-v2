import React from 'react'

const Newsletter = () => {
    return (
        <>
            <div className="container">
                <div className="subscribe_section">
                    <div className="wrap">
                        <div className="wrap_float">
                            <div className="subscribe_block" style={{ backgroundImage: "url(img/news.jpg)" }}>
                                <div className="left">
                                    <h2 className="_title">Newsletters</h2>
                                    <p className="_subtitle">Sign up to receive the best offers</p>
                                </div>
                                <div className="right">
                                    <div className="input_wrap select_wrap">
                                        <select>
                                            <option value="Destination" disabled selected>Destination</option>
                                            <option value="Destination"> Skardu  </option>
                                            <option value="Destination"> Ghanche  </option>
                                            <option value="Destination"> Shigar  </option>
                                            <option value="Destination"> Kharmang  </option>
                                            <option value="Destination"> Astore  </option>
                                            <option value="Destination"> Ghizer  </option>
                                            <option value="Destination"> Hunza </option>
                                            <option value="Destination"> Nagar  </option>
                                            <option value="Destination"> Gilgit  </option>
                                        </select>
                                    </div>
                                    <div className="input_wrap">
                                        <input type="email" className="input" placeholder="Email" />
                                    </div>
                                    <button className="submit button"><span>Subscribe</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter
