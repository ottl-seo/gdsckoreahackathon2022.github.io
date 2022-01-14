import React from 'react';
import styled from 'styled-components';
import markerUrl from '../images/marker.svg';

const LocationInfoWrapper = styled.div`
  padding-right: 20px;
  /* width: 40%; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Hahmlet', serif;
  color: #ffffff;
  font-size: 27px;
  height: 95px;
  img {
    position: relative;
    top: 2px;
    width: 20px;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
    padding-right: 15px;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    padding-right: 0;
    .width-full {
      width: 80%;
      margin: 0 auto;
      text-align: center;
    }
  }
`;
// eslint-disable-next-line react/prop-types
const LocationInfo = ({ locationData }) => {
  return (
    <LocationInfoWrapper className="fade-in">
      {locationData && (
        <div className="fade-in width-full">
          <img src={markerUrl} />
          {locationData}
        </div>
      )}
    </LocationInfoWrapper>
  );
};
export default React.memo(LocationInfo);
