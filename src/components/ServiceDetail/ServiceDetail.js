import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BlogContext } from '../../App';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [serivces ] = useContext(BlogContext);

    const blog = serivces.find((blog) => blog.id === serviceId);
    console.log(blog)
    return (
        <div>
            <h2 className='serivces-titel'>elcome to ServiceDetail: ( {serviceId} )</h2>
            <div className='blog-details'>
          <div className='blog-image'>
            <img src={blog?.img} alt='' />
          </div>
          <h1>{blog?.name}</h1>
          <p>{blog?.phone}</p>
          <p>{blog?.description}</p>
        </div>
            <div className="text-center">
            <Link to='/checkout'>
                <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;