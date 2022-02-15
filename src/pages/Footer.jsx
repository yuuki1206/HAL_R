import React from 'react';
import Facebook from '../img/offer_img/footer_icon_facebook.png';
import Line from '../img/offer_img/footer_icon_line.png';
import Twitter from '../img/offer_img/footer_icon_twitter.png';
import Youtube from '../img/offer_img/footer_icon_youtube.png';
import Niconico from '../img/offer_img/footer_icon_niconico.png';

const Footer = () => {
  return(
    <footer className='bg-dark text-light p-4'>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12 d-grid align-items-center mt-3 mb-3">
            <div className="col-12">
              <small>TEL：052-551-1001 10:00~20:00（日・祝は除く）</small>
            </div>
            <div className="row mt-3">
              <div className="col-1 d-flex justify-content-center align-items-center">
                <img src={ Facebook } alt="" width='20px' height='20px'/>
              </div>
              <div className="col-1 d-flex justify-content-center align-items-center">
                <img src={ Line } alt="" width='20px' height='20px'/>
              </div>
              <div className="col-1 d-flex justify-content-center align-items-center">
                <img src={ Twitter } alt="" width='20px' height='20px'/>
              </div>
              <div className="col-1 d-flex justify-content-center align-items-center">
                <img src={ Youtube } alt="" width='20px' height='20px'/>
              </div>
              <div className="col-1 d-flex justify-content-center align-items-center">
                <img src={ Niconico } alt="" width='20px' height='20px'/>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 d-flex justify-content-center align-items-center mt-3 mb-3">
            <small>Copyright © 2022 YUKI. All Rights Resarved.</small>
          </div>
          <div className="col-md-4 col-12 d-flex justify-content-end mt-3 mb-3">
            <small className='line-height-28px'>
              〒450-0002<br/>
              名古屋市中村区名駅4-27-1 総合校舎スパイラルタワーズ<br/>
              姉妹校： HAL東京 | HAL大阪
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;