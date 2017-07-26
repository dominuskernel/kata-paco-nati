let Game = require('./demo/kata-cells.js');

describe("kata", function() {
  it("exist the four points", function() {
    var game = new Game();
    expect(game.getPoints()).toBe(false);
  });
});
