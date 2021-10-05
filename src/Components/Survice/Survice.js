import React, { useEffect, useState } from 'react';
import './Survice.css';

const Survice = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
    fetch('./education.json')
    .then(res => res.json())
    .then(data => setCourses(data));
    },[])
    
    return (
        <div className='courses'>
            <h1>Our Sevices</h1>
            <div className='row'>
             {
                 courses.map(course =>
                         (
                         <div className='col-md-4 cart-container'>
                             <div className="cart">
                                 <div className="image">
                                     <img src={course.img} alt="" />
                                     <h5 className='title'>{course.title}</h5>
                                     <h6 className='category'>{course.category}</h6>
                                     <p>$ {course.price}</p>
                                     <button className='cart-btn'>by now</button>
                                 </div>
                             </div>
                         </div>
                     )
                     )
             }
            </div>
        </div>
    );
};

export default Survice;