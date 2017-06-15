import React from 'react'
import { Route } from 'react-router-dom'
import NavigationMenu from './navigationMenu'
import MarketingDashboard from './dashboards/marketingDashboard'
import Favorites from './favorites'


const Main = () => (
  <div className='page-container'>
    <Route component={NavigationMenu}/>
    <Route path="/in-depth/marketing" component={MarketingDashboard}/>
    <Route path="/in-depth/favorites" component={Favorites}/>
  </div>
)

export default Main