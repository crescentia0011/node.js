// const { ary, order_by_fn } = require("./data");
// console.log(ary);

// Male 인 목록
// {Male : [{},{},{},{}...{}]}
const member_only = (acc, ele) => {
  if (ele.gender == "Male") {
    acc.Male.push(ele);
  }
  return acc;
};
let result = ary.reduce(member_only, { Male: [] });
console.log("첫번째 결과", result);

const group_gender = (acc, ele) => {
  if (acc[ele.gender] == undefined) {
    acc[ele.gender] = [];
  }
  acc[ele.gender].push(ele.first_name);
  return acc;
};
result = ary.reduce(group_gender, {});

console.log(result);
