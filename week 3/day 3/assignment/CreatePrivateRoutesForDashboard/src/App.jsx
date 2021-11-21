
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';
import Navbar from './components/Navbar/Navbar';
import Setting from './components/Pages/Setting';
import { PrivateRoute } from './components/Routes/PrivateRoute';
import Login from './components/Pages/Login';
import Dashboard from './components/Pages/Dashboard';
function App() {

  return (
    <div className="App">

      <Navbar></Navbar>
      <setting></setting>
      <Switch>
        <Route exact path="/" >
          <Home></Home>
        </Route>
        <Route exact path="/dashboard" >
          <Dashboard></Dashboard>
        </Route>
        <PrivateRoute path="/setting">
          <Setting></Setting>
        </PrivateRoute>
        <Route exact path="/login" >
          <Login></Login>
        </Route>
      </Switch>



    </div>
  );
}

export default App;
