import React from 'react';
import { Carousel, SideLink, About } from '..';


const MainContent = () => {

    return (
        <main>
			<section id="github-repos">
				<Carousel />
				<SideLink text="Click" link="#about" />
			</section>
			<About />
		</main>
    );
}

export default MainContent;