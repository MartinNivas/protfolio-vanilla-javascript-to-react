export default function IndexUtil() {
  alert('came in');
  const root = document.querySelector('html');
  const body = document.querySelector('body');
  const mainNav = document.querySelector('nav');
  const menu = document.querySelector('.nav-links');
  const menuButton = document.getElementById('menu-display');
  const themeDisplay = document.getElementById('theme-display');
  const themeContainer = document.querySelector('.theme-container');
  const themeSelectors = document.getElementsByClassName('theme-select');

  mainNav && mainNav.classList.add('js-nav');

  const getTheme = () => {
    const theme = localStorage.getItem('theme');
    theme && setActiveSelector(theme);
    root.className = theme;
    const shade = getComputedStyle(document.documentElement).getPropertyValue(
      '--shade-100'
    );
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute('content', shade);
  };

  const setTheme = (className) => {
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

  const setActiveSelector = (className) => {
    var selectedTheme = document.getElementById(`${className}-select`);
    if (themeSelectors) {
      [...themeSelectors].forEach((item) => {
        item && item.classList.remove('active');
      });
    }
    selectedTheme && selectedTheme.classList.add('active');
    hideThemeContainer();
  };

  const showThemeContainer = () => {
    themeContainer && themeContainer.classList.add('visible');
    [...themeSelectors].forEach((item) => {
      item.tabIndex = 0;
    });
  };

  const hideThemeContainer = () => {
    themeContainer && themeContainer.classList.remove('visible');
    if (themeSelectors) {
      [...themeSelectors].forEach((item) => {
        item.tabIndex = -1;
      });
    }
  };

  const showMenu = () => {
    menu.classList.add('visible');
    menuButton.classList.add('active');
  };

  const hideMenu = () => {
    menu.classList.remove('visible');
    menuButton.classList.remove('active');
  };

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

  getTheme();

  themeDisplay.addEventListener('click', function () {
    hideMenu();
    if (themeContainer.classList.contains('visible')) {
      hideThemeContainer();
    } else {
      showThemeContainer();
    }
  });

  menuButton.addEventListener('click', function () {
    hideThemeContainer();
    if (menu.classList.contains('visible')) {
      hideMenu();
    } else {
      showMenu();
    }
  });

  menu.addEventListener('click', function () {
    hideThemeContainer();
    hideMenu();
  });

  window.addEventListener('scroll', () => {
    handleNavScroll();
  });
}
