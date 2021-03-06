import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import '../CSS/nav.css';

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <nav>
      <div className="location-path">
        {(location.pathname !== '/') ? <button className="back" type="button" onClick={history.goBack}><BsChevronLeft className="fas fa-chevron-left"> </BsChevronLeft></button> : <span className="back">Covid-19 world wide</span>}
      </div>

    </nav>
  );
};

export default Navbar;
