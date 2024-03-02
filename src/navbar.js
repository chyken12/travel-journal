import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';






function NavBar() {
  return (
    
      <nav  className="navbar">
        <h2 className="title">  <FontAwesomeIcon icon={faGlobe} /> Travale Journal </h2>
      </nav>
    
   
  );
}

export default NavBar;