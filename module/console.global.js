const { logger } = require("./console_class");

console.log("hello world");
console.log("hello %s", "wordl");

const world = "world";
console.log(`hello ${world}`);

console.error(new Error("에러메세지 출력"));

const arr = [
  { name: "John Doe", email: "john@mail.com" },
  { name: "Jeremy Go", email: "jeremy@mail.com" },
];
console.table(arr);

const obj = {
  students: {
    grade1: { class1: {}, class: {} },
    grade1: { class1: {}, class: {} },
    teachers: ["John Doe", "Jeremy Go"],
  },
};

const obj1 = {
  name: "Hong",
  age: 20,
  address: {
    city: "Seoul",
    detail: {
      street: "Gangnam-daero",
      building: {
        name: "Tower A",
        floor: {
          number: 10,
          office: {
            team: "Backend",
            members: ["Kim", "Lee", "Park"],
          },
        },
      },
    },
  },
};

console.dir(obj1, { depth: 4, colors: true });

console.time("time for for-loop");
console.timeLog("for loop");
for (let i = 1; i <= 10000; i++) {
  logger.log(`i=> ${i}`);
  // console.log(`i=> ${i}`);
}
console.timeEnd("time for for-loop");
