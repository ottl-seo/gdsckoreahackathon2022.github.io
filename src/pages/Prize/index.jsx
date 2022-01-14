import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import { prizeInfo, qnaInfo } from './components/Info';
import CriteriaItem from './components/CriteriaItem';
import FaqItem from './components/FaqItem';
import Judge from './components/Judge';

const Wrapper = styled.div`
  min-height: 100%;
  background-color: #1d1d1d;
  font-family: 'Hahmlet', serif;
  padding-bottom: 80px;

  .wrapper-border {
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }

  .item-border {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  .prize-icon {
    width: 100px;
    height: 92px;
    object-fit: scale-down;
  }

  .prize-award-list {
    display: inline-flex;
    width: 70%;
    margin: 175px 15%;
    justify-content: space-between;
  }

  .prize-award-item {
    p {
      font-size: 25px;
      line-height: 35px;
      text-align: center;
    }

    .prize-award-title {
      margin-top: 20px;
      color: #ffffff;
    }

    .prize-award-amount {
      color: #5b5b5b;
    }
  }

  .prize-qna-head {
    width: 100%;
    padding: 40px 0px;

    p {
      text-align: center;
    }

    .title {
      font-size: 70px;
      line-height: 85px;
      color: white;
    }

    .sub {
      font-size: 13px;
      line-height: 30px;
      margin-top: 13px;
      color: #828282;
    }
  }

  .space {
    width: 100%;
    height: 20px;
  }
`;

const Index = () => {
  return (
    <Wrapper>
      <Fade duration={2000}>
        <div className="prize-award-list">
          {prizeInfo.map((item) => (
            <div className="prize-award-item" key={item.title}>
              <img src={item.icon} className="prize-icon" alt="상 아이콘" />
              <p className="prize-award-title">{item.title}</p>
              <p className="prize-award-amount">{item.amount}팀</p>
            </div>
          ))}
        </div>
      </Fade>
      <Fade duration={2000}>
        <CriteriaItem />
      </Fade>
      <div className="space" />
      <Fade duration={2000}>
        <Judge />
      </Fade>
      <div className="space" />
      <Fade duration={2000}>
        <div className="prize-qna-head wrapper-border">
          <p className="title">FAQ</p>
          <p className="sub">궁금한 점이 있으신가요?</p>
        </div>
      </Fade>
      <Fade duration={2000}>
        {qnaInfo.map((item) => (
          <FaqItem key={item.question} question={item.question} answer={item.answer} />
        ))}
      </Fade>
    </Wrapper>
  );
};

export default Index;
