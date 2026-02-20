// ary.js
console.clear();

// 급여가 10000 적은 사람들.
const less_than_10000 = (elem, idx, array) => {
  if (elem.salary < 10000) {
    return true;
  }
  return false;
};

// 여자중에서 8000 이상인 사람.
//filter()
const more_than_8000 = (elem) => elem.gender == "Female" && elem.salary >= 8000;
result = ary.filter(more_than_8000).map((elem) => {
  //map() : A -> A' (매핑)
  // id/ first_name/last_name/email/gender/salary
  // no//name/gender/salary
  //객체 구조분해.
  const { id, first_name, last_name, gender, email, salary } = elem;
  const obj = {
    no: id,
    name: first_name + "-" + last_name,
    gender,
    salary,
  };
  return obj;
});

// console.log(result.sort((id1, id2) => (id1.no < id2.no ? -1 : 1)));
