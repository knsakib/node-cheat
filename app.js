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

// 'this' essentially refers to the object the code is in so here this line of code is in this object in the "namegenerator" so if we want to refer to anything
// else that is attached to the "namegenerator" like "addname", we need to prepend this and then dot because this essentially gives us access to this object.
// Then we can call methods or access properties on that object with the dot notation. Now the problem we got here is this function gets executed immediately.
// This is because we add parentheses, we could pass any arguments if that function would accept any. The problem is here I don't want to execute it immediately and to do that
// we remove these parentheses so the two parentheses and now we are just passing a reference to the function so like an address we could say to that event listener so I'm
// basically just telling JavaScript hey here is the address of the function or method you should execute when they click occurs so that you know where to find it.
//
// Now let's tweak that code a little bit because this can actually behave strangely right now it doesn't but it can let's say that in this class we defined an object or function
// with some properties and variable in it and want to manage or call them in global class scope. We want to make my those property or variables available from anywhere
// in the class and we can do this by adding 'this' dot at the beginning of the property or method name and what this does is it's now not a constant or variable anymore
// instead we could say it's a variable attached to this class and so called property or field of the class. So now this can be used from anywhere inside this class
// and also in the instantiated object and we can access those properties because it's part of that class due to that 'this' keyword so this really combines or attaches things
// to the entire class and therefore to the entire object which gets created.
//
// However, in theory that code should work but now, we got a special thing of the 'this' keyword this does not always refer to the surrounding object so to say to the class
// it's generally what it refers to you could say in most cases but actually 'this' is defined a bit differently in JavaScript. Here 'this' refers to whoever called the function.
// For example, a button event here and we can show this by console logging this let's look into this let's see what this is when we execute 'addname' if I click here we see
// it's the button so the button is 'this' here and that is the case because this event listener and therefore the button is executing our function when we click we pass the
// address to the function to the button or to the event listener and we say execute the function for us when a click occurs
//
// In JavaScript it's not always the object in which you write your code it's the thing which calls your code which executes your code you could say and that method gets executed
// by the button when a click occurs just to prove this if I console.log this in a constructor here then we see there it's referring to the "namegenerator" object to the class
// to the constructor function and that is the case because this code here is not executed by the button or anything like that it's simply parsed by JavaScript
// from top to bottom and therefore 'this' then refers to the class to the object that surrounds it. At the end it is just something we can memorize 'this' refers to
// what's executing the code. For example, if we call the code by defining it in the constructor and by instantiating an object of the class, 'this' refers to the constructor
// now for 'addname' the button calls 'addname' and this then refers to the button and not to this class anymore on the other hand if we would call 'addname' here directly
// and not wait for a button click so we executed the constructor here, then we see it works and 'this' actually also refers to the 'namegenerator'. The reason for this is
// that we execute the code in the scope of this constructor and therefore the class is executing so 'this' refers to the class.
//
// Now how can we change that behavior. One way of changing it is to use a special method we can call and that is a method we can call on any function. It's the bind function.
// Bind actually allows us to tell JavaScript what 'this' should be referring to in the function that will eventually get executed. We do so with the first argument of 'bind'
// by telling it what should this refer to in the function when it gets executed in the future no matter who executes it. So by 'bind' we are telling JavaScript that
// 'this' inside the method should refer to the same thing 'this' refers to in a constructor and as we just saw with console.log in the constructor this refers to the class and
// not to the button so here we are telling JavaScript no matter who executes this 'addname', 'this' inside of that method or function should always refer to this in the
// constructor
//
// In the end if we encounter any issues with using 'this' and suddenly it doesn't work, we should check if we may be calling your function indirectly through some event
// listener or anything like that and therefore this and a function that gets executed might not be referring to your object anymore.
//
// Now another way of solving this by the way is that you pass an anonymous function here and that anonymous function has to be an arrow function. and the reason for that is
// that arrow functions specifically solve that problem of this behaving differently because often you don't want it to behave differently and therefore arrow functions
// were introduced to basically keep the context of 'this' or the reference of 'this' so if you use an arrow function 'this' will refer to if it were used outside of that
// arrow function. Therefore now 'this' refers to the constructor. And therefore in the function in 'addname' this refers to who called it. so 'this' inside here still refers
// to our constructor.


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
