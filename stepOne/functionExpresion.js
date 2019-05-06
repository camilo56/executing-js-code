/**
 * This symbol (F) means that it's pointing out to a function's definition, "points out" not executed 
   
    --------------- Function Expresion ---------------
    It happens when an anonymus or named function is assigned to a variable 
  
    This is the outcome of runing the next code:

    -TypeError: sayHello is not a function

*/
    console.log("Before", sayHello("Camilo")); 
    console.log("Declaration"); 
    var sayHello = function sayHello(name){ return `Hi ${name}`}; 
    console.log("After");
/*
    --------------- Why ---------------
    This looks like so similar to the previous "Function Declaration", shouldn't it behave of the same way?

    let's split it up in little steps:

    --Initial Staff:
    ---------------------------- ---------------------------- ---------------------------- 
    |       Call Stack         | |       Global Scope       | |       Global Memory      |
    |                          | |                          | |                          |
    |                          | |                          | |                          |
    ---------------------------- ---------------------------- ----------------------------
    
    --after compilation:
    ---------------------------- ---------------------------- ---------------------------- 
    |       Call Stack         | |       Global Scope       | |       Global Memory      |
    |                          | |                          | | sayHello: undefined      |
    |                          | |                          | |                          |
    ---------------------------- ---------------------------- ----------------------------

    --Execution Context
    When the JS engine reaches this code*/ console.log("Before", sayHello("Camilo")); /*
    
    Even when */ var sayHello = function sayHello(name){ return `Hi ${name}`};/* looks like has saved the function definition at the compilation time, it did not,
    only the "Function Definion" does, after that compilation the value saved in "sayHello" is "undefined".

    ---Hypothetical situation

    With that in mind makes sense The error where trigger, because the primitive "undefined" could not be called as a function, therefore, the execution is stopped,
    if we would have run */var sayHello = function sayHello(name){ return `Hi ${name}`}/* 
    before */console.log("Before", sayHello("Camilo"));/*
    we would not be getting an error and the staff would be looking like this:
    
    ---------------------------- ---------------------------- ---------------------------- 
    |       Call Stack         | |       Global Scope       | |       Global Memory      |
    |                          | |                          | | sayHello: (f)            |
    |                          | |                          | |                          |
    ---------------------------- ---------------------------- ----------------------------
*/

