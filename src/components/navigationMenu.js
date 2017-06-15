import React from 'react'
import { Link } from 'react-router-dom'

const NavigationMenu = () => (
  <div className="left-container">
      <div className="left-menu">
          <div className="left-menu-header"><img src={require('../images/shape.svg')} alt='logo'/>In-Depth
          </div>
          <div className="left-menu-list">
              <div className="left-menu-list-title">DASHBOARDS</div>
              <div className="btn-add-item">+</div>
              <ul className="">
                  <li className="menu-list-dashboard"><span className="menu-list-icon icon-dashboard"></span>Main</li>
                  <li className="menu-list-dashboard"><Link to="in-depth/marketing"><span className="menu-list-icon icon-marketing"></span>Marketing</Link></li>
                  <li className="menu-list-dashboard"><span className="menu-list-icon icon-sales"></span>Sales</li>
              </ul>
          </div>
          <div className="left-menu-list">
              <ul className="">
                  <li className="menu-list-dashboard">
                      <span className="menu-list-icon icon-feeds"></span>
                      News feed
                  </li>
                  <li className="menu-list-dashboard">
                      <span className="menu-list-icon icon-notifications"></span>
                      Notifications
                      <div className="notification-lable">100</div>
                  </li>
                  <li className="menu-list-dashboard"><span className="menu-list-icon icon-preferences"></span>Preferences</li>
              </ul>
          </div>
          <div className="left-menu-list">
              <div className="left-menu-list-title">FAVORITES</div>
              <ul className="">
                  <li className="menu-list-dashboard"><span className="menu-list-logo logo-spotify"></span>Spotify</li>
                  <li className="menu-list-dashboard"><Link to="in-depth/favorites"><span className="menu-list-logo logo-airbnb"></span>Airbnb</Link></li>
                  <li className="menu-list-dashboard"><span className="menu-list-logo logo-dropbox"></span>Dropbox</li>
                  <li className="menu-list-dashboard"><span className="menu-list-logo logo-slack"></span>Slack</li>
                  <li className="menu-list-dashboard"><span className="menu-list-logo"></span>Very Looooong Company Name</li>
              </ul>
          </div>
      </div>
  </div>
)

export default NavigationMenu