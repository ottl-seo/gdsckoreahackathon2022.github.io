import * as React from 'react';

import styled from 'styled-components';
import { TopTeamInfo } from './prizeInfo';
import Mark from '../img/topTeamMark.png';

const Wrapper = styled.div`
  .top-team {
    height: 51.7vw;

    .mark {
      position: relative;
      left: 31.71vw;
      top: 3.22vw;
      width: 193px;
      height: 165px;

      img {
        width: inherit;
        height: inherit;
      }
    }

    .project-wrapper {
      width: 90vw;
      display: flex;
      border: 1px solid rgba(200, 200, 200, 0.5);
      border-left: none;
      border-top: none;
    }

    .project-thumbnail {
      height: 100%;
      width: 45vw;
      opacity: 1;
      display: flex;
      overflow: hidden;
    }

    .project-content {
      .sized-box-height-300 {
        height: 15.6vw;
        max-height: 300px;
      }

      .sized-box-height-48 {
        height: 2.5vw;
      }

      .sized-box-height-62 {
        height: 3.22vw;
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
        text-align: justify;
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
const TopTeam = () => {
  return (
    <Wrapper>
      <div className="grade-container top-team">
        <div className="blank-space"></div>
        <div className="project-wrapper">
          <div className="project-thumbnail">
            <img src={TopTeamInfo.projectThumbnail} />
          </div>
          <div className="project-content">
            <div className="mark">
              <img src={Mark} />
            </div>
            <div className="team-name-container">
              <div className="sized-box-height-300"></div>
              <div className="team-name">{TopTeamInfo.teamName}</div>
              <div className="divider"></div>
              <div className="team-member-list">{TopTeamInfo.teamMembers.join(', ')}</div>
            </div>
            <div className="sized-box-height-48"></div>
            <div className="project-description">{TopTeamInfo.projectDescription}</div>
            <div className="sized-box-height-78"></div>
            <a href={TopTeamInfo.githubRepo}>
              <div className="read-more">
                <div className="github-link">Read more</div>
              </div>
            </a>
          </div>
        </div>
        <div className="blank-space"></div>
      </div>
    </Wrapper>
  );
};

export default TopTeam;
