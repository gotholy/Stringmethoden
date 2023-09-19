const text = "Sam is good at codingschool";
let rCoding = text.replace("codingschool", "school");
let rGood = rCoding.replace("good", "bad");
let rSam = rCoding.replace("Sam", "Susi");
let rTennis = text.replace("codingschool", "tennis");

document.write(`${rGood} </br> ${rSam} <br/> ${rTennis}`);
