//INDEX PROPERTIES
// Index types are a feature that allows us to create objects 
//that are more flexible regarding the properties they might hold. 

//When you create an Index PROPERTIES

//In this example, we will validate some user input.
//Here you have multiple input fields and depending on the input field,
//you want to store and show different error messages 
//i.e. if it is an email, check if the input is really an email and 
//if not show 'wrong email' error message


interface ErrorContainer {
    //you define an index type by using [prop (or any name you choose): ValueTypeOfProperty] : ValueTypeOfProperty
    //You can only use strings, numbers and symbols for ValueTypeOfproperty

    //Here we are saying that whichever object inherits from this interface,
    // should have a property (any property) of type string - [prop: string],
    //and the value of that property also must be a string - : string;
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!',
    1: 'Write your number 1 choice'
};

//Here, by using Index properties, we have made it so that as long as 
//the object input is of type string (or a number, because numbers can also be interpreted as strings in JS),
//and its value is always a string,
//TS will accept any object which inherits from this interface, and follows these rules. 