import React, { Component } from 'react';
import ConferenceImg from '../../../../static/images/articles/conferences.png';
import ScrollImg from '../../../../static/images/articles/js-scroll.png';
import PortfolioImg from '../../../../static/images/articles/portfolio-guide.png';

export default class Articles extends Component {
  render() {
    return (
      <section id='articles'>
        <div className='container'>
          <div className='title-container scroll-in'>
            <h2 className='section-title'>
              Featured Articles <span className='title-icon'>&#128466;</span>
            </h2>
            <p className='section-subtitle'>
              I write the type of articles I would want to read when trying to
              understand a new concept or develop a skill. Here are some things
              I've written recently:
            </p>
          </div>
          <div className='articles-container'>
            <div className='article scroll-in'>
              <div className='article-image'>
                <a
                  href='https://www.freecodecamp.org/news/beginners-guide-to-creating-a-portfolio-website/'
                  target='_blank'
                  rel='noreferrer'>
                  <img
                    src={PortfolioImg}
                    alt="A Beginner's Guide To Creating A Portfolio Website"
                  />
                </a>
              </div>
              <div className='article-content'>
                <div className='article-site'>
                  <a
                    href='https://www.freecodecamp.org/news/beginners-guide-to-creating-a-portfolio-website/'
                    target='_blank'
                    rel='noreferrer'>
                    freecodecamp
                  </a>
                </div>
                <h3 className='article-title'>
                  <a
                    href='https://www.freecodecamp.org/news/beginners-guide-to-creating-a-portfolio-website/'
                    target='_blank'
                    rel='noreferrer'>
                    I Helped 6 Developers Set Up Their Portfolio Website. Here's
                    What I Learned.
                  </a>
                </h3>
                <div className='article-description'>
                  <p>
                    In this article, we'll cover everything you need to know
                    about setting up your portfolio site - from choosing a
                    domain name to deploying the site online.
                  </p>
                </div>
              </div>
            </div>
            <div className='article scroll-in'>
              <div className='article-image'>
                <a
                  href='https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671'
                  target='_blank'
                  rel='noreferrer'>
                  <img
                    src={ScrollImg}
                    alt='Handling Scroll Based Animation With Vanilla JavaScript'
                  />
                </a>
              </div>
              <div className='article-content'>
                <div className='article-site'>
                  <a
                    href='https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671'
                    target='_blank'
                    rel='noreferrer'>
                    envatotuts+
                  </a>
                </div>
                <h3 className='article-title'>
                  <a
                    href='https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671'
                    target='_blank'
                    rel='noreferrer'>
                    Handling Scroll Based Animation With Vanilla JavaScript
                  </a>
                </h3>
                <div className='article-description'>
                  <p>
                    In this article, we'll explore how to implement a
                    scroll-based styling on a page using native methods in
                    vanilla JavaScript and CSS and how to optimize these methods
                    for accessibility and performance.
                  </p>
                </div>
              </div>
            </div>
            <div className='article scroll-in'>
              <div className='article-image'>
                <a
                  href='https://blog.jemimaabu.com/how-to-find-conferences-to-speak-at'
                  target='_blank'
                  rel='noreferrer'>
                  <img
                    src={ConferenceImg}
                    alt='How To Find Conferences To Speak At'
                  />
                </a>
              </div>
              <div className='article-content'>
                <div className='article-site'>
                  <a
                    href='https://blog.jemimaabu.com/how-to-find-conferences-to-speak-at'
                    target='_blank'
                    rel='noreferrer'>
                    hashnode
                  </a>
                </div>
                <h3 className='article-title'>
                  <a
                    href='https://blog.jemimaabu.com/how-to-find-conferences-to-speak-at'
                    target='_blank'
                    rel='noreferrer'>
                    How To Find Conferences To Speak At
                  </a>
                </h3>
                <div className='article-description'>
                  <p>
                    When I first tried to get into conference speaking, I had no
                    idea how to get started. I'd attended some meetups in the
                    past so I knew the speakers had to come from somewhere, I
                    just didn't know where that somewhere was...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='section-link scroll-in'>
            <a href='articles' className='link-btn'>
              View All Articles
            </a>
          </div>
        </div>
      </section>
    );
  }
}
