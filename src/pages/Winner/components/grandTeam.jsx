import * as React from 'react';
import styled from 'styled-components';
import MOCK_IMG from '../img/mockup.png';

const Wrapper = styled.div`
  .grand-team {
    height: 51.7vw;

    .project-thumbnail {
      width: 45vw;
      height: 100%;
      opacity: 1;

      img {
        width: inherit;
        height: inherit;
      }
    }

    .project-content {
      width: 45vw;

      .sized-box-height-300 {
        height: 15.6vw;
        max-height: 300px;
      }

      .sized-box-height-48 {
        height: 2.5vw;
      }

      .sized-box-height-78 {
        height: 4.06vw;
      }

      .team-name-container {
        text-align: left;
        font: normal normal normal 40px/58px Hahmlet;
        letter-spacing: 0px;
        color: #ffffff;
        opacity: 1;
        margin-left: 44px;
      }

      .divider {
        width: 39.47vw;
        border-bottom: 1px solid rgba(255, 255, 255, 1);
      }

      .team-member-list {
        text-align: left;
        font: normal normal normal 25px/36px Hahmlet;
        letter-spacing: 0px;
        color: #ffffff;
        opacity: 1;
      }

      .project-description {
        text-align: left;
        font: normal normal normal 20px Hahmlet;
        letter-spacing: 0px;
        color: #7b7b7b;
        opacity: 1;
        margin-left: 44px;
        width: 39.47vw;
        height: 17.13vw;
        overflow: hidden;
        white-space: pre-wrap;

        /* mixin for multiline */
        overflow: hidden;
        position: relative;
        line-height: 1.2em;
        max-height: 6em;
        padding-right: 1em;

        &:before {
          content: '...';
          position: absolute;
          right: 0;
          bottom: 0;
        }

        &:after {
          content: '';
          position: absolute;
          right: 0;
          width: 1em;
          height: 1em;
          margin-top: 0.2em;
          background: white;
        }
      }

      .read-more {
        margin-left: 44px;
        width: 16.3vw;
        height: 3.38vw;
        border: 2px solid #ffffff;
        opacity: 1;
        display: flex;
        align-items: center;

        .github-link {
          padding-left: 25px;
          text-align: left;
          font: normal normal normal 25px/36px Hahmlet;
          letter-spacing: 0px;
          color: #ffffff;
          opacity: 1;
        }
      }
    }
  }
`;
const GrandTeam = () => {
  return (
    <Wrapper>
      <div className="grade-container grand-team">
        <div className="blank-space"></div>
        <div className="content-container">
          <div className="project-content">
            <div className="team-name-container">
              <div className="sized-box-height-300"></div>
              <div className="team-name">Team Name</div>
              <div className="divider"></div>
              <div className="team-member-list">asdfasdfdsfasd,asdadsf</div>
            </div>
            <div className="sized-box-height-48"></div>
            <div className="project-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor
              sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec
              adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui
              accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac
              habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.
            </div>
            <div className="sized-box-height-78"></div>
            <div className="read-more">
              <div className="github-link">Read more</div>
            </div>
          </div>
        </div>
        <div className="project-thumbnail">
          <img src={MOCK_IMG} />
        </div>
        <div className="blank-space"></div>
      </div>
    </Wrapper>
  );
};

export default GrandTeam;
