import React from 'react';
import styled from 'styled-components';
import DayScheduleList from './DayScheduleList';
import HorizontalScroll from 'react-scroll-horizontal';

const ScheduleWrapper = styled.div`
  padding-left: 100px;
  box-sizing: border-box;
  width: auto;
  height: 100%;
  display: flex;
  overflow: hidden;
  z-index: 10;
`;

const HackathonSchedule = () => {
  return (
    <ScheduleWrapper className="fade-in">
      <HorizontalScroll>
        <DayScheduleList program={Day1Program} day="DAY1" />
        <DayScheduleList program={Day2Program} day="DAY2" />
      </HorizontalScroll>
    </ScheduleWrapper>
  );
};

export default HackathonSchedule;
const Day1Program = [
  {
    time: '16:00 ~ 17:00',
    title: '식전행사',
    summary1: '해커톤 규칙 및',
    summary2: '심사위원 소개',
  },

  {
    time: '21:00 ~ 21:30',
    title: '게임 1',
    summary1: '초성보고 맞춰봐~!',
    summary2: '초성 게임',
  },
];
const Day2Program = [
  {
    time: '00:00 ~ 00:30',
    title: '게임 2',
    summary1: '이 조그마한 것은 무엇인가?',
    summary2: '이미지 게임',
  },
  {
    time: '03:00 ~ 00:30',
    title: '게임 3',
    summary1: '신서유기에 핫한 게임을 여기서도?!',
    summary2: '인물맞추기',
  },
  {
    time: '11:30 ~ 12:00',
    title: '심사안내',
    summary1: '2022 GDSC KR',
    summary2: 'WINTER HACK 심사안내',
  },
  {
    time: '12:00 ~ 14:00',
    title: '심사',
    summary1: '2022 GDSC KR',
    summary2: 'WINTER HACK 심사안내',
  },
  {
    time: '14:00 ~ 15:00',
    title: '마무리 행사',
    summary1: '2022 GDSC KR',
    summary2: 'WINTER HACK 마무리 행사?',
  },
];
