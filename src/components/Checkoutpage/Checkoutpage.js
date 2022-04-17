import React from 'react';

const Checkoutpage = ({serivces}) => {
    const {img} = serivces; 
    return (
        <div className='serivces-images'>
            <img className='serivces-img' src={img} alt="" />
        </div>
    );
};

export default Checkoutpage;