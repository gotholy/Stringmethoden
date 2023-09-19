const text = "Sam is going to codingschool";
let sam = text.slice(0, 4);
let isGoingTo = text.slice(4, 15);
let school = text.slice(22, 28);

document.write(
  text.toUpperCase(),
  "</br>",
  text.toLowerCase(),
  "</br>",
  sam.toUpperCase(),
  isGoingTo,
  " ",
  school.toUpperCase(),
  "</br>"
);

const words = text.split(" ");
const capitalizedText = words
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
document.write(capitalizedText);
