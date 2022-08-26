import React from "react";
const Destination = () => {
    return (
        <>
            <div className="container">
                <div className="breadcrumbs"></div>
                <div className="stories">
                    <div className="wrap">
                        <div className="wrap_float">
                            <div className="title_wrap">
                                <h2 className="title">Tourist Attractions Destinations</h2>
                                <p className="subtitle">
                                    One’s destination is never a place, but a new way of seeing things.
                                </p>
                                <div className="controls">
                                    <a href="stories-right-sidebar.html" className="link">All Destinations</a>
                                    <div className="arrows">
                                        <div className="arrow prev"></div>
                                        <div className="arrow next"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="section_content">
                                <div className="stries_slider" id="stries_slider">
                                    <a href="story.html" className="story_item" style={{ backgroundImage: "url(img/destinations/shangrilla.jpg)" }}>
                                        <div className="item_wrap">
                                            <div className="_content">
                                                <div className="flag_wrap">

                                                </div>
                                                <h3 className="country">Skardu</h3>
                                                <p className="text">
                                                    Heaven On Earth
                                                </p>
                                            </div>
                                        </div>
                                        <div className="shadow js-shadow"></div>
                                    </a>
                                    <a href="story.html" className="story_item" style={{ backgroundImage: "url(img/destinations/khaplu.jpg)" }}>
                                        <div className="item_wrap">
                                            <div className="_content">
                                                <div className="flag_wrap">

                                                </div>
                                                <h3 className="country">Ghanche</h3>
                                                <p className="text">
                                                    Heaven On Earth
                                                </p>
                                            </div>
                                        </div>
                                        <div className="shadow js-shadow"></div>
                                    </a>
                                    <a href="story.html" className="story_item" style={{ backgroundImage: "url(img/destinations/shigar.jpg)" }}>
                                        <div className="item_wrap">
                                            <div className="_content">
                                                <div className="flag_wrap">

                                                </div>
                                                <h3 className="country">Shigar</h3>
                                                <p className="text">
                                                    Heaven On Earth
                                                </p>
                                            </div>
                                        </div>
                                        <div className="shadow js-shadow"></div>
                                    </a>
                                    <a href="story.html" className="story_item" style={{ backgroundImage: "url(img/destinations/kharmang.jpg)" }}>
                                        <div className="item_wrap">
                                            <div className="_content">
                                                <div className="flag_wrap">

                                                </div>
                                                <h3 className="country">Kharmang</h3>
                                                <p className="text">
                                                    Heaven On Earth
                                                </p>
                                            </div>
                                        </div>
                                        <div className="shadow js-shadow"></div>
                                    </a>
   

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Destination;
