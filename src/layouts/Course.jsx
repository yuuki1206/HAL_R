import React from 'react';
import TitleCard from '../components/TitleCard';
import Game from '../img/offer_img/areatop_course_game.png';
import Animation from '../img/offer_img/areatop_course_cg-animation.png';
import Music from '../img/offer_img/areatop_course_music.png';
import CarDesign from '../img/offer_img/areatop_course_car-design.png';
import IT from '../img/offer_img/areatop_course_it-web.png';

const Course = () => {
  const params = [
    'w-100 h-100',
    'COURSE',
    'HALだから目指せる97の職種',
    `好きなことで「プロ」になる。\n誰もが好きな事で生きていきたいと願っている。\n好きなことで生きるには、その道のプロになればいい。\n決して難しいことじゃない、いつだって、僕らの原動力は「好き」という気持ちなのだから。`,
  ];
  return(
    <section className='pt-80px'>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 col-12">
            <TitleCard>{ params }</TitleCard>
          </div>
          <div className="col-md-5 col-12 p-0 mt-4">
            <img src={ Game } alt="" className='w-100 mw-100 px-3' />
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-5 col-12 p-0 mt-4">
            <img src={ Animation } alt="" className='w-100 mw-100 px-3' />
          </div>
          <div className="col-md-5 col-12 p-0 mt-4">
            <img src={ Music } alt="" className='w-100 mw-100 px-3' />
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-5 col-12 p-0 mt-4">
            <img src={ CarDesign } alt="" className='w-100 mw-100 px-3' />
          </div>
          <div className="col-md-5 col-12 p-0 mt-4">
            <img src={ IT } alt="" className='w-100 mw-100 px-3' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Course;