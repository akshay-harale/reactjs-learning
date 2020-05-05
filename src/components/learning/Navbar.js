import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
      
      <Link to="/" >Home</Link> | <Link to="/meme">Memes </Link>

    </div>
  );
};

export default Navbar;