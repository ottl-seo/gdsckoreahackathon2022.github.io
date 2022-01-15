import * as React from 'react';

import styled from 'styled-components';

import SYU_L from '../img/삼육대_LEAD_성예지.jpg';
import SMU_L from '../img/상명대_LEAD_최진욱.png';
import STIU_C from '../img/서울과기대_CORE_송민선.jpg';
import STIU_L from '../img/서울과기대_LEAD_박수빈.jpg';
import SSWU_L from '../img/성신여대_LEAD_김민영.jpg';
import SSWU_M from '../img/성신여대_MEMB_이지원.jpg';
import SMWU_C from '../img/숙명여대_CORE_장현애.jpg';
import SMWU_L from '../img/숙명여대_LEAD_남수연.png';
import SCHU_L from '../img/순천향대_LEAD_이원영.jpg'
import SSU_L from '../img/숭실대_LEAD_우수연.jpg';
import CAU_C from '../img/중앙대_CORE_조용주.jpg';
import GIST_L from '../img/지스트_LEAD_김민서.jpeg';
import HUFS_C from '../img/한국외대_CORE_안동현.jpeg';
import HUFS_L from '../img/한국외대_LEAD_임나경.JPG';
import HYU_L from '../img/한양대_LEAD_윤창현.jpg';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height:100%;
  
  .img-rows{
    display:flex;
      width:100%;
      height:300px;
      margin: 0;
  }
  .blank-rows{
    display:flex;
      width:100%;
      height:50px;
      margin: 0;
  }
  .blank-item{
    display:inline-block;
    width:18%;
    height:100%;
    maxheight:300px;
    border: 1px solid rgba(200, 200, 200, 0.5);
    margin: 0;
  }
  .blank-space{
    display:inline-block;
    width:6%;
    height:100%;
    maxheight:300px;
    border: 1px solid rgba(200, 200, 200, 0.5);
  }

  .img-container{
    display:inline-block;
    position: relative;
    border: 1px solid rgba(200, 200, 200, 0.5);
    width:18%;
    height:100%;
    maxheight:300px;
  }
  img{
    width:100%;
    height:100%;
    filter: blur(4px) brightness(30%);
    object-fit:cover;
  
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
    font-size: 25px;
    position: absolute;
    top: 45%;
    left: 50%;
    width:90%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .staff-role{
    color: #c4c4c4;
    font-size: 20px;
    position: absolute;
    top: 60%;
    left: 50%;
    width:80%;
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
        name: 'JinYook Choi',
        role: 'GDSC SYU Lead',
      },
    {
      img: STIU_C,
      name: 'Minseon Song',
      role: 'GDSC Seoultech Core',
    },
    {
        img: STIU_L,
        name: 'Subin Park',
        role: 'GDSC Seoultech Lead',
      },
      {
        img: SSWU_L,
        name: 'MinYeong Kim',
        role: 'GDSC SSWU Lead',
      },
      
      
];
const staffData2=[
    {
        img: SSWU_M,
        name: 'Jiwon Lee',
        role: 'GDSC SSWU Member',
      },
      {
        img: SMWU_C,
        name: 'HyunAe Jang',
        role: 'GDSC SMWU Core',
      },
      {
        img: SMWU_L,
        name: 'SooYeon Nam',
        role: 'GDSC SMWU Lead',
      },
    
    {
        img: SCHU_L,
        name: 'WonYoung Lee',
        role: 'GDSC SCHU Lead',
      },
  {
    img: SSU_L,
    name: 'Sooyeon Woo',
    role: 'GDSC SSU Lead',
  },
 
];
const staffData3=[
    {
        img: CAU_C,
        name: 'Yongju Cho',
        role: 'GDSC CAU Core',
      },
    {
        img: GIST_L,
        name: 'Minseo Kim',
        role: 'GDSC GIST Lead',
      },
      {
        img: HUFS_C,
        name: 'Donghyeon Ahn',
        role: 'GDSC HUFS Core',
      },

      {
        img: HUFS_L,
        name: 'Nagyeong Lim',
        role: 'GDSC HUFS Lead',
      },
      {
        img: HYU_L,
        name: 'Changhyun Lee',
        role: 'GDSC HYU LEAD',
      },
    
];