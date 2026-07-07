// Promises ko simple Hinglish me samjho
// Promise ek future result ka representation hota hai.
// Ye batata hai ki kaam complete hoga ya fail hoga.

// Promise banane ka tareeka
const promiseExample = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve('Kaam complete ho gaya!');
  } else {
    reject('Kaam fail ho gaya!');
  }
});

// Promise ko handle karna
promiseExample
  .then((result) => {
    console.log('Success:', result);
  })
  .catch((error) => {
    console.log('Error:', error);
  });

// Example 2: setTimeout ke saath promise
const delayedPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('2 seconds baad result aaya');
  }, 2000);
});

delayedPromise.then((data) => {
  console.log('Delayed result:', data);
});

// Promise ka simple concept
// 1. Pending -> abhi kaam chal raha hai
// 2. Fulfilled -> kaam successful hua
// 3. Rejected -> kaam fail hua

// Promise chaining
const promiseChain = new Promise((resolve) => resolve(5));
promiseChain
  .then((value) => value * 2)
  .then((value) => value + 3)
  .then((value) => console.log('Promise chaining result:', value));

// Promise.all -> saare promises complete hon to result deta hai
const promise1 = Promise.resolve('A');
const promise2 = new Promise((resolve) => setTimeout(() => resolve('B'), 1000));
const promise3 = Promise.resolve('C');

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log('Promise.all result:', values);
});

// Promise.race -> sabse pehle complete hone wali promise ka result deta hai
const fastPromise = new Promise((resolve) => setTimeout(() => resolve('Fast'), 500));
const slowPromise = new Promise((resolve) => setTimeout(() => resolve('Slow'), 1500));

Promise.race([fastPromise, slowPromise]).then((value) => {
  console.log('Promise.race result:', value);
});

// Promise.allSettled -> saari promises ka status de deta hai, chahe fail ho ya success
const settle1 = Promise.resolve('Done');
const settle2 = Promise.reject('Oops');

Promise.allSettled([settle1, settle2]).then((results) => {
  console.log('Promise.allSettled result:', results);
});

// Promise.any -> jo pehli success wali promise mile, uska result de deta hai
const any1 = Promise.reject('Fail 1');
const any2 = Promise.resolve('Success 2');
const any3 = Promise.resolve('Success 3');

Promise.any([any1, any2, any3]).then((value) => {
  console.log('Promise.any result:', value);
});
