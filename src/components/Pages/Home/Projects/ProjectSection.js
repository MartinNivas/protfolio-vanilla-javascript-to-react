import React, { Component } from 'react';
import PortfolioImg from '../../../../static/images/projects/portfolio.png';
import CybercampImg from '../../../../static/images/projects/cybercamp.png';
import TrainellaImg from '../../../../static/images/projects/trainella.png';

export default class ProjectSection extends Component {
  render() {
    return (
      <section id='projects'>
        <div className='container'>
          <div className='title-container scroll-in'>
            <h2 className='section-title'>
              Featured Projects <span className='title-icon'>&#128187;</span>
            </h2>
            <p className='section-subtitle'>
              I do most of my work under contract but I tend to freelance from
              time to time or build projects for fun. Here are some of my most
              recent commercial projects:
            </p>
          </div>
          <div className='project-container'>
            <div className='project scroll-in'>
              <div className='project-image'>
                <img
                  src={TrainellaImg}
                  width='720'
                  height='340'
                  alt='Trainella yoga website'
                />
              </div>
              <div className='project-content-container'>
                <div className='project-content'>
                  <h3 className='project-title'>
                    <a
                      href='https://trainella.com'
                      target='_blank'
                      rel='noopener noreferrer'>
                      {' '}
                      Trainella{' '}
                    </a>
                  </h3>
                  <div className='project-description'>
                    <p>
                      I built this project for a client after attending her yoga
                      class. She wanted a WordPress site with a more custom
                      layout so I used an existing WordPress theme and tweaked
                      it with about 500 lines of additional CSS.
                    </p>
                    <p>
                      One Sunday in June, I attended a free yoga class that I
                      saw online. After the class, I got to talking with the
                      instructor and, when I mentioned that I was a web
                      developer, she was like "What a coincidence, I've been
                      meaning to develop a website for my yoga classes."
                    </p>
                    <p>
                      Never one to look Serendipity in the mouth, I was like
                      "Yeah sure I can do that". The catch was: she wanted a
                      WordPress site and I'd never actually built a WordPress
                      site from scratch before.
                    </p>
                    <p>
                      After a lot of research and bumbling and mistaking
                      wordpress.com for wordpress.org, I finally managed to set
                      up the site with a WordPress theme that I tweaked with
                      about 500 lines of additional CSS to create a webpage we
                      were both happy with.
                    </p>
                  </div>
                  <ul className='project-tags' title='Technologies used'>
                    <li className='tag'>Wordpress</li>
                    <li className='tag'>CSS</li>
                    <li className='tag'>HTML</li>
                  </ul>
                  <div className='project-links'>
                    <a
                      href='https://trainella.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='link-btn'>
                      visit site
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='project scroll-in'>
              <div className='project-image'>
                <img
                  src={CybercampImg}
                  width='720'
                  height='340'
                  alt='UNILAG Consult Cybercamp Website'
                />
              </div>
              <div className='project-content-container'>
                <div className='project-content'>
                  <h3 className='project-title'>
                    <a
                      href='http://unilagconsult.com.ng/cybercamp'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Unilag Consult Cyber Camp
                    </a>
                  </h3>
                  <div className='project-description'>
                    <p>
                      I was contracted to build the website for the University
                      of Lagos Consult Cyber Camp. It was a 10-page project that
                      I worked on with a team of one other person and it took us
                      a rather hectic two days to design and launch.
                    </p>
                    <p>
                      The inspiration behind the design was something along the
                      lines of: provide as much information as possible and be
                      easy to navigate so we stuck to a basic layout with
                      minimal animations.
                    </p>
                  </div>
                  <ul className='project-tags'>
                    <li className='tag'>HTML</li>
                    <li className='tag'>CSS</li>
                    <li className='tag'>JavaScript</li>
                  </ul>
                  <div className='project-links'>
                    <a
                      href='http://unilagconsult.com.ng/cybercamp'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='link-btn'>
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='project scroll-in'>
              <div className='project-image'>
                <img
                  src={PortfolioImg}
                  width='720'
                  height='340'
                  alt='Jemima Abu: Self Taught Developer, School Taught Engineer'
                />
              </div>
              <div className='project-content-container'>
                <div className='project-content'>
                  <h3 className='project-title'>My Portfolio</h3>
                  <div className='project-description'>
                    <p>
                      This is the fourth version of my portfolio website. With
                      this version, I wanted to keep the code as basic as
                      possible but still make the site interactive so all the
                      animations and transitions on the page are done with
                      vanilla JavaScript and CSS.
                    </p>
                    <p>
                      Some of my favorite implemented features include the smart
                      navigation (the menu only appears when you move up the
                      page) and the theme selector (why choose one color scheme
                      when you can have five).
                    </p>
                    <p>
                      I also took user preferences into consideration (dark mode
                      and reduced animation is set according to the user's
                      system settings) and provided content for browsers with
                      disabled JavaScript,although the functionality is limited.
                    </p>
                    <p>
                      {' '}
                      I tried to make it as cross-browser compatible as possible
                      it but if you find any errors on your broswer, please send
                      me a message in the contact form and I'll work on it.
                    </p>
                  </div>
                  <ul className='project-tags'>
                    <li className='tag'>HTML</li>
                    <li className='tag'>CSS</li>
                    <li className='tag'>JavaScript</li>
                  </ul>
                  <div className='project-links'>
                    <a
                      href='https://github.com/jemimaabu/portfolio'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='link-btn'>
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='section-link scroll-in'>
            <a href='projects' className='link-btn'>
              View All Projects
            </a>
          </div>
        </div>
      </section>
    );
  }
}
