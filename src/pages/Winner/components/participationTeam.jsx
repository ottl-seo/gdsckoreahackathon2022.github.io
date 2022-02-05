import * as React from 'react';
import styled from 'styled-components';
import { ParticipationTeamInfo } from './prizeInfo';

const Wrapper = styled.div`
  .participation-team {
    height: 17.7vw;
    width: 90vw;
    border: 1px solid rgba(200, 200, 200, 0.5);
    border-left: none;
    border-top: none;

    .project-content {
      display: flex;
      align-items: center;
      height: inherit;

      .sized-box-height-132 {
        height: 6.87vw;
        max-height: 132px;
      }

      .sized-box-height-48 {
        height: 2.5vw;
      }

      .sized-box-height-44 {
        height: 44px;
      }

      .sized-box-height-20 {
        height: 1.04vw;
      }

      .project-thumbnail {
        width: 100%;
        height: 100%;
        width: 18.59vw;
        height: 15.2vw;
        opacity: 1;
        z-index: -999;

        img {
          width: inherit;
          height: inherit;
        }
      }

      .team-name-container {
        text-align: left;
        font: normal normal normal 40px/58px Hahmlet;
        letter-spacing: 0px;
        color: #ffffff;
        opacity: 1;
        margin-left: 16.92vw;
        margin-right: 3.38vw;
      }

      .divider {
        width: 25.78vw;
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
        font: normal normal normal 20px/30px Hahmlet;
        letter-spacing: 0px;
        color: #7b7b7b;
        opacity: 1;
        margin-left: 33px;
        white-space: pre-wrap;

        /* mixin for multiline */
        overflow: hidden;
        position: relative;
        line-height: 1.2em;
        max-height: 10.8em;
        padding-right: 1em;
        margin-right: 33px;

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
const ExcellentTeam = () => {
  return (
    <Wrapper>
      {ParticipationTeamInfo.map((_, idx) => {
        return (
          <div key={idx} className="grade-container">
            <div className="blank-space"></div>
            <div className="participation-team">
              <div className="project-content">
                <div className="team-name-container">
                  <div className="team-name">{ParticipationTeamInfo[idx].teamName}</div>
                  <div className="team-member-list">{ParticipationTeamInfo[idx].teamMembers.join(', ')}</div>
                  <div className="sized-box-height-44"></div>
                  <div className="sized-box-height-44"></div>
                  <div className="read-more">
                    <div className="github-link">Read more</div>
                  </div>
                </div>
                <div className="project-thumbnail">
                  <img src={ParticipationTeamInfo[idx].projectThumbnail} />
                </div>
                <div className="project-description">{ParticipationTeamInfo[idx].projectDescription}</div>
              </div>
            </div>
            <div className="blank-space"></div>
          </div>
        );
      })}{' '}
    </Wrapper>
  );
};

export default ExcellentTeam;
