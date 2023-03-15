import React, { useCallback, useEffect, useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BeautifulButton from './components/BeautifulButton/BeautifulButton';
import AlternaInput from './components/AlternaInput/AlternaInput';
import AlternaTodoList from './components/AlternaTodoList/AlternaTodoList';

function onClick() {
  console.log('Button clicked!', Date.now());
}

function App() {
  let text = 'Click me!!!';

  function onClick3() {
    text = 'I was changed';
    console.log('Button 3 clicked.. Bottom!', Date.now());
  }

  const [count, setCount] = useState<number>(0);
  const [filter, setFilter] = useState<string | undefined>(undefined);

  console.log('Main Ap was rendered!', Date.now());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BeautifulButton text={text} action={onClick} onCountChange={(newcount) => setCount(newcount)} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <BeautifulButton text="Clickeame!" action={onClick2} /> */}
        <button onClick={() => setCount(count + 1)}>Will update props!</button>
        <AlternaInput count={count} action={setFilter} />
      </header>
      <div>
        <AlternaTodoList filterText={filter} />
      </div>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
