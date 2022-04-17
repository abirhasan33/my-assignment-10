import React from 'react';

const Homedites = ({serivces}) => {
    const {img, name} = serivces;
    return (
        <div>
            <img className='home-page-img' src={img} alt="" />
            <h6 className='name-home-page py-3'>Name: {name}</h6>
        </div>
    );
};

export default Homedites;