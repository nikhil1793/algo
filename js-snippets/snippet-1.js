/**
 * * Hoisting
 * * variable declared with let can not be hoisted - will throw error when try to be hoisted
 */

//console.log(a);

console.log(b);

let a = "nikhil";

var b = 2;

/**
 * * Blocked Scope
 */
{
  let blockedScopeB = 2;

  //* function declared with function will go the window scope
  function fn() {
    console.log(a, blockedScopeB);
  }

  let blockedScopeFn = function () {
    console.log(a, blockedScopeB);
  };
}

//blockedScopeFn();

fn();

// this.b   ---> global scope === window === this

console.log(this.a); // undefined (  will not find a in global scope )

/**
 * ============== 4 types of scope  ===============
 */

var global = "global";

{
  let blocked = "blocked";
}

// let scriptScope = 'script';

function anyFn() {
  functionScope = "functionScope";
}

/**
 * ============== 3 types of scope  ===============
 */

var num = 4;

function outer() {
   num++;

   function inner(){
     num++;
     console.log('at inner level ',num);
   }

   inner();
   console.log('at outer level ', num);

  
}

outer();
