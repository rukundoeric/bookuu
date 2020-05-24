import React from 'react';

export default function Service1() {
  return (
    <div className="service1-container">
      <div className="container">
        <div className="row">
          <div className="service1-content">
            <img
              className="wow fadeInLeftBig"
              data-wow-delay="1s"
              src="src/assets/imgs/service1a.png"
              alt=""
            />
          </div>
          <div className="service1-content">
            <div className="wow fadeInRightBig" data-wow-delay="1s">
              <h2>Are you ready to start Reading?</h2>
              <p>
                As the world’s largest publisher of eBooks, we democratise
                learning by empowering students and business professionals to
                succeed with high-quality business eBooks and free textbooks for
                students from industry-leading experts and professors.
              </p>
              <a className="btn_1" href="#">
                Create Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
