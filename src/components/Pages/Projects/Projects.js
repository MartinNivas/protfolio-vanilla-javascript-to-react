import './Projects.scss';
import React, { Fragment } from 'react';
import hobbyistImg from '../../../static/images/projects/hobbyist.png';
import minimalismImg from '../../../static/images/projects/minimalism.png';
import vscoImg from '../../../static/images/projects/vsco.png';
import numblrImg from '../../../static/images/projects/numblr.png';
import trainellaImg from '../../../static/images/projects/trainella.png';
import cybercampImg from '../../../static/images/projects/cybercamp.png';
import gridsterImg from '../../../static/images/projects/gridster.png';
import takenoteImg from '../../../static/images/projects/take-note.png';
import randomGradiantImg from '../../../static/images/projects/random-gradient.png';
import wordProcessorImg from '../../../static/images/projects/word-processor.png';
import listAphaImg from '../../../static/images/projects/list-alphabetizer.png';
import listHtmlImg from '../../../static/images/projects/list-to-html.png';
import randomPswdImg from '../../../static/images/projects/random-password.png';
import whatToEatImg from '../../../static/images/projects/what-to-eat.png';
import findFormulaImg from '../../../static/images/projects/find-the-formula.png';
import deadWoundImg from '../../../static/images/projects/dead-and-wounded.png';
import mockingTxtImg from '../../../static/images/projects/mocking-text.png';
import portfoliov1Img from '../../../static/images/projects/portfolio-v1.png';
import portfoliov2Img from '../../../static/images/projects/portfolio-v2.png';
import portfoliov3Img from '../../../static/images/projects/portfolio-v3.png';
import Navbar from '../../Navbar/Navbar';

