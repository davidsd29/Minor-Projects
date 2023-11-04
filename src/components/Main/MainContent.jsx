import React from 'react';
import styles from './mainContent.module.scss';
import { Carousel, SideLink, About } from '..';


const MainContent = () => {

    return (
        <main>
			<section id="github-repos" className={styles.githubRepo}>
				<Carousel />
				<SideLink text="Click" link="#about" />
			</section>
			<About />
		</main>
    );
}

export default MainContent;