// Sidebar.js
import React from 'react';
import { AiOutlineDashboard, AiOutlineUser, AiOutlineCustomerService, AiOutlineFile, AiOutlineDollarCircle, AiOutlineLogout } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Sidebar({ handleItemClick }) {
  const listItems = [
    { text: 'DashBoard', icon: <AiOutlineDashboard /> },
    { text: 'Employee', icon: <AiOutlineUser /> },
    { text: 'Customer', icon: <AiOutlineCustomerService /> },
    { text: 'Invoice', icon: <AiOutlineFile /> },
    { text: 'Payment', icon: <AiOutlineDollarCircle />  },
    { text: 'Logout', icon: <AiOutlineLogout />},
  ];

  return ( 
    <div style={{ background: '#9AA8D' }}>
      <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse">
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4" style={{ background: '#9AA8DB' }}>
            <Link to="/" className='list-group-item'>Oval</Link>
            {listItems.map((item, index) => (
              <Link
                to={`/${item.text.toLowerCase()}`} // Use the text property to generate the path dynamically
                key={index}
                className="list-group-item"
                style={{ borderBottom: 'none', background: '#9AA8DB' }}
                onClick={() => handleItemClick(index)}
              >
                {item.icon && <span style={{ margin: "2px" }}>{item.icon}</span>}
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
