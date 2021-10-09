import React, { Component, Fragment } from 'react';
import './Footer.scss';
import Socialmedia from '../Socialmedia/Socialmedia';
import { ReactComponent as FooterSvg } from '../../static/svg/footer.svg';
import { ReactComponent as Wavetop } from '../../static/svg/Wavetop.svg';

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className='wave-border top'>
          <Wavetop />
        </div>
        <footer>
          <div className='support container'>
            <p>Would you like to support my content?</p>
            <div className='bmc-btn-container'>
              <a
                className='bmc-btn'
                target='_blank'
                rel='noopener noreferrer'
                href='http://buymeacoffee.com/jemimaabu'>
                <FooterSvg />
                <span className='bmc-btn-text'>Buy me a coffee</span>
              </a>
            </div>
          </div>
          <div className='container'>
            <Socialmedia />
            <div className='copyright'>
              &copy; designed & built by{' '}
              <a href='https://www.jemimaabu.com' rel='noopener noreferrer'>Jemima Abu</a>{' '}
              <span className='heart'>&hearts;</span><br />
              <span className='heart'>&#9842;</span>{' '}
              Resturctured by <a href='https://www.linkedin.com/in/nivas-arokiaraj/' rel='noopener noreferrer'>Martin Nivas</a>
              <span className='heart'>&#9812;</span><br />
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}
