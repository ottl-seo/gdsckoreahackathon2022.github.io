import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;

  span {
    color: white;
  }

  p {
    color: #828282;
  }

  .row-border {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5) !important;
  }

  .item-border {
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.5);
  }

  .col-1 {
    width: 5%;
    height: auto;
    .row {
      width: 100%;
      height: 50%;
    }
  }

  .col-2 {
    width: 30%;

    .row {
      border-top: none;
      border-bottom: none;
      width: 100%;
      height: 0px;
      padding-bottom: 100%;
    }
  }

  .col-3 {
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 70px;
      line-height: 85px;
    }

    p {
      position: absolute;
      text-align: center;
      width: 100%;
      bottom: -32px;
      font-size: 20px;
      line-height: 30px;
    }

    .row {
      position: relative;
    }
  }

  .judge-item {
    display: block;
    width: 100%;
    height: 100%;

    img {
      width: 60%;
      margin: 15% 20% 0px 20%;
    }

    p,
    span {
      display: inline-block;
      width: 100%;
      text-align: center;
    }

    p {
      font-size: 18px;
      line-height: 25px;
    }

    span {
      font-size: 27px;
      line-height: 30px;
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 900px) {
    .col-3 {
      span {
        font-size: 50px;
        line-height: 60px;
      }

      p {
        font-size: 15px;
        line-height: 25px;
      }
    }

    .judge-item {
      p {
        font-size: 15px;
        line-height: 20px;
      }

      span {
        font-size: 24px;
        line-height: 27px;
        margin-top: 12px;
      }
    }
  }
`;

const Judge = () => {
  return (
    <Wrapper className="wrapper-border">
      <div className="col-1">
        <div className="row" />
        <div className="row" />
      </div>
      <div className="col-2">
        <div className="row row-border item-border">
          <div className="judge-item">
            <img src={'https://dummyimage.com/350X280/000/fff'} alt="." />
            <span>누구야</span>
            <p>누구야!!!</p>
          </div>
        </div>
        <div className="row item-border">
          <div className="judge-item">
            <img src={'https://dummyimage.com/350X280/000/fff'} alt="." />
            <span>누구야</span>
            <p>누구야!!!</p>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="row">
          <span>JUDGE</span>
          <p>심사위원분들을 소개합니다.</p>
        </div>
      </div>
      <div className="col-2">
        <div className="row row-border item-border">
          <div className="judge-item">
            <img src={'https://dummyimage.com/350X280/000/fff'} alt="." />
            <span>누구야</span>
            <p>누구야!!!</p>
          </div>
        </div>
        <div className="row item-border">
          <div className="judge-item">
            <img src={'https://dummyimage.com/350X280/000/fff'} alt="." />
            <span>누구야</span>
            <p>누구야!!!</p>
          </div>
        </div>
      </div>
      <div className="col-1">
        <div className="row" />
        <div className="row" />
      </div>
    </Wrapper>
  );
};

export default Judge;
