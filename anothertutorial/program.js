let fs = require("fs");
let txt = fs.readFileSync(process.argv[2]).toString()
let length = txt.split("\n").length
console.log(length-1)

// let k = process.argv;
// let sum = 0;
// for (let i = 2; i < k.length; i++) {
// 	sum += Number(k[i]);
// }
// console.log(sum)