import React from 'react'
import Data from "./index.json";
import { Link } from 'react-router-dom';
const TourList = () => {
    return (
        <>
            <div className="container">
                <div className="breadcrumbs"></div>
                <div className="page travel-list right-sidebar">
                    <div className="page_head">
                        <div className="wrap_float">
                            <div className="wrap">
                                <div className="wrap_float">
                                    <h1 className="title">
                                        Hot Deals
                                    </h1>
                                    <p className="subtitle">
                                        Unbeatable Prices and Experiences!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search-tour">
                        <div className="wrap">
                            <div className="wrap_float">
                                <div className="search-form">
                                    <div className="destination-col">
                                        <div className="label">Destination</div>
                                        <div className="select_wrap">
                                            <select>
                                                <option value="Destination" disabled selected>Search</option>
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
                                    </div>
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
                                    <button className="btn button"><span>Search</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page_body">
                        <div className="wrap">
                            <div className="wrap_float">
                                <div className="left_content">
                                    <div className="posts">
                                        <a href="tour-page-right-sidebar.html" className="item">
                                            <div className="item_left">
                                                <div className="image" style={{ backgroundImage: "url(img/destinations/hunza.jpg)" }}>
                                                    <div className="shadow js-shadow"></div>
                                                </div>
                                            </div>
                                            <div className="item_right">
                                                <p className="country">Family Tours</p>
                                                <div className="rating-stars">
                                                    <div className="star filled"></div>
                                                    <div className="star filled"></div>
                                                    <div className="star filled"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <h3 className="item_title">
                                                    Tour to Gilgit, Hunza, Nagar and Ghizer
                                                </h3>
                                                <p className="item_text">
                                                    See the very best of the amazing Gilgit Baltistan with its Natives and enjoy the hospitality in their homeland.
                                                </p>
                                                <div className="info">
                                                    <div className="days"> 7 days |</div>
                                                    <div className="cost">from 45K</div>
                                                </div>
                                                <div className="add_bookmark fav-button">
                                                    <i className="is-added bouncy"></i>
                                                    <i className="not-added bouncy"></i>
                                                    <span className="fav-overlay"></span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="posts">
                                        <a href="tour-page-right-sidebar.html" className="item">
                                            <div className="item_left">
                                                <div className="image" style={{ backgroundImage: "url(img/destinations/skardu1.jpg)" }}>
                                                    <div className="shadow js-shadow"></div>
                                                </div>
                                            </div>
                                            <div className="item_right">
                                                <p className="country">Family Tours</p>
                                                <div className="rating-stars">
                                                    <div className="star filled"></div>
                                                    <div className="star filled"></div>
                                                    <div className="star filled"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <h3 className="item_title">
                                                    Tour to Naran, Babusar Top, Majestic Skardu Valley
                                                </h3>
                                                <p className="item_text">
                                                    In the extreme north of Pakistan, Skardu the central valley of Gilgit-Baltistan is an epitome of beauty, serenity, and wilderness. Paths to some of the world’s highest mountains include K2, K3, and Gasherbrum; all are connected through this valley. A city with all modern life amenities is based in many remote places i.e. Deosai, Khaplu, Kharpocho Fort, Shigar, and Baltoro Treks. These towering mountains attract thousands of climbers from all over the world each year; some have even lost their lives in efforts to summit these steep climbs.
                                                </p>
                                                <div className="info">
                                                    <div className="days"> 10 days |</div>
                                                    <div className="cost">from 60K</div>
                                                </div>
                                                <div className="add_bookmark fav-button">
                                                    <i className="is-added bouncy"></i>
                                                    <i className="not-added bouncy"></i>
                                                    <span className="fav-overlay"></span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="posts">
                                        <a href="tour-page-right-sidebar.html" className="item">
                                            <div className="item_left">
                                                <div className="image" style={{ backgroundImage: "url(img/destinations/skardu.jpg)" }}>
                                                    <div className="shadow js-shadow"></div>
                                                </div>
                                            </div>
                                            <div className="item_right">
                                                <p className="country">Honeynoon Tour</p>
                                                <div className="rating-stars">
                                                    <div className="star filled"></div>
                                                    <div className="star filled"></div>
                                                    <div className="star filled"></div>
                                                    <div className="star filled"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <h3 className="item_title">
                                                    Couple Tour to Naran, Babusar Top, Skardu Valley
                                                </h3>
                                                <p className="item_text">
                                                    Skardu Baltistan is a city in Gilgit-Baltistan region of Pakistan, and serves as the capital of Skardu District. Skardu is located in the 6 kilometres (4 miles) wide by 23 kilometres (14 miles) long Skardu Valley, at the confluence of the Indus and Shigar Rivers at an elevation of nearly 2,500 metres (8,202 feet)
                                                </p>
                                                <div className="info">
                                                    <div className="days"> 6 days |</div>
                                                    <div className="cost">from 90K</div>
                                                </div>
                                                <div className="add_bookmark fav-button">
                                                    <i className="is-added bouncy"></i>
                                                    <i className="not-added bouncy"></i>
                                                    <span className="fav-overlay"></span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="posts">
                                        <a href="tour-page-right-sidebar.html" className="item">
                                            <div className="item_left">
                                                <div className="image" style={{ backgroundImage: "url(img/destinations/shigar.jpg)" }}>
                                                    <div className="shadow js-shadow"></div>
                                                </div>
                                            </div>
                                            <div className="item_right">
                                                <p className="country">Family Tours</p>
                                                <div className="rating-stars">
                                                    <div className="star filled"></div>
                                                    <div className="star filled"></div>
                                                    <div className="star filled"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <h3 className="item_title">
                                                    (By Air) Family Tour to Khaplu, Shigar & Skardu Valley
                                                </h3>
                                                <p className="item_text">
                                                    In the extreme north of Pakistan, Skardu the central valley of Gilgit-Baltistan is an epitome of beauty, serenity, and wilderness. Paths to some of the world’s highest mountains include K2, K3, and Gasherbrum; all are connected through this valley. A city with all modern life amenities is based in many remote places i.e. Deosai, Khaplu, Kharpocho Fort, Shigar, and Baltoro Treks. These towering mountains attract thousands of climbers from all over the world each year; some have even lost their lives in efforts to summit these steep climbs.
                                                </p>
                                                <div className="info">
                                                    <div className="days"> 5 days |</div>
                                                    <div className="cost">from 80K</div>
                                                </div>
                                                <div className="add_bookmark fav-button">
                                                    <i className="is-added bouncy"></i>
                                                    <i className="not-added bouncy"></i>
                                                    <span className="fav-overlay"></span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>






                                    <div className="pagination arrows">
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
                                <div className="right_content sidebar">
                                    <div className="search-tour">
                                        <div className="search-form">
                                            <div className="destination-col">
                                                <div className="label">Destination</div>
                                                <div className="select_wrap">
                                                    <select>
                                                        <option value="Destination" disabled selected>Search</option>
                                                        <option value="Skardu   ">   Skardu  </option>
                                                        <option value="Ghanche  ">   Ghanche  </option>
                                                        <option value="Shigar   ">   Shigar  </option>
                                                        <option value="Kharmang ">   Kharmang  </option>
                                                        <option value="Astore   ">   Astore  </option>
                                                        <option value="Ghizer   ">   Ghizer  </option>
                                                        <option value="Hunza    ">   Hunza </option>
                                                        <option value="Nagar    ">   Nagar  </option>
                                                        <option value="Gilgit   ">   Gilgit  </option>
                                                    </select>
                                                </div>
                                            </div>
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
                                            <button className="btn"><span>Search</span></button>
                                        </div>
                                    </div>



                                    <div className="_block">
                                        <h4 className="block_title">Destinations</h4>
                                        <div className="stories">
                                            <div className="arrows">
                                                <div className="arrow prev"></div>
                                                <div className="arrow next"></div>
                                            </div>
                                            <div className="items" id="stories-slider">

                                                <Link to="/destinations" className="item" style={{ backgroundImage: "url(img/destinations/shangrilla.jpg)" }} > <h5 className="_title">Skardu</h5> </Link>
                                                <Link to="/destinations" className="item" style={{ backgroundImage: "url(img/destinations/shigar.jpg)" }} > <h5 className="_title">Shigar</h5> </Link>
                                                <Link to="/destinations" className="item" style={{ backgroundImage: "url(img/destinations/kharmang.jpg)" }} > <h5 className="_title">Kharmang</h5> </Link>
                                                <Link to="/destinations" className="item" style={{ backgroundImage: "url(img/destinations/khaplu.jpg)" }} > <h5 className="_title">Ghanche</h5> </Link>

                                            </div>
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

export default TourList
