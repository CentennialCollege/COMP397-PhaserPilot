var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 640, 480, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
        }
        Game.prototype.preload = function () {
            this.load.image('ocean', '../Assets/images/ocean.gif');
            this.load.image('plane', '../Assets/images/plane.png');
            this.load.audio('engine', '../Assets/sounds/engine.ogg');
        };
        Game.prototype.create = function () {
            this.ocean = new objects.Ocean(this, 0, 0, 'ocean');
            this.add.existing(this.ocean);
            this.plane = new objects.Plane(this, 0, 0, 'plane', 'engine');
            this.add.existing(this.plane);
            //this.logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo');
            //this.logo.anchor.setTo(0.5, 0.5);
        };
        return Game;
    })(Phaser.Game);
    scenes.Game = Game;
})(scenes || (scenes = {}));
//# sourceMappingURL=game.js.map