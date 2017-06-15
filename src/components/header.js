import React from 'react'

const Header = () => (
    <header>
        <div className="header-container">
            <div className="header">
                {/*<!-- Search -->*/}
                <div className="search-container">
                    <input type="text" name="search" className="search-field" placeholder="Type your query…" />
                    <div className="icon-search"><img src={require('../images/ic-search.svg')} alt="" /></div>
                </div>
                {/*<!-- END of Search -->*/}
                <div className="filters-dropdown-container">
                    <div className="filters-dropdown">
                        <span className="icon-filters"></span>
                        <span className="icon-dropdown">
                            <img src={require('../images/ic-arrow-drop-down.svg')} alt="" />
                        </span>
                    </div>
                </div>
                <div className="profile-settings-container">
                    <img className="userpic" src={require('../images/userpic-header.png')} alt="userpic" />
                    <div className="user-name">Rodney Wood</div>
                    <span className="icon-dropdown">
                        <img src={require('../images/ic-arrow-drop-down.svg')} alt="" />
                    </span>
                </div>
            </div>
            <div className="search-filters-container">
                {/*<!-- Filters search -->*/}
                <div className="search-container filters-container">
                    <input type="text" name="search" className="search-field" placeholder="Filter by company or industry" />
                    <div className="btn-add-filters">+</div>
                </div>
                {/*<!-- END of Filters search -->*/}
                <div className="filters">
                    <div className="filter-tag"><span>Spotify</span><span><img src={require('../images/ic-close.svg')} alt="" /></span></div>
                    <div className="filter-tag"><span>Music streaming</span><span><img src={require('../images/ic-close.svg')} alt="" /></span></div>
                </div>
            </div>
        </div>
    </header>
)

export default Header