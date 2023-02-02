const TICK_RATE = 3000;
// allow user to advance game every 3 seconds
function tick() { 
  console.log('tick', Date.now());
};

async function init() { 
  console.log('starting game');
  // track next time we call tick
  let nextTimeToTick = Date.now();

  function nextAnimationFrame() { 
    const now = Date.now();

    if (nextTimeToTick <= now) { 
      tick();
      nextTimeToTick = now + TICK_RATE;
    }
    // when idle call nextAnimationFrame
    requestAnimationFrame(nextAnimationFrame);
  }
  requestAnimationFrame(nextAnimationFrame);
};

init();
