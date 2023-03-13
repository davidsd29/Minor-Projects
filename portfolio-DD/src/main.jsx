import React from 'react';
import ReactDOM from 'react-dom/client';
import {IntroText, IntroAnimation} from './templates/Intro';
import {Carousel} from './templates/Repository';
import {RepoCard} from './templates/Card';
import './assets/css/style.css';


  ReactDOM.createRoot(document.getElementById('home')).render(
    <React.StrictMode>
        <IntroText />
        <IntroAnimation />

      <div>
          <a href="#repository" className='further'> Click me</a>
      </div>
    </React.StrictMode>,
  );

  ReactDOM.createRoot(document.getElementById('repository')).render(
    <React.StrictMode>
        {/* <Carousel /> */}
        <RepoCard />
        
      <div>
          <a href="#repository" className='further'> Click me</a>
      </div>
    </React.StrictMode>,
  );


