const name = 'Zabeer';
let age = 2;

age = 3;
// name='Zabir';
//Name will be fixed but age can change

function baby(userName, userAge){
  return(
    userName + ' is ' + userAge + ' years ' + 'old'
  );
}

console.log(baby(name, age));
