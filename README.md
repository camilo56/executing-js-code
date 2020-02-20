# Executing Js Code

This is an overview of how the js code is read, interpreted and run in js engine, the first source of truth you should check is [specification](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-intro), nevertheless, it has a lot of information and would it be nice to get that information in a brought down way, however, I have realized that in some cases to use metaphors could lead you on a wrong "mental model", which is one of the biggest problems amoung of hundred js developers nowadays, and main inspiration for writing this examples.

"A wrong prosses which takes you to the right answer is not a right answer".


know the Js foundation helps you to write clean and accurate code furthermore makes easier the debugging process and catch bugs


## Step 1: Global Scope, global memory and call Stack

The first step we make sure is clear is how the js code is compiled(readed, parsed, etc) and executed.
As soon as our code is been read tree important actors appears:

* [Global Scope](https://www.w3schools.com/js/js_scope.asp)
* [Global Memory](https://www.w3schools.com/js/js_scope.asp)
* [Call Stack](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)

(there are others as important as the previous ones, We are going to talk about it later, though)

yes, you have read rightly js code is compiled before executing, it is not compiled as the compiled in the way of java does, but at least read the code to be sure there are no problems and extract really important information. aren't you sure, are you? run this [Example](/stepOne/syntaxError.js).

### 1.1: Compaling code
The code is going to be read (compiled) and at the end of it all the declarations will have been saved on the Global Memory

[Explanation Code](/stepOne/savingDeclarations.js)

### 1.2: Execution context
Right after the compilation finish, this step stars, To sum up, at the end of this process all the executable code will have executed.
Note: There is a really important concept here call "Hoisting", which in many blogs, pages and tutorials have this definition:

"Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope" [w3schools](https://www.w3schools.com/js/js_hoisting.asp)

it is inaccurate because js engine NOT MOVE OUR CODE, check the next link to see a deep explanation:

* [General explanation code](/stepOne/executionContext.js)

### Other helpful examples:

#### Functions expresions and Function declarations

Js has a different ways of declaring functions, these are the most common. They name and behavior is not very well know, though

* [Function Declaration](/stepOne/functionDeclaration.js)
* [Function Expresion](/stepOne/functionExpresion.js)


