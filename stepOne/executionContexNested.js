/**
When a JS code is run the global context is pushed to the call Stack.

Staff look like:
---------------------------- ---------------------------- ---------------------------- 
|       Call Stack         | |       Global Scope       | |       Global Memory      |
|                          | |                          | |                          |
|                          | |                          | | name: undefined          |
|                          | |                          | | otherName: "Camilo"      |
|                          | |                          | | sayHello: (F)            |
|                          | |                          | | lastName: "Colorado"     |
|                          | |                          | | otherLastName: undefined |
|                          | |                          | | hello: undefined         |
| ________________________ | |                          | | helloTwo: undefined      |
|          global()        | |                          | |                          |
---------------------------- ---------------------------- ----------------------------

At this point, the "Global memory" has saved all the information related to variable declaration, at any moment
the code was "moved to the top" only saved in the "Global memory" thus in this step the JS engine know the value of each
of them and can use it to run the code.
*/

var name;
var otherName = "Camilo";

console.log(lastName);

function sayHello(name){ return `Hi ${name}` };

var lastName = "Colorado";
otherLastName;

var hello = sayHello(otherName);
var helloTwo = sayHello(otherName);

/*
    Execution context only focus on the executable code, which is the code that has parenthesis, such as console.log() or sayHello(), 
    this is stepwise:
    
    1- Run this code */console.log(lastName);/*, the outcome is printed in the console (browser or terminal in case of "node") with the value "Colorado",
        because despite the "lastName" allocation with regard to console.log execution the value "Colorado" had saved in "Global Memory" by
        the compilation context, that is the place where the JS engine will look for variable's values.
    
    2- */var hello = sayHello(otherName);/* is run, stepwise:
        2.1- The new context is pushed to the call Stack
        2.2- A new "local execution context" with its "Local Memory" is created inside the current (in this case Global context) and its code is executed.
        2.3- The values returned by sayHello() is saved in the variable "hello" (thus that value is updated in the Global memory)
    
        Our staff looks like:

        ---------------------------- ------------------------------------------------ ---------------------------- 
        |       Call Stack         | |       Global Scope                           | |       Global Memory      |
        |                          | |                                              | |                          |
        |                          | |    sayHello                                  | | name: undefined          |
        |                          | |    -----------------  -------------------    | | otherName: "Camilo"      |
        |                          | |    |  Local Scope  |  |   Local Memory  |    | | sayHello: (F)            |
        |                          | |    |               |  | name: "colorado"|    | | lastName: "Colorado"     |
        |                          | |    |               |  |                 |    | | otherLastName: undefined |
        |                          | |    |               |  |                 |    | | hello: "Hi colorado"     |
        |    sayHello(otherName)   | |    |               |  |                 |    | | helloTwo: undefined      |
        | ________________________ | |    -----------------  -------------------    | |                          |
        |          global()        | |    return "Hi Colorado"                      | |                          |
        ---------------------------- ------------------------------------------------ ----------------------------
        
        2.4: when */var hello = sayHello(otherName)/* ends up, its scope is removed from the parent (Global Scope in this case) and 
        "sayHello" context is popping from the Call Stack
        
        ---------------------------- ------------------------------------------------ ---------------------------- 
        |       Call Stack         | |       Global Scope                           | |       Global Memory      |
        |                          | |                                              | |                          |
        |                          | |                                              | | name: undefined          |
        |                          | |                                              | | otherName: "Camilo"      |
        |                          | |                                              | | sayHello: (F)            |
        |                          | |                                              | | lastName: "Colorado"     |
        |                          | |                                              | | otherLastName: undefined |
        |                          | |                                              | | hello: "Hi Colorado"     |
        |                          | |                                              | | helloTwo: undefined      |
        | ________________________ | |                                              | |                          |
        |          global()        | |                                              | |                          |
        ---------------------------- ------------------------------------------------ ----------------------------
        
        3- The next line of executable code is  */var helloTwo = sayHello(otherName);/* the process is similar to the previous one, only the parameter is
        different, thanks to it the staff looks like:

        Note- Js engine creates a new "sayHello" scope, it does not get back to the previous one even if the function invocation is the same.
        
        ---------------------------- ------------------------------------------------ ---------------------------- 
        |       Call Stack         | |       Global Scope                           | |       Global Memory      |
        |                          | |                                              | |                          |
        |                          | |    sayHello                                  | | name: undefined          |
        |                          | |    -----------------  -------------------    | | otherName: "Camilo"      |
        |                          | |    |  Local Scope  |  |   Local Memory  |    | | sayHello: (F)            |
        |                          | |    |               |  | name: "Camilo"|      | | lastName: "Colorado"     |
        |                          | |    |               |  |                 |    | | otherLastName: undefined |
        |                          | |    |               |  |                 |    | | hello: "Hi colorado"     |
        |    sayHello(otherName)   | |    |               |  |                 |    | | helloTwo: "Camilo"       |
        | ________________________ | |    -----------------  -------------------    | |                          |
        |          global()        | |    return "Hi Camilo"                        | |                          |
        ---------------------------- ------------------------------------------------ ----------------------------

        4- Finally, the Call stacks got cleaned and the execution finishes

    ------------------------------- Note -------------------------------
    - Js function always returns something, whether the "return" explicit defined or not, if not it is going to return "undefined"
    - call stack tells me:
        - where am I currently? 
        - where is the thread of execution currently in my code?
*/