
import './App.css';
import Timer from './component/Timer'
import { Todo } from './component/Post';
function App() {

  return (
    <div className="App p-4 container">
      <Timer></Timer>
      <Todo />
    </div>
  );
}

export default App;
