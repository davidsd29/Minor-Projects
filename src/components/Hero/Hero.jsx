import React, { useEffect, useRef } from 'react';
import SideLink from '../Details/SideLink';
import styles from './hero.module.scss';
import Typed from 'typed.js';

const Hero = () => {
	const title = useRef(null);
	useEffect(() => {
		const typed = new Typed(title.current, {
			strings: ['david', 'creative Developer', 'designer', 'awesome!'],
			loop: false,
			typeSpeed: 100,
			backSpeed: 150,
			startDelay: 300,
			smartBackspace: true,
			showCursor: false,
			backDelay: 150,
		});
	}, []);

	return (
		<header id="home" className={styles.hero}>
			<section>
				<h1 aria-label="It's me, David, frontend developer" id="title">
					Hi, I'm <span ref={title}></span>
				</h1>
				<a href="mailto:davidsdankwah@gmail.com" className={styles.btn}>
					Contact me
				</a>
			</section>
			<SideLink text="Click" link="#about" />
		</header>
	);
};

export default Hero;
