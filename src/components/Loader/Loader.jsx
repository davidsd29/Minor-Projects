import styles from './loader.module.scss';

const Loader = () => {
	return (
		<section className={styles.loader} data-selector="loader">
            {/* These are the loader circles */}
			<div></div>
			<div></div>
			<p>rendering</p>
		</section>
	);
}

export default Loader;