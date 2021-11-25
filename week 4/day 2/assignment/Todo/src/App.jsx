
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Pages/Login';
import Counter from './components/Pages/Counter'
import Todos from './components/Pages/Todos';
import SingleTodo from './components/Pages/SingleTodo';
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
        <Route exact path="/todos" >
          <Todos></Todos>
        </Route>
      </Switch>



    </div>
  );
}

export default App;
