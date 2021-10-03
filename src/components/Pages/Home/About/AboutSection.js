import React, { Component } from 'react';

export default class AboutSection extends Component {
  render() {
    return (
      <section id='about'>
        <div className='container inner-container'>
          <div className='intro scroll-in'>
            <h2 className='section-title'>
              Hello, I'm Jemima Abu{' '}
              <span className='title-icon'>&#128578;</span>
            </h2>
            <div className='section-subtitle'>
              <p>
                {' '}
                I’m a self-taught Front End Developer and school-taught Systems
                Engineer from Nigeria, currently based in Lithuania.
              </p>
              <p>
                I've been{' '}
                <a href='about#history'>building websites since 2017</a> with a
                focus on responsive design, accessibility and pleasing
                aesthetics.
              </p>
              <p>
                I've{' '}
                <a href='talks'>spoken at multiple international conferences</a>{' '}
                on a variety of topics ranging from web accessibility to career
                development.
              </p>
              <p>
                I also <a href='articles'>write articles</a> and I have my works
                published on{' '}
                <a
                  href='https://jemimaabu.medium.com/'
                  target='_blank'
                  rel='noreferrer'>
                  Medium
                </a>
                ,
                <a
                  href='https://blog.jemimaabu.com'
                  target='_blank'
                  rel='noreferrer'>
                  Hashnode
                </a>
                ,{' '}
                <a
                  href='https://www.freecodecamp.org/news/author/jemima/'
                  target='_blank'
                  rel='noreferrer'>
                  freeCodeCamp
                </a>
                ,
                <a
                  href='https://css-tricks.com/author/jemima/'
                  target='_blank'
                  rel='noreferrer'>
                  CSSTricks
                </a>
                and
                <a
                  href='https://tutsplus.com/authors/jemima-abu'
                  target='_blank'
                  rel='noreferrer'>
                  Envato Tuts
                </a>{' '}
                .
              </p>
            </div>
            <div className='section-link'>
              <a href='about' className='link-btn'>
                More About Me
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
