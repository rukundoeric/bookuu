/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/require-default-props */
import React from 'react';
import logo from '../../assets/imgs/logo.png';
import logoMobile from '../../assets/imgs/logob.png';

export default function Header() {
  const headerColorChange = () => {
    const windowTop = $(window).scrollTop() + 1;
    if (windowTop > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('fadeOutUp');
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', headerColorChange);
    return function cleanup() {
      window.removeEventListener('scroll', headerColorChange);
    };
  });
  return (
    <header className="main_menu">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-xl-8">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="index.html">
                {' '}
                <img className="logo" src={logo} alt="logo" />
                {' '}
              </a>

              <div className=" navbar-collapse justify-content-end">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <div className="search_widget">
                      <div className="input-group">
                        <div className="menu-f-mobile">
                          <button className="btn menu-f" type="button">
                            <a
                              className="navbar-brand-mobile"
                              href="index.html"
                            >
                              {' '}
                              <img
                                className="logob"
                                src={logoMobile}
                                alt="logo"
                              />
                              {' '}
                            </a>
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search keyword"
                          // onFocus="this.placeholder = ''"
                          // onBlur="this.placeholder = 'Search keyword'"
                        />
                        <div className="input-group-append">
                          <button className="btn menu-f" type="button">
                            <i className="ti-search" />
                          </button>
                        </div>
                        <div className="input-group-append menu-btn menu-f-mobile">
                          <button className="btn menu-f " type="button">
                            <i className="ti-menu" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
