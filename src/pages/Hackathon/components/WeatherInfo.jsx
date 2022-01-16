/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
export const WeatherInfoWrapper = styled.div`
  margin-left: 20px;
  width: 400px;
  height: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Hahmlet', serif;
  img {
    width: auto;
    height: 95px;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-left: 0;
  }
`;

const TempBlock = styled.div`
  display: flex;
  width: 130px;
  color: #ffffff;
`;
const Temp = styled.div`
  font-size: 80px;
`;
const TempUnit = styled.div`
  padding-top: 12px;
  font-size: 33px;
  font-weight: 100;
`;
const TextBlock = styled.div`
  margin-left: 28px;
  width: 110px;
  color: #9a9a9a;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`;
const ImageBlock = styled.div`
  width: 100px;
  height: 95px;
  background-image: ${(props) => `url(${props.iconurl})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const WeatherInfo = ({ weatherInfo }) => {
  const { temp, icon, humidity, windSpeed, weather } = weatherInfo;
  let iconurl = 'http://openweathermap.org/img/w/' + icon + '.png';

  const centigrade = (parseInt(temp) - 273.15).toFixed(0);
  return (
    <WeatherInfoWrapper className="fade-in">
      <ImageBlock iconurl={iconurl} className="fade-in"></ImageBlock>
      <TempBlock>
        <Temp>{centigrade}</Temp>
        <TempUnit>°C</TempUnit>
      </TempBlock>
      <TextBlock>
        <div>날씨 : {weather}</div>
        <div>습도 : {humidity}%</div>
        <div>풍속 : {windSpeed.toFixed(0)}m/s</div>
      </TextBlock>
    </WeatherInfoWrapper>
  );
};
export default React.memo(WeatherInfo);
