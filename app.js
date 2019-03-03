const person1 = {
  name: 'Baby',
  age: 4,
  greet: () => {
    console.log('Hi, I am ' + this.name)
  }
};
person1.greet();
//Here 'this' is under => function. That is why 'this' refers to global Node runtime scope and not to the object person1.
//That is why it shows undefimed. Because, arrow function bind 'this' to the container where the object is defined


const person2 = {
  name: 'Zabeer',
  age: 2,
  greet: function(){
    console.log('Hi, I am ' + this.name);
  }
};
person2.greet();
//Here 'this' refers to the object person2 as greet is function property defined under person2.


const person3 = {
  name: 'Aysel',
  age: 3,
  greet(){
    console.log('Hi, I am ' + this.name);
  }
};
person3.greet();
//Here greet() is a method of the object 'person3'. It is ot defined under any arrow function. So, 'this' refers to the
//object where the method is executing, which is person3
