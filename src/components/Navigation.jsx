import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  //toDo: 민지 => 탭바 구현
  return (
    <div className="top-navigation">
      <Link to="/">home</Link>
      <Link to="/hackathon">Hackathon</Link>
      <Link to="/prize">PRIZE</Link>
      <Link to="/staff">STAFF</Link>
    </div>
  );
};

export default Navigation;
