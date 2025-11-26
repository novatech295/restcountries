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
 
      <CounterContext.Provider value={{ count, setCount, search, setSearch, isDarkMode, setIsDarkMode }}>
        <NavBar />
        <Routes>
          <Route path='rest-countries' element={<Main />}></Route>
          <Route path='rest-countries/details/:alpha3Code' element={<Details />}></Route>
        </Routes>
      </CounterContext.Provider>
  );
}

export default App;
