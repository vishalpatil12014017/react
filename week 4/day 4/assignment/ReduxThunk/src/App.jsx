
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Pages/Login';
import { PrivateRoute } from './components/Routes/PrivateRoute'
import Github from './components/Pages/Github';
import Register from './components/Pages/Register';
function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path="/home" >
          <Home></Home>
        </Route>
        <Route path="/login" >
          <Login></Login>
        </Route>
        <PrivateRoute exact path="/" >
          <Github></Github>
        </PrivateRoute>
        <Route path="/register" >
          <Register></Register>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
