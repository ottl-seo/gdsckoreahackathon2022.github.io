import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import TopTeam from './components/topTeam';
import GrandTeam from './components/grandTeam';

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

  .blank-space {
    display: inline-block;
    width: 5vw;
    height: 100%;
    maxheight: 300px;
    border: 1px solid rgba(200, 200, 200, 0.5);
    border-left: none;
    border-top: none;

    &:last-child {
      border-right: none;
    }
  }

  .content-container {
    height: 100%;
    border: 1px solid rgba(200, 200, 200, 0.5);
    border-left: none;
    border-top: none;
    display: flex;
  }

  .grade-container {
    display: flex;
  }
`;

const Index = () => {
  return (
    <Wrapper>
      <div className="top-padding" />
      <Fade duration={2000}>
        <TopTeam></TopTeam>
      </Fade>
      <Fade duration={2000}>
        <GrandTeam></GrandTeam>
      </Fade>
    </Wrapper>
  );
};

export default Index;
