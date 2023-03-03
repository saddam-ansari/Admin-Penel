import React from 'react';
import './single.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Chart from '../../components/chart';
import Table from '../../components/table';

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className='itemKey'>Email:</span>
                  <span className='itemVlue'>janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Phone:</span>
                  <span className='itemVlue'>+91288284627</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Address:</span>
                  <span className='itemVlue'>West Bengal India, 500054</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Country:</span>
                  <span className='itemVlue'>India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={4 / 1} title="User Spending ( Last 6 Months )"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transections</h1>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Single