const Projects = () => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <section className='container'>
          <h1 className='section-title'>
            Projects <span className='title-icon'>&#128187;</span>
          </h1>
          <p className='section-subtitle'>
            Over the course of my career as a front-end developer, I've built
            several websites and applications. These are most of them:
          </p>
        </section>
        <section id='websites' className='container'>
          <h2 className='subsection-title'>Webpages (6)</h2>
          <div className='main-text project-scroll'>
            <div className='project'>
              <div className='project-image'>
                <img
                  src={hobbyistImg}
                  width='720'
                  height='340'
                  alt='Hobbyist Website'
                />
              </div>
              <div className='project-text'>
                <h3 className='project-title'>Hobbyist</h3>
                <p>A site for recording your hobbies</p>
                <ul className='project-tags'>
                  <li>Python</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <div className='project-links'>
                  <a
                    href='https://my-hobbyist.herokuapp.com/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    visit site
                  </a>
                  <a
                    href='https://github.com/Jemimaabu/hobbyist-app'
                    target='_blank'
                    rel='noopener noreferrer'>
                    source code
                  </a>
                </div>
              </div>
            </div>
            <div className='project'>
              <div className='project-image'>
                <img
                  src={minimalismImg}
                  width='720'
                  height='340'
                  alt='Minimalist Website'
                />
              </div>
              <div className='project-text'>
                <h3 className='project-title'>Minimalism Is Art</h3>
                <p>A minimalist art gallery site</p>
                <ul className='project-tags'>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>CSS</li>
                </ul>
                <div className='project-links'>
                  <a
                    href='https://minimalism-is-art.herokuapp.com/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    visit site
                  </a>
                  <a
                    href='https://github.com/jemimaabu/minimalism-is-art'
                    target='_blank'
                    rel='noopener noreferrer'>
                    source code
                  </a>
                </div>
              </div>
            </div>
            <div className='project'>
              <div className='project-image'>
                <img
                  src={vscoImg}
                  width='720'
                  height='340'
                  alt='VSCO Clone Website'
                />
              </div>
              <div className='project-text'>
                <h3 className='project-title'>VSCO Clone</h3>
                <p>
                  A clone of the{' '}
                  <a href='https://vsco.co/' target='_blank' rel='noopener noreferrer'>
                    VSCO
                  </a>{' '}
                  landing page
                </p>
                <ul className='project-tags'>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
                <div className='project-links'>
                  <a
                    href='https://jemimaabu.github.io/recreated/vsco'
                    target='_blank'
                    rel='noopener noreferrer'>
                    visit site
                  </a>
                  <a
                    href='https://github.com/jemimaabu/recreated/blob/master/vsco'
                    target='_blank'
                    rel='noopener noreferrer'>
                    source code
                  </a>
                </div>
              </div>
            </div>
            <div className='project'>
              <div className='project-image'>
                <img
                  src={numblrImg}
                  width='720'
                  height='340'
                  alt='Tumblr Clone Website'
                />
              </div>
              <div className='project-text'>
                <h3 className='project-title'>Tumblr Clone</h3>
                <p>
                  A clone of the{' '}
                  <a
                    href='https://www.tumblr.com/login'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Tumblr
                  </a>{' '}
                  login page
                </p>
                <ul className='project-tags'>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
                <div className='project-links'>
                  <a
                    href='https://jemimaabu.github.io/recreated/tumblr'
                    target='_blank'
                    rel='noopener noreferrer'>
                    visit site
                  </a>
                  <a
                    href='https://github.com/jemimaabu/recreated/blob/master/tumblr'
                    target='_blank'
                    rel='noopener noreferrer'>
                    source code
                  </a>
                </div>
              </div>
            </div>
            <div className='project'>
              <div className='project-image'>
                <img
                  src={trainellaImg}
                  width='720'
                  height='340'
                  alt='Trainella Website'
                />
              </div>
              <div className='project-text'>
                <h3 className='project-title'>Trainella</h3>
                <p>A yoga website</p>
                <ul className='project-tags'>
                  <li>WordPress</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
                <div className='project-links'>
                  <a
                    href='https://trainella.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                    visit site
                  </a>
                </div>
              </div>
            </div>
            <div className='project'>
              <div className='project-image'>
                <img
                  src={cybercampImg}
                  width='720'
                  height='340'
                  alt='Cybercamp Website'
                />
              </div>
              <div className='project-text'>
                <h3 className='project-title'>Cybercamp</h3>
                <p>A kids' summer camp website</p>
                <ul className='project-tags'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <div className='project-links'>
                  <a
                    href='https://unilagconsult.com.ng/cybercamp/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    visit site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='apps' className='container'>
          <h2 className='subsection-title'>Web Apps (11)</h2>
          <div className='main-text project-scroll'>
            <div className='project'>
              <div className='project-image'>
                <img
                  src={gridsterImg}
                  width='720'
                  height='340'
                  alt='A grid game website'
                />
              </div>
              <div className='project-text'>
                <h3 className='project-title'>Gridster</h3>
                <p>A 2D JavaScript grid game</p>
                <ul className='project-tags'>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>CSS</li>
                </ul>
                <div className='project-links'>
                  <a
                    href='https://gridster-demo.herokuapp.com/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    visit site
                  </a>
                  <a
                    href='https://github.com/jemimaabu/gridster'
                    target='_blank'
                    rel='noopener noreferrer'>
                    source code
                  </a>
                </div>
              </div>
            </div>
            <div className='project'>
              <div className='project-image'>
                <img
                  src={takenoteImg}
                  width='720'
                  height='340'
                  alt='A note taking application'
                />
              </div>
              <div className='project-text'>
                <h3 className='project-title'>Take Note</h3>
                <p>A browser-based note taking application</p>
                <ul className='project-tags'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <div className='project-links'>
                  <a
                    href='https://jemimaabu.github.io/take-note/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    visit site
                  </a>
                  <a
                    href='https://github.com/jemimaabu/take-note'
                    target='_blank'
                    rel='noopener noreferrer'>
                    source code
                  </a>
                </div>
              </div>
            </div>
            <div className='project'>
              <div className='project-image'>
                <img
                  src={randomGradiantImg}
                  width='720'
                  height='340'
                  alt='A random gradient generator'
                />
              </div>
              <div className='project-text'>
                <h3 className='project-title'>Random Gradient Generator</h3>
                <p>A site for generating random gradients</p>
                <ul className='project-tags'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <div className='project-links'>
                  <a
                    href='https://jemimaabu.github.io/random-gradient-generator'
                    target='_blank'
                    rel='noopener noreferrer'>
                    visit site
                  </a>
                  <a
                    href='https://github.com/jemimaabu/random-gradient-generator'
                    target='_blank'
                    rel='noopener noreferrer'>
                    source code
                  </a>
                </div>
              </div>
            </div>
            <div className='project'>
              <div className='project-image'>
                <img
                  src={wordProcessorImg}
                  width='720'
                  height='340'
                  alt='A word processort'
                />
              </div>
              <div className='project-text'>
                <h3 className='project-title'>Word Processor</h3>
                <p>A word count and case converting site</p>
                <ul className='project-tags'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <div className='project-links'>
                  <a
                    href='https://jemimaabu.github.io/word-processor/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    visit site
                  </a>
                  <a
                    href='https://github.com/jemimaabu/word-processor'
                    target='_blank'
                    rel='noopener noreferrer'>
                    source code
                  </a>
                </div>
              </div>
            </div>
            <div className='project'>
              <div className='project-image'>
                <img
                  src={listAphaImg}
                  width='720'
                  height='340'
                  alt='A list sorting website'
                />
              </div>
              <div className='project-text'>
                <h3 className='project-title'>List Alphabetizer</h3>
                <p>A webapp for sorting and rearranging lists</p>
                <ul className='project-tags'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <div className='project-links'>
                  <a
                    href='https://jemimaabu.github.io/list-alphabetizer/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    visit site
                  </a>
                  <a
                    href='https://github.com/jemimaabu/list-alphabetizer'
                    target='_blank'
                    rel='noopener noreferrer'>
                    source code
                  </a>
                </div>
              </div>
            </div>
            <div className='project'>
              <div className='project-image'>
                <img
                  src={listHtmlImg}
                  width='720'
                  height='340'
                  alt='A list to HTML tag converter'
                />
              </div>
              <div className='project-text'>
                <h3 className='project-title'>List-To-HTML</h3>
                <p>A site for converting lists to html tags</p>
                <ul className='project-tags'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <div className='project-links'>
                  <a
                    href='https://jemimaabu.github.io/text-list-to-html/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    visit site
                  </a>
                  <a
                    href='https://github.com/jemimaabu/text-list-to-html'
                    target='_blank'
                    rel='noopener noreferrer'>
                    source code
                  </a>
                </div>
              </div>
            </div>
            <div className='project'>
              <div className='project-image'>
                <img
                  src={randomPswdImg}
                  width='720'
                  height='340'
                  alt='A random password generator site'
                />
              </div>
              <div className='project-text'>
                <h3 className='project-title'>Random Password Generator</h3>
                <p>A site for generating random passwords</p>
                <ul className='project-tags'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <div className='project-links'>
                  <a
                    href='https://jemimaabu.github.io/random-password-generator/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    visit site
                  </a>
                  <a
                    href='https://github.com/jemimaabu/random-password-generator'
                    target='_blank'
                    rel='noopener noreferrer'>
                    source code
                  </a>
                </div>
              </div>
            </div>
            <div className='project'>
              <div className='project-image'>
                <img
                  src={whatToEatImg}
                  width='720'
                  height='340'
                  alt='A food chooser website'
                />
              </div>
              <div className='project-text'>
                <h3 className='project-title'>What Should We Eat?</h3>
                <p>A food choosing site</p>
                <ul className='project-tags'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <div className='project-links'>
                  <a
                    href='https://jemimaabu.github.io/what-should-we-eat/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    visit site
                  </a>
                  <a
                    href='https://github.com/jemimaabu/what-should-we-eat'
                    target='_blank'
                    rel='noopener noreferrer'>
                    source code
                  </a>
                </div>
              </div>
            </div>
            <div className='project'>
              <div className='project-image'>
                <img
                  src={findFormulaImg}
                  width='720'
                  height='340'
                  alt='A sequence deduction website'
                />
              </div>
              <div className='project-text'>
                <h3 className='project-title'>Find the Number</h3>
                <p>A sequence deduction game</p>
                <ul className='project-tags'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <div className='project-links'>
                  <a
                    href='https://jemimaabu.github.io/find-the-formula'
                    target='_blank'
                    rel='noopener noreferrer'>
                    visit site
                  </a>
                  <a
                    href='https://github.com/jemimaabu/find-the-formula'
                    target='_blank'
                    rel='noopener noreferrer'>
                    source code
                  </a>
                </div>
              </div>
            </div>
            <div className='project'>
              <div className='project-image'>
                <img
                  src={deadWoundImg}
                  width='720'
                  height='340'
                  alt='A guessing game website'
                />
              </div>
              <div className='project-text'>
                <h3 className='project-title'>Dead and Wounded</h3>
                <p>A number guessing game</p>
                <ul className='project-tags'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <div className='project-links'>
                  <a
                    href='https://jemimaabu.github.io/dead-and-wounded/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    visit site
                  </a>
                  <a
                    href='https://github.com/jemimaabu/dead-and-wounded'
                    target='_blank'
                    rel='noopener noreferrer'>
                    source code
                  </a>
                </div>
              </div>
            </div>
            <div className='project'>
              <div className='project-image'>
                <img
                  src={mockingTxtImg}
                  width='720'
                  height='340'
                  alt='A meme text site'
                />
              </div>
              <div className='project-text'>
                <h3 className='project-title'>mOcKiNg tExT</h3>
                <p>A meme text site</p>
                <ul className='project-tags'>
                  <li>HTML</li>
                  <li>JavaScript</li>
                </ul>
                <div className='project-links'>
                  <a
                    href='https://jemimaabu.github.io/mocking-text/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    visit site
                  </a>
                  <a
                    href='https://github.com/jemimaabu/mocking-text'
                    target='_blank'
                    rel='noopener noreferrer'>
                    source code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='portfolios' className='container'>
          <h2 className='subsection-title'>Previous Portfolios (3)</h2>
          <div className='main-text project-scroll'>
            <div className='project'>
              <div className='project-image'>
                <img
                  src={portfoliov1Img}
                  width='720'
                  height='340'
                  alt='First version of my portfolio'
                />
              </div>
              <div className='project-text'>
                <h3 className='project-title'>Portfolio V.1</h3>
                <ul className='project-tags'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <div className='project-links'>
                  <a
                    href='https://jemimaabu.github.io'
                    target='_blank'
                    rel='noopener noreferrer'>
                    visit site
                  </a>
                  <a
                    href='https://github.com/jemimaabu/jemimaabu.github.io'
                    target='_blank'
                    rel='noopener noreferrer'>
                    source code
                  </a>
                </div>
              </div>
            </div>
            <div className='project'>
              <div className='project-image'>
                <img
                  src={portfoliov2Img}
                  width='720'
                  height='340'
                  alt='Second version of my portfolio'
                />
              </div>
              <div className='project-text'>
                <h3 className='project-title'>Portfolio V.2</h3>
                <ul className='project-tags'>
                  <li>Python</li>
                  <li>HTML</li>
                  <li>LESS</li>
                  <li>JavaScript</li>
                </ul>
                <div className='project-links'>
                  <a
                    href='http://v2.jemimaabu.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                    visit site
                  </a>
                  <a
                    href='https://github.com/jemimaabu/v2.jemimaabu.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                    source code
                  </a>
                </div>
              </div>
            </div>
            <div className='project'>
              <div className='project-image'>
                <img
                  src={portfoliov3Img}
                  width='720'
                  height='340'
                  alt='Third version of my portfolio'
                />
              </div>
              <div className='project-text'>
                <h3 className='project-title'>Portfolio V.3</h3>
                <ul className='project-tags'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <div className='project-links'>
                  <a
                    href='https://v3.jemimaabu.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                    visit site
                  </a>
                  <a
                    href='https://github.com/jemimaabu/v3.jemimaabu.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                    source code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='pens' className='container'>
          <h2 className='subsection-title'>Pens (72)</h2>
          <div className='main-text project-scroll'>
            <div className='project'>
              <p
                className='codepen'
                data-height='325'
                data-theme-id='dark'
                data-default-tab='result'
                data-user='Jemimaabu'
                data-slug-hash='vYEYdOy'
                style={{
                  height: '325px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid',
                  margin: '1em 0',
                  padding: '1em',
                }}
                data-pen-title='Floating Balloons'>
                <span>
                  See the Pen{' '}
                  <a href='https://codepen.io/Jemimaabu/pen/vYEYdOy'>
                    Floating Balloons
                  </a>{' '}
                  by Jemima (
                  <a href='https://codepen.io/Jemimaabu'>@Jemimaabu</a>) on{' '}
                  <a href='https://codepen.io'>CodePen</a>.
                </span>
              </p>
              <script
                async
                src='https://cpwebassets.codepen.io/assets/embed/ei.js'></script>
              <div className='project-text'>
                <h3 className='project-title'>Floating Balloons</h3>
              </div>
            </div>
            <div className='project'>
              <p
                className='codepen'
                data-height='325'
                data-theme-id='dark'
                data-default-tab='result'
                data-user='Jemimaabu'
                data-slug-hash='ebQxqJ'
                style={{
                  height: '325px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid',
                  margin: '1em 0',
                  padding: '1em',
                }}
                data-pen-title='Pure CSS Expanding Text Load Screen'>
                <span>
                  See the Pen{' '}
                  <a href='https://codepen.io/Jemimaabu/pen/ebQxqJ'>
                    Pure CSS Expanding Text Load Screen
                  </a>{' '}
                  by Jemima (
                  <a href='https://codepen.io/Jemimaabu'>@Jemimaabu</a>) on{' '}
                  <a href='https://codepen.io'>CodePen</a>.
                </span>
              </p>
              <script
                async
                src='https://cpwebassets.codepen.io/assets/embed/ei.js'></script>
              <div className='project-text'>
                <h3 className='project-title'>
                  Pure CSS Expanding Text Load Screen
                </h3>
              </div>
            </div>
            <div className='project'>
              <p
                className='codepen'
                data-height='325'
                data-theme-id='dark'
                data-default-tab='result'
                data-user='Jemimaabu'
                data-slug-hash='xmeqmY'
                style={{
                  height: '325px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid',
                  margin: '1em 0',
                  padding: '1em',
                }}
                data-pen-title='Pure CSS Split Screen Loader'>
                <span>
                  See the Pen{' '}
                  <a href='https://codepen.io/Jemimaabu/pen/xmeqmY'>
                    Pure CSS Split Screen Loader
                  </a>{' '}
                  by Jemima (
                  <a href='https://codepen.io/Jemimaabu'>@Jemimaabu</a>) on{' '}
                  <a href='https://codepen.io'>CodePen</a>.
                </span>
              </p>
              <script
                async
                src='https://cpwebassets.codepen.io/assets/embed/ei.js'></script>
              <div className='project-text'>
                <h3 className='project-title'>Pure CSS Split Screen Loader</h3>
              </div>
            </div>
            <div className='more-link'>
              <a
                href='https://codepen.io/jemimaabu'
                target='_blank'
                rel='noopener noreferrer'>
                See all &#8594;
              </a>
            </div>
          </div>
        </section>
      </main>
      <div className='page-nav container'>
        <a href='about'>&#8592; About</a>
        <a href='talks'>Talks &#8594;</a>
      </div>
    </Fragment>
  );
};

export default Projects;
