import React, { Fragment } from 'react';
import Socialmedia from './Socialmedia/Socialmedia';
import { Link } from 'react-router-dom';

const PAGES = [
  {
    name: 'about',
    link: '/about',
  },
  {
    name: 'projects',
    link: '/projects',
  },
  {
    name: 'talks',
    link: '/talks',
  },
  {
    name: 'articles',
    link: '/articles',
  },
  {
    name: 'contact',
    link: '/#contact',
  },
];

const Navlinks = () => {
  const hideThemeContainer = () => {
    const themeContainer = document.querySelector('.theme-container');
    const themeSelectors = document.getElementsByClassName('theme-select');
    themeContainer.classList.remove('visible');
    [...themeSelectors].forEach((item) => {
      item.tabIndex = -1;
    });
  };

  const hideMenu = () => {
    const menu = document.querySelector('.nav-links');
    const menuButton = document.getElementById('menu-display');
    menu.classList.remove('visible');
    menuButton.classList.remove('active');
  };

  const menu = (e) => {
    hideThemeContainer();
    hideMenu();
    // e.preventDefault();
  };

  return (
    <Fragment>
      <Link to='/' className='nav-logo' title='Back to Homepage'>
        JEMIMA ABU
      </Link>
      <div className='nav-links' onClick={(e) => menu(e)}>
        {PAGES.map(({ name, link }, i) => {
          return (
            <Link key={i} to={link} className='link'>
              {name}
            </Link>
          );
        })}
        <Socialmedia />
      </div>
    </Fragment>
  );
};

export default Navlinks;
