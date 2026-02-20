const data = `[{"id":1,"first_name":"Dion","last_name":"Symington","email":"dsymington0@over-blog.com","gender":"Female","salary":7456},
{"id":2,"first_name":"Maurine","last_name":"Pelchat","email":"mpelchat1@aol.com","gender":"Female","salary":5128},
{"id":3,"first_name":"Abelard","last_name":"Elliston","email":"aelliston2@paypal.com","gender":"Male","salary":8010},
{"id":4,"first_name":"Nesta","last_name":"Kellogg","email":"nkellogg3@mashable.com","gender":"Female","salary":11671},
{"id":5,"first_name":"Robers","last_name":"Twitching","email":"rtwitching4@wikipedia.org","gender":"Male","salary":3213},
{"id":6,"first_name":"Chelsy","last_name":"Gorcke","email":"cgorcke5@hud.gov","gender":"Female","salary":14383},
{"id":7,"first_name":"Albrecht","last_name":"Brayshay","email":"abrayshay6@merriam-webster.com","gender":"Male","salary":9918},
{"id":8,"first_name":"Etti","last_name":"Redpath","email":"eredpath7@nhs.uk","gender":"Female","salary":9923},
{"id":9,"first_name":"Danna","last_name":"Roseblade","email":"droseblade8@usa.gov","gender":"Female","salary":9258},
{"id":10,"first_name":"Glory","last_name":"Halsworth","email":"ghalsworth9@github.com","gender":"Female","salary":13069},
{"id":11,"first_name":"Rea","last_name":"Raatz","email":"rraatza@home.pl","gender":"Female","salary":14809},
{"id":12,"first_name":"Dunc","last_name":"Rowly","email":"drowlyb@mediafire.com","gender":"Male","salary":3628},
{"id":13,"first_name":"Carrissa","last_name":"Matussov","email":"cmatussovc@japanpost.jp","gender":"Female","salary":10650},
{"id":14,"first_name":"Evin","last_name":"Vasovic","email":"evasovicd@tamu.edu","gender":"Male","salary":8869},
{"id":15,"first_name":"Torry","last_name":"Cleobury","email":"tcleoburye@wordpress.com","gender":"Male","salary":11840},
{"id":16,"first_name":"Orran","last_name":"Labbey","email":"olabbeyf@angelfire.com","gender":"Male","salary":7059},
{"id":17,"first_name":"Charil","last_name":"Cairns","email":"ccairnsg@va.gov","gender":"Female","salary":7601},
{"id":18,"first_name":"Sigismondo","last_name":"Tomes","email":"stomesh@whitehouse.gov","gender":"Male","salary":13652},
{"id":19,"first_name":"Ximenez","last_name":"Myner","email":"xmyneri@cbc.ca","gender":"Male","salary":6655},
{"id":20,"first_name":"Mickey","last_name":"Stickins","email":"mstickinsj@hc360.com","gender":"Male","salary":4618}]`;

// JSON문자열 -> Object
const ary = JSON.parse(data);
console.log(ary);
// Object -> JSON문자열
const json = JSON.stringify(ary);
// console.log(json);

// sort()
console.log(["Hello", "Hi", "Good", "World"].sort());
console.log(
  // 오름차순 -값을 반환.
  [10, 35, 21, 121, 11].sort((n1, n2) => n1 - n2),
);
//id순으로 정렬함수
const order_by_id = (obj1, obj2) => obj1.id - obj2.id;

// salary 순으로 오름차순
const order_by_salary = (obj1, obj2) => obj1.salary - obj2.salary;

// first_name 오름차순정렬
const order_by_fn = (obj1, obj2) => {
  return obj1.first_name < obj2.first_name ? -1 : 1;
};

let result = ary.sort(order_by_fn);
console.log(result);

// if ("hello" > "nice") {
//   console.log("hello");
// } else {
//   console.log("nice");
// }

function getMember() {
  return ["user01", "user02", "user03"];
}

// module.exports = { ary, order_by_fn };
