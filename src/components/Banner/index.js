/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import icon1 from '../../assets/imgs/icon_1.png';
import icon2 from '../../assets/imgs/icon_2.png';
import icon3 from '../../assets/imgs/icon_5.png';
import icon4 from '../../assets/imgs/icon_7.png';
import icon5 from '../../assets/imgs/icon_8.png';

export default function index() {
  return (
    <div style={{ backgroundColor: '#ffff' }}>
      <section className="banner_part">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-6">
              <div className="banner_text">
                <div className="banner_text_iner">
                  <h1>
                    Lead from
                    <br />
                    {' '}
                    Front in Business
                    <br />
                    {' '}
                    Innovation.
                  </h1>
                  <p>
                    Male bring land dominion over can yielding his moveth under
                    of depend brought him is. Multiply which firmament deep
                    make.
                  </p>
                  <a href="#" className="btn_1">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-app-1 custom-animation">
          <img src={icon1} alt="" />
        </div>
        <div className="hero-app-2 custom-animation2">
          <img src={icon2} alt="" />
        </div>
        <div className="hero-app-5 custom-animation4">
          <img src={icon3} alt="" />
        </div>
        <div className="hero-app-7 custom-animation2">
          <img src={icon4} alt="" />
        </div>
        <div className="hero-app-8 custom-animation">
          <img src={icon5} alt="" />
        </div>
      </section>
    </div>
  );
}
