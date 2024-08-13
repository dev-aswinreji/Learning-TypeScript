//let p = 5;
//for (let i = 0; i <= 5; i++) {
//  let n = 0;
//  for (let j = 10; j >= p; j--) {
//    console.log(n++, j);
//  }
//  p++;
//
//  console.log(" ");
//}

let map = {};

let str = "aaabbbcca";
let count = 1;
let res = "";

function mapStr(arr, str) {
  let i = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] != str[i + 1]) {
      res += `${str[i]}:${count} `;
      count = 1;
    } else {
      count++;
    }
  }
  console.log(res, "arr is showing");
}

mapStr(map, str);
