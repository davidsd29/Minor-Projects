import {ReplanishData, GetSelectedGitRepo} from './API/Fetch';
import {RepoCard} from './Card';
import React, {useEffect, useRef} from 'react';

const main = document.querySelector('main');
const repoInfo  = await ReplanishData("repo");
const readme = {
     closeBtn: document.querySelector("#readMe .close"),
     frame: document.getElementById("readMe")
}
console.log(readme)

let animationIsPlaying = true;

const cards = document.querySelectorAll(".card")
let repoCount = repoInfo.length;

// document.body.style.setProperty('--eye'+sliderID+'-value',sliderValue+'%');
// document.body.style.setProperty('--repoLength'+repoCount);
main.setAttribute('data-repo-length', repoCount);

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     // create a ref to store the textInput DOM element
//     this.carousel = React.createRef();
//   }

// }

//   const node = this.carousel.current;
//   console.log(node)
// const carousel = this; 
// console.log(carousel)
function Carousel() {

  // const carouselRef = useRef(null);
  // const card = useRef(null);

  const cardItems = repoInfo.map(item => {
    return <RepoCard data={item}/>
  });

  // const carousel = document.getElementById("carousel");
  
  // useEffect(() => {

  //   carouselRef.current.style.animation = " rotation 20s infinite linear";

  //   if (!animationIsPlaying) {    
  //       carouselRef.current.style.animation.pause();
  //   }
  //   // carouselRef.current.style.backgroundColor = 'green'
  //   console.log(carouselRef)
  // }, []);
  
  return (
    <section id="repository">
        <h2>Github Repository's</h2>

      <div className='carousel-container'>

          <div id="carousel"> 
            {/* check if card items is empty */}
            {cardItems ? cardItems : <p>Loading items...</p>}
          </div>
      </div>

      <Scanner />
    </section>
  )
}


function Scanner() {

  return (
    <div className="scanner">
      <div>
        <span>
          <table>
            <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td className="dot"></td>
              <td className="dot"></td>
              <td className="dot"></td>
              <td className="dot"></td>
            </tr>
            <tr>
              <td></td>
              <td className="dot"></td>
              <td className="dot"></td>
              <td className="dot"></td>
              <td className="dot"></td>
            </tr>
            <tr>
              <td></td>
              <td className="dot"></td>
              <td className="dot"></td>
              <td className="dot"></td>
              <td className="dot"></td>
            </tr>
            </tbody>
			    </table>
        <div className='scan-line'></div>

        </span>
      </div>
      <div id='bottom'></div>

    </div>
  )
}


function OpenReadMe(card) {
    const repoID = Number(card.getAttribute('data-value'));
    card.addEventListener("animationend", () => {
        GetSelectedGitRepo("repo", repoID);
        readme.frame.classList.add("active");
    });
}


// window.addEventListener('load', () => {

readme.closeBtn.addEventListener("click", () => {
    readme.frame.classList.remove("active");
    cards.forEach((card) => { 
      if (card.checked) card.checked = false; 
    });
});


cards.forEach((card) => {
    card.addEventListener("change", (e) => {
        if (e.target.checked) {
            e.target.parentElement.classList.add("scan")
            OpenReadMe(e.target.parentElement);
        }
    });
});

// })

export {
  Carousel
}
