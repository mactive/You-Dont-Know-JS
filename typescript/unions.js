function createName(name) {
    if (typeof name === "string") {
        return name;
    }
    else {
        return name.join(" ");
    }
}
var greetingMessage = "Greetings, " + createName(['Sean', 'Park']);
console.log(greetingMessage);
