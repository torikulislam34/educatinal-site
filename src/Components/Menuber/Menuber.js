
import { Link } from 'react-router-dom';
import './Menuber.css'
const Menuber = () => {

  return (
    <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className='items1'>
              <li>LEARN WITH TORIKUL</li>
            </div>
          </div>
          <div className="col-md-9">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                  <Link to="/Home" className='items'>
                  <li>Home</li>
                  </Link>
                  <Link to="/services" className='items'>
                  <li>Services</li>
                  </Link>
                  <Link to="/Aboutus" className='items'>
                  <li>About us</li>
                  </Link>
                  <Link to="/Contact" className='items'>
                  <li>Contact</li>
                  </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menuber;
