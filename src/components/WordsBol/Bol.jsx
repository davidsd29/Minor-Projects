import { useEffect } from 'react';

const WordsBol = () => {

	useEffect(() => {
		// words canvas
		let myCanvas = document.getElementById('myCanvas'),
			canvasContainer = document.querySelector('.canvasContainer');

		let color = '#08fdd8',
			outlineColour = '#e60de6';

		//check if myCanvas exits
		if (myCanvas !== null) {
			let canvasOptions = {
				outlineColour: outlineColour,
				reverse: true,
				depth: 0.6,
				maxSpeed: 0.05,
				textFont: null,
				textColour: color,
				weight: true,
			};

			try {
				TagCanvas.Start('myCanvas', 'canvasTags', canvasOptions);
			} catch (e) {
				console.log(e);
				// something went wrong, hide the canvas container
				canvasContainer.style.display = 'none';
			}
		}
	}, []);

	return (
		<aside>
			<div className={StyleSheet.canvasContainer}>
				<canvas width="400" height="400" id="myCanvas">
					<p>A little bit info about me</p>
				</canvas>
			</div>

			<div id="canvasTags">
				<a href="#">Bootstrap</a>
				<a href="#">Customizing</a>
				<a href="#">Motor</a>
				<a href="#">SASS</a>
				<a href="#">React</a>
				<a href="#">Vite</a>
				<a href="#">Wordpress</a>
				<a href="#">HTML</a>
				<a href="#">Javascript</a>
				<a href="https://www.overhaus.nl/" target="_blank">
					Overhaus
				</a>
				<a href="#">Wacom</a>
				<a href="#">Designer</a>
				<a href="#">Drawing</a>
				<a href="#">csb</a>
				<a href="#">C#</a>
				<a href="#">Unity</a>
				<a href="#">CSS</a>
				<a href="#">PHP</a>
				<a
					href="https://www.rocva.nl/MBO-onderwijs/MBO-Colleges/MBO-College-Amstelland"
					target="_blank"
				>
					ROC
				</a>
				<a href="https://www.hva.nl/" target="_blank">
					HVA
				</a>
				<a href="#">VS Code</a>
				<a href="https://www.hva.nl/" target="_blank">
					Student
				</a>
				<a href="https://go2people.nl/" target="_blank">
					Go2people
				</a>
				<a href="https://www.hogeschoolrotterdam.nl/" target="_blank">
					Hogeschool Rotterdam
				</a>
			</div>
		</aside>
	);
}

export default WordsBol;