var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Ocean = (function (_super) {
        __extends(Ocean, _super);
        function Ocean(game, x, y, spriteString) {
            _super.call(this, game, x, y, spriteString);
            this._dy = 5;
            this._reset();
        }
        Ocean.prototype.update = function () {
            this.y += this._dy;
            this._checkBounds();
        };
        //PRIVATE METHODS
        /**
         * Resets the Ocean to y=-960
         */
        Ocean.prototype._reset = function () {
            this.y = -960;
        };
        /**
         * Checks to see if ocean needs to be reset
         */
        Ocean.prototype._checkBounds = function () {
            if (this.y >= 0) {
                this._reset();
            }
        };
        return Ocean;
    })(Phaser.Sprite);
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map