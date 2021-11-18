
import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';
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
        <Route exact path="/products">
          <Products></Products>
        </Route>
        <Route path="/product/:id">
          <Product></Product>
        </Route>

      </Switch>


    </div>
  );
}

export default App;
