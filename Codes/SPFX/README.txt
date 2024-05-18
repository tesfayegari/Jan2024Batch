SPFx Documentation 

Environment Setup
Toolchains 
    - Install Node.js v18
    - Install a code editor (vscode)
    - Install Gulp
    - Install Yeoman
    - Install Yeoman SharePoint generator
Create our first SPFx Project following this documentation 
https://learn.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/build-a-hello-world-web-part
Webpart Configuration properties (Custom)

TypeScript/javaScript
	- Statement
	- variables (initialization, definition, assignment...)
	- data types of variables 
	- conditional statements (if .. else, switch ... case)
	- Looping (for loop, for each loop, .... )
	- functions 
	- Object oriented 
	- DOM manipulation 
	- DOM predefined objects/methods and properties
	- events in JS/Ts
Notes: 
import { SPService } from "../Service/SPService";
import { Student } from "./Student";

//variables 
var a;
a = 19
let b = 10;

a + b;
a % b; // a modulus b which returns the quotent
a / b; // a divided by b 
//in typescript we can define variables and also set the datatype example 
let stduentName: string;
stduentName = "Sifan";

//datatypes in javascript string, number, null, undefined, array, boolean, object, any 
let number1: number = 10; //number 

//array 
let students: string[] = ["Sifan", "Aman", "Dany"];
//arrays are accessed by 0 based indices example Aman in above example is students[1]
//arrays have bunch of properties 
students.push("Wube"); //Wube is going to be added to the array 
let raining = true;
//object data type 
let sifan: Student, aman: Student;
sifan = { id: 6, name: "Sifan", dob: "1/1/2000", email: "Email@email.com", department: "Computer" };
aman = { id: 6, name: "Aman", dob: "1/1/1990", email: "aman@email.com", department: "Accounting" };

//If student department is Computer Reply YES other wise reply No 
/**if else conditional statement 
 * if(ondition){
 *  statemtns when true;
 * } else{
 *  statements when false;
 * }
 * Comparison  operators 
 * equality ==
 * similarity ===  //when data type and value is the same 
 *
 * not similar !==
 * inequality !=
 * greater >
 * less <
 * greater or equal >=
 * less or equal <=
 * || OR
 * && AND
 */
if (sifan.department.toLowerCase() == "computer") {
    //Reply Yes
} else {
    //Reply No
}

let age = 10;
if (age < 1) {
    //less than 1
} else if (age >= 1 && age < 5) { // age is between 1 and 5 excluded
    //age is between 1 and 5 excluded
} else if (age >= 5 && age < 10) { // age is between 1 and 5 excluded
    //age is between 5 and 10 excluded
} else {
    // age greater or equal to 10
}

let month = 5; //Display Month in word by using conditioan statement example for this display May
if (month == 1) {
    //Display January
} else if (month == 2) {
    //Display February and so on 
}
/**
 * Syntax for switch case 
 * Switch(value){
 *  case val1: statemtns;
 *      break;
 *  case val2: statemtns; 
 *      break; ///and so on 
 *  Default: statemtns; break;
 * }
 */
//write the month above in switch case 
switch (month) {
    case 1:
        //Display January
        break;
    case 2:
        //Display February
        break;
    case 3:
        //Display March and etc 
        break;
    default:
        break;
}
/*Looping for loop or for each 
Syntax: for(initilization; comparisoncondition ; action){
    //Looping area 
}
 */
//The followign displays number 0 to 9 
for(let i=0; i < 10; i++){// increament i by 1 i= i+ 1 or we can simply say i++ means i=i+1
    //Display i 
}
//When we have collection coll, you can use each value in a callection using for each 
/**
 * Syntax: for(let st in students ){ //st is indexes of studetns
 *  //Distplay students[st]
 * }
 * for(let st of students ){ //st is a student
 *  //Distplay st
 * }
 */
/**
 * nameOfFunction(parameters){
 *  //statemtns 
 *   return value;
 * }
 */
// let svc: SPService;
// svc = new SPService();



	


Reference:
SharePoint Framework Overview
https://learn.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview
Set up your SharePoint Framework development environment
https://learn.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-development-environment
Hellow world Webpart SPFx 
https://learn.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/build-a-hello-world-web-part
https://www.javascripttutorial.net/