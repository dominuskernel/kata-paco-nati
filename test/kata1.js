const Game = require('./demo/kata-cells.js');

describe("kata", function() {
  it("exist the four points", function() {
    const game = new Game();
    expect(game.points).toBe(false);
  });
});
