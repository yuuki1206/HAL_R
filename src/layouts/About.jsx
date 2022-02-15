import React from 'react';
import TitleCard from '../components/TitleCard';
import SharpCard from '../components/SharpCard';
import SystemsImg from '../img/offer_img/original_HAL名古屋__1.png';
import AccessImg from '../img/my_img/hal.jpg';
import RecruitImg from '../img/offer_img/xsmall_HAL_contests_pickup_210803.jpg';

const About = () => {
  const TitleCardParamas = [
    'w-100 h-100',
    'ABOUT',
    '就職したい、という希望に絶対応える',
    `国が認めた実践教育、文部科学大臣｢職業実践専門課程｣認定校。\n本学は質の高い職業教育を行う「職業実践専門課程」として、認定初年度から文部科学大臣に認められています。\nあなたの就職したい希望に必ずお応えします。`,
  ];
  const SharpCardParams_1 = [
    SystemsImg,
    '独自の「3大保証制度」',
    'SYSTEMS',
  ];
  const SharpCardParams_2 = [
    AccessImg,
    '名古屋駅前、 徒歩3分',
    'ACCESS',
  ];
  const SharpCardParams_3 = [
    RecruitImg,
    '14年連続就職率100%',
    'RECRUIT',
  ];
  return(
    <section className='pt-80px pb-80px bg-light'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TitleCard>
              { TitleCardParamas }
            </TitleCard>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-12 px-0 mt-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-11 justify-content-center">
                  <SharpCard>
                    { SharpCardParams_1 }
                  </SharpCard>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 px-0 mt-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-11 justify-content-center">
                  <SharpCard>
                    { SharpCardParams_2 }
                  </SharpCard>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 px-0 mt-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-11 justify-content-center">
                  <SharpCard>
                    { SharpCardParams_3 }
                  </SharpCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;