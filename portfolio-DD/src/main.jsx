import React from 'react';
import ReactDOM from 'react-dom/client';
import { Welcome, IntroText, IntroAnimation } from './templates/Intro';
import { Carousel } from './templates/Repository';
import { AboutText, LangueageBol } from './templates/About';
import './assets/css/style.css';


ReactDOM.createRoot(document.getElementById('home')).render(
	<React.StrictMode>
		<IntroText />
		<IntroAnimation />

		<div className="click-me">
			<a href="#repository">
				<p>Click me</p>
			</a>
		</div>
	</React.StrictMode>
);


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

			<div className="click-me repo-link">
				<a href="#contact">
					<p>Contact me</p>
				</a>
			</div>
		</section>

		<section id="contact">
			<h2>Contact</h2>

			<div className="click-me contact-link">
				<a href="#titel">
					<p>Back Up</p>
				</a>
			</div>
		</section>
	</React.StrictMode>
);