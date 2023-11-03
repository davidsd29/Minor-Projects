import { ReplanishData, GetSelectedGitRepo } from '../../utils/Fetch.js';
import React, { useEffect, useState, useRef } from 'react';
import {RepoCard, ReadMe, Scanner} from '../';
import styles from './carousel.module.scss';
import animation from './animation.module.scss';

const CardHandeling = (cards, disable) => {
	if (disable) {
		cards.forEach((card) => {
			if (!card.checked) card.setAttribute('disabled', true);
		});
	} else {
		cards.forEach((card) => {
			card.removeAttribute('disabled');
		});
	}
};

const OpenReadMe = (card, scanner, loader, readme, carousel) => {
	const repoID = Number(card.getAttribute('data-value'));

	card.addEventListener('animationend', () => {
		scanner.scanLine.classList.add(`${animation.scanLineScanning}`);
		scanner.lamp.classList.add(`${animation.blink}`);
		scanner.screenText.classList.add(`${animation.scanningText}`);

		setTimeout(() => {
			scanner.scanLine.classList.remove(`${animation.scanLineScanning}`);
			scanner.loadingText.textContent = 'Scan Compleet';
			carousel.current.classList.add(`${animation.fade}`);
			loader.classList.add(`${animation.load}`);
		}, 4000);

		setTimeout(() => {
			scanner.loadingText.textContent = 'Scan Compleet';
		}, 3800);

		setTimeout(() => {
			loader.classList.remove(`${animation.load}`);
			scanner.lamp.classList.remove(`${animation.blink}`);
			scanner.screenText.classList.remove(`${animation.scanningText}`);
			scanner.loadingText.textContent = 'Scanning...';
			scanner.loadingText.classList.remove(`${animation.hidden}`);

			GetSelectedGitRepo('repo', repoID);
			
			readme.frame.classList.add(`${animation.setActive}`);
		}, 7000);
	});
};

const Carousel = () => {
	const [repoInfo, setRepoInfo] = useState([]);
	const [repoCount, setRepoCount] = useState(0);
	const carousel = useRef(null);

	useEffect(() => {
		const fetchData = async () => {
			const data = await ReplanishData('repo');
			setRepoInfo(data);
			setRepoCount(data.length);
		};

		fetchData();
	}, []);

	useEffect(() => {
		const scanner = {
			haloText: document.querySelector('[data-selector="haloText"]'),
			scanLine: document.querySelector('[data-selector="scanLine"]'),
			lamp: document.querySelector('[data-selector="scanner"] span'),
			screenText: document.querySelector('[data-selector="screenText"]'),
			loadingText: document.querySelector('[data-selector="screenText"] p'),
		};

		const loader = document.querySelector('[data-selector="loader"]');

		const readme = {
			closeBtn: document.querySelector('[data-selector="readMe"] span'),
			frame: document.querySelector('[data-selector="readMe"]'),
		};
		// All the direct childeren elements of the carousel(cards)
		const cards = carousel.current.querySelectorAll('input');
		cards.forEach((card) => {
			card.addEventListener('change', (e) => {
				// if a card is checked, disable the other cards
				CardHandeling(cards, true);

				if (e.target.checked) {
					scanner.haloText.classList.add(`${animation.hideText}`);

					setTimeout(() => {
						scanner.haloText.classList.remove(`${animation.hideText}`);
						scanner.haloText.classList.add(`${animation.hidden}`);
					}, 4000);

					e.target.parentElement.classList.add(`${animation.scan}`);
					OpenReadMe(e.target.parentElement, scanner, loader, readme, carousel);
				}
			});
		});

		readme.closeBtn.addEventListener('click', () => {
			readme.frame.classList.remove(`${animation.setActive}`);
			carousel.current.classList.remove(`${animation.fade}`);

			CardHandeling(cards, false);

			cards.forEach((card) => {
				if (card.checked) {
					card.parentElement.classList.remove(`${animation.scan}`);
					card.checked = false;
				}
			});
		});
	}, [repoCount, repoInfo]);

	// Render the component based on the fetched data
	const cardItems = repoInfo.map((item) => {
		if (item.stargazers_count >= 1) return <RepoCard data={item} />;
	});

	document.body.style.setProperty('--repo-length', cardItems.length);

	return (
		<section id="repository" className={styles.repository}>
			<ReadMe />
			<div className={styles.carouselContainer}>
				<div className={styles.carousel} ref={carousel}>
					{/* check if card items is empty */}
					{cardItems ? cardItems : <p>Loading items...</p>}
				</div>
			</div>
			<Scanner />
		</section>
	);
}

export default Carousel;