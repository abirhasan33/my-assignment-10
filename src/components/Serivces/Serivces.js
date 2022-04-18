import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../../App';
import Serivce from '../Serivce/Serivce';
import './Serivces.css'




const Serivces = () => {

    const [serivces, setSerivces] = useContext(BlogContext);

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setSerivces(data));
    },[])

    return (
        <div>
            <h1 id='service' className='serivces-titel my-5'>My Serivces</h1>
            <div className='serivces-container container'>
            {
                serivces.map((serivce, index) => (<Serivce key={index} serivce={serivce}></Serivce>))
            }
            </div>
        </div>
    );
};

export default Serivces;