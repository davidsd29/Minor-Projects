import React from 'react';
import {Loader} from '../';
import styles from './scanner.module.scss';

const Scanner = () => {
	return (
		<div className={styles.scanner} data-selector="scanner">
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
								<td className={styles.dot}></td>
								<td className={styles.dot}></td>
								<td className={styles.dot}></td>
								<td className={styles.dot}></td>
							</tr>
							<tr>
								<td></td>
								<td className={styles.dot}></td>
								<td className={styles.dot}></td>
								<td className={styles.dot}></td>
								<td className={styles.dot}></td>
							</tr>
							<tr>
								<td></td>
								<td className={styles.dot}></td>
								<td className={styles.dot}></td>
								<td className={styles.dot}></td>
								<td className={styles.dot}></td>
							</tr>
						</tbody>
					</table>
					<div className={styles.scanLine} data-selector="scanLine"></div>
				</span>
				<div className={styles.screenText} data-selector="screenText">
					<p>Scanning...</p>
				</div>
			</div>

			<Loader />

			<div className={styles.scannerBottom}  data-selector="haloText">
				<p>GitHub Repository's Scanner</p>
			</div>
		</div>
	);
};

export default Scanner;
