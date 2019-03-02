const person = {
  name: 'Zabeer',
  age: 2,
  greet(){
    console.log('Hi, I am ' + this.name);
  }
};
const activies = ['Eat', 'Play'];

activies.push('Sleep');
console.log(activies);

const copiedArray = activies.slice(); //copied in a new array in immutable way not chaging the old one
console.log(copiedArray);

const copiedArray2 = [activies]; //it just copied the old array as new item of the new array
console.log(copiedArray2);

const copiedArray3 = [...activies]; //spread operator. it put the whole old array in the new array
console.log(copiedArray3);


const copiedPerson = {...person}; //spread operator. it put the whole old OBJECT in the new OBJECT
console.log(copiedPerson);

const toArray = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3];
};

console.log(toArray(1,2,3,4)); //this not gonna return the last arg 4

const toArray2 = (...args) => { // but wih rest operator we can make it flexible
  return args;
};

console.log(toArray2(1,2,3,4)); //so, the rest operator syntex is same as spread operator, but it
//is used in the function argument to merge an element to that array insead of pulling out the
//existing elemnent of an object or array which is the case of spread operator.
