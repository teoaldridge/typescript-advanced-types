//DISCRIMINATED UNIONS

//In a discriminated union we have one common property ('type' in our case)
//in every object which makes up our union,
//which describes that object

//So that we can use this property in our check to make sure we know
// which interface we are using in this case. 

interface Bird {
    //to use discriminated unions, we add type 'bird' to interface Bird:
    type: 'bird';
    flyingSpeed: number;
}

interface Horse{
    //to use discriminated unions, we add type 'horse' to interface Horse:
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse; 


//Here again we need to create an if statement 
//to see if type Animal is an instance of Bird or Horse
//We can NOT use INSTANCE OF because Bird and Horse are interfaces, so they are NOT compiled to JS,
//so at run time they won't be available as constructor fucntions. 

//Instead, here we can use
//DISCRIMINATED UNIONS

function moveAnimal(animal: Animal) {
    //we introduce a variable speed 
    let speed;

    //create a switch statement
    switch (animal.type) {
        //in the case of bird, speed = animal.flyingspeed
        case 'bird': 
            speed = animal.flyingSpeed;
        break;

        case 'horse':
            speed = animal.runningSpeed;
    }
    //we console.log the speed, depending on the case.
    console.log('Moving at speed' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 }); 