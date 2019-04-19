/**
    --------------- Function Declaration ---------------
    
    This symbol (F) means that it's pointing out to a function's definition, "points out" not executed 

    It could be recognizable because the keyword "function" its always at the beginning of the line

    This is the outcome of runing the next code:

    -Before Hi Camilo
    -Declaration
    -After
*/
    console.log("Before", sayHello("Camilo")); 

    console.log("Declaration");
    function sayHello(name){ return `Hi ${name}`}; 

    console.log("After");
/*
    --------------- Why ---------------
    -If I call a function before of being defined whay I got "Before Hi Camilo"
    -shoudn't I got a "TypeError"?

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
    |                          | |                          | | sayHello: (f)            |
    |                          | |                          | |                          |
    ---------------------------- ---------------------------- ----------------------------

    --Execution Context
    When the JS engine reaches this code*/ console.log("Before", sayHello("Camilo")); /*
    Global Memory already has a definition (pointing out to a function) which is the way we got "Hi Camilo" instead of a "TypeError",
    even though, the visual "declaration" is a couple of lines down
*/

