import './App.css';
import { createContext, Fragment, useState } from 'react';
import Main from './Main/Main.js';
import NavBar from './Navbar/Navbar';

import { Routes, Route } from 'react-router-dom';
import Details from './Details/Details';

export const CounterContext = createContext();

function App() {
  const [count, setCount] = useState("Filter by Region");
  const [search, setSearch] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <CounterContext.Provider
      value={{ count, setCount, search, setSearch, isDarkMode, setIsDarkMode }}
    >
      <NavBar />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/details/:alpha3Code' element={<Details />} />
      </Routes>
    </CounterContext.Provider>
  );
}

export default App;
