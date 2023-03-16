import '../assets/css/style.css';
import logo from '../assets/img/DC.png';
import { useEffect } from 'react';

function Welcome() {
	useEffect(() => {
		const welcome = {
			screen: document.querySelector('.welcome'),
			titel: document.querySelector('.welcome h1'),
			titelSpan: document.querySelectorAll('.welcome span'),
		};

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
			welcome.screen.style.top = '-100vh';
		}, 3500);

		welcome.screen.display = 'none';
	}, []);

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
	);
}

function WelcomeVisitor() {
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
		console.log(welcome);
		welcome.screen.style.top = '-100vh';
	}, 2300);
}

export { Welcome };
