const gameState = {
	current: 'INIT',
	clock: 1,
	tick() {
		this.clock++;
		console.log('clock', this.clock);
		return this.clock;
	},
};

/*
possible game states
[
  "INIT",
  "HATCHING",
  "IDLING",
  "SLEEPING",
  "EATING",
  "BATHROOM",
  "HUNGRY",
  "CELEBRATING",
  "DEAD"
]
*/

export default gameState;
