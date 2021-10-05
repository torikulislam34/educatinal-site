import React from 'react';
import './Deatils.css'

const Deatils = () => {
    return (
        <div>
            <section className ='deatils-container'>
                <h2 className='heading'>OUR MISSION</h2>
                <p className='deatils'> To spread programming all over the world <br /> and to present Bangladesh in a beautiful way. </p>
            </section>
            <section className='d-flex'>
                <div className='col-6 font-md'>
                 <h2>Our Background</h2>
                 <p>Stackline is a retail intelligence and software company founded by a group of industry veterans and headquartered in Seattle, WA. Our technology optimizes programing performance for thousands of the world’s largest brands and retailers.</p>
                </div>
                <div className='col-6'>
                    <img className='deatil-img' src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />

                </div>
            </section>
            <section className='d-flex'>
                <div className='col-6'>
                    <img className='deatil-img2' src="https://images.pexels.com/photos/7988694/pexels-photo-7988694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />

                </div>
                <div className='col-6 object-text'>
                 <h2>Our Objective</h2>
                 <p>
                    We solve online retail's most challenging problems by combining software and data science to augment human intelligence. Our products and services change the way people think, act and work.02         
                 </p>
                </div>
            </section>
            <section>
                <h2 className='leader mt-5'>Leadership</h2>
                <p>Working together to build the future of programing</p>
                <div className='row'>
                    <div className=' d-flex mt-5'>
                        <div className= 'col-3'>   
                        <img className='leader-img' src="https://assets-global.website-files.com/5d066a9385f49bb88aa6f2a5/5d2a241cb9b05dbe5f3d82a6_Mitch-v02%20(1)-p-500.jpeg" alt="" />
                        <p className='profasion'>Software Engineer</p>
                        </div>
                        <div className= 'col-3'>   
                        <img className='leader-img' src="https://assets-global.website-files.com/5d066a9385f49bb88aa6f2a5/5d2a241ce06f4ce1109bdf91_Natalie-v01%20(1)-p-500.jpeg" alt="" />
                        <p className='profasion'>Full Stack Developer</p>
                        </div>
                        <div className= 'col-3'>   
                        <img className='leader-img' src="https://assets-global.website-files.com/5d066a9385f49bb88aa6f2a5/5d2a241c187e93da17bece58_Raj-v02%20(2)-p-500.jpeg" alt="" />
                        <p className='profasion'>React Developer</p>
                        </div>
                        <div className= 'col-3 '>   
                        <img className='leader-img' src="https://assets-global.website-files.com/5d066a9385f49bb88aa6f2a5/5d2a241c4a8706376d2828a7_Rowe-v01%20(1)-p-500.jpeg" alt="" />
                        <p className='profasion'>Business Development</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className=' d-flex mt-5'>
                        <div className= 'col-3'>   
                        <img className='leader-img' src="https://assets-global.website-files.com/5d066a9385f49bb88aa6f2a5/5d2a241b4a870659812828a4_Lindey-v01%20(1)-p-500.jpeg" alt="" />
                        <p className='profasion'>Software Engineer</p>
                        </div>
                        <div className= 'col-3'>   
                        <img className='leader-img' src="https://assets-global.website-files.com/5d066a9385f49bb88aa6f2a5/5d2a241be06f4c84809bdf8f_Lagoni-v01%20(1)-p-500.jpeg" alt="" />
                        <p className='profasion'>Netork Analist</p>
                        </div>
                        <div className= 'col-3'>   
                        <img className='leader-img' src="https://assets-global.website-files.com/5d066a9385f49bb88aa6f2a5/5d2a241d4a87063fd62828a9_Valenza-v01%20(1)-p-500.jpeg" alt="" />
                        <p className='profasion'>Ethicser</p>
                        </div>
                        <div className= 'col-3 '>   
                        <img className='leader-img' src="https://assets-global.website-files.com/5d066a9385f49bb88aa6f2a5/5d2a241be06f4c2dcf9bdf90_Esteban-v02%20(1)-p-500.jpeg" alt="" />
                        <p className='profasion'>React Developer </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Deatils;