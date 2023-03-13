import React from 'react';
import ReactDOM from 'react-dom/client';
import {IntroText, IntroAnimation} from './templates/Intro';
import {Carousel} from './templates/Repository';
import {RepoCard} from './templates/Card';
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

  ReactDOM.createRoot(document.getElementById('repository')).render(
    <React.StrictMode>
        <Carousel />
        {/* <RepoCard /> */}
        
      <div>
          <a href="#about" className='further'> Click me</a>
      </div>
    </React.StrictMode>,
  );

  ReactDOM.createRoot(document.getElementById('about')).render(
    <React.StrictMode>
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
    </React.StrictMode>,
  );


