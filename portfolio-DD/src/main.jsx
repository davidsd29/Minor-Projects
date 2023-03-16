import React from 'react';
import ReactDOM from 'react-dom/client';
import { Welcome } from './templates/Intro';
import { Carousel } from './templates/Repository';
import { AboutText, LangueageBol } from './templates/About';
import './assets/css/style.css';

let typingeffect = new Typed(".multiText", {
	strings : ["david", "frontend Developer", "designer", "awsome!"],
	loop: true,
	typeSpeed: 100,
	backSpeed: 80,
	startDelay: 1000,
	backDelay: 1500
});


ReactDOM.createRoot(document.querySelector('main')).render(
	<React.StrictMode>
		{/* <Welcome /> */}

		<section id="github-repos">
			<Carousel />

			<div className="click-me">
				<a href="#about">
					<p>Click me</p>
				</a>
			</div>
		</section>

		<section id="about">
			<h2>About me</h2>

			<div>
				<AboutText />
				<LangueageBol />
			</div>

			<div className="click-me back-up">
				<a href="#home">
					<p>Back Up</p>
				</a>
			</div>
		</section>
	</React.StrictMode>
);