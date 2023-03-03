import React from 'react';
import Chart from '../../components/chart';
import Featured from '../../components/featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import List from '../../components/table';
import Widgets from '../../components/widgets';
import "./home.scss";

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={3 / 1} title="Last 6 Months (Revenue)" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transections</div>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Home;
