import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import images1 from '../../images/banar-1.jpg'
import images2 from '../../images/banar-3.jpg'
import images3 from '../../images/banar.jpg'


const Banar = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height: "500px"}}
            src={images3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className='serivces-titel text-warning py-2'>Welcome To Our Photogarpher</h1>
            <p className='py-3'>Choic now Photogarpher Click the button Photogarpher detail information, The took many butyiful pactures. you can tack them from pahotgraphy, you can they them for days. one day I took many betyifull picyurs</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height: "500px"}}
            src={images2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
          <h1 className='serivces-titel py-2'>Welcome To Our Photogarpher</h1>
            <p className='py-3'>Choic now Photogarpher Click the button Photogarpher detail information, The took many butyiful pactures. you can tack them from pahotgraphy, you can they them for days. one day I took many betyifull picyurs</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height: "500px"}}
            src={images1}
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <h1 className='serivces-titel text-warning py-2'>Welcome To Our Photogarpher</h1>
            <p className='py-3'>Choic now Photogarpher Click the button Photogarpher detail information, The took many butyiful pactures. you can tack them from pahotgraphy, you can they them for days. one day I took many betyifull picyurs</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banar;