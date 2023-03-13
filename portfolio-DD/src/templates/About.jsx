import Canvas from '../assets/js/canvas.js';
const font = {
    big: "font-size: 2.83ex"
}

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

        <p>I am a frontend developer who is always hungry to learn new things. I am currently in my 3rd year studying Communication and Media Design at the Hogeschool van Amsterdam.<br></br>
        What I love about the function is that there is no routine. Everyday I get to learn something new and everyday I get to be creative.
        I’m good at learning new skills quickly and making it my own, so it’s never too hard for me to pick up a new skill set or learn how to use a new tool. </p>

        <q>The best way to find out is to do it</q>

    </article>

    
  )
}

function LangueageBol() {
    Canvas();
  return (
      <aside>
        <div id="myCanvasContainer">
            <canvas width="500" height="500" id="myCanvas">
                <p>Kein beetje info over mij</p>
            </canvas>
        </div>

        <div id="canvasTags">
            <a href="#">22 jaar</a>
            <a href="#">Bootstrap</a>
            <a href="#">Customizing</a>
            <a href="#">Motor</a>
            <a href="#">SASS</a>
            <a href="#">Wordpress</a>
            <a href="#">HTML</a>
            <a href="#">javascript</a>
            <a href="https://www.overhaus.nl/" target="_blank" rel="noopener">Overhaus</a>
            <a href="#">Wacom</a>
            <a href="#">Drawing</a>
            <a href="#">Design</a>
            <a href="#">csb</a>
            <a href="#">CSS</a>
            <a href="#">PHP</a>
            <a href="https://www.rocva.nl/MBO-onderwijs/MBO-Colleges/MBO-College-Amstelland" target="_blank" rel="noopener">ROC</a>
            <a href="https://www.hva.nl/" target="_blank" rel="noopener">HVA</a>
            <a href="#">VS Code</a>
            <a href="https://www.hva.nl/" target="_blank" rel="noopener">Student</a>
            <a href="https://go2people.nl/" target="_blank" rel="noopener">Go2people</a>
            <a href="#">Hogeschool Rotterdam</a>
        </div>        
    </aside>
  )
}

export { 
    AboutText,
    LangueageBol
}
