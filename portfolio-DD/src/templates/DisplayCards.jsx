let radius = 240; // how big of the radius
let autoRotate = true;
let rotateSpeed = -60; // unit: seconds/360 degrees
let cardWidth = 120; // width of images (unit: px)
let cardHeight = 170; // height of images (unit: px)


// animation start after 1 sec
setTimeout(init, 1000);

const carousel = {
    spinContainer: document.getElementById('carousel'),
    dragContainer: document.getElementById('container'),

}

const cards = document.querySelectorAll("#card")

console.log(cards)

let scaleX, scaleY, nX, nY, decreaseScaleX = 0,
    decraseScaleY = 0,
    translateX = 0,
    translateY = 10;

// Size of ground - depend on radius
const ground = document.getElementById('ground');
// ground.style.width = radius * 3 + "px";
// ground.style.height = radius * 3 + "px";
console.log(ground)

carousel.spinContainer.style.width = cardWidth + "px";
carousel.spinContainer.style.height = cardHeight + "px";

function init(delayTime) {
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.transform = "rotateY(" + (i * (360 / cards.length)) + "deg) translateZ(" + radius + "px)";
    cards[i].style.transition = "transform 1s";
    cards[i].style.transitionDelay = delayTime || (cards.length - i) / 4 + "s";
  }
}


function applyTransform(obj) {
  // Constraining the angle of camera (between 0 and 180)
  if(translateY > 180) translateY = 180;
  if(translateY < 0) translateY = 0;

  // Apply the angle
  obj.style.transform = "rotateX(" + (-translateY) + "deg) rotateY(" + (translateX) + "deg)";
}


function playSpin(yes) {
    carousel.spinContainer.style.animationPlayState = (yes?'running':'paused');
}

// Check auto spin
if (autoRotate) {
  let animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  carousel.spinContainer.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// Event is fired when a pointer becomes active
export function DisplayCards() {
        // Cancels timed, repeating action
        clearInterval(carousel.dragContainer.timer);
       
        var scaleX = e.clientX, scaleY = e.clientY;

        this.addEventListener("pointermove", (e) => {
            e = e || window.event;
            var nX = e.clientX, nY = e.clientY;
            decreaseScaleX = nX - scaleX;
            decraseScaleY = nY - scaleY;
            translateX += decreaseScaleX * 0.1;
            translateY += decraseScaleY * 0.1;
            applyTransform(carousel.dragContainer);
            scaleX = nX;
            scaleY = nY;
        });

        this.addEventListener("pointerup", (e) => {
            // Fepeatedly calls a function
            carousel.dragContainer.timer = setInterval(() => {
                decreaseScaleX *= 0.95;
                decraseScaleY *= 0.95;
                translateX += decreaseScaleX * 0.1;
                translateY += decraseScaleY * 0.1;
                applyTransform(carousel.dragContainer);
                playSpin(false);
                if (Math.abs(decreaseScaleX) < 0.5 && Math.abs(decraseScaleY) < 0.5) {
                    clearInterval(carousel.dragContainer.timer);
                    playSpin(true);
                }
            }, 17);
            this.onpointermove = this.onpointerup = null;
        });

        return false;
    }


document.addEventListener("wheel",(e) => {
  e = e || window.event;
  var d = e.wheelDelta / 20 || -e.detail;
  radius += d;
  init(1);
});