import ReplanishData from './API/Fetch';
import {RepoCard} from './Card';
import {DisplayCards} from './DisplayCards';
import React from 'react';

import ReactDOM from 'react-dom/client';


const repoInfo  = await ReplanishData("repo");
console.log(repoInfo)

	const infoArray = repoInfo.map((item) => {
		return ReplanishData(item);
	});

  // console.log(infoArray)

  
  function Carousel() {


  
  return (
    <section id='container'>
        <h2>Github Repository's</h2>

        <div id="carousel"> 

          <RepoCard />
                  <RepoCard />
                  <RepoCard />
                  <RepoCard />
                  <RepoCard /> 
                     <p>3D Tiktok Carousel</p>
        </div>
        <div id="ground"></div>
    </section>
  )
}



function IntroAnimation() {

  return (
    <section className="intro-animation">
      <div></div>
    </section>
  )
}

export {
  Carousel
}
