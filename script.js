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
  let first = arr.length;
    let person = {id:first,name:"susan",age:"20",profession:"intern"};
    arr.push(person);
    console.log(person);
}

function removeAdmin() {
  //Write your code here, just console.log
  for(let i=0;i<arr.length;i++) {
    if(arr[i].profession == 'admin') {
      arr.splice(i,1);
    }
  }
}

function concatenateArray() {
  //Write your code here, just console.log
  let first = arr.length;
  let newArr = [
    { id: first++, name: "smith", age: "21", profession: "developer" },
    { id: first++, name: "Mosh", age: "25", profession: "Manager" },
    { id: first++, name: "karan", age: "19", profession: "marketing" }
  ];
  arr.push(...newArr);
}
