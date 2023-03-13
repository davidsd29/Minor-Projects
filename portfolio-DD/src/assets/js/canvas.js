// import TagCanvas from 'https://www.goat1000.com/tagcanvas.min.js';

export default function createCanvas() {
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

createCanvas();