var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AnimalA = (function () {
    function AnimalA(theName) {
        this.name = theName;
    }
    AnimalA.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return AnimalA;
}());
var SnakeA = (function (_super) {
    __extends(SnakeA, _super);
    function SnakeA(name) {
        return _super.call(this, name) || this;
    }
    SnakeA.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return SnakeA;
}(AnimalA));
var snakey = new SnakeA('ooo');
var Mouse = (function () {
    function Mouse() {
        this.teeth = 32;
        this.feet = 4;
    }
    return Mouse;
}());
var moz = new Mouse();
console.log(moz.feet);
