import React, { useState, createContext, useEffect, Fragment } from 'react'
import country from '../data/data.json';
import Countryies from './countryies';
import { useContext } from 'react';
import { CounterContext } from '../App';
import Search_Filter_Boxes from '../Search-Filter Boxes/Search-Filter-Boxes';
import './Main.css'
const Main = () => {
  const { count, search } = useContext(CounterContext);
  useEffect(() => {
    f(count);
  }, [count]);

  useEffect(() => {
    g();
  }, [search]); 
  const [data, setData] = useState(country);

  function f(x) {
    if (x !== "Filter by Region") {
      const asianCountries = country.filter((c) => c.region === x);
      setData(asianCountries);
    } else {
      setData(country);
    }
  }

  function g() {
    let newFilteredItems="";
      if(count=="Filter by Region"){
        setData(country);
        newFilteredItems = country.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()));
      }
      else{
      
      const newe=country.filter((c) => c.region === count);
       newFilteredItems = newe.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())

      );}
      setData(newFilteredItems);
      
  }

  return (
    <Fragment>
      <Search_Filter_Boxes/>
      <Countryies data={data} />
    </Fragment>
      
  );
};

export default Main;