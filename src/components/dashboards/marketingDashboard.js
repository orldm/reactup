import React from 'react'
import Header from '../header'

const MarketingDashboard = () => (
  <div className="right-container">
      {/*<!-- Header -->*/}
      <Header />
      {/*<!-- END of Header -->*/}
      {/*<!-- CONTENT of PAGE -->*/}
      <div className="page-heading">
          <h1>Marketing</h1>
          <button type="button" className="btn-edit-dashboard">Edit</button>
      </div>
      <div className="main-container">
      {/*<!-- Widget -->                   */}
          <div className="widget-container">
              <div className="widget-box">
                  <div className="widget-title">
                      <h2>COMPANIES ALERTS</h2>
                      <div className="see-all-link">See all companies</div>                           
                  </div>
                  <div className="widget-content">
                      <div className="company-item">
                          <div className="company-logo"><img src={require('../../images/logo/airbnb.png')} alt=""/></div>
                          <div className="company-name">Airbnb</div>
                          <div className="notification-lable">100</div>
                      </div>
                      <div className="company-item">
                          <div className="company-logo"><img src={require('../../images/logo/dropbox.png')} alt=""/></div>
                          <div className="company-name">Dropbox</div>
                      </div>
                      <div className="company-item">
                          <div className="company-logo"><img src={require('../../images/logo/pinterest.png')} alt=""/></div>
                          <div className="company-name">Pinterest</div>
                      </div>
                      <div className="company-item">
                          <div className="company-logo"><img src={require('../../images/logo/slack.png')} alt=""/></div>
                          <div className="company-name">Slack</div>
                      </div>
                      <div className="company-item">
                          <div className="company-logo"><img src={require('../../images/logo/spotify.png')} alt=""/></div>
                          <div className="company-name">Spotify</div>
                      </div>
                      <div className="company-item">
                          <div className="company-logo"><img src={require('../../images/logo/whatsapp.png')} alt=""/></div>
                          <div className="company-name">WhatsApp</div>
                      </div>
                      <div className="company-item">
                          <div className="company-logo"><img src={require('../../images/logo/spacex.png')} alt=""/></div>
                          <div className="company-name">SpaceX</div>
                          <div className="notification-lable">50</div>
                      </div>
                  </div>
              </div>
          </div>
      {/*<!-- END of Widget -->*/}
      {/*<!-- Widget -->   */}
          <div className="widget-container">
              <div className="widget-box">
                  <div className="widget-title">
                      <h2>notifications</h2>
                      <div className="see-all-link">See all notifications</div>                                                      
                  </div>
                  <div className="widget-content">
                      <div className="company-item">
                          <div className="company-logo"><img src="" alt=""/></div>
                          <div className="company-name">Management changes</div>
                          <div className="notification-lable">7</div>
                      </div>
                      <div className="company-item">
                          <div className="company-logo"><img src="" alt=""/></div>
                          <div className="company-name">Financials</div>
                      </div>
                      <div className="company-item">
                          <div className="company-logo"><img src="" alt=""/></div>
                          <div className="company-name">Major announces</div>
                      </div>
                      <div className="company-item">
                          <div className="company-logo"><img src="" alt=""/></div>
                          <div className="company-name">Expansion</div>
                      </div>
                      <div className="company-item">
                          <div className="company-logo"><img src="" alt=""/></div>
                          <div className="company-name">Investment - M&A</div>
                      </div>
                      <div className="company-item">
                          <div className="company-logo"><img src="" alt=""/></div>
                          <div className="company-name">Legal matters</div>
                      </div>
                      <div className="company-item">
                          <div className="company-logo"><img src="" alt=""/></div>
                          <div className="company-name">Market insight</div>
                          <div className="notification-lable">50</div>
                      </div>
                      <div className="company-item">
                          <div className="company-logo"><img src="" alt=""/></div>
                          <div className="company-name">Customer insight</div>
                          <div className="notification-lable">1</div>
                      </div>
                      <div className="company-item">
                          <div className="company-logo"><img src="" alt=""/></div>
                          <div className="company-name">Product announces</div>
                          <div className="notification-lable">500</div>
                      </div>
                      <div className="company-item">
                          <div className="company-logo"><img src="" alt=""/></div>
                          <div className="company-name">Media</div>
                          <div className="notification-lable">50</div>
                      </div>
                      <div className="company-item">
                          <div className="company-logo"><img src="" alt=""/></div>
                          <div className="company-name">Other events</div>
                      </div>
                  </div>
              </div>
          </div>
      {/*<!-- END of Widget -->*/}
      {/*<!-- Widget -->   */}
          <div className="widget-container">
              <div className="widget-box">
                  <div className="widget-title">
                      <h2>TODAY’S TRENDING TOPICS</h2>
                      <div className="see-all-link">See all topics</div>                            
                  </div>
                  <div className="tag-container">
                      <div className="company-tag tag-max-velue">Apple Music</div>
                      <div className="company-tag tag-2-velue">Deezer</div>
                      <div className="company-tag tag-3-velue">Sweden</div>
                      <div className="company-tag tag-4-velue">Facebook fines</div>
                      <div className="company-tag tag-5-velue">Spotify acquires</div>
                      <div className="company-tag tag-5-velue">Apple Music</div>
                      <div className="company-tag tag-min-velue">Apple Music</div>
                      <div className="company-tag tag-min-velue">Apple Music</div>
                  </div>
                  {/*<!-- Trending topic -->*/}
                  <div className="trending-topic-container">
                      <div className="trending-topic-image"><img src="" alt=""/></div>
                      <div className="trending-topic-info">
                          <div className="trending-topic-header">
                              <span className="topic-source">CNN - </span>
                              <span className="topic-date">May 7, 2017</span>
                          </div>
                          <div className="trending-topic-text">Spotify acquires 4th company in past 3 months - and looks set to ...</div>
                          <div className="trending-topic-pop">
                              <span className="topic-likes"><img src={require('../../images/ic-file-like.svg')} alt=""/>1,200</span>
                              <span className="topic-download"><img src={require('../../images/ic-file-download.svg')} alt=""/>129</span>
                          </div>
                      </div>
                  </div>
                  {/*<!-- END of Trending topic -->*/}
                  {/*<!-- Trending topic -->*/}
                  <div className="trending-topic-container">
                      <div className="trending-topic-image"><img src="" alt=""/></div>
                      <div className="trending-topic-info">
                          <div className="trending-topic-header">
                              <span className="topic-source">CNN - </span>
                              <span className="topic-date">May 7, 2017</span>
                          </div>
                          <div className="trending-topic-text">Spotify acquires 4th company in past 3 months - and looks set to ...</div>
                          <div className="trending-topic-pop">
                              <span className="topic-likes"><img src={require('../../images/ic-file-like.svg')} alt=""/>1,200</span>
                              <span className="topic-download"><img src={require('../../images/ic-file-download.svg')} alt=""/>129</span>
                          </div>
                      </div>
                  </div>
                  {/*<!-- END of Trending topic -->*/}
                  {/*<!-- Trending topic -->*/}
                  <div className="trending-topic-container">
                      <div className="trending-topic-image"><img src="" alt=""/></div>
                      <div className="trending-topic-info">
                          <div className="trending-topic-header">
                              <span className="topic-source">CNN - </span>
                              <span className="topic-date">May 7, 2017</span>
                          </div>
                          <div className="trending-topic-text">Spotify acquires 4th company in past 3 months - and looks set to ...</div>
                          <div className="trending-topic-pop">
                              <span className="topic-likes"><img src={require('../../images/ic-file-like.svg')} alt=""/>1,200</span>
                              <span className="topic-download"><img src={require('../../images/ic-file-download.svg')} alt=""/>129</span>
                          </div>
                      </div>
                  </div>
                  {/*<!-- END of Trending topic -->*/}
                  <div className="link-container">
                      <div className="see-all-link">See all news</div>
                  </div>
              </div>
          </div>
      {/*<!-- END of Widget -->*/}
      {/*<!-- Widget -->   */}
          <div className="widget-container">
              <div className="widget-box">
                  <div className="widget-title">
                      <h2>UPCOMING EVENTS</h2>
                      <div className="see-all-link">See all Airbnb events</div>                            
                  </div>

                  <div className="widget-events-content">
                      <div className="event-container">
                          <div className="event-lable-date">
                              <div className="event-lable-day">5</div>
                              <div className="event-lable-month">jun</div>
                          </div>
                          <div className="event-details">
                              <div className="event-title">WWDC 2017</div>
                              <div>
                                  <span className="event-date">Sat, 10:00 AM - </span>
                                  <span className="event-location">McEnery Convention Center in San Jose, California</span>
                              </div>
                          </div>
                      </div>

                      <div className="event-container">
                          <div className="event-lable-date">
                              <div className="event-lable-day">5</div>
                              <div className="event-lable-month">jun</div>
                          </div>
                          <div className="event-details">
                              <div className="event-title">WWDC 2017</div>
                              <div>
                                  <span className="event-date">Sat, 10:00 AM - </span>
                                  <span className="event-location">McEnery Convention Center in San Jose, California</span>
                              </div>
                          </div>
                      </div>

                      <div className="event-container">
                          <div className="event-lable-date">
                              <div className="event-lable-day">5</div>
                              <div className="event-lable-month">jun</div>
                          </div>
                          <div className="event-details">
                              <div className="event-title">WWDC 2017</div>
                              <div>
                                  <span className="event-date">Sat, 10:00 AM - </span>
                                  <span className="event-location">McEnery Convention Center in San Jose, California</span>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
      {/*<!-- END of Widget -->*/}
      </div>
      {/*<!-- END of CONTENT of PAGE -->*/}
  </div>
)

export default MarketingDashboard