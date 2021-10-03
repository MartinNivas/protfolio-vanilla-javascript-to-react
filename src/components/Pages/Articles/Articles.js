import './Articles.scss';
import React, { Component, Fragment } from 'react';
import Navbar from '../../Navbar/Navbar';

export default class Articles extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <main>
          <section className='container'>
            <h1 className='section-title'>
              Articles <span className='title-icon'>&#128466;</span>
            </h1>
            <p className='section-subtitle'>
              I write articles on multiple platforms and online magazines, this
              is a list of everything I've written online.
            </p>
          </section>
          <section id='articles' className='container'>
            <input
              type='radio'
              id='all'
              name='tag'
              value='all'
              defaultChecked='true'></input>
            <input
              type='radio'
              id='portfolio'
              name='tag'
              value='portfolio'></input>
            <input
              type='radio'
              id='javascript'
              name='tag'
              value='javascript'></input>
            <input
              type='radio'
              id='conferences'
              name='tag'
              value='conferences'></input>
            <aside className='post-tags'>
              <div className='post-tag'>
                <label htmlFor='all' data-post='all'>
                  All (6)
                </label>
              </div>
              <div className='post-tag'>
                <label htmlFor='portfolio' data-post='portfolio'>
                  Portfolio (3)
                </label>
              </div>
              <div className='post-tag'>
                <label htmlFor='javascript' data-post='javascript'>
                  JavaScript (2)
                </label>
              </div>
              <div className='post-tag'>
                <label htmlFor='conferences' data-post='conferences'>
                  Conferences (1)
                </label>
              </div>
            </aside>
            <div className='main-content'>
              <div className='article' data-post='javascript'>
                <h2 className='article-title'>
                  <a
                    href='https://css-tricks.com/creating-a-smart-navbar-with-vanilla-javascript/'
                    target='_blank'
                    rel='noreferrer'>
                    Creating a Smart Navbar With Vanilla JavaScript
                  </a>
                </h2>
                <div className='article-description'>
                  <p>
                    Smart navigation is all the convenience of sticky
                    positioning, with an added fullscreen benefit. Learn how to
                    implement a smart navbar in this article.
                  </p>
                  <p className='details'>Apr 5, 2021 · 4 min read</p>
                </div>
              </div>
              <div className='article' data-post='portfolio'>
                <h2 className='article-title'>
                  <a
                    href='https://blog.jemimaabu.com/how-i-built-my-perfect-score-portfolio-website'
                    target='_blank'
                    rel='noreferrer'>
                    How I Built My Perfect Score Portfolio Website
                  </a>
                </h2>
                <div className='article-description'>
                  <p>
                    This article covers how to implement multiple color schemes,
                    non-JS dependent content and get a perfect lighthouse score
                    on a website.
                  </p>
                  <p className='details'>Mar 31, 2021 · 8 min read</p>
                </div>
              </div>
              <div className='article' data-post='portfolio'>
                <h2 className='article-title'>
                  <a
                    href='https://www.freecodecamp.org/news/beginners-guide-to-creating-a-portfolio-website/'
                    target='_blank'
                    rel='noreferrer'>
                    I Helped 6 Developers Set Up Their Portfolio Website. Here's
                    What I Learned.
                  </a>
                </h2>
                <div className='article-description'>
                  <p>
                    In this article, we'll cover everything you need to know
                    about setting up your portfolio site - from choosing a
                    domain name to deploying the site online.
                  </p>
                  <p className='details'>Mar 29, 2021 · 10 min read</p>
                </div>
              </div>
              <div className='article' data-post='javascript'>
                <h2 className='article-title'>
                  <a
                    href='https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671'
                    target='_blank'
                    rel='noreferrer'>
                    Handling Scroll Based Animation With Vanilla JavaScript
                  </a>
                </h2>
                <div className='article-description'>
                  <p>
                    Here's how to implement animate-on-scroll events using
                    vanilla JavaScript and CSS.
                  </p>
                  <p className='details'>Mar 15, 2021 · 8 min read</p>
                </div>
              </div>
              <div className='article' data-post='portfolio'>
                <h2 className='article-title'>
                  <a
                    href='https://www.freecodecamp.org/news/coding-projects-to-include-in-your-frontend-portfolio/'
                    target='_blank'
                    rel='noreferrer'>
                    5 Coding Projects You Should Include in Your Front End
                    Portfolio
                  </a>
                </h2>
                <div className='article-description'>
                  <p>
                    If you're wondering what sort of projects to include in your
                    portfolio to appeal to prospective employers or show off
                    your front end skills, this article is for you.
                  </p>
                  <p className='details'>Feb 8, 2021 · 6 min read</p>
                </div>
              </div>
              <div className='article' data-post='conferences'>
                <h2 className='article-title'>
                  <a
                    href='https://blog.jemimaabu.com/how-to-find-conferences-to-speak-at'
                    target='_blank'
                    rel='noreferrer'>
                    How To Find Conferences To Speak At
                  </a>
                </h2>
                <div className='article-description'>
                  <p>
                    Learn how to find conferences to give a talk at and how to
                    get your first speaking engagement.
                  </p>
                  <p className='details'>Jan 31, 2021 · 5 min read</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className='page-nav container'>
          <a href='talks'>&#8592; Talks</a>
          <a href='#contact'>Contact &#8594;</a>
        </div>
      </Fragment>
    );
  }
}
