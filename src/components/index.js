import React from 'react'
import NavigationMenu from './navigationMenu'
import MarketingDashboard from './dashboards/marketingDashboard'

const Main = () => (
  <div className='page-container'>
    <NavigationMenu />
    <MarketingDashboard />
  </div>
)

export default Main