import '../assets/css/style.css';
import logo from '../assets/img/DC.png';

const welcome = {
	screen: document.querySelector('.welcome'),
	titel: document.querySelector('.welcome h1'),
	titelSpan: document.querySelectorAll('.welcome span'),
};


function IntroText() {

  return (
    <section className="intro-text">
      <h1 aria-label="It's me, David, frontend developer" id='titel'>
        <span>I</span>
        <span>t</span>
        <span className="last-letter">'s</span>

        <span>m</span>
        <span>e,</span>
        <br></br>

        <span>D</span>
        <span>a</span>
        <span>v</span>
        <span>i</span>
        <span className="last-letter">d</span>
  	    
        <span>D,</span>
        <br></br>

        <span>f</span>
        <span>r</span>
        <span>o</span>
        <span>n</span>
        <span>t</span>
        <span>e</span>
        <span>n</span>
        <span className="last-letter">d</span>

        <span>d</span>
        <span>e</span>
        <span>v</span>
        <span>e</span>
        <span>l</span>
        <span>o</span>
        <span>p</span>
        <span>e</span>
        <span>r</span>
      </h1>

      <a href="#contact" className='btn'>Contact me</a>
    </section>
  )
}

function Welcome() {

  return (
     <section className="welcome">
      <div>
        <img src={logo} alt="David Dankwah logo" />
        <h1>
          {/* da vid cus toms */}
          <span>Da</span>
          <span>vid</span>
          <span>Cus</span>
          <span>toms</span>
          <span></span>
        </h1>
      </div>
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

window.addEventListener('load', () => {
  console.log("hakko");
	welcome.titelSpan.forEach((span, index) => {
		setTimeout(() => {

			setTimeout(() => {
				span.classList.add('active');
			}, (index + 1) * 400);

			setTimeout(() => {
				span.classList.remove('active');
				span.classList.remove('fade');
			}, (index + 1) * 50);
		});

	}, 2000);

  setTimeout(() => {
    console.log(welcome)
    welcome.screen.style.top = "-100vh";
  }, 2300);
});

export {
  Welcome,
  IntroText, 
  IntroAnimation
}
