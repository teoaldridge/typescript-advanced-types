//TYPE CASTING
//Type Casting helps you tell TS that a value is of a specific type
//when TS is not able to detect the type on its own, 
//but you know that that will be the case

//Here is an example with something we get access to within the DOM.

//There are two ways in which we can inform TS of the type of a certain element: 

//Option 1: With <YourType> in front of the element
//However this syntax can clash with React if you are also using it because
//react uses similar <> syntax for other things.
//const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;

//Option 2: with the 'as YourType' keyword after the element

//The reason why we have added an ! after the document.getElementById('user-input')!
//This ! tells TS that the expression in front of it will never yield null.
//This is required for some expressions, like this here, that might return null.  
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

//Alternatively, instead of the !, you can write an if statement 
//that checks if userInputElement is truthy, but that would take much more code writing.
if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!';
}