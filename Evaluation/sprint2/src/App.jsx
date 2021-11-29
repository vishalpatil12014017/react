
import './App.css';
import Navbar from './components/Navbar/Navbar'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './components/pages/Dashboard';
import Details from './components/pages/Details'
import Login from './components/pages/Login';
import Payment from './components/pages/Payment';
import { PrivateRoute } from './components/Routes/PrivateRoute';
import About from './components/pages/About';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <PrivateRoute exact path="/">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path="/details/:id">
          <Details></Details>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <PrivateRoute path="/payment">
          <Payment></Payment>
        </PrivateRoute>
        

      </Switch>


    </div>
  );
}

export default App;
