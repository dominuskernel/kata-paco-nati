let Game = require('./demo/kata-cells.js');

describe("Game of life", function() {
  let game;
  beforeEach(function(){
    game = new Game();
  });

  it("exist the four points", function() {
    expect(game.getPoints().length).toBe(4);
  });
});
