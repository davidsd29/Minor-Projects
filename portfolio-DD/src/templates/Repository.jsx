import { ReplanishData, GetSelectedGitRepo } from './API/Fetch';
import { RepoCard } from './Card';
import React, { useEffect, useRef } from 'react';

const main = document.querySelector('main');
const repoInfo = await ReplanishData('repo');
const user = await ReplanishData('user');

const readme = {
	closeBtn: document.querySelector('#readMe .close'),
	frame: document.getElementById('readMe'),
};

let repoCount = repoInfo.length;

// document.body.style.setProperty('--eye'+sliderID+'-value',sliderValue+'%');

function Carousel() {
	const cardItems = repoInfo.map((item) => {
		if (item.archived == false) return <RepoCard data={item} />;
	});

	useEffect(() => {
		document.body.style.setProperty('--repo-length', repoCount);

		const cards = document.querySelectorAll('.card input');
		const scanner = {
			scanText: document.getElementById('bottom'),
			scanLine: document.querySelector('.scan-line'),
			lamp: document.querySelector('.scanner span'),
			loading: document.getElementById('text-screen'),
		};


		cards.forEach((card) => {
			card.addEventListener('change', (e) => {
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
			scanner.scanText.classList.remove('hidden');

			cards.forEach((card) => {
				if (card.checked) {
					card.parentElement.classList.remove('scan');
					setTimeout(() => {

					}, 5000);
					card.checked = false;
				}
			});
		});
	}, []);

	return (
		<section id="repository">
			<h2>Github Repository's</h2>

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
			<div id="bottom"></div>
		</div>
	);
}

function OpenReadMe(card, scanner) {
	const repoID = Number(card.getAttribute('data-value'));
	card.addEventListener('animationend', () => {
		scanner.scanLine.classList.add('scan-line-scanning');
		scanner.lamp.classList.add('blink');
		scanner.loading.classList.add('loading');

		setTimeout(() => {
			scanner.lamp.classList.remove('blink');
			scanner.scanLine.classList.remove('scan-line-scanning');
		    scanner.loading.classList.remove('loading');

			GetSelectedGitRepo('repo', repoID);
			readme.frame.classList.add('active');
		}, 3900);
	});
}

export { Carousel };
