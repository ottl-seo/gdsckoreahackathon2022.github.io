/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ScheduleItem from './ScheduleItem';

const DayScheduleListWrapper = styled.div`
  width: auto;
  height: 100%;
  border-left: 1px solid #656565;
  display: grid;
  grid-template-rows: 1fr 2fr;
`;
const DayBlock = styled.div`
  color: #ffffff;
  font-family: 'Hahmlet', serif;
  font-weight: 200;
  font-size: 40px;
  padding-left: 38px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #656565;
`;
const ItemBlock = styled.div`
  display: flex;
`;
const ColorBlock = styled.div`
  position: relative;
  background-color: ${(props) => (props.day === 'DAY1' ? '#DFA707' : '#34A853')};
  left: -38px;
  width: 12px;
  height: 78px;
`;

const DayScheduleList = ({ program, day }) => {
  return (
    <DayScheduleListWrapper>
      <DayBlock>
        <ColorBlock day={day} />
        {day}
      </DayBlock>
      <ItemBlock>
        {program.map((item) => (
          <ScheduleItem Item={item} key={item.title} day={day} />
        ))}
      </ItemBlock>
    </DayScheduleListWrapper>
  );
};

export default DayScheduleList;
