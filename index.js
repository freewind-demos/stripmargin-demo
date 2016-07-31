let {stripMargin} = require('stripmargin');

// no stripMargin
let s1 = `Input your choice:
1. barcode to zipcode
  2. zipcode to barcode
3. exit`;

console.log('----------- s1: no margin ------------');
console.log(s1);

// use | at all beginings
// this is the recommend way
let s2 = stripMargin(
  `|Input your choice:
   |1. barcode to zipcode
   |  2. zipcode to barcode
   |3. exit`
);

console.log('----------- s2: good way ------------');
console.log(s2);

// leading spaces and the first | are ignored,
// and if a line contains | only, it will be ignored
let s3 = stripMargin(
  `Input your choice:
  1. barcode to zipcode
   |  2. zipcode to barcode
 3. exit
 |
 |`
);

console.log('----------- s3: crazy way, dont do it ------------');
console.log(s3);

console.log('----- Are the 3 strings same? -------');
console.log(s1===s2 && s2===s3);
