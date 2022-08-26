import React from 'react'

const Gallery = () => {
    return (
        <>
            <div className="container">
                <div className="breadcrumbs white-color"></div>
                <div className="gallery-page">
                    <div className="wrap">
                        <div className="wrap_float">
                            <div className="gallery-page-head">
                                <h1 className="title">Gallery</h1>
                                <div className="select_wrap">
                                    <select>
                                        <option value="Destination" disabled selected>
                                            Destination
                                        </option>
                                        <option value="United States">United States</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="American Samoa">American Samoa</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antarctica">Antarctica</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bermuda">Bermuda</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bosnia and Herzegovina">
                                            Bosnia and Herzegovina
                                        </option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Bouvet Island">Bouvet Island</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="British Indian Ocean Territory">
                                            British Indian Ocean Territory
                                        </option>
                                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                    </select>
                                </div>
                            </div>
                            <div className="gallery-page-body">
                                <div className="gallery-list">
                                    <a href="gallery-single.html" className="gallery-item">
                                        <div className="top">
                                            <p className="country">Australia</p>
                                            <p className="title">Beautiful birds of Australia</p>
                                        </div>
                                        <div className="images">
                                            <div className="scroll">
                                                <div className="img">
                                                    <img src="img/demo-bg.jpg" alt="" />
                                                </div>
                                                <div className="img">
                                                    <img src="img/demo-bg.jpg" alt="" />
                                                </div>
                                                <div className="img">
                                                    <img src="img/demo-bg.jpg" alt="" />
                                                </div>
                                                <div className="img">
                                                    <img src="img/demo-bg.jpg" alt="" />
                                                </div>
                                                <div className="img">
                                                    <img src="img/demo-bg.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="gallery-single.html" className="gallery-item">
                                        <div className="top">
                                            <p className="country">Rome</p>
                                            <p className="title">Stunning architecture of Rome</p>
                                        </div>
                                        <div className="images">
                                            <div className="scroll">
                                                <div className="img">
                                                    <img src="img/demo-bg.jpg" alt="" />
                                                </div>
                                                <div className="img">
                                                    <img src="img/demo-bg.jpg" alt="" />
                                                </div>
                                                <div className="img">
                                                    <img src="img/demo-bg.jpg" alt="" />
                                                </div>
                                                <div className="img">
                                                    <img src="img/demo-bg.jpg" alt="" />
                                                </div>
                                                <div className="img">
                                                    <img src="img/demo-bg.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="gallery-single.html" className="gallery-item">
                                        <div className="top">
                                            <p className="country">Madagascar</p>
                                            <p className="title">Underwater world</p>
                                        </div>
                                        <div className="images">
                                            <div className="scroll">
                                                <div className="img">
                                                    <img src="img/demo-bg.jpg" alt="" />
                                                </div>
                                                <div className="img">
                                                    <img src="img/demo-bg.jpg" alt="" />
                                                </div>
                                                <div className="img">
                                                    <img src="img/demo-bg.jpg" alt="" />
                                                </div>
                                                <div className="img">
                                                    <img src="img/demo-bg.jpg" alt="" />
                                                </div>
                                                <div className="img">
                                                    <img src="img/demo-bg.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="gallery-single.html" className="gallery-item">
                                        <div className="top">
                                            <p className="country">Thailand</p>
                                            <p className="title">Azure beach</p>
                                        </div>
                                        <div className="images">
                                            <div className="scroll">
                                                <div className="img">
                                                    <img src="img/demo-bg.jpg" alt="" />
                                                </div>
                                                <div className="img">
                                                    <img src="img/demo-bg.jpg" alt="" />
                                                </div>
                                                <div className="img">
                                                    <img src="img/demo-bg.jpg" alt="" />
                                                </div>
                                                <div className="img">
                                                    <img src="img/demo-bg.jpg" alt="" />
                                                </div>
                                                <div className="img">
                                                    <img src="img/demo-bg.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="btn_wrap load_btn_wrap">
                                    <a className="load_more button"><span>Load more</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Gallery
