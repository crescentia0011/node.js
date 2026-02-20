// reduce() - 이전 순번에서 결과를 다음 순번의 매개값으로 활용

result = [10, 15, 20, 25, 30].reduce((accm, elem, idx) => {
  console.log(idx, "->", accm, elem);
  if (elem >= 20) {
    const li = document.createElement("li");
    li.innerText = elem;
    accm.appendChild(li);
  }
  return accm; //accm < elem ? accm : elem;
}, document.querySelector("#list"));
console.log(result);
console.clear();
//Male 사람의 급여합계
// result = ary.reduce((accm, elem, idx, array) => {
//   console.log(idx, "->", accm, elem);
//   return elem;
// }, 0);

result = ary.reduce((accm, elem) => {
  if (elem.gender == "Male") {
    accm += elem.salary;
  }
  return accm;
}, 0);
console.log(result);

//female의 급여가 10000 이하인 사람들의 {번호/이름(fn+ln)/이메일/급여}
//새로운 배열로 생성.
const sal_10000 = (accm, elem) => {
  const { id, first_name, last_name, gender, email, salary } = elem;
  if (gender == "Female" && salary <= 10000) {
    const obj = {
      id,
      name: first_name + "+" + last_name,
      email,
      salary,
      gender,
    };
    accm.push(obj);
  }
  return accm;
};
result = ary.reduce(sal_10000, []);
console.log(result);
