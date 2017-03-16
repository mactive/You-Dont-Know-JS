var ANGreeter = (function () {
    function ANGreeter(message) {
        this.greeting = message;
    }
    ANGreeter.prototype.greet = function () {
        console.log(this._plus());
        return this.greeting;
    };
    ANGreeter.prototype._plus = function () {
        this.type = typeof this.greeting;
        return this.type;
    };
    return ANGreeter;
}());
var greeter = new ANGreeter(1243);
var message = greeter.greet();
console.log(message);
