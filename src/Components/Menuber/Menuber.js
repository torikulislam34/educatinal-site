
import { NavLink } from 'react-router-dom';
import './Menuber.css'
const Menuber = () => {
  const activeStyle = {
      fontWeight: 'bold',
      color: 'skyblue',
      // textDecoration: '1px solid skyblue'
  }
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
                  <NavLink activeStyle={activeStyle} to="/Home" className='items'>
                  <li>Home</li>
                  </NavLink>
                  <NavLink activeStyle={activeStyle} to="/services" className='items'>
                  <li>Services</li>
                  </NavLink>
                  <NavLink activeStyle={activeStyle} to="/Aboutus" className='items'>
                  <li>About us</li>
                  </NavLink>
                  <NavLink activeStyle={activeStyle} to="/Deatils" className='items'>
                  <li>Deatils</li>
                  </NavLink>
                  <NavLink activeStyle={activeStyle} to="/Contact" className='items'>
                  <li>Contact</li>
                  </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menuber;
