import React from 'react'

const TourType = () => {
    return (
        <> <div className="container">
            <div className="breadcrumbs"></div>
            <div className="destinations">
                <div className="wrap">
                    <div className="wrap_float">
                        <div className="title_wrap">
                            <h2 className="title">Most popular Tours</h2>
                            <p className="subtitle">
                                Explore a World of Adventure
                            </p>
                            <div className="controls">
                                <a href="/" className="link">View All Tours</a>
                            </div>
                        </div>
                        <div style={{color:"blue"}}>
                            <div className="section_content">
                                <div className="scroll">
                                    <a href="/" className="destinations_item" style={{ backgroundImage: "url(img/tour-type/group-tour.png)" }}>
                                        <div className="sq_parent">
                                            <div className="sq_wrap">
                                                <div className="sq_content">
                                                    <div className="_content">
                                                        <h3 className="_title">Group Tour</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </a>
                                    <a href="/" className="destinations_item" style={{ backgroundImage: "url(img/tour-type/honeymoon.png)" }}>
                                        <div className="sq_parent">
                                            <div className="sq_wrap">
                                                <div className="sq_content">
                                                    <div className="_content">
                                                        <h3 className="_title">Honeymoon Tour</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </a>
                                    <a href="/" className="destinations_item" style={{ backgroundImage: "url(img/tour-type/trekking.png)" }}>
                                        <div className="sq_parent">
                                            <div className="sq_wrap">
                                                <div className="sq_content">
                                                    <div className="_content">
                                                        <h3 className="_title">Trekking</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </a>
                                    <a href="/" className="destinations_item" style={{ backgroundImage: "url(img/tour-type/mountaineering.png)" }}>
                                        <div className="sq_parent">
                                            <div className="sq_wrap">
                                                <div className="sq_content">
                                                    <div className="_content">
                                                        <h3 className="_title">Mountaineering</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TourType
