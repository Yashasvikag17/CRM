import React, { useState } from 'react';
import Navbar from './Section/Navbar';
import Sidebar from './Section/Sidebar';
import Content from './Section/Content';
import { Outlet } from 'react-router-dom';

export default function App() {
  const [selectedItem, setSelectedItem] = useState();

  const handleItemClick = (index) => {
    setSelectedItem(index);
    console.log(index);
    console.log(selectedItem);
  };

  return (
    <div>
      <div className="App" style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "20%", background: "#9AA8DB", height: "1000px" }}>
          <Sidebar selectedItem={selectedItem} handleItemClick={handleItemClick} />
        </div>
        <div style={{ width: "80%" }}>
          <div style={{ height: "6% ", background: "#9AA8DB" }}>
            <Navbar />
          </div>
          <div style={{ height: "94%" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
