import React from 'react'

const SearchBar = () => {
  return (
    <>
      <div className="container">
        <div className="breadcrumbs"></div>
        <div className="page default travel-list full-width search-results">
          <div className="page_head">
            <div className="wrap_float">
              <div className="wrap">
                <div className="wrap_float">
                  <h1 className="title">Search Result</h1>
                  <p className="subtitle"> Found 34 results </p>
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
        </div>
      </div>
    </>
  )
}

export default SearchBar
