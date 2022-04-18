import React, { useEffect, useState } from 'react';
import Checkoutpage from '../Checkoutpage/Checkoutpage';
import { ToastContainer, toast } from 'react-toastify';
import './Checkout.css';

const Checkout = () => {
    const [serivces, setSerivces] = useState([]);
    useEffect(()=> {
        fetch('checkout.json')
        .then(res => res.json())
        .then(data => setSerivces(data));
    },[])
    if('/checkout'){
        toast("Thanks for coming Check-out page")
    }

    return (
        <div className='serivces-cukout'>
            {
                serivces.map(serivces => <Checkoutpage key={serivces} serivces={serivces}></Checkoutpage>)
            }
            <ToastContainer />
        </div>
    );
};

export default Checkout;