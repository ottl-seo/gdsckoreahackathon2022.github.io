import React from 'react';
import styled from 'styled-components';
import { criteriaInfo } from './Info';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  .big-border {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 5%;
    height: 100%;
    border-left: 1px solid rgba(255, 255, 255, 0.5);
  }

  ul {
    list-style: '-';
    padding: 0px 10% 0px 40px;
  }

  li {
    padding-left: 5px;
  }

  p,
  li {
    font-size: 20px;
    line-height: 40px;
    color: #7b7b7b;
  }

  .row-border {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }

  .col-1 {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      margin: 0px 15% 132px 15%;
    }

    span {
      display: inline-block;
      margin: 132px auto 0px 15%;
      font-size: 60px;
      line-height: 85px;
      color: white;
    }
  }

  .col-2 {
    width: 60%;
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.5);

    .row {
      width: 100%;
      padding: 130px 0px 50px 0px;
      position: relative;
    }

    .row-title {
      color: white;
      font-size: 30px;
      line-height: 40px;
      margin: 0px 40px;
    }

    .row-block {
      position: absolute;
      left: 0px;
      top: 110px;
      width: 11px;
      height: 82px;
    }

    .red-p {
      color: #ea4335;
    }

    .green-p {
      color: #34a853;
    }
    .red-block {
      background-color: #ea4335;
    }

    .green-block {
      background-color: #34a853;
    }
  }

  .col-3 {
    width: 5%;
    height: auto;

    .row {
      width: 100%;
      height: 50%;
    }

    .row-border {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }
  }

  @media screen and (max-width: 850px) {
    .col-1 {
      span {
        font-size: 40px;
        line-height: 60px;
      }
    }
  }
`;

const CriteriaItem = () => {
  const { effect, tech } = criteriaInfo;

  return (
    <Wrapper className="wrapper-border">
      <div className="col-1">
        <span>
          CRITERIA OF
          <br />
          JUDGING
        </span>
        <p>winter hack의 심가기준은 두가지로 나뉘어 심사합니다.</p>
      </div>
      <div className="col-2">
        <div className="row row-border">
          <p className="row-title">
            영향력<span className="red-p">[60%]</span>
          </p>
          <ul>
            {effect.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="row-block red-block" />
        </div>

        <div className="row">
          <p className="row-title">
            기술력<span className="green-p">[40%]</span>
          </p>
          <ul>
            {tech.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="row-block green-block" />
        </div>
      </div>
      <div className="big-border" />
    </Wrapper>
  );
};

export default CriteriaItem;
