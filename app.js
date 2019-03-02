setTimeout(() => {
  console.log('Timer is done')
}, 1);

console.log('Hello');
console.log('Hi');
//Javascript by default asynchronous. It will not block the execudtion of other code
//In fact, the arrow function here is recognizes
//as a call back function, meaning it will called later when it is done.
//So, it will continue to execute Synchronous Code. Then it will Async code later.



const fetchData = callback => {
  setTimeout(()=>{
    callback('Done!')
  }, 1500);
}

setTimeout(() => {
  fetchData(text=>{
    console.log(text)
  })
}, 2000);
//However Callback function is oldest way to handle asynchronous function. Because it will create
//Porblem if we have couple of depending asynchronous operations. for example,
//here we defined 'fetchData' which will call back 'callback' function. We then execute the function
//under setTimeout below that definition. So, we calling some nested async call. We went depper in Callback
//perspective. The execution of fetchData will happend after 3.5s.



const fetchDataWithPromise = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('Done With Promise!')
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  fetchDataWithPromise()
  .then(text=>{
    console.log(text);
    return fetchDataWithPromise();
  })
  .then(text2=>{
    console.log(text2)
  });
}, 2000);
//This nested callback situation can be handled better by Promise.
//Generally this promise should be returned by thirdoarty library function.
//But we can also define a promise by promise construction which is built into
//Javascript and node.js. This Promise constructor will take two call backs resolve and reject.
//resolve hadles success and reject handle error. And where the function will be executed for example,
//here it is fetchData under steTime, we will not longer pass a call back. Rather we will use then block
//which is callable on a promise and which will allow to call the callback when the promise is resolved.
//The advatage is that if we have multiple such promises we can just add then block one after another
//instead of nested callback. This makes code more readable. Notice that the return(line 46) in the first 'then' block
// will return a 'promise' from 'fetchDataWithPromise' function which is allowing us to call the next then block.
