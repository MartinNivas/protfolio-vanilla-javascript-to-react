import './Home.scss';
import React, { Fragment, useEffect, useLayoutEffect } from 'react';
import { ReactComponent as Wavetop } from '../../../static/svg/Wavetop.svg';
import { ReactComponent as Wavebottom } from '../../../static/svg/Wavebottom.svg';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import About from './About/AboutSection';
import Contact from './Contact/ContactSection';
import Projects from './Projects/ProjectSection';
import Talks from './Talks/Talks';
import Articles from './Articles/Articles';

const Home = () => {
  useEffect(() => {
    const body = document.querySelector('#root');
    body.scrollIntoView(
      {
        behavior: 'smooth',
      },
      500
    );
    const hashValue = window.location.hash;
    console.log(hashValue);
    if (
      typeof hashValue !== 'undefined' &&
      hashValue !== null &&
      hashValue !== '' &&
      hashValue !== '/'
    ) {
      let target = document.querySelector(hashValue);
      console.log(target);
      if (target) {
        let headerOffset = 100;
        let elementPosition = target.offsetTop;
        let offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          // behavior: 'smooth',
        });
      }
    }
  }, []);

  setTimeout(() => {
    const header = document.querySelector('header');
    header.classList.add('js-fixed');

    const scrollElements = document.querySelectorAll('.scroll-in');
    scrollElements.forEach((el) => {
      el.classList.add('js-opacity');
    });
  }, 1000);

  useLayoutEffect(() => {
    let previousScrollPosition = 0;

    const isScrollingDown = () => {
      let scrolledPosition = window.scrollY;
      let isScrollDown;

      if (scrolledPosition > previousScrollPosition) {
        isScrollDown = true;
      } else {
        isScrollDown = false;
      }
      previousScrollPosition = scrolledPosition;
      return isScrollDown;
    };

    const handleNavScroll = () => {
      const mainNav = document.querySelector('nav');
      mainNav.classList.add('js-nav');
      if (mainNav.classList.contains('visible')) {
        if (isScrollingDown()) {
          mainNav.classList.add('scroll-down');
          mainNav.classList.remove('scroll-up');
        } else {
          mainNav.classList.add('scroll-up');
          mainNav.classList.remove('scroll-down');
        }
      } else {
        mainNav.classList.remove('scroll-up');
        mainNav.classList.remove('scroll-down');
      }
    };
    window.addEventListener('scroll', handleNavScroll);
    return () => {
      window.removeEventListener('scroll', handleNavScroll);
    };
  }, []);

  const elementInViewport = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add('scrolled');
  };

  const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
  };

  useLayoutEffect(() => {
    var throttleTimer;

    const throttle = (callback, time) => {
      if (throttleTimer) return;

      throttleTimer = true;
      setTimeout(() => {
        callback();
        throttleTimer = false;
      }, time);
    };

    const handleScrollAnimation = () => {
      const scrollElements = document.querySelectorAll('.scroll-in');
      scrollElements.forEach((el) => {
        if (elementInViewport(el, 1.25)) {
          displayScrollElement(el);
        } else if (elementOutofView(el)) {
          hideScrollElement(el);
        }
      });
    };

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

    const handleHeaderScroll = () => {
      const header = document.querySelector('header');
      const fixedHeader = document.querySelector('.fixed-header');
      const headerBottomOffset = header.getBoundingClientRect().bottom;
      if (headerBottomOffset <= fixedHeader.clientHeight) {
        fixedHeader.classList.add('scrolled');
      } else {
        fixedHeader.classList.remove('scrolled');
      }
    };

    const handleScroll = () => {
      handleHeaderScroll();
      handleVisibleNav();
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery && !mediaQuery.matches) {
        throttle(handleScrollAnimation, 250);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onScrollClick = () => {
    const element = document.querySelector('#about');
    element.scrollIntoView(
      {
        behavior: 'smooth',
      },
      500
    );
  };

  return (
    <Fragment>
      <Header onClickScroll={(e) => onScrollClick(e)} />
      <Navbar />
      <main>
        <About />
        <div className='wave-border top'>
          <Wavetop />
        </div>
        <Projects />
        <div className='wave-border bottom'>
          <Wavebottom />
        </div>
        <Talks />
        <div className='wave-border top'>
          <Wavetop />
        </div>
        <Articles />
        <div className='wave-border bottom'>
          <Wavebottom />
        </div>
        <Contact />
      </main>
    </Fragment>
  );
};

export default Home;
