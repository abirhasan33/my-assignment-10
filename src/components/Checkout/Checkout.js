import React, { useEffect, useState } from 'react';
import Checkoutpage from '../Checkoutpage/Checkoutpage';
import './Checkout.css';

const Checkout = () => {
    const [serivces, setSerivces] = useState([]);
    useEffect(()=> {
        fetch('checkout.json')
        .then(res => res.json())
        .then(data => setSerivces(data));
    },[])

    return (
        <div className='serivces-cukout'>
            {
                serivces.map(serivces => <Checkoutpage key={serivces} serivces={serivces}></Checkoutpage>)
            }
        </div>
    );
};

export default Checkout;