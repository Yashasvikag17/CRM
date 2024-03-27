import React from 'react';
import DashBoard from '../Component/DashBoard';
import Employee from '../Component/Employee';
import Customer from '../Component/Customer';
import Invoice from '../Component/Invoice';
import Payment from '../Component/Payment';
import Logout from '../Component/Logout';

export default function Content({ selectedMenuItem }) {
  const renderContent = () => {
    switch (selectedMenuItem) {
      case 0:
        return <DashBoard />;
      case 1:
        return <Employee />;
      case 2:
        return <Customer />;
      case 3:
        return <Invoice />;
      case 4:
        return <Payment />;
      case 5:
        return <Logout />;
      default:
        return <DashBoard />;
    }
  };

  return <div>{renderContent()}</div>;
}
