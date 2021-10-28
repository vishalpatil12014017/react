
import './App.css';
import { Button } from './component/Custom/Button';
import Input from './component/Input';

import { useState } from 'react';
function App() {
  const [theme, setTheme] = useState("light")
  return (
    <div className="App">
      <Input></Input>
      <div className="App">
        <Button theme={theme}>Click Here</Button><br />
        <button onClick={() => { setTheme(theme === "light" ? "dark" : "light") }}>Toggle</button>
      </div>
    </div>
  );
}

export default App;
