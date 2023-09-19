const A = "Susi is going to codingschool";
let susi = A.slice(0, 4);
let is = A.slice(5, 7);
let withoutSusi = A.substring(5);
let end = A.slice(23, 29);

document.write(
  `${susi} </br> ${is} </br> ${withoutSusi} </br> ${end} </br> ${susi} ${is} ${end}`
);
