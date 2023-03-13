import '../assets/css/style.css'

function IntroText() {

  return (
    <section className="intro-text">
      <h1 aria-label="It's me, David, frontend developer">
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

      <a href="#Contact" className='btn'>Contact me</a>
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
  IntroText, 
  IntroAnimation
}
