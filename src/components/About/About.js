import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import abir from '../../images/abie-2.png';
import Homedites from '../Homedites/Homedites';
import './About.css';

const About = () => {
    const [serivces, setSerivces] = useState([]);
    useEffect(()=> {
        fetch('photo.json')
        .then(res => res.json())
        .then(data => setSerivces(data));
    },[])
    return (
        <div className='abir'>
            <div className='coniternae-div'>
            <div className='imagess container mt-5'>
                <img className='img' src={abir} alt="" />
            </div>
            <div className='paragarp mt-5 container'>
                <h2>I am Abir hasan</h2>
                <h1 className='serivces-titels'>I Have a Photograher</h1>
                <h6>If you go for a walk, you can tack a photogarapher from me. call naow from me my number: 01608889768 & And Contarct now Photogapher my Home page
                    I have beautiful photographer || I have been travleing from Photographer from 2014 to 2022 .
                </h6>
                <p className='py-3'>NYC has many gorgeous locations that offer our photographers discreet places to hide themselves and capture your diamond moment. Some proposal location ideas include: Central Park. Empire State Building. The High Line. Times Square. A Romantic Rooftop. Times Square. If you’re interested in secret proposal photography, NYC grooms typically ...</p>
            <Link to='/home'><button className='button px-5 py-2 mb-4'>Our Serivces</button></Link>
            </div>
        </div>
        <h2 className='serivces-titel'>Member of my Photogarpher</h2>
           <div className='about-container my-5 container'>
           {
                serivces.map(serivces=> <Homedites key={serivces} serivces={serivces}></Homedites>)
            }
           </div>
        </div>
    );
};

export default About;