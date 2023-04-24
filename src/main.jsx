import React from 'react';
import ReactDOM from 'react-dom/client';
import { AboutText, LangueageBol, Carousel, ReadMe } from './components';
import './assets/css/style.css';

let typingeffect = new Typed('.multiText', {
	strings: ['david', 'frontend Developer', 'designer', 'awsome!'],
	loop: true,
	typeSpeed: 100,
	backSpeed: 80,
	startDelay: 1000,
	backDelay: 1500,
});

ReactDOM.createRoot(document.querySelector('body')).render(
	<React.StrictMode>
		<ReadMe />

		<main>
			<section id="github-repos">
				<Carousel />

				<div className="click-me">
					<a href="#about">
						<p>Click</p>
					</a>
				</div>
			</section>

			<section id="about">
				<h2>About</h2>

				<div>
					<AboutText />
					<LangueageBol />
				</div>

				<div className="click-me back-up">
					<a href="#home">
						<p>Back Up</p>
					</a>
				</div>

				<footer>
					<a href="https://daviddankwah.com/" target="_blank">
						David Customs
					</a>
					<p>&#xA9; Web Development</p>
				</footer>
			</section>
		</main>
	</React.StrictMode>
);
