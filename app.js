const name = 'Zabeer';
let age = 2;


function baby(userName, userAge){
  return(
    userName + ' is ' + userAge + ' years ' + 'old'
  );
}
//This is regular/conventinal way of defining function
console.log(baby(name, age));


const baby1 = function (userName, userAge){
  return(
    userName + ' is ' + userAge + ' years ' + 'old'
  );
}
//This is an example of annonymous function. Because the variable baby1 is function
//which does not have any name
console.log(baby1(name, age));


const baby2 = (userName, userAge) => {
  return(
    userName + ' is ' + userAge + ' years ' + 'old'
  );
}
//This is an example arrow function. We remove the the word 'function'
//and place arrow before curly braces. However, other than shortform
//it has special feature regrading 'this' keyword. Arrow / => function bind the
//reference of 'this' keyword with the object where 'this' has been called/referenced
//meaning arrow function will keep the scope of 'this' where the function is defined
//and not from where it is executed or who executed. Without arrow 'this' refers to the sope of the object
//where it is executed or who executed.
console.log(baby2(name, age));


const baby3 = (userName, userAge) => userName + ' is ' + userAge + ' years ' + 'old';
//if arrow function has only one statement we can omit the curly braces and hence if we omit curly braces
//we need to also remove the return keyword.
console.log(baby3(name, age));


const baby4 = userAge => 'Zabeer' + ' is ' + userAge + ' years ' + 'old';
//if we have only one argument we can even shorten the function by remove the parenthesis
console.log(baby4(age));


const baby5 = () => 'Zabeer' + ' is ' + '2' + ' years ' + 'old';
//However if we do not have any argument we have to use ()
console.log(baby5());
