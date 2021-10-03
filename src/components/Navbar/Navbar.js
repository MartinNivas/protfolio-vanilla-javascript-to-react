import React, { Component } from 'react';
import Navlinks from './Navlinks/Navlinks';
import Navcontrols from './Navcontrols/Navcontrols';
import Theme from './Theme/Theme';

export default class Navbar extends Component {
  render() {
    const hideThemeContainer = () => {
      const themeContainer = document.querySelector('.theme-container');
      themeContainer && themeContainer.classList.remove('visible');
      const themeSelectors = document.getElementsByClassName('theme-select');
      [...themeSelectors].forEach((item) => {
        item.tabIndex = -1;
      });
    };

    const setActiveSelector = (className) => {
      var selectedTheme = document.getElementById(`${className}-select`);
      const themeSelectors = document.getElementsByClassName('theme-select');
      [...themeSelectors].forEach((item) => {
        item.classList.remove('active');
      });
      selectedTheme && selectedTheme.classList.add('active');
      hideThemeContainer();
    };

    const getTheme = () => {
      const theme = localStorage.getItem('theme');
      theme && setActiveSelector(theme);
      const root = document.querySelector('html');
      root.className = theme;
      const shade = getComputedStyle(document.documentElement).getPropertyValue(
        '--shade-100'
      );
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute('content', shade);
    };

    getTheme();

    const setTheme = (className) => {
      console.log('setTheme', className);
      var root = document.getElementsByTagName('html')[0];
      root.className = className;
      localStorage.setItem('theme', className);
      const shade = getComputedStyle(document.documentElement).getPropertyValue(
        '--shade-100'
      );
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute('content', shade);
      setActiveSelector(className);
    };
    return (
      <nav className='visible'>
        <div className='container'>
          <a href='/' className='nav-logo' title='Back to Homepage'>
            JEMIMA ABU
          </a>
          <Navlinks />
          <Navcontrols />
          <Theme onClicked={(e) => setTheme(e)} />
        </div>
      </nav>
    );
  }
}
