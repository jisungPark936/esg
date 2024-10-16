import React from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';

const people = [
    { name: '11:00~11:10', title: '참석자 소개(사회자) / 개회사(도시재생안전협회 문병국 회장)', },
    { name: '11:10~11:25', title: '도.농 순환자원 저탄소 활성화 방안', sub: '한국도시재생학회 김항집 학회장'},
    { name: '11:25~11:40', title: '대한민국 탄소 중립 위기와 기회', sub: '에코투 김정석 대표이사'},
    { name: '11:40~11:55', title: '글로벌 환경 규제현황 및 대응 방안', sub: '엔플래닛 김선관 대표이사'},
    { name: '12:00~13:00', title: '중식',},
    { name: '13:00~13:15', title: '도.농 저탄소 활성화 방안', sub: '호원EnC 송재준 대표이사'},
    {  title: '도.농 저탄소 활성화 방안'},
    { name: '13:15~13:30', title: '경기도 광명도시공사', sub: '정우식 상임이사'},
    { name: '13:30~13:45', title: '서울특별시 강서구시설관리공단', sub: '박지현 부장'},
    { name: '13:45~14:00', title: '경기도 양주시 도시공사', sub: '정희철 차장'},
    { name: '14:00~14:15', title: '경기도 부천시 도시공사', sub: '이정현 팀장'},
    { name: '14:15~', title: '어촌형 도시 포항의 ESG(저탄소 배출) 추진 전략', sub: '포항금속소재산업진흥원 김경훈 팀장'},
    { name: '~14:50', title: '(토론)', sub: '(좌장 : 김항집 도시재생학회장, 패널 : 김정석 에코투 대표, 정우식 광명도시공사 본부장 김선관 엔플래닛 대표, 포항금속산업진흥원 김경훈 팀장)'},
    { name: '16:00~17:00', title: '저탄소 아이디어 공모전 시상식'},
 
   
  ]
  
  export default function Timetable() {

    

    return (
<Element name="section1">
      <div className="px-4 sm:px-6 lg:px-8 tableStyle">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-[#ababab]">
                <thead>
                <tr>
               <th scope="col" className="py-6 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                   시간표
              </th>
             
              </tr>
                </thead>
                <tbody className="divide-y divide-[#ababab]">
                  {people.map((person, index) => (
                    <tr key={index}
                    className={`${index === 4 || index === 6 ? 'bg-[#f2f2f2]' : ''} ${index === 6 ? 'text-center' : ''}`}
                >
                      
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-200 sm:pl-0">
                        {person.name}
                      </td>
                      <td className="px-3 py-4 text-sm text-black font-medium">
                        {person.title}
                        <br />
                        <span className="block break-words lg:max-w-[500px] sm:max-w-[300px] text-[#444444] font-normal">
                          {person.sub}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>


      </div>
      </Element>
    );
  }
  