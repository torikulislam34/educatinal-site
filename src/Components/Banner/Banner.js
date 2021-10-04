import React from 'react';

import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-container ">
        <div className="">
          <div className="row d-flex banner align-items-center justify-content-center">
            
            <div className="col-md-6">
              <h1 className="title">
                LEARN WITH <br /> PROGRAMING
              </h1>
              <p className="text-white text-center mt-3">
                    Python, data structures, and algorithms
                    Database fundamentals using PostgreSQL
                    The math and architecture of computer science.
              </p>
              <button className="mt-3 about-btn">About Us</button>
            </div>
            <div className="col-md-6">
                <img className='sm-image' src="https://2018media.idtech.com/images/blog/featured/1623199310_coding-for-kids-blog-header.jpg?b37f789c8b" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;