import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import images1 from '../../images/banar-img-1.jpg'
import images2 from '../../images/banar-img-5.jpg'
import images3 from '../../images/banar-img-3.jpg'
import images4 from '../../images/banar-1.jpg'
import images5 from '../../images/banar-img-2.jpg'


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
            src={images1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className='serivces-titel text-warning py-2'>Welcome To My Photogarpher</h1>
            <p className='py-3'>Choic now Photogarpher Click the button Photogarpher detail information, The took many butyiful pactures. you can tack them from pahotgraphy, you can they them for days. one day I took many betyifull picyurs. I have beautiful photographer || I have been travleing from Photographer from 2014 to 2022 .</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height: "500px"}}
            src={images3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <h1 className='serivces-titel text-warning py-2'>Welcome To My Photogarpher</h1>
            <p className='py-3'>Choic now Photogarpher Click the button Photogarpher detail information, The took many butyiful pactures. you can tack them from pahotgraphy, you can they them for days. one day I took many betyifull picyurs. I have beautiful photographer || I have been travleing from Photographer from 2014 to 2022 .</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height: "500px"}}
            src={images4}
            alt="Second slide"
          />
  
          <Carousel.Caption>
          <h1 className='serivces-titel py-2 text-warning'>Welcome To My Photogarpher</h1>
            <p className='py-3'>Choic now Photogarpher Click the button Photogarpher detail information, The took many butyiful pactures. you can tack them from pahotgraphy, you can they them for days. one day I took many betyifull picyurs. I have beautiful photographer || I have been travleing from Photographer from 2014 to 2022 .</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height: "500px"}}
            src={images5}
            alt="Second slide"
          />
  
          <Carousel.Caption>
          <h1 className='serivces-titel py-2 text-warning'>Welcome To My Photogarpher</h1>
            <p className='py-3'>Choic now Photogarpher Click the button Photogarpher detail information, The took many butyiful pactures. you can tack them from pahotgraphy, you can they them for days. one day I took many betyifull picyurs. I have beautiful photographer || I have been travleing from Photographer from 2014 to 2022 .</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height: "500px"}}
            src={images2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
          <h1 className='serivces-titel py-2 text-warning'>Welcome To My Photogarpher</h1>
            <p className='py-3'>Choic now Photogarpher Click the button Photogarpher detail information, The took many butyiful pactures. you can tack them from pahotgraphy, you can they them for days. one day I took many betyifull picyurs. I have beautiful photographer || I have been travleing from Photographer from 2014 to 2022 .</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banar;