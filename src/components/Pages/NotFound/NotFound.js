import './NotFound.scss';
import React, { Fragment } from 'react';
import Navbar from '../../Navbar/Navbar';
import Bluepill from '../../../static/images/404/Bluepill.png';
import Redpill from '../../../static/images/404/redpill.png';

const NotFound = () => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <section className='container'>
          <h1>This Page Doesn't Exist &#128577;</h1>
          <div className='main-text'>
            <a href='/' title='Take the blue pill' rel='noopener noreferrer'>
              <img className='img-404' src={Bluepill} alt='Blue Pill' />
            </a>
            <a
              href='https://www.linkedin.com/in/jemimaabu/'
              title='Take the red pill'
              target='_blank'
              rel='noopener noreferrer'>
              <img className='img-404' src={Redpill} alt='Red Pill' />
            </a>
          </div>
        </section>
      </main>
      <div className='page-nav container'>
        <a href='/'>&#8592; Home</a>
      </div>
    </Fragment>
  );
};

export default NotFound;
