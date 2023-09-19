const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "and";
let moreText1 = "to the movie theater";
let text1cuted = text1.replace("codingschool", "school");
let isAre = text1cuted.replace("is", "are");

// * LANGESCHREIBWEISE * //
document.write(text1cuted.concat(` ${text3} ${moreText1} </br>`));
document.write(text1cuted.replace("to school", moreText1));
document.write(`</br> ${text2} ${text3} ${isAre}`);

// * KURZE SCHREIBWEISE * //
document.write(
  `</br> ${text2} ${text3} `,
  isAre.replace("school", "gym" + " "),
  `${moreText1} </br>`,
  text1cuted.replace("Sam", "Susi"),
  ` ${text3} ${moreText1}`
);
