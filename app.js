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

//Object and array are reference types in javascript. That is why we can still change the const array by push method
//wihtout violating the rule that 'a const can not be changed'. As array is a reference/pointer type,
//it is just containing the address that is pointing to some premetive value. Premetive type are the address that directly contains some value.
//Arrays and Objects are reference types and variables are premetive types. 
