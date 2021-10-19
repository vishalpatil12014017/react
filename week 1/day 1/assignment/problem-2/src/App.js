
import './App.css';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import Button3 from './components/Button3';
import Button4 from './components/Button4';
import Button5 from './components/Button5';
import Button6 from './components/Button6';
import Button7 from './components/Button7';
import Button8 from './components/Button8';

function App() {
  return (
    <div>
      <h1>Part 1</h1>
      <div>
        <Button1 />
        <Button2 />

      </div>
      <div>
        <Button3 />
        <Button4 />

      </div>
      <div>
        <Button5 />
        <Button6 />

      </div>
      <div>
        <Button7 />
        <Button8 />
      </div>
      <h1>Part 2</h1>
      <div className="inone">
     
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
      </div>
    </div>

  );
}

export default App;
