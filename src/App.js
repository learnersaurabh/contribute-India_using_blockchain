import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import Contribute from './Contribute'
import Navbar from './Navbar'
import NotFound from './NotFound'
function App() {
  return (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/contribute' exact>
          <Contribute />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  
  </>
  )    
}

export default App;
