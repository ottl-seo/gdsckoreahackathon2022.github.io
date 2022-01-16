import React from 'react';
import styled from 'styled-components';

import HackathonHeader from './components/HackathonHeader';
import HackathonSchedule from './components/HackathonSchedule';

const HackathonPageWrapper = styled.div`
  background-color: #1d1d1d;
  height: calc(100% - 61px);
  width: 100%;
  .fade-in {
    animation: fadein 2s;
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari and Chrome */
    -o-animation: fadein 2s; /* Opera */
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr;
`;
const Index = () => {
  //toDo: 인혁 => 주제 날짜 시간 페이지 퍼블리싱
  return (
    <HackathonPageWrapper>
      <GridContainer className="fade-in">
        <HackathonHeader />
        <HackathonSchedule />
      </GridContainer>
    </HackathonPageWrapper>
  );
};

export default Index;
