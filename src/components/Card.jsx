import React from 'react';
import StaffImg from '../img/offer_img/areatop_feature_image2.png';

const Card = () => {
  return(
    <div className="card">
      <img src={ StaffImg } className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">独自の「三大保証制度」</h5>
        <p className="card-text">「完全就職保証制度」「国家資格 合格保証制度」「生涯バックアップシステム」を完備しております。</p>
        <a href="#" className="btn btn-primary">Read more</a>
      </div>
    </div>
  );
}

export default Card;