
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Pages/Login';
import Counter from './components/Pages/Counter'
import Todos from './components/Pages/Todos';
import SingleTodo from './components/Pages/SingleTodo';
import {PrivateRoute} from './components/Routes/PrivateRoute'
function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/home" >
          <Home></Home>
        </Route>
        <Route exact path="/" >
         <Counter></Counter>
        </Route>
        <Route path="/login" >
          <Login></Login>
        </Route>
        <Route path="/todo/:id" >
         <SingleTodo></SingleTodo>
        </Route>
        <PrivateRoute exact path="/todos" >
          <Todos></Todos>
        </PrivateRoute>
      </Switch>



    </div>
  );
}

export default App;
