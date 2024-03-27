import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div style={{ background: "#9AA8DB" }}>
      <nav className="navbar">
        <form className="form-inline" style={{ display: "flex", margin: "2px 30px " }}>
          <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn " type="submit" style={{margin: "-2px 0px 1px -45px", border:"none"}}><FaSearch /></button>
        </form>
        <div class="dropdown">
        <a class="btn  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Profile
        </a>
      
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Logout</a></li>
        
        </ul>
      </div>
      </nav>
    </div>
  );
}
