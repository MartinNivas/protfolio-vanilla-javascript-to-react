import React, { Component, Fragment } from 'react';
import './Footer.scss';
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
                rel='noreferrer'
                href='http://buymeacoffee.com/jemimaabu'>
                <FooterSvg />
                <span className='bmc-btn-text'>Buy me a coffee</span>
              </a>
            </div>
          </div>
          <div className='container'>
            <div className='social-media'>
              <a href='https://www.github.com/jemimaabu' title='Github'>
                <i className='demo-icon icon-github-circled'></i>
              </a>
              <a href='https://www.twitter.com/jemimaabu' title='Twitter'>
                <i className='demo-icon icon-twitter'></i>
              </a>
              <a href='https://jemimaabu.medium.com' title='Medium'>
                <i className='demo-icon icon-medium'></i>
              </a>
              <a href='https://codepen.io/jemimaabu' title='Codepen'>
                <i className='demo-icon icon-codeopen'></i>
              </a>
              <a href='https://www.linkedin.com/in/jemimaabu' title='LinkedIn'>
                <i className='demo-icon icon-linkedin'></i>
              </a>
            </div>
            <div className='copyright'>
              &copy; designed & built by{' '}
              <a href='https://www.jemimaabu.com'>Jemima Abu</a>{' '}
              <span className='heart'>&hearts;</span>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}
