import React from 'react';

import trophyIcon from '../img/trophy.svg';
import crownIcon from '../img/crown.svg';
import medalIcon from '../img/medal.svg';
import starIcon from '../img/star.svg';
import smileIcon from '../img/smile.svg';

export const prizeInfo = [
  {
    icon: trophyIcon,
    title: '대상',
    amount: 1,
  },
  {
    icon: crownIcon,
    title: '최우수상',
    amount: 2,
  },
  {
    icon: medalIcon,
    title: '우수상',
    amount: 3,
  },
  {
    icon: starIcon,
    title: '장려상',
    amount: 4,
  },
  {
    icon: smileIcon,
    title: '기타',
    amount: 39,
  },
];

export const criteriaInfo = {
  effect: [
    '과제가 해커톤 주제와 부합하는 주제로 제안 되었는지? [10]',
    '과제가 팀에서 제시한 문제를 적절하게 해결하는지? [10]',
    '참여 팀의 솔루션의 구현 방향이 해결책을 구현하기위해 필요한 아이템인지? [10]',
    '과제가 제시하는 솔루션이 기존 시장에 존재하는 타 솔루션과 차별점, 경쟁력이 있는지? [10]',
    '이후의 활용방안, 확대 방향 등 솔루션의 확장에 대한 계획이 있는가? [10]',
    '팀이 솔루션을 개발하기 위한 역량을 갖추고 있는지? [10]',
  ],
  tech: [
    '솔루션이 문제 해결을 위해 필요한 기술 구성 요소를 모두 구현하였는지 그리고 구현한 기술의 구성요소를 이해 하기 쉽게 설명하였는지? [10]',
    'Google 기술의 사용여부 및 Google 기술과 관련된 코드 지침 설명이 이해가 쉽게 설명이 되었는지, Google 기술의 사용이유 [10]',
    '아이템이 예상 사용자의 환경을 고려한 솔루션인지 그리고 솔루션의 Prototype이 사용자와 상호작용하는 모습을 잘 보여주고 있는지?[10]',
    '과제가 솔루션이 향후 시장에 진출하였을때 성장 가능한 전략을 제시하는지? [10]',
  ],
};

export const qnaInfo = [
  {
    question: '주제는 언제 발표되나요?',
    answer: <p>해커톤 당일에 공개될 예정입니다.</p>,
  },
  {
    question: '지원자격은 어떻게 되나요?',
    answer: <p>개발을 사랑하는 대학생(휴/재학생)이라면 누구나 신청가능합니다.</p>,
  },
  {
    question: 'GDSC 멤버가 꼭 팀장이어야 하나요?',
    answer: <p>네, GDSC에 소속되신 분께서 팀장을 맡으셔야 합니다.</p>,
  },
  {
    question: 'GDSC 멤버가 아닌 사람은 어떻게 신청하나요?',
    answer: <p>물리적으로 가까운 GDSC 소속으로 신청하시면 됩니다.</p>,
  },
  {
    question: '추가 질문은 어디로 드려야 하나요?',
    answer: <p>GDSC KR Winter Hack 디스코드 채널과 카카오톡 채널로 연락주시면 친절히 답변드리도록 하겠습니다.</p>,
  },
  {
    question: 'Solution Challenge 2022에 제출해도 되나요?',
    answer: <p>네! UN Sustainable Goal 17 내부의 주제이므로 Solution Challenge에 제출하셔도 됩니다.</p>,
  },
  {
    question: '해커톤 진행방식은 어떻게 되나요?',
    answer: (
      <p>
        디스코드를 통해서 행사가 중계 및 진행됩니다.
        <br />각 팀안에서는 모여서 진행을 해도 좋으나, 모든 팀이 오프라인으로 모여서 진행하지는 않습니다!
      </p>
    ),
  },
];
