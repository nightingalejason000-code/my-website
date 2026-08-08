console.log("hello world");
let name = "Jason";
let isStudent = true;
let colors = ["red", "blue"];
let fav_hobb = ["javascript", "v-games","books"];
let total = 5 + 3;
let diff = 10 - 4;
let product = 6 * 2;
let volume = (9 * 5 * 2);
let age_1 = (15);
let age = (18);
let like_to_read = true;
const pi = 3.14;3const birth_year = 2011

// lne 5 v
console.log(fav_hobb)
// lne 11 v
console.log(age);
// lne 12 v
console.log(like_to_read)
// 5 greater than 3 v
console.log (5 > 3);
// 5 equal to 5 v
console.log (5 === 5);
// not equal v
console.log (5 !== 3);
// lne 5 v
console.log (colors);
// lne 4 v
console.log (isStudent);
// lne 7 v
console.log (diff);
// lne 6 v
console.log (total);
// lne 10 v
console.log (volume)

function greet (name) {
     console.log(`Hello, ${name}!`);
    // if (name === "Sam") {
    //  console.log("Bye Sam!");
    //  }
    //  else {name === "Jason"
    //  console.log("Bye Jason!");
    //  }
 }
 greet ("Jason");
 greet ("Sam");

function double(num) 
{return num * 2;}
let result = double(4);
console.log (result);

 if (age < 11 ) 
 { console.log("rslt 1") }
     else if (age < 10 ) 
 { console.log("rslt 2")} 
     else 
 { console.log("rslt 3") } 

 function checkAge(age) 
 { if (age >= 18)
{return "Adult";} 
     else 
 {return "Minor";}
   }
  
console.log(checkAge(15));
console.log(checkAge(20));

console.log(`My name is ${name}! I am a ${checkAge(age_1)}.`)

function nameCheck(name_1) {
    if (name_1 === "Jason") 
    {return "true";}
    }

console.log(`If my name is ${name}, then it is ${nameCheck(name)}`);

function mathSolver(num_1, num_2) {
    return num_1 + num_2; }

    console.log(`An example of an addition problem would be A plus B equals ${mathSolver(15, 15)}.`);

function ageCalculator(age)
{
if (age >= 70)
{return "old";}
    else 
{return "young";}
} 

console.log(ageCalculator(30));
console.log(ageCalculator(80));

function scoreCounter (score_1, score_2) 
{
    if (score_1 === score_2){
        return"Tie";}
        else if (score_1 > score_2)
            {return "Team 1 victory!";}
                else
        {return "Team 2 Victory!";}
    }

    console.log(scoreCounter(10, 10));
    console.log(scoreCounter(9, 8));
    console.log(scoreCounter(1, 15));
