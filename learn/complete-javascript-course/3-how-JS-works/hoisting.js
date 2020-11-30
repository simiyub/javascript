/*
*Hoisting with functions*
*/
calculateAge(1920);
//In creation global context, calculateAge is stored in a variable and later we declare it.
function calculateAge(year){
console.log(2018-year);    
}

//this would throw an exception as hosting works for function declarations and not function expressions.
//yearsToRetirement(1990);
var yearsToRetirement = function(year){
    console.log(65-(2016-year));
}

/*
*Hoisting with varialbes*
*/

//JavaScrpt knows that there is a variable but is undefined as we would expect from hoisting.
console.log(age);
var age = 23;


var a = 'a';
first();

function first(){
    var b = 'b';
    second();
    function second(){
        var c = 'c';
        third();
    }
    
}

function third(){
    var d = 'd';
    //this will not work as third doesn't have access to c defined in the scope of second
    //console.log(c);
}


/*
** The this keyword
*/

calculateAge(1985);

function calculateAge(year){
    console.log(2019-year);
    console.log(this);
    //This would be the global context hence the window.
}

var john = {
    name : 'John', 
    yearOfBirth: 1990, 
    calculateAge: function(){
        //this is now the object that called this function.
        console.log(this);
        console.log(2019-this.yearOfBirth);
        
        function innerFunction(){
            console.log(this);
        }
        //This will point to the window object because this is a regular function call.
        innerFunction();
    }
    
}

john.calculateAge();


/*
**when this is assigned a value
*/
 
var mike = {
    name:'Mike', 
    yearOfBirth: 1940
};

//we can borrow john's function
mike.calculateAge = john.calculateAge;
//So now this will refer to mike's object which is calling the calculateAge function.
mike.calculateAge();