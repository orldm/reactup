import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import logo from './logo.svg'
import './App.css'

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
]

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
              <li><Link to="/recharts">Recharts</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/recharts" component={Recharts}/>
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

const Recharts = () => (
  <div className='align-center'>
    <ResponsiveContainer width='100%' height={400} >
      <LineChart data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  </div>
)

const Pricing = () => (
  <div>
    <p>The best things in life are free</p>
  </div>
)

export default App;
