import React, { Fragment } from 'react';

const Header = (props) => {
  return (
    <Fragment>
      <header>
        <div className='fixed-header animate-background'>
          <div className='container header-container'>
            <div className='logo-container'>
              <span className='logo animate-logo'>Jemima Abu</span>
            </div>
            <div className='header-text'>
              <h1>
                <p className='animate-text-1'>
                  Self-taught Front End Developer,
                </p>
                <p className='animate-text-2'>School-taught Systems Engineer</p>
              </h1>
            </div>
            <h2 className='animate-subtitle'>
              I build websites with a focus on responsive design and
              accessibility.
            </h2>
            <div
              className='scroll-button animate-scroll'
              tabIndex='0'
              onClick={() => props.onClickScroll()}>
              <div className='arrow'>↓</div> scroll
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
