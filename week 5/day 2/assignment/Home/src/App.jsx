import './App.css'
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Cards from './components/Cards';
import Charts from './components/Charts';
import Table from "./components/Table"
function App() {

  return (
    <>


      <Navbar></Navbar>
      <Route exact path="/" >
        <Cards></Cards>
        <Charts></Charts>
      </Route>
      <Route path="/table" >
        <Table></Table>
      </Route>

    </>

  );
}
export default App;
