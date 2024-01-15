/**
 * * Problem:
 * * this problem is an example of event loop concept
 * ? call back of the browser api handling events will be called only when the 
 * ? call stack will be empty
 * * In below case while loop is keep on running that why its not allowing the 
 * * call back of setTimeout to get called and allow variable a to become false
 */

 let a = true;
 let c = 0;
 
 setTimeout(() => {
   a = false;
   console.log("browser api --- settimeout-------callback----", a);
 }, 1000);
 
//  while (a) {
//    console.log(a);
//    console.log("invoked" + ++c);
//    if( c > 35000) {
//      break;
//    }
//  }
 
 /**
  * * In below case we are handling above scenario with setInterval instead
  * * of blocking call stack
  */
 
 var intervalRef = setInterval(() => {
   if (a) {
     console.log(a);
     console.log("invoked" + ++c);
   } else {
     clearInterval(intervalRef);
   }
 });