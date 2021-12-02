/* 
  Throttling is a technique in which, no matter how many times 
  the user fires the event, the attached function will be executed 
  only once in a given time interval.
*/

let counter = 0;

function getData() {
  console.log("fetch data.....", counter++);
}

const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
var throttleIt = throttle(getData, 300);
