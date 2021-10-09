import './About.scss';
import React, { Fragment, useEffect, useLayoutEffect } from 'react';
import protraitImg from '../../../static/images/about/portrait.png';
import Navbar from '../../Navbar/Navbar';

const About = () => {
  // export default className About extends Component {
  // render() {
  const elementInViewport = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  useLayoutEffect(() => {
    const handleVisibleNav = () => {
      const nav = document.querySelector('nav');
      if (elementInViewport(nav)) {
        nav.classList.add('visible');
        nav.classList.remove('hidden');
      } else if (nav.classList.contains('visible') && !elementInViewport(nav)) {
        nav.classList.remove('visible');
        nav.classList.add('hidden');
      }
    };

    const openDetails = () => {
      if (!!window.location.hash) {
        const details = document.querySelector(
          `${window.location.hash} details`
        );
        details.open = true;
      }
    };

    handleVisibleNav();
    openDetails();
    window.addEventListener('hashchange', openDetails);
    return () => {
      window.removeEventListener('hashchange', openDetails);
    };
  }, []);

  useEffect(() => {
    document.title = 'Jemima Abu: About Me';
  }, []);

  return (
    <Fragment>
      <Navbar />
      <main>
        <section id='about' className='container'>
          <div className='intro-container'>
            <div className='intro-image'>
              <img src={protraitImg} alt='Jemima Abu' />
            </div>
            <div className='intro'>
              <h1 className='section-title'>Hello, I'm Jemima Abu &#128578;</h1>
              <p className='bold-text'>
                {' '}
                I’m a self-taught Front End Developer and school-taught Systems
                Engineer from Nigeria, currently based in Lithuania. I build
                websites with a focus on responsiveness, accessibility and
                pleasing aesthetics.
              </p>
            </div>
          </div>
        </section>
        <section id='history' className='container inner-container'>
          <details>
            <summary>
              <h2 className='subsection-title'>History</h2>
            </summary>
            <div className='main-text'>
              <p>
                I first started coding sometime in 2017 after taking a C# course
                in my 2nd year of university. The very first thing I built was a
                command-line GPA calculator (
                <a
                  href='https://github.com/jemimaabu/GPA-Calculator-C-'
                  target='_blank'
                  rel='noopener noreferrer'>
                  legacy code here
                </a>{' '}
                for posterity) and from then, I was hooked.
              </p>
              <p>
                I knew I enjoyed figuring out the logic behind creating
                applications but I was more interested in learning how to make
                it look pretty to users. That's how I started my{' '}
                <a
                  href='https://linkedin.com/in/jemimaabu'
                  target='_blank'
                  rel='noopener noreferrer'>
                  career
                </a>{' '}
                in front end development.
              </p>
              <p>
                I’m constantly trying to learn new technologies and concepts and
                I try to share my knowledge by{' '}
                <a href='articles'>writing articles</a> and{' '}
                <a href='talks'>speaking</a> at conferences.
              </p>
              <p>
                I enjoy building fun designs on{' '}
                <a
                  href='https://codepen.io/Jemimaabu'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Codepen
                </a>{' '}
                and time-saving projects on{' '}
                <a
                  href='https://github.com/jemimaabu'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Github
                </a>
                . I also publish beginner-friendly articles on{' '}
                <a
                  href='https://hashnode.com/@jemimaabu'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Hashnode
                </a>
                and{' '}
                <a
                  href='https://www.freecodecamp.org/news/author/jemima/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  freeCodeCamp
                </a>
                .
              </p>
              <p>
                I’m very dedicated to diversity and inclusion in the tech space
                so I try to <a href='#volunteering'>volunteer my time</a> and
                support initiatives targeted towards minorities and provide
                direct mentorship to people who look like me.
              </p>
              <p>
                Currently, I’m focused on moving to the next stage of my career
                and achieving mid-level developer status.
              </p>
              <p>Thanks for reading &#128522;</p>
            </div>
          </details>
        </section>
        <section id='experience' className='container inner-container'>
          <details>
            <summary>
              <h2 className='subsection-title'>Experience</h2>
            </summary>
            <div className='main-text'>
              <div className='text'>
                <h3 className='text-header'>
                  <b>Front End Developer</b> —{' '}
                  <a
                    href='https://telesoftas.com/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Telesoftas
                  </a>{' '}
                </h3>
                <p className='text-subtitle'>
                  FEB 2020 - PRESENT | Kaunas, Lithuania
                </p>
                <ul>
                  <li>
                    Responsible for building the user interface and developing
                    frontend architecture on various client projects using
                    several technologies and methodologies.
                  </li>
                </ul>
              </div>
              <div className='text'>
                <h3 className='text-header'>
                  <b>Front End Developer</b> —{' '}
                  <a
                    href='https://www.sumo-soft.com/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Sumosoft
                  </a>{' '}
                </h3>
                <p className='text-subtitle'>
                  MAY 2018 - MARCH 2019 | United Kingdom (Remote)
                </p>
                <ul>
                  <li>
                    Developed web pages for shops on Savile Row using an
                    internal content management system. Worked on the team that
                    built the company website.
                  </li>
                </ul>
              </div>
              <div className='text'>
                <h3 className='text-header'>
                  <b>Front End Developer</b> —{' '}
                  <a
                    href='https://naturesownwonders.com/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Nature’s Own Wonder
                  </a>{' '}
                </h3>
                <p className='text-subtitle'>
                  FEB 2018 - MAY 2018 | Lagos, Nigeria
                </p>
                <ul>
                  <li>
                    Responsible for creating wireframes, mockups and prototypes
                    for products and seeing them to deployment.
                  </li>
                </ul>
              </div>
              <div className='text'>
                <h3 className='text-header'>
                  <b>Front End Developer, UI Designer</b> —{' '}
                  <a
                    href='https://omoelle.com/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Omoelle
                  </a>
                </h3>
                <p className='text-subtitle'>
                  SEPT 2017 - FEB 2018 | Lagos, Nigeria
                </p>
                <ul>
                  <li>
                    Designed and developed a new website layout for an existing
                    e-commerce site.
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </section>
        <section id='volunteering' className='container inner-container'>
          <details>
            <summary>
              <h2 className='subsection-title'>Volunteering</h2>
            </summary>
            <div className='main-text'>
              <div className='text'>
                <h3 className='text-header'>
                  <b>Workshop Trainer</b> —{' '}
                  <a
                    href='https://www.facebook.com/media/set/?vanity=TeleSoftas&set=a.10157567631476723'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Women Go Tech
                  </a>
                </h3>
                <p className='text-subtitle'>OCT 2020 | Kaunas, Lithuania</p>
                <ul>
                  <li>Taught a one-day workshop on web accessibility.</li>
                </ul>
              </div>
              <div className='text'>
                <h3 className='text-header'>
                  <b>Web Development Teacher</b> —{' '}
                  <a
                    href='http://unilagconsult.com.ng/cybercamp'
                    target='_blank'
                    rel='noopener noreferrer'>
                    UNILAG CyberCamp
                  </a>
                </h3>
                <p className='text-subtitle'>
                  JULY – AUG 2019 | Lagos, Nigeria
                </p>
                <ul>
                  <li>
                    Taught the basics of web development to children between the
                    ages of 10 to 17 years. Built the CyberCamp website from
                    scratch using HTML and CSS.
                  </li>
                </ul>
              </div>
              <div className='text'>
                <h3 className='text-header'>
                  <b>Workshop Trainer</b> —{' '}
                  <a
                    href='http://www.raoatech.com/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Raoatech
                  </a>
                </h3>
                <p className='text-subtitle'>JUN 2019 | Lagos, Nigeria</p>
                <ul>
                  <li>
                    Taught a one-day workshop on the basics of web design and
                    development to students at the Lagos University Teaching
                    Hospital.
                  </li>
                </ul>
              </div>
              <div className='text'>
                <h3 className='text-header'>
                  <b>Web Development Teacher</b> —{' '}
                  <a
                    href='https://girlcode.academy/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    GirlCode Academy
                  </a>
                </h3>
                <p className='text-subtitle'>FEB - MAR 2019 | Lagos, Nigeria</p>
                <ul>
                  <li>
                    Taught selected female candidates the basics of front end
                    development.
                  </li>
                </ul>
              </div>
              <div className='text'>
                <h3 className='text-header'>
                  <b>Volunteer Trainer</b> —{' '}
                  <a
                    href='https://pearlsafrica.org/girlscoding/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Pearls Africa
                  </a>
                </h3>
                <p className='text-subtitle'>
                  DEC 2017 - JAN 2018 | Lagos, Nigeria
                </p>
                <ul>
                  <li>
                    Taught girls from underprivileged backgrounds the
                    fundamentals of programming.
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </section>
        <section id='skills' className='container inner-container'>
          <details>
            <summary>
              <h2 className='subsection-title'>Skills</h2>
            </summary>
            <div className='main-text list'>
              <div className='text'>
                <h3 className='text-header'>Languages</h3>
                <ul className='tags'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>TypeScript</li>
                  <li>PHP (WordPress)</li>
                </ul>
              </div>
              <div className='text'>
                <h3 className='text-header'>Libraries</h3>
                <ul className='tags'>
                  <li>React</li>
                  <li>React-Redux</li>
                  <li>Emotion</li>
                  <li>Styled-components</li>
                </ul>
              </div>
              <div className='text'>
                <h3 className='text-header'>Frameworks</h3>
                <ul className='tags'>
                  <li>Tailwind</li>
                  <li>Svelte</li>
                  <li>NuxtJS</li>
                </ul>
              </div>
              <div className='text'>
                <h3 className='text-header'>Tools & Systems</h3>
                <ul className='tags'>
                  <li>Git</li>
                  <li>NPM</li>
                  <li>VSCode</li>
                  <li>Trello</li>
                  <li>Redmine</li>
                  <li>Atomic Design</li>
                </ul>
              </div>
            </div>
          </details>
        </section>
        <div className='section-link container inner-container'>
          <a
            href='https://drive.google.com/file/d/1Ge2lk6c3_TyLs8J4I5N0aczREiQvuWqpOf2eUnWwzgQ/view'
            className='link-btn'>
            Download My Resume
          </a>
        </div>
      </main>
      <div className='page-nav container'>
        <a href='/'>&#8592; Home</a>
        <a href='projects'>Projects &#8594;</a>
      </div>
    </Fragment>
  );
  // }
};

export default About;