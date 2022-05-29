let s = 1;
console.log(s);

const b = "Max";  ///constant value
console.log(b);


function myprintfunc(a){
     return (a);
}

console.log(myprintfunc(4));

//Arrow Functions 
const myfunction = () =>{
     console.log(4);
}

myfunction();

//Spread
const array1=[1,2,3,4,5,6,7,8];
const newArray =[...array1,6,7];
console.log(newArray);

//Object
const newPerson={
     name:'Max'
}
console.log(newPerson.name);

//destructuring
const numbers=[1,2,3];
[a,c]=numbers;
console.log(a);

const mydate = new Date();

