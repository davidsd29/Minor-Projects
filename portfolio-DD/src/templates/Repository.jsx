import {ReplanishData, GetSelectedGitRepo} from './API/Fetch';
import {RepoCard} from './Card';
import React from 'react';

// import ReactDOM from 'react-dom/client';
const main = document.querySelector('main');
const repoInfo  = await ReplanishData("repo");
const readme = {
     closeBtn: document.querySelector("#readMe .close"),
     frame: document.getElementById("#readMe")
}

const cards = document.querySelectorAll(".card")
 console.log(cards)
let repoCount = repoInfo.length;

// console.log(repoInfo)

	// const infoArray = repoInfo.map((item) => {
	// 	return ReplanishData(item);
	// });

  // console.log(infoArray)

// document.body.style.setProperty('--eye'+sliderID+'-value',sliderValue+'%');
// document.body.style.setProperty('--repoLength'+repoCount);
main.setAttribute('data-repo-length', repoCount)



function Carousel() {
  
  return (
    <section id="repository">
        <h2>Github Repository's</h2>

      <div className='carousel-container'>

          <div id="carousel"> 

            <RepoCard />
            <RepoCard />
            <RepoCard />
            <RepoCard />
            <RepoCard />
            <RepoCard />
            <RepoCard />
            <RepoCard /> 
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
        console.log(" ik ben klaar");
        GetSelectedGitRepo("repo", repoID);
        readme.frame.classList.add("active");
    }) 
}


readme.closeBtn.addEventListener("click", () => {
    readme.frame.classList.remove("active");
});


cards.forEach((card) => {
    card.addEventListener("change", (e) => {
        if (e.target.checked) {
            e.target.parentElement.classList.add("checked")
            OpenReadMe(e.target.parentElement);
        }
    });
});

export {
  Carousel
}
