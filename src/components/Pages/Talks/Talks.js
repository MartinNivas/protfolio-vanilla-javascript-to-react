import './Talks.scss';
import React, { Component, Fragment } from 'react';
// import jemima1Img from '../../../static/images/presskit/jemima-1.jpg';
// import jemima1SmallImg from '../../../static/images/presskit/jemima-1small.jpg';
// import jemima2Img from '../../../static/images/presskit/jemima-2.jpg';
// import jemima2SmallImg from '../../../static/images/presskit/jemima-2small.jpg';
// import jemima3Img from '../../../static/images/presskit/jemima-3.jpg';
// import jemima3SmallImg from '../../../static/images/presskit/jemima-3small.jpg';
// import jemima4Img from '../../../static/images/presskit/jemima-4.jpg';
// import jemima4SmallImg from '../../../static/images/presskit/jemima-4small.jpg';
import Navbar from '../../Navbar/Navbar';

export default class Talks extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <main>
          <section className='container'>
            <h2 className='section-title'>
              Talks <span className='title-icon'>&#127908;</span>
            </h2>
            <p className='section-subtitle'>
              If you'd like me to speak at your conference, you can{' '}
              <a href='/#contact'>send me a message</a> or take a look at my{' '}
              <a href='presskit'>press kit</a>.
            </p>
          </section>
          <section id='upcoming-talks' className='container'>
            <h3 className='subsection-title'>Upcoming Talks (6)</h3>
            <div className='talks-table'>
              <div className='tr table-header'>
                <div className='th'>Conference</div>
                <div className='th'>Talk Title</div>
                <div className='th'>Date</div>
                <div className='th'>Location</div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <a href='https://dotall.com/sessions/craft-web-vitals-and-you'>
                    Dotall
                  </a>
                </div>
                <div className='td' data-attr='talk'>
                  Craft, Web Vitals and You
                </div>
                <div className='td' data-attr='date'>
                  29th September, 2021
                </div>
                <div className='td' data-attr='location'>
                  Amsterdam, Netherlands
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <a href='https://frontenddeveloperlove.com/'>
                    JSWorld Conference
                  </a>
                </div>
                <div className='td' data-attr='talk'>
                  The Evolution of JavaScript
                </div>
                <div className='td' data-attr='date'>
                  6th October, 2021
                </div>
                <div className='td' data-attr='location'>
                  Amsterdam, Netherlands
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <a href='https://reactlive.nl/'>React Conference</a>
                </div>
                <div className='td' data-attr='talk'>
                  Let's Talk About Web Components
                </div>
                <div className='td' data-attr='date'>
                  8th October, 2021
                </div>
                <div className='td' data-attr='location'>
                  Amsterdam, Netherlands
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <a href='https://reactadvanced.com/#speakers'>
                    React Advanced
                  </a>
                </div>
                <div className='td' data-attr='talk'>
                  Let's Talk About Web Components
                </div>
                <div className='td' data-attr='date'>
                  25th October, 2021
                </div>
                <div className='td' data-attr='location'>
                  London, England
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <a href='https://www.contentedlive.com/all-talks/jemima-abu'>
                    ContentEd
                  </a>
                </div>
                <div className='td' data-attr='talk'>
                  The Importance of Accessible Content
                </div>
                <div className='td' data-attr='date'>
                  25th November, 2021
                </div>
                <div className='td' data-attr='location'>
                  Bristol, England
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <a href='https://ndcoslo.com/speakers/jemima-abu'>NDC Oslo</a>
                </div>
                <div className='td' data-attr='talk'>
                  A Guide To Functional Programming
                </div>
                <div className='td' data-attr='date'>
                  29th November, 2021
                </div>
                <div className='td' data-attr='location'>
                  Oslo, Norway
                </div>
              </div>
            </div>
          </section>
          <section id='past-talks' className='container'>
            <h3 className='subsection-title'>Past Talks (31)</h3>
            <div className='talks-table'>
              <div className='tr table-header'>
                <div className='th'>Conference</div>
                <div className='th'>Talk Title</div>
                <div className='th'>Date</div>
                <div className='th'>Location</div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <a href='https://gotochgo.com/2021/speakers/1724/jemima-abu'>
                    GOTOpia Chicago
                  </a>
                </div>
                <div className='td' data-attr='talk'>
                  Accessible.JS
                </div>
                <div className='td' data-attr='date'>
                  20th April, 2021
                </div>
                <div className='td' data-attr='location'>
                  Online
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://www.facebook.com/infoshow/posts/10158956219453815'
                      target='_blank'
                      rel='noreferrer'>
                      InfoShow KTU
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  Accessibility-Driven Design Decisions
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-04-10'>10th April, 2021</time>
                </div>
                <div className='td' data-attr='location'>
                  Kaunas, Lithuania
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://webinale.de/speaker/jemima-abu/'
                      target='_blank'
                      rel='noreferrer'>
                      Webinale
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  You Can't Spell Accessibility Without CSS
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-12-09'>9th December, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  Berlin, Germany
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://www.codemotion.com/talks/let-s-get-functional-16338'
                      target='_blank'
                      rel='noreferrer'>
                      Codemotion Online - Italian Edition
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  Getting Functional with JavaScript
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-11-25'>25th November, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  Rome, Italy{' '}
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='http://jstalks.net/'
                      target='_blank'
                      rel='noreferrer'>
                      JS Talks Bulgaria
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  Accessible JS
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-11-21'>21st November, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  Sofia, Bulgaria{' '}
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://www.buildstuff.events/'
                      target='_blank'
                      rel='noreferrer'>
                      Build Stuff Lithuania
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  Building Accessible Components in React
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-11-13'>13th November, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  Vilnius, Lithuania{' '}
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://www.eventbrite.co.uk/e/front-endgineers-london-meetup-understanding-state-management-in-react-tickets-125154577711#'
                      target='_blank'
                      rel='noreferrer'>
                      Front Endgineers London
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  Understanding State Management in React
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-10-27'>27th October, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  London, United Kingdom{' '}
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://www.codemotion.com/talks/you-can-t-spell-accessibility-without-css-16342'
                      target='_blank'
                      rel='noreferrer'>
                      Codemotion Online
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  You Can't Spell Accessibility Without CSS
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-10-21'>21st October, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  Online
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://reactsummit.com/'
                      target='_blank'
                      rel='noreferrer'>
                      React Summit
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  React Components and How To Style Them
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-10-16'>16th October, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  Amsterdam, Netherlands
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://developer.cisco.com/devnetcreate/2020'
                      target='_blank'
                      rel='noreferrer'>
                      DevNet Create
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  Understanding Accessible UX
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-10-13'>13th October, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  California, USA{' '}
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://femtechconf.com/'
                      target='_blank'
                      rel='noreferrer'>
                      FemTechConf
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  Defining a Career Path in Technology
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-09-25'>25th September, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  Online
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://cityjsconf.org/2020'
                      target='_blank'
                      rel='noreferrer'>
                      CityJS
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  Accessible JS
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-09-15'>15th September, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  London, United Kingdom{' '}
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://reactlive.nl/'
                      target='_blank'
                      rel='noreferrer'>
                      React Live
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  State Management For React Applications
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-09-11'>11th September, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  Amsterdam, Netherlands{' '}
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://javascript-conference.com/react/react-components-and-how-to-style-them/'
                      target='_blank'
                      rel='noreferrer'>
                      International JavaScript Conference
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  React Components and How To Style Them
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-09-03'>3rd September, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  London, United Kingdom{' '}
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://2020.cascadiajs.com/speakers/jemima-abu'
                      target='_blank'
                      rel='noreferrer'>
                      Cascadia JS
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  Understanding Accessibility As A Concept
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-09-01'>1st September, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  Washington, USA{' '}
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://2020.frontcon.com/speaker/jemima-abu/'
                      target='_blank'
                      rel='noreferrer'>
                      Frontcon
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  A Guide To CSS Layouts
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-08-13'>13th August, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  Riga, Latvia
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://dsc.community.dev/university-of-lagos/'
                      target='_blank'
                      rel='noreferrer'>
                      DSC UNILAG
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  Getting Started with Web Accessibility
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-07-25'>25th July, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  Lagos, Nigeria
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://atndesign.github.io/Live-coders-conference/'
                      target='_blank'
                      rel='noreferrer'>
                      The Live Coders Conference
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  Manipulating Webpages using DevTools
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-06-20'>20th June, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  Online
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://webinale.de/web-design-frontend-development/you-cant-spell-accessibility-without-css/'
                      target='_blank'
                      rel='noreferrer'>
                      Webinale
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  You Can't Spell Accessibility Without CSS
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-06-18'>18th June, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  Online
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://www.womentech.net/en-gb/speaker/Jemima/Abu'
                      target='_blank'
                      rel='noreferrer'>
                      Women Tech Global Conference
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  Defining a Career Path in Technology
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-06-10'>10th June, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  Online
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://www.devsum.se/'
                      target='_blank'
                      rel='noreferrer'>
                      DevSum
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  React Components and How To Style Them
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-05-29'>29th May, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  Stockholm, Sweden
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://devaroundthesun.org/'
                      target='_blank'
                      rel='noreferrer'>
                      DevAroundTheSun
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  Manipulating Webpages using DevTools
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-05-12'>12th May, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  Online
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://ndcporto.com/'
                      target='_blank'
                      rel='noreferrer'>
                      NDC Porto
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  A Guide To CSS Layouts
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-04-24'>24th April, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  Porto, Portugal
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://javascript-conference.com/javascript-practices-tools/lets-get-func-y-with-plain-ol-javascript/'
                      target='_blank'
                      rel='noreferrer'>
                      International JavaScript Conference
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  Getting Functional with JavaScript
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-04-20'>20th April, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  London, United Kingdom
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://webofficehours.com/'
                      target='_blank'
                      rel='noreferrer'>
                      WebOfficeHours
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  Building Accessible Components in React
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-04-14'>14th April, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  Online
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://devclub.lv/'
                      target='_blank'
                      rel='noreferrer'>
                      DevClub.lv
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  Redux Middleware For React Applications
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-04-08'>8th April, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  Riga, Latvia
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://www.meetup.com/Frontend-Love-Meetups/'
                      target='_blank'
                      rel='noreferrer'>
                      Frontend Love Meetup
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  Building Accessible Components in React
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2020-04-02'>2nd April, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  Barcelona, Spain
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://www.womenwhocode.com/lagos'
                      target='_blank'
                      rel='noreferrer'>
                      Women Who Code Lagos
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  Panel Session: #techCareerJournies
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2019-02-26'>18th January, 2020</time>
                </div>
                <div className='td' data-attr='location'>
                  Lagos, Nigeria
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://gdg.community.dev/gdg-ibadan/'
                      target='_blank'
                      rel='noreferrer'>
                      DevFest Ibadan
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  Let's Get Func-y:
                  <br /> An Introduction To Functional Programming
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2019-11-09'>9th November, 2019</time>
                </div>
                <div className='td' data-attr='location'>
                  Ibadan, Nigeria
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://www.meetup.com/JAMStack-Lagos/'
                      target='_blank'
                      rel='noreferrer'>
                      JAMstack Lagos
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  Breaking Down Best Practices For JAMstack
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2019-09-14'>14th September, 2019</time>
                </div>
                <div className='td' data-attr='location'>
                  Lagos, Nigeria
                </div>
              </div>
              <div className='tr'>
                <div className='td' data-attr='conference'>
                  <h4>
                    <a
                      href='https://frontstack.io/'
                      target='_blank'
                      rel='noreferrer'>
                      Frontstack
                    </a>
                  </h4>
                </div>
                <div className='td' data-attr='talk'>
                  CSS Grid: A How-To Guide
                </div>
                <div className='td' data-attr='date'>
                  <time dateTime='2019-02-26'>26th February, 2019</time>
                </div>
                <div className='td' data-attr='location'>
                  Lagos, Nigeria
                </div>
              </div>
            </div>
          </section>
          <section id='slides' className='container'>
            <h3 className='subsection-title'>Slides (17)</h3>
            <ul className='main-text flex-list'>
              <li className='text'>
                <h4 className='text-header'>
                  <a href='talks/css-layouts'>A Guide To CSS Layouts</a>
                </h4>
                <p></p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a href='talks/accessible-js'>Accessible JS</a>
                </h4>
                <p></p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a href='talks/accessible-design'>
                    Accessibility-Driven Design Decisions
                  </a>{' '}
                  (<a href='talks/accessible-design-lt'>LT</a>)
                </h4>
                <p></p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a href='talks/functional-programming'>
                    An Introduction To Functional Programming
                  </a>
                </h4>
                <p></p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a href='talks/jamstack'>
                    Breaking Down Best Practices For JAMStack
                  </a>
                </h4>
                <p></p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a href='talks/accessible-react'>
                    Building Accessible Components in React
                  </a>
                </h4>
                <p></p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a href='talks/css-grid'>CSS Grid: A How-To Guide</a>
                </h4>
                <p></p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a href='talks/tech-career'>
                    Defining A Career Path In Technology
                  </a>
                </h4>
                <p></p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a href='talks/figuring-out-figma'>Figuring Out Figma</a>
                </h4>
                <p></p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a href='talks/functional-js'>
                    Getting Functional With JavaScript
                  </a>
                </h4>
                <p></p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a href='talks/web-accessibility'>
                    Getting Started with Web Accessibility{' '}
                  </a>
                </h4>
                <p></p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a href='talks/styling-react'>
                    React Components And How To Style Them
                  </a>
                </h4>
                <p></p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a href='talks/redux-middleware'>
                    Redux Middleware for React Applications
                  </a>
                </h4>
                <p></p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a href='talks/react-state'>
                    State Management For React Applications
                  </a>
                </h4>
                <p></p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a href='talks/understanding-accessibility'>
                    Understanding Accessibility As A Concept{' '}
                  </a>
                </h4>
                <p></p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a href='talks/accessible-ux'>Understanding Accessible UX</a>
                </h4>
                <p></p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a href='talks/css-accessibility'>
                    You Can't Spell Accessibility Without CSS
                  </a>
                </h4>
                <p></p>
              </li>
            </ul>
          </section>
          <section id='videos' className='container'>
            <h3 className='subsection-title'>Videos (12)</h3>
            <ul className='main-text'>
              <li className='text'>
                <h4 className='text-header'>
                  <a
                    href='https://youtu.be/YvgSTXWUyhc?t=7856'
                    target='_blank'
                    rel='noreferrer'>
                    Accessibility Driven Design Decisions
                  </a>
                </h4>
                <p>InfoShow NEXT | 10 Apr 2021 </p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a
                    href='https://www.youtube.com/watch?v=et0etF-Ufgc'
                    target='_blank'
                    rel='noreferrer'>
                    Aspiring Women Speakers Q&A
                  </a>
                </h4>
                <p>RW Aspiring Women Speakers | 18 Nov 2020 </p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a
                    href='https://www.youtube.com/watch?v=lFzWAsA76DU'
                    target='_blank'
                    rel='noreferrer'>
                    Accessible.JS
                  </a>
                </h4>
                <p>CityJS | 13 Oct 2020</p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a
                    href='https://www.youtube.com/watch?v=a0CmIEH44vg'
                    target='_blank'
                    rel='noreferrer'>
                    State Management For React Applications
                  </a>
                </h4>
                <p>React Live | 30 Sept 2020</p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a
                    href='https://www.youtube.com/watch?v=ueKHYRuAhQI'
                    target='_blank'
                    rel='noreferrer'>
                    Understanding Accessible UX
                  </a>
                </h4>
                <p>DevNet Create | 26 Sept 2020</p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a
                    href='https://www.youtube.com/watch?v=QSXdTuD9Rak'
                    target='_blank'
                    rel='noreferrer'>
                    Understanding Accessibility as a Concept
                  </a>
                </h4>
                <p>CascadiaJS 2020 | 18 Sept 2020</p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a
                    href='https://www.youtube.com/watch?v=qs2vHHBEOWI'
                    target='_blank'
                    rel='noreferrer'>
                    Manipulating Webpages using DevTools
                  </a>
                </h4>
                <p>The Live Coders Conference | 1 Jul 2020</p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a
                    href='https://www.youtube.com/watch?v=YGPxUK5Ksuw'
                    target='_blank'
                    rel='noreferrer'>
                    Defining A Career Path in Technology
                  </a>
                </h4>
                <p>WomenTech Network Global Conference | 22 Sept 2020</p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a
                    href='https://www.youtube.com/watch?v=mbKM39dFsKA'
                    target='_blank'
                    rel='noreferrer'>
                    Manipulating Webpages using DevTools
                  </a>
                </h4>
                <p>Dev Around The Sun | 9 Jun 2020</p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a
                    href='https://www.youtube.com/watch?v=8xAiU1CRFHs'
                    target='_blank'
                    rel='noreferrer'>
                    Building Accessible Components in React
                  </a>
                </h4>
                <p>WebOfficeHours | 3 May 2020</p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a
                    href='https://www.youtube.com/watch?v=8xAiU1CRFHs'
                    target='_blank'
                    rel='noreferrer'>
                    Redux Middleware for React Applications
                  </a>
                </h4>
                <p>DevClub LV | 19 Apr 2020</p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a
                    href='https://www.youtube.com/watch?v=B8kd33nUdcA&t=4128s'
                    target='_blank'
                    rel='noreferrer'>
                    Building Accessible Components in React
                  </a>
                </h4>
                <p>Frontend Love Meetup | 2 Apr 2020</p>
              </li>
            </ul>
          </section>
          <section id='other-media' className='container'>
            <h3 className='subsection-title'>Other media (2)</h3>
            <ul className='main-text'>
              <li className='text'>
                <h4 className='text-header'>
                  <a
                    href='https://www.notion.so/Jemima-Abu-55a276a4d8144c46b2bcdb866fa12990'
                    target='_blank'
                    rel='noreferrer'>
                    #HerCodeStories
                  </a>
                </h4>
                <p>Interview with #HerCodeStories on my journey in tech.</p>
              </li>
              <li className='text'>
                <h4 className='text-header'>
                  <a
                    href='https://hashnode.com/post/good-morning-with-jemima-abu-ckaz2x1m401uvl6s1vrxxf4xk'
                    target='_blank'
                    rel='noreferrer'>
                    Good Morning with Jemima Abu.
                  </a>
                </h4>
                <p>Interview with DevChronicles on my career and hobbies.</p>
              </li>
            </ul>
          </section>
        </main>
        <div className='page-nav container'>
          <a href='projects'>&#8592; Projects</a>
          <a href='articles'>Articles &#8594;</a>
        </div>
      </Fragment>
    );
  }
}
