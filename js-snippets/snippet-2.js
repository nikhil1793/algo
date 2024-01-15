/**
 * * problem 1: 
 */

var length = 10;

function fn() {
  //* this - will point to the window object here
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function (fn) {
    fn();
    console.log(arguments);
    /**
     * * arguments is an array passed while calling order method
     * * [ fn() , 1 ]
     * * arguments[0]() - in this case, console.log(this.length) -> this will
     * * point to the array itself. so this.length = 2 ( size of array )
     */
    arguments[0]();
  },
};

obj.method(fn, 1);

