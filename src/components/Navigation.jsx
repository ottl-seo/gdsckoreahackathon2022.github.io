import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './img/logo.png';

const Navigation = () => {
  const activeTab = {
    color: 'white',
  };

  return (
    <div className="top-navigation">
      <div className="space-left"></div>
      <NavLink to="/" exact activeStyle={activeTab}>
        HOME
      </NavLink>
      <NavLink to="/timetable" activeStyle={activeTab}>
        TIMETABLE
      </NavLink>
      <NavLink to="/hackathon" activeStyle={activeTab}>
        HACKATHON
      </NavLink>
      <NavLink to="/prize" activeStyle={activeTab}>
        PRIZE
      </NavLink>
      <NavLink to="/staff" activeStyle={activeTab}>
        STAFF
      </NavLink>
      <div className="title">
        <div className="title-container">
          <img src={logo} width="25px" height="25px" style={{ marginRight: '5px' }} alt="logo" />
          <div className="name">2022 GDSC KR Winter Hack</div>
        </div>
        <div className="space-right"></div>
      </div>
    </div>
  );
};

export default Navigation;
