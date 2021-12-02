/* 
  In the debouncing technique, no matter how many times the user 
  fires the event, the attached function will be executed only after 
  the specified time once the user stops firing the event.

*/
let counter = 0;

function getData() {
  console.log("fetch data.....", counter++);
}

const deBounce = function (fn, d) {
  let timer;
  return function () {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context);
    }, d);
  };
};

const debounceIt = deBounce(getData, 300);
