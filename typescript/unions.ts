type NameOrNameArray = string | string[];
type poi = {
  name: string,
  location: string,
}
type poilist = poi[];

function createName(name: NameOrNameArray){
  if (typeof name === "string") {
    return name;
  } else {
    return name.join(" ");
  }
}

var greetingMessage = `Greetings, ${createName(['Sean', 'Park'])}`;
console.log(greetingMessage);