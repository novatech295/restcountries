import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import country from '../data/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import './Details.css';
const Details = () => {
  const params = useParams();
  const [data, setData] = useState({
    "flags": {
      "svg": "",
      "png": ""
    },

    "currencies": [
      {
        "code": "",
        "name": "",
        "symbol": ""
      }
    ],
    "languages": [
      {
        "iso639_1": "",
        "iso639_2": "",
        "name": "",
        "nativeName": ""
      },
      {
        "iso639_1": "",
        "iso639_2": "",
        "name": "",
        "nativeName": ""
      },
      {
        "iso639_1": "",
        "iso639_2": "",
        "name": "",
        "nativeName": ""
      }
    ],
    "translations": {
      "br": "",
      "pt": "",
      "nl": "",
      "hr": "",
      "fa": "",
      "de": "",
      "es": "",
      "fr": "",
      "ja": "",
      "it": "",
      "hu": ""
    },
    "flag": "",
    "regionalBlocs": [
      {
        "acronym": "",
        "name": ""
      }]
  });
  const borderCities = data.borders;
  const navigate = useNavigate();
  function Back() {
    navigate('/rest-countries');

  }
  function go(x) {
    navigate(`/rest-countries/details/${x}`);
  }
  useEffect(() => { f(); }, [params.alpha3Code])
  function f() {

    const e = country.find(item => item.alpha3Code == params.alpha3Code);
    setData(e)
  }
  return (
    <Fragment className="fragment">
      <div className='col-lg-2 col-md-2 mt-5'>
        <button className='Back-btn' onClick={Back}>
          <FontAwesomeIcon icon={faArrowLeft} className='icon-left' />
          <span>
            Back
          </span>
        </button>
      </div>
      <div className=' container mt-5 '>
        <div className=' row '>
          <div className='col-lg-5 col-md-5 '>
            <img src={data.flags.png} className='imgDet' />
          </div>
          <div className='col-lg-1 col-md-1'></div>
          <div className='col-lg-6 col-md-6 details mt-3 container-sm'>
            <h1 className='name-country'>{data.name}</h1>
            <div className='row  mt-4'>
              <div className='col-lg-5 col-md-5'>
                <h5>Native Name: <a>{data.nativeName}</a></h5>
                <h5>population: <a>{data.population}</a></h5>
                <h5>region: <a>{data.region}</a></h5>
                <h5>subregion: <a>{data.subregion}</a></h5>
                <h5>capital: <a>{data.capital}</a> </h5>
              </div>
              <div className='col-lg-1 col-md-1'></div>
              <div className='col-lg-6 col-md-6 left-details'>
                <h5>Top Level Domain: <a>{data.topLevelDomain}</a></h5>
                <h5>currencies: <a>{data.currencies[0].name}</a></h5>
                <h5>languages: <a>{data.languages.map((lan, lanIndex) => { return lanIndex + 1 != data.languages.length ? lan.name + "," : lan.name })} </a>
                </h5>
              </div>
            </div>
            {borderCities &&
              <div className='mt-lg-4 mt-md-4'>
                <xa className='border_countries'>Border Countries: </xa> {borderCities.slice(0, 4).map((city, index) => (
                  <button key={index} className='border-btn' onClick={() => go(city)}>{city}</button>
                ))}

              </div>
            }
          </div>
        </div>

      </div>
    </Fragment>
  )
}

export default Details;
