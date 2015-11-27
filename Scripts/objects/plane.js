var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // Plane Class
    var Plane = (function (_super) {
        __extends(Plane, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++
        function Plane(game, x, y, spriteString, engineSoundString) {
            _super.call(this, game, x, y, spriteString);
            // set registration point to the center of the object
            this.anchor.setTo(0.5, 0.5);
            this.y = 430;
            // play engine sound
            this._engineSound = this.game.add.audio(engineSoundString);
            this._engineSound.loop = true;
            this._engineSound.play();
        }
        /**
         * Update Method for Plane Class
        */
        Plane.prototype.update = function () {
            // for moving with mouse
            this.x = this.game.input.mousePointer.x;
        };
        Plane.prototype.engineOff = function () {
            console.log("Engine off");
            this._engineSound.stop();
        };
        return Plane;
    })(Phaser.Sprite);
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map