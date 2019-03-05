const activities = ['Eat', 'Play'];

for (let activity in activities) {
  console.log(activity);
}

for (let activity of activities) {
  console.log(activity);
}

console.log(activities.map(activity => {
  return 'Zabeer ' + activity;
}));


console.log(activities.map(activity => 'Zabeer ' + activity+'s'));


console.log(activities);


//map will return complete a new array without modifying the original one.
//map always take a function where we will define how to edit the existing array. it will perform action on each element of the array
//and return the updated array.
