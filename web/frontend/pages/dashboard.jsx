import React from 'react';
import '../css/dashboard-style.css'; // assuming the CSS file is located in the same directory

const Dashboard = () => {
  return (

    <div className='container'>
      <div className='heading'>
        <h1>Install the Fashion Circle Apps:</h1>
      </div>
      <div className="outer_div">
        <p className='link'>
          <span className="hint">
            <a href="https://shopify.fashioncircle.de/merchantShopify/login.php" target="_blank" rel="noopener noreferrer">
              Fashion Circle for Retailers
            </a>
          </span>
        </p>
  
        <p className='link'>
          <span className="hint">
            <a href="https://shopify.fashioncircle.de/vendorshopify/login.php" target="_blank" rel="noopener noreferrer">
              Fashion Circle for Designers
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;