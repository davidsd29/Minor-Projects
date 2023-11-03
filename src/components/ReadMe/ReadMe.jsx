import styles from './readMe.module.scss';

const ReadMe = () => {
	return (
        <div data-selector="readMe" className={styles.readMe } >
			<span className={styles.close}>Close</span>
			<article></article>

			<section>
				<p>
					If you want to see the site click on the link below or visit my
					github repository!
				</p>
				<div>
					<p>Github Repository</p>
					<a href="" target='_blank'></a>
				</div>

				<div>
					<p>Project Homepage</p>
					<a href="" target='_blank'></a>
				</div>
			</section>
		</div>

    );
}

export default ReadMe;