import React from 'react';
import Icon from '../img/offer_img/header_logo_nagoya.png';

const Nav = () => {
  return(
    <nav className='position-fixed w-100 top-0 sass-z_index_999'>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <nav className="navbar navbar-dark">
              <div className="container">
                <a className="navbar-brand" href="#">
                  <img src={Icon} alt=""/>
                </a>
              </div>
            </nav>
          </div>
          <div className="col-6">
            <nav className="navbar navbar-expand-lg navbar-dark h-100">
              <div className="container-fluid justify-content-end">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">
                    <li className="nav-item">
                      <a className="nav-link" href="#">学科</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">HALとは</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">就職</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">設備</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">キャンパスライフ</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">入学要項</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">皆様へ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;