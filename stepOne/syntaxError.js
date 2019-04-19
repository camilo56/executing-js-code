/*This is the expected behavior:
 1-runs the line 9 and show 'Initial log'
 2-Trigger an "SyntaxError:" in line 11 as a result of a bad declaration
 
 Real behavior
 1-Trigger an "SyntaxError:" in line 11 as a result of a bad declaration.
 console.log info never show up, untill that problem would be fixed first
*/

console.log("Initial log")

var 2camilo = "camilo";

console.log("final log", 2camilo)


/** ------------- Why? --------------------- 
Because the whole code is read (compilated) first seeking for error and extracting information 
(the next step tells you what kind of information), only after reading all, the code the execution side
(in this case lines 10 and 14) is run

*/