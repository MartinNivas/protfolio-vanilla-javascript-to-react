import React, { Component } from 'react';
import AccessibleImg from '../../../../static/images/talks/accessible-js.jpeg';
import UnderstandingImg from '../../../../static/images/talks/understanding-accessibility.jpeg';
import StateMgtImg from '../../../../static/images/talks/state-management.jpeg';
import ReduxImg from '../../../../static/images/talks/redux-middleware.jpeg';
import TechCareerImg from '../../../../static/images/talks/tech-career.jpeg';
import ReactStyleImg from '../../../../static/images/talks/react-style.jpeg';

export default class Talks extends Component {
  render() {
    return (
      <section id='talks'>
        <div className='container'>
          <div className='title-container scroll-in'>
            <h2 className='section-title'>
              Featured Talks <span className='title-icon'>&#127908;</span>
            </h2>
            <p className='section-subtitle'>
              I like to speak at tech conferences on a variety of topics ranging
              from web accessibility to career development. Here are videos from
              my past talks:
            </p>
          </div>
          <div className='talks-container'>
            <div className='card scroll-in'>
              <div className='card-image'>
                <a
                  href='https://www.youtube.com/watch?v=lFzWAsA76DU'
                  title='Accessible.JS - Jemima Abu - CityJS Conf 2020'
                  target='_blank'
                  rel='noreferrer'>
                  <img
                    src={AccessibleImg}
                    alt='Accessible.JS - Jemima Abu - CityJS Conf 2020'
                    width='480'
                    height='360'
                  />
                </a>
              </div>
              <div className='card-content'>
                <h3 className='card-title'>Accessible.JS</h3>
                <div className='card-description'>
                  <p>CityJS Conf 2020</p>
                </div>
              </div>
            </div>
            <div className='card scroll-in'>
              <div className='card-image'>
                <a
                  href='https://www.youtube.com/watch?v=QSXdTuD9Rak'
                  title='Understanding Accessibility as a Concept | Jemima Abu | CascadiaJS 2020'
                  target='_blank'
                  rel='noreferrer'>
                  <img
                    src={UnderstandingImg}
                    alt='Understanding Accessibility as a Concept | Jemima Abu | CascadiaJS 2020'
                    width='480'
                    height='360'
                  />
                </a>
              </div>
              <div className='card-content'>
                <h3 className='card-title'>
                  Understanding Accessibility as a Concept
                </h3>
                <div className='card-description'>
                  <p>CascadiaJS 2020</p>
                </div>
              </div>
            </div>
            <div className='card scroll-in'>
              <div className='card-image'>
                <a
                  href='https://www.youtube.com/watch?v=a0CmIEH44vg'
                  title='Jemima Abu - State Management for React Applications at React Live Conference Online'
                  target='_blank'
                  rel='noreferrer'>
                  <img
                    src={StateMgtImg}
                    alt='Jemima Abu - State Management for React Applications at React Live Conference Online'
                    width='480'
                    height='360'
                  />
                </a>
              </div>
              <div className='card-content'>
                <h3 className='card-title'>
                  State Management for React Applications
                </h3>
                <div className='card-description'>
                  <p>React Live Conference Online</p>
                </div>
              </div>
            </div>
            <div className='card scroll-in'>
              <div className='card-image'>
                <a
                  href='https://www.youtube.com/watch?v=TEvxRKd2suc'
                  title='Redux Middleware for React Applications by Jemima Abu from  Telesoftas  at 84th Devclub.lv'
                  target='_blank'
                  rel='noreferrer'>
                  <img
                    src={ReduxImg}
                    alt='Redux Middleware for React Applications by Jemima Abu from  Telesoftas  at 84th Devclub.lv'
                    width='480'
                    height='360'
                  />
                </a>
              </div>
              <div className='card-content'>
                <h3 className='card-title'>
                  Redux Middleware for React Applications
                </h3>
                <div className='card-description'>
                  <p>84th Devclub.lv</p>
                </div>
              </div>
            </div>
            <div className='card scroll-in'>
              <div className='card-image'>
                <a
                  href='https://www.youtube.com/watch?v=YGPxUK5Ksuw'
                  title='Defining A Career Path in Technology - Jemima Abu - Women Tech Network'
                  target='_blank'
                  rel='noreferrer'>
                  <img
                    src={TechCareerImg}
                    alt='Defining A Career Path in Technology - Jemima Abu - Women Tech Network'
                    width='480'
                    height='360'
                  />
                </a>
              </div>
              <div className='card-content'>
                <h3 className='card-title'>
                  Defining A Career Path in Technology
                </h3>
                <div className='card-description'>
                  <p>Women Tech Network</p>
                </div>
              </div>
            </div>
            <div className='card scroll-in'>
              <div className='card-image'>
                <a
                  href='https://www.youtube.com/watch?v=11NNrrbKKgU'
                  title='React Components and How To Style Them - Jemima Abu - React Summit 2020'
                  target='_blank'
                  rel='noreferrer'>
                  <img
                    src={ReactStyleImg}
                    alt='React Components and How To Style Them - Jemima Abu - React Summit 2020'
                    width='480'
                    height='360'
                  />
                </a>
              </div>
              <div className='card-content'>
                <h3 className='card-title'>
                  React Components and How To Style Them
                </h3>
                <div className='card-description'>
                  <p>React Summit 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className='section-link scroll-in'>
            <a href='talks' className='link-btn'>
              View All Talks
            </a>
          </div>
        </div>
      </section>
    );
  }
}
