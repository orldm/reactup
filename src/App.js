import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>
        <Router>
          <div>
            <ul className='link-container'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/pricing" component={Pricing}/>
          </div>
        </Router>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <p>Our website is coming soon :-)</p>
  </div>
)

const About = () => (
  <div>
    <p>Our little group has always been, and always will until the end</p>
  </div>
)

const Pricing = () => (
  <div>
    <p>The best things in life are free</p>
  </div>
)

export default App;
