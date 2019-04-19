/**
 this symbol (F) means that it's pointing out to a function code, "points out" not executed 

 As I mentioned before When a JS code is run there is this 3 importantan things working togather

 --------------- ---------------- -----------------
 | Call Stack  | | Global Scope | | Global Memory |
 |             | |              | |               |
 |             | |              | |               |
 |             | |              | |               |
 |             | |              | |               |
 --------------- ---------------- ----------------- 
 For now, only focus on the "Global Memory" an run that code
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
----------------------------
|       Global Memory      |
|                          |
| name: undefined          |
| otherName: "Camilo"      |
| sayHello: (F)            |
| lastName: "Colorado"     |
| otherLastName: undefined |
| hello: undefined         |
| helloTwo: undefined      |
|                          |
----------------------------

After finishing the "compiled" process, the Global memory got these values:
- "name" with the value "undefined" because it was "declared" only
- "otherName" with the value "Camilo" because it was "declared" and "initialized" 
- "sayHello" which points out to a function code that has not invoked yet
- "lastName" with the value "Colorado" because it was "declared" and "initialized" 
- "otherLastName" with the value "undefined" this one was not declared with the keyword var, however, js create it for us in that "Global Memory"
- "hello" with the value "undefined" because it was "declared" but it future values up to the value returned by sayHello() execution, it means
    until the compilation execution finish it is going to have the value "undefined"
- "helloTwo" the same process as "hello"

Overall that was all the "compile" process does 
*/