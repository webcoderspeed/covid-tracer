import React from 'react'
import {BrowserRouter as Router, Switch,  Route} from 'react-router-dom'
import GlobalStyle from './globalStyles'
import Home from './components/Home/Home'
import Tracer from './components/Tracer/Tracer'
import Prevention from './components/Prevention/Prevention'
import Section from './components/News/Section/Section'

function App() {
  return (
    <Router>
          <div className="App">
          <GlobalStyle />
          <Switch>
            <Route path='/about'>
              <h1>About</h1>
            </Route>
            <Route path='/prevention'>
            <Prevention />
            </Route>
            <Route path='/contact-us'>
              <h1>Contact Us</h1>
            </Route>
            <Route path='/explore'>
              <Tracer />
            </Route>
            <Route path='/learn-more'>
              <Section />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
           </div>
    </Router>
  );
}

export default App;
