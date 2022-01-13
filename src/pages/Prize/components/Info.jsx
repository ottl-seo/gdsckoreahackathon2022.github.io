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

export const judgeInfo = [
  {
    img: '',
    name: 'Minseon Song',
    role: 'GDSC core',
  },
  {
    img: '',
    name: 'Minseon Song',
    role: 'GDSC core',
  },
  {
    img: '',
    name: 'Minseon Song',
    role: 'GDSC core',
  },
  {
    img: '',
    name: 'Minseon Song',
    role: 'GDSC core',
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
    question: '팀을 꾸려서 참가 신청을 해야 하나요?',
    answer: (
      <p>
        아닙니다. 팀을 꾸려서 신청가능하지만 개인으로 참가 신청시 팀빌딩을 도와드립니다.
        <br />
        최대한 기술스택이 비슷한분과 매칭시켜드릴 예정입니다만 인원이 부족한 경우 섞일 수 있습니다.
      </p>
    ),
  },
  {
    question: 'GDSC 멤버가 꼭 팀장이여야하나요?',
    answer: (
      <p>
        아닙니다. 팀을 꾸려서 신청가능하지만 개인으로 참가 신청시 팀빌딩을 도와드립니다.
        <br />
        최대한 기술스택이 비슷한분과 매칭시켜드릴 예정입니다만 인원이 부족한 경우 섞일 수 있습니다.
      </p>
    ),
  },
  {
    question: '주제는 언제 발표되나요?',
    answer: (
      <p>
        아닙니다. 팀을 꾸려서 신청가능하지만 개인으로 참가 신청시 팀빌딩을 도와드립니다.
        <br />
        최대한 기술스택이 비슷한분과 매칭시켜드릴 예정입니다만 인원이 부족한 경우 섞일 수 있습니다.
      </p>
    ),
  },
  {
    question: '참가 나이제한 있나요?',
    answer: (
      <p>
        아닙니다. 팀을 꾸려서 신청가능하지만 개인으로 참가 신청시 팀빌딩을 도와드립니다.
        <br />
        최대한 기술스택이 비슷한분과 매칭시켜드릴 예정입니다만 인원이 부족한 경우 섞일 수 있습니다.
      </p>
    ),
  },
];
