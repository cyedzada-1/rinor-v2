import React from 'react'

const TourDetail = () => {
    return (
        <>
            <div className="container">
                <div className="tour_page left-sidebar">
                    <div className="tour_page_head" style={{ backgroundImage: "url(img/demo-bg.jpg)" }}>
                        <div className="breadcrumbs">
                            <div className="wrap">
                                <div className="wrap_float">
                                    <a href="#">Home</a>
                                    <span className="separator">/</span>
                                    <a href="#">Tour Page Left Sidebar</a>
                                </div>
                            </div>
                        </div>
                        <div className="header_content" id="head">
                            <div className="wrap">
                                <div className="wrap_float">
                                    <div className="top-info">
                                        <h1 className="country">Northern pole</h1>
                                        <p className="tour_title">
                                            Tour to the Arctic is an exotic journey on the verge of extreme
                                        </p>
                                        <div className="controls">
                                            <div className="add_bookmark fav-button">
                                                <i className="is-added bouncy"></i>
                                                <i className="not-added bouncy"></i>
                                                <span className="fav-overlay"></span>
                                            </div>
                                            <div className="arrows" id="tour-head-slider-arrows">
                                                <div className="arrow prev"></div>
                                                <div className="arrow next"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider_wrap">
                                        <div className="slider lightgallery" id="tour-head-slider">
                                            <a href="img/demo-bg-3.jpg" className="slide">
                                                <img src="img/demo-bg-3.jpg" alt="" />
                                            </a>
                                            <a href="img/demo-bg-3.jpg" className="slide">
                                                <img src="img/demo-bg-3.jpg" alt="" />
                                            </a>
                                            <a href="img/demo-bg-3.jpg" className="slide">
                                                <img src="img/demo-bg-3.jpg" alt="" />
                                            </a>
                                            <a href="img/demo-bg-3.jpg" className="slide">
                                                <img src="img/demo-bg-3.jpg" alt="" />
                                            </a>
                                            <a href="img/demo-bg-3.jpg" className="slide">
                                                <img src="img/demo-bg-3.jpg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bottom-info">
                                        <div className="bottom-info-left">
                                            <div className="search-tour">
                                                <div className="search-form">
                                                    <div className="date-col">
                                                        <div className="label">Check In</div>
                                                        <div className="date_div">
                                                            <input type="text" className="js_calendar desctop-input" />
                                                            <input type="date" className="mobile-input" />
                                                            <div className="day">21</div>
                                                            <div className="date_div_right">
                                                                <div className="month">December</div>
                                                                <div className="year">2019</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="date-col">
                                                        <div className="label">Check Out</div>
                                                        <div className="date_div">
                                                            <input type="text" className="js_calendar desctop-input" />
                                                            <input type="date" className="mobile-input" />
                                                            <div className="day">21</div>
                                                            <div className="date_div_right">
                                                                <div className="month">December</div>
                                                                <div className="year">2019</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="num-col">
                                                        <div className="label">Aduld</div>
                                                        <div className="num_wrap">
                                                            <div className="buttons">
                                                                <button className="plus"></button>
                                                                <button className="minus"></button>
                                                            </div>
                                                            <input type="number" className="val js_num" value="3" min="0" max="99" />
                                                        </div>
                                                    </div>
                                                    <div className="num-col last">
                                                        <div className="label">Children</div>
                                                        <div className="num_wrap">
                                                            <div className="buttons">
                                                                <button className="plus"></button>
                                                                <button className="minus"></button>
                                                            </div>
                                                            <input type="number" className="val js_num" value="3" min="0" max="99" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom-info-right">
                                            <div className="info">
                                                <div className="days">5 days |</div>
                                                <div className="cost">from $356</div>
                                            </div>
                                            <button className="btn button js-popup-open" data-href="#book-now">Book now</button>
                                            <div className="rating">
                                                <div className="rating-stars">
                                                    <div className="star filled"></div>
                                                    <div className="star filled"></div>
                                                    <div className="star filled"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="rating-text">10 reviews</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tour_page_body">
                        <div className="wrap">
                            <div className="wrap_float">
                                <div className="right_content sidebar">
                                    <div className="navigation" id="sidebar-navigation">
                                        <ul>
                                            <li><a className="active" href="#head">Photo / Video</a></li>
                                            <li><a href="#overview">Overview</a></li>
                                            <li><a href="#included">Included</a></li>
                                            <li><a href="#location">Location</a></li>
                                            <li><a href="#stories">Stories</a></li>
                                            <li><a href="#reviews">Reviews</a></li>
                                        </ul>
                                    </div>
                                    <a className="book-now button js-popup-open" data-href="#book-now">
                                        <span>Book now</span>
                                        <span className="cost">from $356</span>
                                    </a>
                                    <div className="add-to-favorites">
                                        <div className="add_bookmark fav-button">
                                            <i className="is-added bouncy"></i>
                                            <i className="not-added bouncy"></i>
                                            <span className="fav-overlay"></span>
                                        </div>
                                        <div className="fav-text">
                                            Add to favourites
                                        </div>
                                    </div>
                                </div>
                                <div className="left_content">
                                    <div className="overview js-section content-block" id="overview">
                                        <h2 className="title">Overview</h2>
                                        <p className="description">
                                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
                                        </p>
                                        <div className="programm" id="programm-days">
                                            <div className="day_item">
                                                <div className="day_item-head active">
                                                    <div className="preview">
                                                        <div className="image">
                                                            <img src="img/demo-bg-3.jpg" alt="" />
                                                        </div>
                                                        <div className="p">Day 1</div>
                                                    </div>
                                                    <div className="_title">Transfer to hotel</div>
                                                    <div className="element"></div>
                                                </div>
                                                <div className="day_item-body" style={{ display: "block;" }}>
                                                    <div className="text">
                                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
                                                    </div>
                                                    <div className="images">
                                                        <div className="scroll lightgallery">
                                                            <a href="img/demo-bg.jpg" className="item">
                                                                <div className="img">
                                                                    <img src="img/demo-bg-3.jpg" alt="" />
                                                                </div>
                                                                <span>Signature under photo</span>
                                                            </a>
                                                            <a href="img/demo-bg.jpg" className="item">
                                                                <div className="img">
                                                                    <img src="img/demo-bg-3.jpg" alt="" />
                                                                </div>
                                                                <span>Signature under photo</span>
                                                            </a>
                                                            <a href="img/demo-bg.jpg" className="item">
                                                                <div className="img">
                                                                    <img src="img/demo-bg-3.jpg" alt="" />
                                                                </div>
                                                                <span>Signature under photo</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="day_item">
                                                <div className="day_item-head">
                                                    <div className="preview">
                                                        <div className="image">
                                                            <img src="img/demo-bg-3.jpg" alt="" />
                                                        </div>
                                                        <div className="p">Day 2-4</div>
                                                    </div>
                                                    <div className="_title">Sightseeing tour</div>
                                                    <div className="element"></div>
                                                </div>
                                                <div className="day_item-body">
                                                    <div className="text">
                                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="day_item">
                                                <div className="day_item-head">
                                                    <div className="preview">
                                                        <div className="image">
                                                            <img src="img/demo-bg-3.jpg" alt="" />
                                                        </div>
                                                        <div className="p">Day 5</div>
                                                    </div>
                                                    <div className="_title">Free time</div>
                                                    <div className="element"></div>
                                                </div>
                                                <div className="day_item-body">
                                                    <div className="text">
                                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="included js-section content-block" id="included">
                                        <h2 className="title">Included</h2>
                                        <ul>
                                            <li>
                                                <span className="li_title">Flight by plane</span>
                                                <span className="li_subtitle">Flight and transfer to the hotel</span>
                                            </li>
                                            <li>
                                                <span className="li_title">Wi-fi</span>
                                                <span className="li_subtitle">Free wi-fi in the reception, wi-fi in public areas</span>
                                            </li>
                                            <li>
                                                <span className="li_title">Smorgasbord</span>
                                                <span className="li_subtitle">But I must explain to you how all</span>
                                            </li>
                                            <li>
                                                <span className="li_title">Pool</span>
                                                <span className="li_subtitle">Beautiful and large swimming pool at your service</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="location js-section content-block" id="location">
                                        <h3 className="title">Location</h3>
                                        <div className="map">

                                        </div>
                                    </div>
                                    <div className="stories js-section content-block" id="stories">
                                        <div className="title_wrap">
                                            <h2 className="title">Stories</h2>
                                            <div className="link">
                                                <a href="#">All Stories</a>
                                            </div>
                                        </div>
                                        <div className="stries_slider">
                                            <div className="scroll">
                                                <a href="story.html" className="story_item" style={{ backgroundImage: "url(img/demo-bg.jpg)" }}>
                                                    <div className="item_wrap">
                                                        <div className="_content">
                                                            <div className="flag_wrap">
                                                                <div className="flag">
                                                                    <img src="img/demo-bg-3.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <h3 className="country">Russia</h3>
                                                            <p className="text">
                                                                Amazing underwater world
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="shadow js-shadow"></div>
                                                </a>

                                                <a href="story.html" className="story_item" style={{ backgroundImage: "url(img/demo-bg.jpg)" }}>
                                                    <div className="item_wrap">
                                                        <div className="_content">
                                                            <div className="flag_wrap">
                                                                <div className="flag">
                                                                    <img src="img/demo-bg-3.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <h3 className="country">Maldives</h3>
                                                            <p className="text">
                                                                Amazing underwater world
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="shadow js-shadow"></div>
                                                </a>

                                                <a href="story.html" className="story_item" style={{ backgroundImage: "url(img/demo-bg.jpg)" }}>
                                                    <div className="item_wrap">
                                                        <div className="_content">
                                                            <div className="flag_wrap">
                                                                <div className="flag">
                                                                    <img src="img/demo-bg-3.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <h3 className="country">Australia</h3>
                                                            <p className="text">
                                                                Amazing underwater world
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="shadow js-shadow"></div>
                                                </a>

                                                <a href="story.html" className="story_item" style={{ backgroundImage: "url(img/demo-bg.jpg)" }}>
                                                    <div className="item_wrap">
                                                        <div className="_content">
                                                            <div className="flag_wrap">
                                                                <div className="flag">
                                                                    <img src="img/demo-bg-3.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <h3 className="country">Madagascar</h3>
                                                            <p className="text">
                                                                Amazing underwater world
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="shadow js-shadow"></div>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="comments-block js-section" id="reviews">
                                        <div className="title_wrap">
                                            <div className="val">5.0</div>
                                            <h2 className="title">Reviews</h2>
                                            <div className="counter">12</div>
                                        </div>
                                        <div className="comments">
                                            <div className="comment_item">
                                                <div className="comment_item_top">
                                                    <p>
                                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
                                                    </p>
                                                </div>
                                                <div className="comment_item_bottom">
                                                    <div className="rating">
                                                        <div className="rating-stars">
                                                            <div className="star filled"></div>
                                                            <div className="star filled"></div>
                                                            <div className="star filled"></div>
                                                            <div className="star"></div>
                                                            <div className="star"></div>
                                                        </div>
                                                        <button className="reply">Reply</button>
                                                    </div>
                                                    <div className="author">
                                                        <div className="userpic">
                                                            <img src="img/demo-bg-3.jpg" alt="" />
                                                        </div>
                                                        <div className="name">21.09.2019 by Maya Delia</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment_item answer_comment">
                                                <div className="comment_item_top">
                                                    <p>
                                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                                                    </p>
                                                </div>
                                                <div className="comment_item_bottom">
                                                    <button className="reply">Reply</button>
                                                    <div className="author">
                                                        <div className="name">21.09.2019 by Maya Delia</div>
                                                        <div className="userpic">
                                                            <img src="img/demo-bg-3.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="comment_item">
                                                <div className="comment_item_top">
                                                    <p>
                                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
                                                    </p>
                                                    <div className="images lightgallery">
                                                        <a href="img/demo-bg.jpg" className="img">
                                                            <img src="img/demo-bg-3.jpg" alt="" />
                                                        </a>
                                                        <a href="img/demo-bg.jpg" className="img">
                                                            <img src="img/demo-bg-3.jpg" alt="" />
                                                        </a>
                                                        <a href="img/demo-bg.jpg" className="img">
                                                            <img src="img/demo-bg-3.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="comment_item_bottom">
                                                    <div className="rating">
                                                        <div className="rating-stars">
                                                            <div className="star filled"></div>
                                                            <div className="star filled"></div>
                                                            <div className="star filled"></div>
                                                            <div className="star"></div>
                                                            <div className="star"></div>
                                                        </div>
                                                        <button className="reply">Reply</button>
                                                    </div>
                                                    <div className="author">
                                                        <div className="userpic">
                                                            <img src="img/demo-bg-3.jpg" alt="" />
                                                        </div>
                                                        <div className="name">21.09.2019 by Maya Delia</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="pagination">
                                            <a className="arrow prev"></a>
                                            <ul>
                                                <li><a href="#" className="active">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                            </ul>
                                            <a className="arrow next"></a>
                                        </div>
                                    </div>
                                    <div className="write_comment">
                                        <div className="top">
                                            <h3 className="title">Write A Review</h3>
                                            <div className="rating">
                                                <div className="rating-text">Assigned Rating</div>
                                                <div className="rating-stars stars user-rating">
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="center">
                                            <input type="text" className="input" placeholder="Name" />
                                            <input type="text" className="input" placeholder="Email" />
                                            <textarea className="textarea" placeholder="Reviews"></textarea>
                                        </div>
                                        <div className="bottom">
                                            <div className="files">
                                                <label for="file-1" className="label"><span>Add a photo</span></label>
                                                <input type="file" id="file-1" />
                                                <div className="file-name"><span>IMG_5050.JPG,</span> <span>IMG_5051.JPG</span></div>
                                            </div>
                                            <button className="submit button">Send</button>
                                        </div>
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
export default TourDetail
