import React, { Fragment } from 'react'
import './Main.css';
import { useContext } from 'react';
import { CounterContext } from '../App';
import { useNavigate } from 'react-router-dom';
const Countryies = (props) => {
    const { isDarkMode } = useContext(CounterContext);
    const navigate = useNavigate();
    function f(x) {

        navigate(`details/${x}`, { state: { isDarkMode } });

    }
    return (
        <div className='ss'>
            <div className='Main-Pc container mt-5' >
                {props.data.map((data, dataIndex) =>
                    <div key={dataIndex} className='cc'>
                        <img src={data.flags.png} loading='lazy' className='img' onClick={() => f(data.alpha3Code)} />
                        <div className='country ' onClick={() => f(data.alpha3Code)}>
                            <h2>{data.name}</h2>
                            <h5> Population: {data.population}</h5>
                            <h5> Region: {data.region}</h5>
                            <h5>Captial: {data.capital}</h5>
                        </div>
                    </div>
                )}
            </div>
            <div className='Main-Mobile' >
                {props.data.map((data, dataIndex) =>
                    <div key={dataIndex} className='mb-4'>
                        <img src={data.flags.png} className='img' onClick={() => f(data.alpha3Code)} />
                        <div className='country' onClick={() => f(data.alpha3Code)}>
                            <h2>{data.name}</h2>
                            <h5> Population: {data.population}</h5>
                            <h5> Region: {data.region}</h5>
                            <h5>Captial: {data.capital}</h5>
                        </div>
                    </div>)}

            </div>
        </div>
    )
}

export default Countryies;

