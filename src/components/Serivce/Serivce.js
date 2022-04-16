import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Serivce.css';

const Serivce = ({serivce}) => {
    const { img, id, name, Cemara, description, Phone,} = serivce;
    console.log(serivce)
    const nevigate = useNavigate();
    const navigetToServiseDetail = id => {
        nevigate(`/about/${id}`);
    }
    return (
        <div className='serivces'>
            <img className='images' src={img} alt="" />
            <h4 className='name m-2'>{name}</h4>
            <p className='p m-0'>{Cemara}</p>
            <small className='phone'>Phone: {Phone}</small>
            <p><small>{description}</small></p>
            <button onClick={()=>navigetToServiseDetail(id)} className='button'>Book: {name}</button>
        </div>
    );
};

export default Serivce;