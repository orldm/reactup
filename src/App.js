import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ReactVis from './components/react-vis'
import Recharts from './components/recharts'
import Main from './components'

// import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>*/}
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/in-depth" component={Main}/>
            <Route path="/recharts" component={Recharts}/>
            <Route path="/react-vis" component={ReactVis}/>
          </div>
        </Router>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <ul className='link-container'>
      <li><Link to="/in-depth">In-Depth</Link></li>
      <li><Link to="/recharts">Recharts</Link></li>
      <li><Link to="/react-vis">React-Vis</Link></li>
    </ul>
  </div>
)

export default App;
