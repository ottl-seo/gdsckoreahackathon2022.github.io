/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  width: 350px;
  /* padding: 20px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Hahmlet', serif;
  border-right: 1px solid #656565;
`;
const FlexWrapper = styled.div`
  width: 250px;
  height: 100px;
`;

const TimeText = styled.div`
  color: ${(props) => (props.day === 'DAY1' ? '#DFA707' : '#34A853')};
  font-size: 20px;
`;
const TitleText = styled.div`
  color: #ffffff;
  font-size: 30px;
`;
const SummaryText = styled.div`
  color: #ffffff;
  font-size: 15px;
`;
const ScheduleItem = ({ Item, day }) => {
  const { time, title, summary1, summary2 } = Item;
  return (
    <ItemWrapper>
      <FlexWrapper>
        <TimeText day={day}>{time}</TimeText>
        <TitleText>{title}</TitleText>
        <SummaryText>{summary1}</SummaryText>
        <SummaryText>{summary2}</SummaryText>
      </FlexWrapper>
    </ItemWrapper>
  );
};

export default ScheduleItem;
