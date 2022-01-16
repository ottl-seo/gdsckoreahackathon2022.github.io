import React, { useState } from 'react';
import styled from 'styled-components';
import { useInterval } from 'react-use';
import dateFormat from '../../../utils/dateFormat';

const CurrentTime = styled.div`
  color: #848484;
  text-align: center;
  font-size: 30px;
  font-family: 'Hahmlet', serif;
`;

const Clock = () => {
  const [realTime, setRealTime] = useState(dateFormat());

  useInterval(() => {
    setRealTime(dateFormat());
  }, 1000);
  return <CurrentTime>{realTime}</CurrentTime>;
};

export default Clock;
