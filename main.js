//#region Map Function
let swappingCases = "mOnSsEF";
let invertedNumbers = [1, -1, 23, -100, -150, -36, 20];
let ignoreNumbers = "M0on55ss3ef";

let sw = swappingCases
  //we add split before map because it's a String not an Array so we have to convert it to an Array
  .split("")
  .map((e) => {
    return e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase();
  })
  .join(""); //we use Join to convert an Array to a String
console.log(sw);

let inv = invertedNumbers.map((e) => {
  return -e;
});
console.log(inv);

let ign = ignoreNumbers
  .split("")
  .map((e) => {
    return isNaN(parseInt(e)) ? e : "";
  })
  .join("");
console.log(ign);
//#endregion

//#region Filter Function

let sentence = "I Love Fooood code Too Playing Soccer"; // filter words more than 4 char

let smallWords = sentence
  .split(" ")
  .filter((e) => {
    return e.length <= 4;
  })
  .join(" ");
console.log(smallWords);

let mix = "A32B52C96DXX"; // Filter Strings + Multiply

let mixedContent = mix
  .split("")
  .filter((e) => {
    return !isNaN(parseInt(e));
  })
  .map((e) => {
    return e * e;
  })
  .join("-");
console.log(mixedContent);

//#endregion

//#region Reduce Function

let theBiggest = [
  "bla",
  "ssef",
  "pnumino",
  "microscopic",
  "celecovonano",
  "corona",
  "virus",
];
let checkLonger = theBiggest.reduce((acc, current) => {
  return acc.length > current.length ? acc : current;
});
console.log(checkLonger);
let removeChars = ["M", "@", "@", "O", "N", "@", "@", "S", "S", "@", "E", "F"];

let finalString = removeChars
  .filter((e) => {
    return !e.startsWith("@");
  })
  .reduce((acc, current) => {
    return `${acc}${current}`;
  });
console.log(finalString);
//#endregion
//#region Functions Challenges
let mystring = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_S,c,h,o,o,l,2,0,Z";

let solution = mystring
  .split("")
  .filter((e) => {
    return isNaN(parseInt(e)) ? e : "";
  })
  .map((e) => {
    return e === "_" ? (e = " ") : e;
  })
  .slice(0, -1)
  .reduce((acc, current) => {
    return `${acc}${current}`;
  })
  .slice(1);
console.log(solution);

//#endregion
