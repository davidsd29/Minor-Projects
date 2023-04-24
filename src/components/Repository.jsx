import { ReplanishData, GetSelectedGitRepo } from '../utils/Fetch.js';

import React, { useEffect } from 'react';
import RepoCard from './Card.jsx';

const repoInfo = await ReplanishData('repo');
const readme = {
	closeBtn: document.querySelector('#readMe .close'),
	frame: document.getElementById('readMe'),
};

let repoCount = repoInfo.length;

function Carousel() {
	const cardItems = repoInfo.map((item) => {
		if (item.archived == false) return <RepoCard data={item} />;
	});

	useEffect(() => {
		document.body.style.setProperty('--repo-length', repoCount);
	}, []);

	return (
		<section id="repository">
			<div className="carousel-container">
				<div id="carousel">
					{/* check if card items is empty */}
					{cardItems ? cardItems : <p>Loading items...</p>}
				</div>
			</div>

			<Scanner />
		</section>
	);
}

function Scanner() {

	useEffect(() => {
		const cards = document.querySelectorAll('.card input');
		const scanner = {
			scanText: document.getElementById('bottom'),
			scanLine: document.querySelector('.scan-line'),
			lamp: document.querySelector('.scanner span'),
			textScreen: document.getElementById('text-screen'),
			loadingText: document.querySelector('#text-screen p'),
			loading: document.getElementById('loading'),
		};



		cards.forEach((card) => {
			card.addEventListener('change', (e) => {

				DisableCards(cards);

				if (e.target.checked) {
					scanner.scanText.classList.add('hide-text');

					setTimeout(() => {
						scanner.scanText.classList.remove('hide-text');
						scanner.scanText.classList.add('hidden');
					}, 4000);

					e.target.parentElement.classList.add('scan');
					OpenReadMe(e.target.parentElement, scanner);
				}
			});
		});


		readme.closeBtn.addEventListener('click', () => {
			readme.frame.classList.remove('active');

			EnableCards(cards);

			cards.forEach((card) => {
				if (card.checked) {
					card.parentElement.classList.remove('scan');
					card.checked = false;
				}
			});
		});
	}, []);

	return (
		<div className="scanner">
			<div>
				<span>
					<table>
						<tbody>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td className="dot"></td>
								<td className="dot"></td>
								<td className="dot"></td>
								<td className="dot"></td>
							</tr>
							<tr>
								<td></td>
								<td className="dot"></td>
								<td className="dot"></td>
								<td className="dot"></td>
								<td className="dot"></td>
							</tr>
							<tr>
								<td></td>
								<td className="dot"></td>
								<td className="dot"></td>
								<td className="dot"></td>
								<td className="dot"></td>
							</tr>
						</tbody>
					</table>
					<div className="scan-line"></div>
				</span>
                <div id='text-screen'>
                    <p>Scanning...</p>
                </div>

			</div>

			<Loading />

			<div id="bottom">
				<p>GitHub Repository's Scanner</p>
			</div>
		</div>
	);
}


function Loading() {
	return (
		<section id='loading'>
			<div className="circle"></div>
			<div className="circle-small"></div>
			<p>rendering</p>
		</section>

	)
}


function DisableCards(cards) {
	cards.forEach(card => {
		if (!card.checked) card.setAttribute('disabled', true)
	});
}


function EnableCards(cards) {
	cards.forEach(card => {
		card.removeAttribute('disabled');
	});
}


function OpenReadMe(card, scanner) {
	const repoID = Number(card.getAttribute('data-value'));

	card.addEventListener('animationend', () => {
		scanner.scanLine.classList.add('scan-line-scanning');
		scanner.lamp.classList.add('blink');
		scanner.textScreen.classList.add('scanning-text');

		setTimeout(() => {
			scanner.scanLine.classList.remove('scan-line-scanning');
			scanner.loadingText.textContent = "Scan Compleet";
			scanner.loading.classList.add("load");
		}, 4000);

		setTimeout(() => {
			scanner.loadingText.textContent = "Scan Compleet";
		}, 3800);

		setTimeout(() => {
			scanner.loading.classList.remove("load");
			scanner.lamp.classList.remove('blink');
		    scanner.textScreen.classList.remove('scanning-text');
			scanner.loadingText.textContent = "Scanning...";
			scanner.scanText.classList.remove('hidden');


			GetSelectedGitRepo('repo', repoID);
			readme.frame.classList.add('active');
		}, 7000);
	});
}

export default Carousel;
