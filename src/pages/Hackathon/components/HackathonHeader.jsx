import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import useCurrentLocation from '../../../hooks/useCurrentLocation';
import ImgUrl from '../images/hackathonbackground.png';
import WeatherInfo, { WeatherInfoWrapper } from './WeatherInfo';
import LocationInfo from './LocationInfo';

import Clock from './Clock';

const HackathonHeaderWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #656565;
  background-image: url(${ImgUrl});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 100% 300px;
`;
const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;

const MainText = styled.div`
  color: #ffffff;
  text-align: center;
  font-size: 34px;
  font-family: 'Hahmlet', serif;
  letter-spacing: 0px;
`;
const WeatherInfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 66px;
  color: #ffffff;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const TextBlock = styled.div`
  padding-top: 50px;
  @media screen and (max-width: 800px) {
    padding-bottom: 50px;
  }
`;

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
  maximumAge: 1000 * 3600 * 24, // 24 hour
};

const HackathonHeader = () => {
  const { location: currentLocation, error: currentError } = useCurrentLocation(geolocationOptions);
  const [locate, setLocate] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);

  const fetchWeatherByGPS = async (latitude, longitude) => {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KET}&lang=kr`
    );
    setWeatherInfo({
      temp: response.data.main.temp,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      weather: response.data.weather[0].description,
    });
  };

  const fetchLocation = async (latitude, longitude) => {
    await axios
      .get(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`, {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
        },
      })
      .then((response) => {
        setLocate(response.data.documents[0].address_name);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (currentLocation) {
      const { latitude, longitude } = currentLocation;
      fetchLocation(latitude, longitude);
      fetchWeatherByGPS(latitude, longitude);
    }
  }, [currentLocation, currentError]);

  return (
    <HackathonHeaderWrapper>
      <Container>
        <WeatherInfoBlock>
          {weatherInfo ? <WeatherInfo weatherInfo={weatherInfo} /> : <WeatherInfoWrapper></WeatherInfoWrapper>}
          <LocationInfo locationData={locate} />
        </WeatherInfoBlock>
        <TextBlock>
          <Clock />
          <MainText>Quality Education, Gender Equality, Climate Action</MainText>
        </TextBlock>
      </Container>
    </HackathonHeaderWrapper>
  );
};
export default React.memo(HackathonHeader);
