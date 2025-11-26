import React, { useState } from 'react'
import Searchbox from './SearchBox/searchbox'
import Filter from './Filter/Filter'
import './Filter/Filter.css';
const Search_Filter_Boxes = () => {
  return (
    <div className=' mt-5 filter-search-boxes '>
      <div className='row '>
        <div className='col-lg-4 col-md-4'>
          <Searchbox />
        </div>
        <div className='col-lg-4 col-md-4'></div>
        <div className='col-lg-3 col-md-3'>
          <Filter />
        </div>
      </div>
    </div>
  )
}

export default Search_Filter_Boxes
