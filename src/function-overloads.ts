//FUNCTION OVERLOADS 
//Function Overloads are a feature that allows us to 
//define multiple function 'signatures' so to say 
//for one and the same function
//i.e. We can have different ways and parameters of calling a function 
//to then do something inside of the function. 


type StringOrNumber = string | number;
type NumberOrBoolean = number | boolean;

type Combination = StringOrNumber & NumberOrBoolean;

//To write a function overload, you write a function 
//right above the main function
function addValues(a: string, b: string): string;
function addValues(a: number, b: number): number;
function addValues(a: number, b: string): string;
function addValues(a: string, b: number): string;

function addValues (a: StringOrNumber, b: StringOrNumber) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = addValues('Teodora', 'A')
result.split(' ');