import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import useCurrentLocation from '../../../hooks/useCurrentLocation';
import ImgUrl from '../images/hackathonbackground.png';
import WeatherInfo from './WeatherInfo';
import LocationInfo from './LocationInfo';

import Clock from './Clock';

const HackathonHeaderWrapper = styled.div`
  border-bottom: 1px solid #656565;
  background-image: url(${ImgUrl});
  background-repeat: no-repeat;
  background-position: center bottom;
`;
const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;

const MainText = styled.div`
  color: #ffffff;
  text-align: center;
  font-size: 43px;
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
    console.log(response.data.weather[0]);
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

  //   useEffect(() => {
  //     console.log('첫 렌더링');
  //     // eslint-disable-next-line no-undef
  //     // console.log(process.env.REACT_APP_WEATHER_API_KET);
  //     // fetchWeatherBySeoul();
  //   }, []);

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
          {weatherInfo ? <WeatherInfo weatherInfo={weatherInfo} /> : <div></div>}
          <LocationInfo locationData={locate} />
        </WeatherInfoBlock>
        <TextBlock>
          <Clock />
          <MainText>End poverty in all its forms everywhere</MainText>
        </TextBlock>
      </Container>
    </HackathonHeaderWrapper>
  );
};
export default React.memo(HackathonHeader);
