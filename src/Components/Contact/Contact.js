import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <section>
                <div>
                <h1>Office locations</h1>
                <p>We serve clients around the globe through a growing list of offices</p>
                </div>
                <div className='row'>
                   <div className='d-flex location-container'>
                   <div className='col-3'>
                       <img className='locaton-img' src="https://assets-global.website-files.com/5d066a9385f49bb88aa6f2a5/5d24b32160878d1c165fef15_City%20-%20Seattle-p-500.jpeg" alt="" />
                       <h4 className='area'>Bangladesh</h4>
                       <p>Uttara Dhaka
                        <br />
                        1230, Road#1/B</p>
                   </div>
                   <div className='col-3'>
                       <img className='locaton-img' src="https://assets-global.website-files.com/5d066a9385f49bb88aa6f2a5/5d24b4efaab4a50b2ee09c75_City%20-%20Minneapolis-p-500.jpeg" alt="" />
                       <h4 className='area'>USA</h4>
                       <p>263, California USA
                        <br />
                        30, Sedni USA</p>
                   </div>
                   <div className='col-3'>
                       <img className='locaton-img' src="https://assets-global.website-files.com/5d066a9385f49bb88aa6f2a5/5d24b4f83c6caea9c109d574_City%20-%20London-p-500.jpeg" alt="" />
                       <h4 className='area'>London</h4>
                       <p>1 Fore St Avenue
                        <br />
                        Barbican, London, UK</p>
                   </div>
                   </div>
                </div>
            </section>
            <section>
                <h2>Email: leotorikul@gmail.com</h2>
                <h3>Facebook: https://www.facebook.com/mdtorikulislam.rabin</h3>
                <div className='sub-contact'>
                <address> Address: 263, California USA</address>
                <p>Phone : +91 142 1280 99</p>
               </div>
            </section>
        </div>
    );
};

export default Contact;