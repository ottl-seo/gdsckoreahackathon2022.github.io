import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import StaffImageList from './components/staffInfo';

const Wrapper = styled.div`
  min-height: 100%;
  background-color: #1d1d1d;
  font-family: 'Hahmlet', serif;
  padding-bottom: 80px;

  .wrapper-border {
    border-top: 1px solid rgba(200, 200, 200, 0.5);
    border-bottom: 1px solid rgba(200, 200, 200, 0.5);
  }

  .item-border {
    border: 1px solid rgba(200, 200, 200, 0.5);
  }
  div.staff-title {
    font-size: 70px;
    text-align: center;
    width: 100%;
    padding-top: 7%;
    padding-bottom: 6%;
    color: #ffffff;
  }
`;

const Index = () => {
  return (
    <Wrapper>
      <div className="top-padding" />
      <Fade duration={2000}>
        <div className="staff-title wrapper-border">
          <p>STAFF</p>
        </div>
      </Fade>
      <Fade duration={2000}>
        <StaffImageList />
      </Fade>
    </Wrapper>
  );
};

export default Index;
