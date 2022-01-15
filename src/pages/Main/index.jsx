import React, { useMemo, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import useMouse from '@react-hook/mouse-position';
import { contestInfo } from './components/Info';

const Wrapper = styled.div`
  height: 100%;
  background-color: #1d1d1d;
  font-family: 'Hahmlet', serif;

  .wrapper-border {
    padding-right: 5vw;
    padding-left: 5vw;
    display: flex;
    align-items: center;
  }

  .title-box {
    height: 70vh;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }

  .info-box {
    height: 29vh;
  }

  .big-letter {
    font: normal normal normal 80px/102px Hahmlet;
    letter-spacing: 0px;
  }

  .sm-letter {
    font: normal normal normal 20px/30px Noto Sans KR;
    letter-spacing: 0px;
  }

  .sm-letter + .sm-letter {
    padding-left: 10vw;
  }

  .normal-font {
    color: #ffffff;
  }

  .gray-font {
    color: #686868;
  }

  .blue-font {
    color: #4285f4;
    // align text items to left
    display: inline-block;
    width: 100px;
  }

  .poster {
    align-items: center;
    position: absolute;
    top: 50px;
    background-color: #ffffff;
    right: 5vw;
  }

  .poster img {
    height: 99vh;
    object-fit: cover;
  }
`;

const Index = () => {
  const upRef = useRef(null);
  const midRef = useRef(null);
  const downRef = useRef(null);
  const shadowRef = useRef(null);
  const mouse = useMouse(shadowRef, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  useEffect(() => {
    const { x, y } = mouse;
    const posX = parseInt(x - window.innerWidth / 2);
    const posY = parseInt(y - window.innerHeight / 2);
    upRef.current.style.textShadow = `
    ${posX / -20}px ${posY / -20}px 4px rgba(0, 0, 0,0.4)  
    `;
    midRef.current.style.textShadow = `
    ${posX / -20}px ${posY / -20}px 4px rgba(0, 0, 0,0.4)  
    `;
    downRef.current.style.textShadow = `
    ${posX / -20}px ${posY / -20}px 4px rgba(0, 0, 0,0.4)    
    `;
  }, [mouse]);

  const ContestInfo = useMemo(() => {
    const ContestInfoComp = () => {
      return (
        <div className="wrapper-border info-box normal-font">
          <div>
            {contestInfo.map((_, idx) => {
              if (idx % 2 === 1) return;
              return (
                <div key={`ct-info-${idx}`}>
                  <span className="sm-letter">
                    <span className="blue-font">{contestInfo[idx].title}</span>
                    <span>{contestInfo[idx].content}</span>
                  </span>
                  {contestInfo[idx + 1] && (
                    <span className="sm-letter">
                      <span className="blue-font">{contestInfo[idx + 1].title}</span>
                      <span>{contestInfo[idx + 1].content}</span>
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    };
    return ContestInfoComp;
  }, []);

  return (
    <Wrapper ref={shadowRef}>
      <Fade duration={2000}>
        <div className="wrapper-border title-box">
          <div ref={shadowRef}>
            <div className="big-letter normal-font" ref={upRef}>
              2022
            </div>
            <div className="big-letter gray-font" ref={midRef}>
              GDSC KR
            </div>
            <div className="big-letter normal-font" ref={downRef}>
              WINTER HACK
            </div>
          </div>
        </div>
        <ContestInfo />
        <div className="poster">
          <img src="/gdsc_poster.png" />
        </div>
      </Fade>
    </Wrapper>
  );
};

export default Index;