import React from 'react';

const Navcontrols = () => {
  console.log('Navcontrols')
    const showMenu = () => {
      const menu = document.querySelector('.nav-links');
      const menuButton = document.getElementById('menu-display');
      menu.classList.add('visible');
      menuButton.classList.add('active');
    }

    const hideMenu = () => {
      const menu = document.querySelector('.nav-links');
      const menuButton = document.getElementById('menu-display');
      menu.classList.remove('visible');
      menuButton.classList.remove('active');
    }

    const showThemeContainer = () => {
      const themeContainer = document.querySelector('.theme-container');
      const themeSelectors = document.getElementsByClassName('theme-select');
      themeContainer.classList.add('visible');
      [...themeSelectors].forEach(item => {
        item.tabIndex = 0
      });
    }
    
    const hideThemeContainer = () => {
      const themeContainer = document.querySelector('.theme-container');
      const themeSelectors = document.getElementsByClassName('theme-select');
      themeContainer.classList.remove('visible');
      [...themeSelectors].forEach(item => {
        item.tabIndex = -1
      });
    }

    const themeDisplay = (e) => {
      hideMenu()
      const themeContainer = document.querySelector('.theme-container');
      if (themeContainer.classList.contains('visible')) {
        hideThemeContainer();
      } else {
        showThemeContainer();
      }
      // e.preventDefault();
    }

    const menuButton = (e) => {
      hideThemeContainer();
      const menu = document.querySelector('.nav-links');
      if (menu.classList.contains('visible')) {
        hideMenu();
      } else {
        showMenu();
      }
      e.preventDefault();
    }

    return (
      <div className='nav-controls'>
        <button
          id='menu-display'
          title='Show Menu'
          className='hamburger' onClick={(e) => menuButton(e)}></button>
        <button id='theme-display' className='control' onClick={(e) => themeDisplay(e)}>
          <i className='demo-icon icon-cog' title='Theme Select'></i>
        </button>
      </div>
    );
}

export default Navcontrols;
