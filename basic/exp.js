//exp.js
// 문자열 특정패턴 찾기.
console.log("Hello, World".replace(/l/g, "L"));
console.log(/^01[016789]-?\d{3,4}-?\d{4}$/.test("010-2345-6789"));

let result = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
  "dsdsd!email.co.kr",
);
console.log(result);
