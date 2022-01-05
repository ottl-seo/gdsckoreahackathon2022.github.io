import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  //toDo: 민지 => 탭바 구현
  return (
    <div className="top-navigation">
      <Link to="/">메인</Link>
      <Link to="/topic">주제</Link>
      <Link to="/rule">평가 기준</Link>
      <Link to="/staff">스태프</Link>
    </div>
  );
};

export default Navigation;
