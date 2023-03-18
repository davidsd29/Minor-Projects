import { useEffect } from 'react'


function AboutText() {

  return (
    <article >
        <div>
            <h3>Name</h3>
            <h3>Age</h3>
        </div>        
        
        <div>
            <p>David Dankwah</p>
            <p>23 years</p>
        </div>

        <p>
            You might be thinking nice and all but what exactly am I looking at ?
            This is my github account with custom jacket on. I show all my repositories through a Yu-Gi-Oh card. To retrieve the information I use the <span>github API </span>
            I created this page with the builder tool <span>Vite</span> I wanted to learn how to work with it. Also with the coding language <span>React</span>. 
        </p><br></br>
            
        <p>
            This is where I want to explore even further and expand my knowledge of it. The languages I used for this project are <span>React</span>, <span>HTML</span>, <span>SCSS</span>, <span>CSS</span>, <span>Javascript</span>.
            For this project, I was given a week to create it. 
            For this project, I was given a week to make it. Which was a challenge but it certainly turned out well.
        </p><br></br>

        <q> The best way to find out is to do it </q>

    </article>  
  )
}


function LangueageBol() {

  useEffect(() => {
    CreateCanvas();
  }, []);

  return (
      <aside>
        <div id="myCanvasContainer">
            <canvas width="400" height="400" id="myCanvas">
                <p>A little bit info about me</p>
            </canvas>
        </div>

        <div id="canvasTags">
            <a href="#">Bootstrap</a>
            <a href="#">Customizing</a>
            <a href="#">Motor</a>
            <a href="#">SASS</a>
            <a href="#">React</a>
            <a href="#">Vite</a>
            <a href="#">Wordpress</a>
            <a href="#">HTML</a>
            <a href="#">Javascript</a>
            <a href="https://www.overhaus.nl/" target="_blank">Overhaus</a>
            <a href="#">Wacom</a>
            <a href="#">Designer</a>
            <a href="#">Drawing</a>
            <a href="#">csb</a>
            <a href="#">C#</a>
            <a href="#">Unity</a>
            <a href="#">CSS</a>
            <a href="#">PHP</a>
            <a href="https://www.rocva.nl/MBO-onderwijs/MBO-Colleges/MBO-College-Amstelland" target="_blank">ROC</a>
            <a href="https://www.hva.nl/" target="_blank">HVA</a>
            <a href="#">VS Code</a>
            <a href="https://www.hva.nl/" target="_blank">Student</a>
            <a href="https://go2people.nl/" target="_blank">Go2people</a>
            <a href="https://www.hogeschoolrotterdam.nl/" target="_blank">Hogeschool Rotterdam</a>
        </div>        
    </aside>
  )
}


function CreateCanvas() {
    // words canvas
    let myCanvas = document.getElementById("myCanvas"),
        canvasContainer = document.getElementById("myCanvasContainer");

    let color = "#08fdd8",
        outlineColour = "#e60de6";
    
    //check if myCanvas exits
    if (myCanvas !== null) {

        let canvasOptions = {
            outlineColour: outlineColour,
            reverse: true,
            depth: 0.6,
            maxSpeed: 0.05,
            textFont: null,
            textColour: color,
            weight: true,
        };

        try {
            TagCanvas.Start('myCanvas', 'canvasTags', canvasOptions);
        } catch (e) {
            console.log(e)
            // something went wrong, hide the canvas container
            canvasContainer.style.display = 'none';
        }
    } 
}

export { 
    AboutText,
    LangueageBol
}
