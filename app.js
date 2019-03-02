const person = {
  name: 'Zabeer',
  age: 2,
  greet(){
    console.log('Hi, I am ' + this.name);
  }
};

const activies = ['Eat', 'Play'];

const printName=(personData) => {
  console.log(personData.name);
}
printName(person);


const printNameWithDestructuring=({name}) => {
  console.log(name);
}
//Destructuring in function
//We are not interest the whole object we are getting (ex, from somewhere)
//We are only interested one property of that object
//destructuring syntax is feature to read that specific property;
//it makes the code more understandable
printNameWithDestructuring(person);


const {name, age} = person;
console.log(name,age);
//Object destructuring
//for object destructuring we will use same name variable in the curly
//braces that we wnat to bring out of the array. By this it will create necessary number of
//vriables that we can use later.


const [activities1, activities2] =  activies;//Arrayt Desturtering
console.log(activities1, activities2);
//vairable/array destructuring. Instead of curly braces we will square bracket.
//in array we can choose any name we want. Because in array the element has no name.
//the variable will assing to the value based on the element position
