import React, { Component } from 'react';

export default class ContactSection extends Component {
  render() {
    return (
      <section id='contact'>
        <div className='container'>
          <div className='title-container scroll-in'>
            <h2 className='section-title'>
              Contact <span className='title-icon'>&#128231;</span>
            </h2>
            <p className='section-subtitle'>
              Invite me to speak at your conference, tell me about your
              available job opportunities or just say hi :)
            </p>
          </div>
          <div className='contact-content'>
            <div className='form-container scroll-in'>
              <noscript>
                This form won't work without JavaScript but you can send me a
                message on{' '}
                <a
                  href='https://twitter.com/messages/compose?recipient_id=128661296'
                  style={{'text-decoration': 'underline'}}>
                  Twitter
                </a>{' '}
                or{' '}
                <a
                  href='https://www.linkedin.com/in/jemimaabu'
                  style={{'text-decoration': 'underline'}}>
                  LinkedIn
                </a>
                .
              </noscript>
              <p className='success-message'></p>
              <form
                name='contact'
                method='POST'
                data-netlify='true'
                action='/?success#contact'>
                <div className='input-container'>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    required
                    className='form-input'
                  />
                  <label htmlFor='name'>Name:</label>
                </div>
                <div className='input-container'>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    className='form-input'
                  />
                  <label htmlFor='email'>Email:</label>
                </div>
                <div className='input-container'>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    className='form-input'
                  />
                  <label htmlFor='subject'>Subject (optional):</label>
                </div>
                <div className='input-container'>
                  <textarea
                    required
                    maxLength='1000'
                    id='message'
                    name='message'
                    className='form-input'></textarea>
                  <label htmlFor='message'>
                    Message:
                    <br />{' '}
                  </label>
                  <small>
                    <span id='message-count'>1000</span> characters
                  </small>
                </div>
                <div>
                  <button type='submit' className='link-btn'>
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className='links-container scroll-in'>
              <h3>Other links:</h3>
              <ul>
                <li>
                  <a href='presskit' className='contact-link'>
                    view my presskit
                  </a>
                </li>
                <li>
                  <a
                    href='https://drive.google.com/file/d/1Ge2lk6c3_TyLs8J4I5N0aczREiQvuWqpOf2eUnWwzgQ/view'
                    className='contact-link'>
                    download my resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
