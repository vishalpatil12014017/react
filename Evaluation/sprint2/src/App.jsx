
import './App.css';
import Navbar from './components/Navbar/Navbar'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './components/pages/Dashboard';
import Details from './components/pages/Details'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/details/:id">
          <Details></Details>
        </Route>

      </Switch>


    </div>
  );
}

export default App;
