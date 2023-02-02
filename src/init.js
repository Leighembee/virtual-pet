import gameState from './gameState';

// game advances every 3 seconds
const TICK_RATE = 3000;

async function init() {
	console.log('starting game');
	// track next time we call tick
	let nextTimeToTick = Date.now();

	function nextAnimationFrame() {
		const now = Date.now();

		if (nextTimeToTick <= now) {
			gameState.tick();
			nextTimeToTick = now + TICK_RATE;
		}
		// when idle call nextAnimationFrame
		requestAnimationFrame(nextAnimationFrame);
	}
	requestAnimationFrame(nextAnimationFrame);
}

init();
