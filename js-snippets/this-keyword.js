/**
 * * this keyword - depends on how and from where the function has been called
 */

function print(){
    console.log(this.name);
}

/**
 * * print called from  {name: 'nikhil'} context
 */
//print.call({name: 'nikhil'});

function greet(){
    console.log(this); //* window - because below greet() called from global context
    this.name = 'srivastava';
    print();
}

//greet();

var obj = {
    name: 'adam',
    greeting: function(){
        print();
    }
}

obj.greeting();