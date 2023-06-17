/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" }
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((person) => {
    if(person.profession == 'developer') console.log(person);
  })
  
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
    arr.forEach((person) => {
      if(person.profession == 'developer') console.log(person);
    });
}

function addData() {
  //Write your code here, just console.log
    let last = arr.length + 1;
    let person = {id:last,name:"susan",age:"20",profession:"intern"};
    arr.push(person);
    console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let lastId = arr[arr.length-1].id;
  for(let i=0;i<lastId;i++) {
    if(arr[i].profession == 'admin') {
      arr.splice(i,1);
    }
  }
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log

  let firstPerson = arr.length + 1;
  let newArr = [
    { id: firstPerson, name: "smith", age: "21", profession: "developer" },
    { id: firstPerson + 1, name: "Mosh", age: "25", profession: "Manager" },
    { id: firstPerson + 2, name: "karan", age: "19", profession: "marketing" }
  ];
  arr.push(...newArr);
  console.log(arr);
}
