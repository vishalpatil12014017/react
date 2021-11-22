
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';
import Navbar from './components/Navbar/Navbar';
import { PrivateRoute } from './components/Routes/PrivateRoute';
import Login from './components/Pages/Login';
import Showcart from './components/Pages/Showcart';
function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" >
          <Home></Home>
        </Route>
        <PrivateRoute path="/showcart" >
          <Showcart></Showcart>
        </PrivateRoute>
        <Route path="/login" >
          <Login></Login>
        </Route>
      </Switch>



    </div>
  );
}

export default App;
