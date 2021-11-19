
import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Users from './components/Users';
import User from './components/User';
import { PrivateRoute } from './components/PrivateRoute';
import Modal from './components/Modal';
function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" >
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route exact path="/users">
          <Users></Users>
        </Route>
        <PrivateRoute path="/user/:id">
          <User></User>
        </PrivateRoute>
        <Route exact path="/login" >
        <Modal></Modal>
        </Route>
      </Switch>
      


    </div>
  );
}

export default App;
