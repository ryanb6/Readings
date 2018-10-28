let and const are local to the block that they are created in.

function declarations can be written after they are called, as they are moved to the top of the scope inherently.

The arrow => can be used instead of function()

  function square(x){
    return x * x;
  }

  const square1 = (x) => {return x * x};

  const square2 = x => x * x;

  const horn = () => {
    console.log("toot");
  }

in JS, extra arguments are ignored. if there arent enough arguments passed, they become undefined.

  function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
  }
  console.log(minus(10));
  // → -10
  console.log(minus(10, 5));
  // → 5

default arguments are defined with an = in the function and become optional.

You can reference specific bindings of a function. This is called closure.

  function wrapValue(n) {
    let local = n;
    return () => local;
  }
  let wrap1 = wrapValue(1);
  let wrap2 = wrapValue(2);
  console.log(wrap1());
  // → 1
  console.log(wrap2());
  // → 2


  function multiplier(factor) {
    return number => number * factor;
  }
  let twice = multiplier(2);
  console.log(twice(5));
  // → 10

Recursion

  function power(base, exponent) {
    if (exponent == 0) {
      return 1;
    } else {
    return base * power(base, exponent - 1);
    }
  }
  console.log(power(2, 3));
  // → 8
