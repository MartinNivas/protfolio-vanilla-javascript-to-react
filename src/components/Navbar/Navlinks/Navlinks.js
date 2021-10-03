import React from 'react';

const Navlinks = () => {
  
    const hideThemeContainer = () => {
      const themeContainer = document.querySelector('.theme-container');
      const themeSelectors = document.getElementsByClassName('theme-select');
      themeContainer.classList.remove('visible');
      [...themeSelectors].forEach(item => {
        item.tabIndex = -1
      });
    }

    const hideMenu = () => {
      const menu = document.querySelector('.nav-links');
      const menuButton = document.getElementById('menu-display');
      menu.classList.remove('visible');
      menuButton.classList.remove('active');
    }

    const menu = (e) => {
      hideThemeContainer();
      hideMenu();
      // e.preventDefault();
    }

    return (
      <div className='nav-links' onClick={(e) => menu(e)}>
        <a href='about' className='link'>
          about
        </a>
        <a href='projects' className='link'>
          projects
        </a>
        <a href='talks' className='link'>
          talks
        </a>
        <a href='articles' className='link'>
          articles
        </a>
        <a href='/#contact' className='link'>
          contact
        </a>
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
      </div>
    );
}

export default Navlinks
