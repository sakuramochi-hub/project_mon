// Shared runtime settings. Loaded before main.js.
window.GAME_CONFIG = Object.freeze({
  GAME_W: 960,
  GAME_H: 560,
  GAME_FALL_ZONE_Y: 480,
  GAME_STEP: 1000 / 60,
  GAME_MAX_ELAPSED: 100,
  INPUT_CODE_BY_KEY: Object.freeze({
    ArrowLeft: 'ArrowLeft', ArrowRight: 'ArrowRight',
    ArrowUp: 'ArrowUp', ArrowDown: 'ArrowDown',
    ' ': 'Space', Space: 'Space', e: 'KeyE', E: 'KeyE'
  })
});
