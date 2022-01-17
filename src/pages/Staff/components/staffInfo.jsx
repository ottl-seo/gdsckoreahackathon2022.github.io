import * as React from 'react';

import styled from 'styled-components';

import SYU_L from '../img/삼육대_LEAD_성예지.jpg';
import SMU_L from '../img/상명대_LEAD_최진욱.png';
import SMU_M1 from '../img/상명대_MEMBER_양은희.JPG';
import SMU_M2 from '../img/상명대_MEMBER_이수정.png';
import STIU_C1 from '../img/서울과기대_CORE_강인영.jpg';
import STIU_C2 from '../img/서울과기대_CORE_송민선.jpg';
import STIU_C3 from '../img/서울과기대_CORE_전의정.jpg';
import STIU_L from '../img/서울과기대_LEAD_박수빈.jpg';
import SSWU_L from '../img/성신여대_LEAD_김민영.jpg';
import SSWU_M from '../img/성신여대_MEMB_이지원.jpg';
import SMWU_C1 from '../img/숙명여대_CORE_강예원.jpeg';
import SMWU_C2 from '../img/숙명여대_CORE_송혜민.png';
import SMWU_C3 from '../img/숙명여대_CORE_장현애.jpg';
import SMWU_L from '../img/숙명여대_LEAD_남수연.png';
import SMWU_M from '../img/숙명여대_MEMBER_김민지.PNG';
import SCHU_L from '../img/순천향대_LEAD_이원영.jpg'
import SSU_L from '../img/숭실대_LEAD_우수연.jpg';
import EWU_L from '../img/이화여대_LEAD_김윤서.jpg';
import CAU_C from '../img/중앙대_CORE_조용주.jpg';
import CAU_L from '../img/중앙대_LEAD_정우현.JPG';
import GIST_L from '../img/지스트_LEAD_김민서.jpeg';
import HUFS_C1 from '../img/한국외대_CORE_강다인.jpg';
import HUFS_C2 from '../img/한국외대_CORE_안동현.jpeg';
import HUFS_L from '../img/한국외대_LEAD_임나경.JPG';
import KMOU_L from '../img/한국해양대_LEAD_박선호.jpg';
import HYU_L from '../img/한양대_LEAD_윤창현.jpg';
import blank_img from '../img/dummy.JPG';
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height:100%;
  
  .img-rows{
    display:flex;
      width:100%;
      height:12vw;
      margin: 0;
  }
  .blank-rows{
    display:flex;
      width:100%;
      height:2.5vw;
      margin: 0;
  }
  .blank-item{
    display:inline-block;
    width:18%;
    height:100%;
    maxheight:300px;
    border: 1px solid rgba(200, 200, 200, 0.5);
    border-left:none;
    border-top:none;
    margin: 0;
  }
  .blank-space{
    display:inline-block;
    width:6%;
    height:100%;
    maxheight:300px;
    border: 1px solid rgba(200, 200, 200, 0.5);
    border-left:none;
    border-top:none;
  }

  .img-container{
    display:inline-block;
    position: relative;
    border: 1px solid rgba(200, 200, 200, 0.5);
    border-left:none;
    border-top:none;
    width:18%;
    height:100%;
    z-index:2;
    overflow:hidden;
  }
  img{
    width:100%;
    height:100%;
    filter: blur(4px) brightness(30%);
    object-fit:cover;
    z-index:1;
   padding-top:1px;
  }
  .text-overlay{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0.7;
    transition: .5s ease;
  }
  .img-container:hover .text-overlay{
    opacity:0;
  }
  .img-container:hover img{
    filter: blur(0);
  }
  .staff-name {
    color: white;
    font-size: 1.5vw;
    position: absolute;
    top: 45%;
    left: 50%;
    width:90%;
    clear:both;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .staff-role{
    color: #c4c4c4;
    font-size: 1vw;
    position: absolute;
    top: 60%;
    left: 50%;
    width:80%;
    clear:both;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
  `
;

export default function StaffImageList() {
  return (
    <Wrapper>
    <div className="img-rows">
      <div className="blank-space"></div>
        {staffData1.map((item) => (
          <div className="img-container" key={item.img}>
            <img
              src={`${item.img}?w=148&h=148&fit=crop&auto=format`}
              srcSet={`${item.img}?w=148&h=148&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <div className="text-overlay">
              <div className="staff-name">{item.name}</div>
              <div className="staff-role">{item.role}</div>
            </div>
            </div>
        ))}
      <div className="blank-space"></div>
    </div>
    <div className="blank-rows">
    <div className="blank-space"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-space"></div>
    </div>
    <div className="img-rows">
      <div className="blank-space"></div>
        {staffData2.map((item) => (
          <div className="img-container" key={item.img}>
            <img
              src={`${item.img}?w=148&h=148&fit=crop&auto=format`}
              srcSet={`${item.img}?w=148&h=148&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <div className="text-overlay">
              <div className="staff-name">{item.name}</div>
              <div className="staff-role">{item.role}</div>
            </div>
            </div>
        ))}
      <div className="blank-space"></div>
    </div>
    <div className="blank-rows">
        <div className="blank-space"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-space"></div>
    </div>
    <div className="img-rows">
      <div className="blank-space"></div>
        {staffData3.map((item) => (
          <div className="img-container" key={item.img}>
            <img
              src={`${item.img}?w=148&h=148&fit=crop&auto=format`}
              srcSet={`${item.img}?w=148&h=148&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <div className="text-overlay">
              <div className="staff-name">{item.name}</div>
              <div className="staff-role">{item.role}</div>
            </div>
            </div>
        ))}
      <div className="blank-space"></div>
    </div>
    <div className="blank-rows">
        <div className="blank-space"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-space"></div>
    </div>
    <div className="img-rows">
      <div className="blank-space"></div>
        {staffData4.map((item) => (
          <div className="img-container" key={item.img}>
            <img
              src={`${item.img}?w=148&h=148&fit=crop&auto=format`}
              srcSet={`${item.img}?w=148&h=148&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <div className="text-overlay">
              <div className="staff-name">{item.name}</div>
              <div className="staff-role">{item.role}</div>
            </div>
            </div>
        ))}
      <div className="blank-space"></div>
    </div>
    <div className="blank-rows">
        <div className="blank-space"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-space"></div>
    </div>
    <div className="img-rows">
      <div className="blank-space"></div>
        {staffData5.map((item) => (
          <div className="img-container" key={item.img}>
            <img
              src={`${item.img}?w=148&h=148&fit=crop&auto=format`}
              srcSet={`${item.img}?w=148&h=148&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <div className="text-overlay">
              <div className="staff-name">{item.name}</div>
              <div className="staff-role">{item.role}</div>
            </div>
            </div>
        ))}
      <div className="blank-space"></div>
    </div>
    <div className="blank-rows">
        <div className="blank-space"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-space"></div>
    </div>
    <div className="img-rows">
      <div className="blank-space"></div>
        {staffData6.map((item) => (
          <div className="img-container" key={item.img}>
            <img
              src={`${item.img}?w=148&h=148&fit=crop&auto=format`}
              srcSet={`${item.img}?w=148&h=148&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <div className="text-overlay">
              <div className="staff-name">{item.name}</div>
              <div className="staff-role">{item.role}</div>
            </div>
            </div>
        ))}
        <div className="img-container" >
          <img src={blank_img}/>
        </div>
        <div className="img-container" >
          <img src={blank_img}/>
        </div>
        <div className="img-container" >
          <img src={blank_img}/>
        </div>
        <div className="img-container" >
          <img src={blank_img}/>
        </div>
      <div className="blank-space"></div>
    </div>
    <div className="blank-rows">
        <div className="blank-space"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-item"></div>
        <div className="blank-space"></div>
    </div>
    </Wrapper>
  );
}

const staffData1 = [
    {
      img: SYU_L,
      name: 'Yeji Seong',
      role: 'GDSC SYU Lead',
    },
    {
        img: SMU_L,
        name: 'Jinyook Choi',
        role: 'GDSC SMU Lead',
      },
      {
        img: SMU_M1,
        name: 'Eunhui Yang',
        role: 'GDSC SMU Member',
      },
      {
        img: SMU_M2,
        name: 'Sujeong Lee',
        role: 'GDSC SMU Member',
      },
      {
        img: STIU_C1,
        name: 'Inyeong Kang',
        role: 'GDSC Seoultech Core',
      },
      
      
];
const staffData2=[
  {
    img: STIU_C2,
    name: 'Minseon Song',
    role: 'GDSC Seoultech Core',
  },
  {
    img: STIU_C3,
    name: 'Euijeong Jeon',
    role: 'GDSC Seoultech Core',
  },
  {
      img: STIU_L,
      name: 'Subin Park',
      role: 'GDSC Seoultech Lead',
    },
    {
      img: SSWU_L,
      name: 'Minyeong Kim',
      role: 'GDSC SSWU Lead',
    },
    {
        img: SSWU_M,
        name: 'Jiwon Lee',
        role: 'GDSC SSWU Member',
      },
     
 
];
const staffData3=[
  {
    img: SMWU_C1,
    name: 'Yewon Kang',
    role: 'GDSC SMWU Core',
  },
  {
    img: SMWU_C2,
    name: 'Hyemin Song',
    role: 'GDSC SMWU Core',
  },
  {
    img: SMWU_C3,
    name: 'Hyunae Jang',
    role: 'GDSC SMWU Core',
  },
  {
    img: SMWU_L,
    name: 'Sooyeon Nam',
    role: 'GDSC SMWU Lead',
  },
  {
    img: SMWU_M,
    name: 'Minji Kim',
    role: 'GDSC SMWU Member',
  },

];

const staffData4=[
    {
      img: SCHU_L,
      name: 'Wonyoung Lee',
      role: 'GDSC SCHU Lead',
    },
    {
    img: SSU_L,
    name: 'Suyeon Woo',
    role: 'GDSC SSU Lead',
    },
    {
      img: EWU_L,
      name: 'Yoonseo Kim',
      role: 'GDSC EWU Lead',
      },
    {
        img: CAU_C,
        name: 'Yongjoo Cho',
        role: 'GDSC CAU Core',
      },
      {
        img: CAU_L,
        name: 'Woohyun Jeong',
        role: 'GDSC CAU Lead',
      }, 
    
];

const staffData5=[
  {
    img: GIST_L,
    name: 'Minseo Kim',
    role: 'GDSC GIST Lead',
  },
  {
    img: HUFS_C1,
    name: 'Dain Kang',
    role: 'GDSC HUFS Core',
  },
  {
    img: HUFS_C2,
    name: 'Donghyeon Ahn',
    role: 'GDSC HUFS Core',
  },
  {
    img: HUFS_L,
    name: 'Nagyeong Lim',
    role: 'GDSC HUFS Lead',
  },
  {
    img: KMOU_L,
    name: 'Seonho Park',
    role: 'GDSC KMOU Lead',
  },
  
];

const staffData6=[
  {
    img: HYU_L,
    name: 'Changhyun Lee',
    role: 'GDSC HYU LEAD',
  },
];