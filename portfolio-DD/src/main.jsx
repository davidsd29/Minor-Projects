import React from 'react';
import ReactDOM from 'react-dom/client';
import {IntroText, IntroAnimation} from './templates/Intro';
import {Carousel} from './templates/Repository';
import {AboutText, LangueageBol} from './templates/About';
import './assets/css/style.css';


  ReactDOM.createRoot(document.getElementById('home')).render(
    <React.StrictMode>
        <IntroText />
        <IntroAnimation />

      <div>
          <a href="#repository" className='further'> 
            <p>Click me</p>
          </a>
      </div>
    </React.StrictMode>,
  );

  ReactDOM.createRoot(document.querySelector('main')).render(
    <React.StrictMode>
      <section id="github-repos">
        <Carousel />

        <div>
            <a href="#about" className='further'> 
              <p>Click me</p>
            </a>
        </div>
      </section>

      <section id='about'>
        <h2>About me</h2>

        <div>
          <AboutText />
          <LangueageBol />
        </div>
          
        <div>
            <a href="#contact" className='further'>
              <p>Contact me</p>
            </a>
        </div>

      </section>

    </React.StrictMode>,
  );


