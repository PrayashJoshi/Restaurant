import './App.css';
import Navigation from './components/navigation'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'
import FMenu from './pages/fullMenu'


function App() {

  return (
    <Router>
    <div className="App">
      <Navigation/>
      <Switch>
        
      <Route path='/home' component={Home} />
          <Route path='/fmenu' component={FMenu} />
          <Route path='/contact' component={Contact} />
          <Route path='/' component={Home} />
          <Route component={() => 404} />
      </Switch>
    </div>
    </Router>
  );
}


export default App;
