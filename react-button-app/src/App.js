import { useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);
  return (
    <div className='App'>
      <header className='App-header'>
        <h3 data-testid='counter'>{count}</h3>
      </header>
    </div>
  );
}

export default App;
