import React from 'react';
import styles from './sideLink.module.scss';

const SideLink = ({ text, link, additionalClass }) => {

	if (additionalClass === undefined) {
		additionalClass = '';
	}

	return (
		<div className={styles.clickMe +" " + additionalClass}>
			<a href={link}>
				<p>{text}</p>
			</a>
		</div>
	);
};

export default SideLink;