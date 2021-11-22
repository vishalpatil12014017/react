
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Pages/Login';
import Meal from './components/Pages/Meal';
function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" >
          <Home></Home>
        </Route>
        <Route exact path="/meal" >
          <Meal></Meal>
        </Route>
        <Route path="/login" >
          <Login></Login>
        </Route>
      </Switch>



    </div>
  );
}

export default App;
