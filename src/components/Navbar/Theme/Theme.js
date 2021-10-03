import React from 'react';

const Theme = (props) => {
  console.log('props', props);

  return (
    <div className='theme-container'>
      <button
        className='light theme-select'
        id='light-select'
        onClick={() => props.onClicked('light')}
        aria-label='Set light theme'>
        <div className='theme-label'>Light</div>
        <div className='theme'>
          <div className='color background'></div>
          <div className='color shade-100'></div>
          <div className='color shade-300'></div>
          <div className='color shade-500'></div>
          <div className='color text'></div>
        </div>
      </button>
      <button
        className='dark theme-select'
        id='dark-select'
        onClick={() => props.onClicked('dark')}
        // onKeyDown={(e) => () => props.onClickedKey(e, 'dark')}
        aria-label='Set dark theme'>
        <div className='theme-label'>Dark</div>
        <div className='theme'>
          <div className='color background'></div>
          <div className='color shade-100'></div>
          <div className='color shade-300'></div>
          <div className='color shade-500'></div>
          <div className='color text'></div>
        </div>
      </button>
      <button
        className='brown theme-select'
        id='brown-select'
        onClick={() => props.onClicked('brown')}
        aria-label='Set brown theme'>
        <div className='theme-label'>Brown</div>
        <div className='theme'>
          <div className='color background'></div>
          <div className='color shade-100'></div>
          <div className='color shade-300'></div>
          <div className='color shade-500'></div>
          <div className='color text'></div>
        </div>
      </button>
      <button
        className='green theme-select'
        id='green-select'
        onClick={() => props.onClicked('green')}
        aria-label='Set green theme'>
        <div className='theme-label'>Green</div>
        <div className='theme'>
          <div className='color background'></div>
          <div className='color shade-100'></div>
          <div className='color shade-300'></div>
          <div className='color shade-500'></div>
          <div className='color text'></div>
        </div>
      </button>
      <button
        className='pink theme-select'
        id='pink-select'
        onClick={() => props.onClicked('pink')}
        aria-label='Set pink theme'>
        <div className='theme-label'>Pink</div>
        <div className='theme'>
          <div className='color background'></div>
          <div className='color shade-100'></div>
          <div className='color shade-300'></div>
          <div className='color shade-500'></div>
          <div className='color text'></div>
        </div>
      </button>
      <button
        className='neon theme-select'
        id='neon-select'
        onClick={() => props.onClicked('neon')}
        aria-label='Set pink theme'>
        <div className='theme-label'>Neon</div>
        <div className='theme'>
          <div className='color background'></div>
          <div className='color shade-100'></div>
          <div className='color shade-300'></div>
          <div className='color shade-500'></div>
          <div className='color text'></div>
        </div>
      </button>
    </div>
  );
};

export default Theme;
