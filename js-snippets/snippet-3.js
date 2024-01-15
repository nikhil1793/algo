/**
 * * problem 1:
 */

var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func: this.foo = " + this.foo);
    console.log("outer func: self.foo = " + self.foo);

    // * fat arrow function - this will point to its parent
    (() => {
      console.log(this);
      console.log("inner func: this.foo = " + this.foo);
      console.log("inner func: self.foo = " + self.foo);
    })();

    var innerFatFn = () => {
      console.log('innerFatFnnn', this);
    }

    innerFatFn();

    //* normal inner function , this will point to window if inside any other function

    (function(){
      console.log(this);
      console.log("normal inner func: this.foo = " + this.foo);
      console.log("normal inner func: self.foo = " + self.foo);
    })();

    function innerFn1(){
      console.log('innerFn1', this);
    }

    innerFn1();

    //* use fat arrow function inside any inner function
    function innerFn(){
      var innerFatFn = () => {
        console.log('innerFn : fat inside an inner function -> ', this);
      }
      innerFatFn();
    }

    innerFn();

    return function(){
      console.log(this);
    }
  },
};

var fn = myObject.func();

fn();

/**
 * * problem 2:
 */

var x = 21;
var foo = function () {
  console.log(x);
  var x = 20;
};
//foo();

