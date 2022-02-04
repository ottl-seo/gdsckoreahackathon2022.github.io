import * as React from 'react';
import styled from 'styled-components';
import { GrandTeamInfo } from './prizeInfo';

const Wrapper = styled.div`
  .grand-team {
    height: 26vw;

    .project-thumbnail {
      width: 42.7vw;
      height: 100%;
      opacity: 1;
      z-index: -999;

      img {
        width: inherit;
        height: inherit;
      }
    }

    .project-content {
      width: 47.3vw;

      .sized-box-height-132 {
        height: 6.87vw;
        max-height: 132px;
      }

      .sized-box-height-48 {
        height: 2.5vw;
      }

      .sized-box-height-20 {
        height: 1.04vw;
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
        width: 39.47vw;
        text-align: justify;
        font: normal normal normal 20px Hahmlet;
        letter-spacing: 0px;
        color: #7b7b7b;
        opacity: 1;
        margin-left: 44px;
        white-space: pre-wrap;

        /* mixin for multiline */
        overflow: hidden;
        position: relative;
        line-height: 1.2em;
        max-height: 3.6em;
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
        margin-left: 32.76vw;
        width: 16.3vw;
        height: 3.38vw;
        border: 2px solid #ffffff;
        opacity: 1;
        display: flex;
        align-items: center;
        z-index: -1;
        background: #1d1d1d 0% 0% no-repeat padding-box;

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
      {GrandTeamInfo.map((_, idx) => {
        return (
          <div key={`${idx}`}>
            <div className="grade-container grand-team">
              <div className="blank-space"></div>
              <div className="content-container">
                <div className="project-content">
                  <div className="team-name-container">
                    <div className="sized-box-height-132"></div>
                    <div className="team-name">{GrandTeamInfo[idx].teamName}</div>
                    <div className="divider"></div>
                    <div className="team-member-list">{GrandTeamInfo[idx].teamMembers.join(', ')}</div>
                  </div>
                  <div className="sized-box-height-48"></div>
                  <div className="project-description">{GrandTeamInfo[idx].projectDescription}</div>
                  <div className="sized-box-height-20"></div>
                  <div className="read-more">
                    <div className="github-link">Read more</div>
                  </div>
                </div>
              </div>
              <div className="project-thumbnail">
                <img src={GrandTeamInfo[idx].projectThumbnail} />
              </div>
              <div className="blank-space"></div>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default GrandTeam;
