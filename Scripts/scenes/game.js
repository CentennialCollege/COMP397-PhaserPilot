var scenes;
(function (scenes) {
    var Game = (function () {
        function Game() {
            this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
        }
        Game.prototype.preload = function () {
            this.game.load.image('logo', '../Assets/images/Phaser-Logo-Small.png');
        };
        Game.prototype.create = function () {
            var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
            logo.anchor.setTo(0.5, 0.5);
        };
        return Game;
    })();
    scenes.Game = Game;
})(scenes || (scenes = {}));
//# sourceMappingURL=game.js.map