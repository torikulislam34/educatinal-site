import './About.css';

const About = () => {
    return (
        <div className ='about-container row'>
            <div className="half-with col-md-6 ">
                <img className="w-100" src="https://i.insider.com/5d42e0ce100a2402a63a98f6?width=700" alt="" />
            </div>
            <div className="half-with col-md-6">
                <h1 className='heading'>Computer Science Career Path</h1>
                <p>This new Path is designed with students in mind. Get a strong foundation in all the skills and languages that are typically taught in a 4-year college CS degree. In addition to learning the abstract concepts that are fundamental to all of programming, you’ll also get hands-on experience that will help you problem-solve like a real programmer.</p>

                <ul className='list-item'>
                    <p className='sm-heading'>You’ll learn:</p>
                    <li>Python, data structures, and algorithms</li>
                    <li>Database fundamentals using PostgreSQL</li>
                    <li>The math and architecture of computer science</li>
                </ul>
                <button className ='course-btn'>Learn More</button>
            </div>
        </div>
    );
};
export default About;