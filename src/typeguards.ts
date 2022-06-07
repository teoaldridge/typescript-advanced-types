//TYPE GUARDS 
//A type guard is a TypeScript technique used to get information about 
//the type of a variable, usually within a CONDITIONAL BLOCK. 

type Admin = {
    name: string;
    priviliges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Employee & Admin 

const e1: ElevatedEmployee = {
    name: 'Max',
    priviliges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add (a: Combinable, b: Combinable) {
    //return a + b; - this does not work because TS does not know what to do if the inputs are of different type
    //So we have to specify what we do if the inputs are of certain types, using a 
    //CONDITIONAL BLOCK
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin; 

function printEmployeeInformation(emp: UnknownEmployee) {
    //this works with no issues because both types- Employee and Admin, have a 'name' property.
    console.log('Name: ' +  emp.name);
    //But I also want to access the priviliges with emp.priviliges. 
    //I get an error with this because here TS cannot confirm if priviliges always exists in the argument, 
    //because the UnknownEmployee might be a normal Employee, who does not have priviliges. 
    //So we need a TYPE GUARD here
    //console.log( 'Priviliges: ' + emp.priviliges); - DOES NOT WORK
    
    //Unfortunately with typeof we can not win anything- typeof 'object' 
    //will not tell us if the object has priviliges property or not.
    //typeof 'Employee' or typeof 'Admin' would also not work 
    //because JS does not recognise those types, only TS does.
    //if (typeof emp === 'object') {} - DOES NOT WORK

    // The way to do it is to use 
    //the 'in' keyword, built into JS
    // here we check if 'priviliges' is in emp, and if so, prints it in the console. 
    if ('priviliges' in emp) {
        console.log('Priviliges: ' + emp.priviliges);
    }  
    if ('startDate' in emp) {
        console.log('Priviliges: ' + emp.startDate);
    }
}

printEmployeeInformation(e1);

printEmployeeInformation({name: 'Phil', startDate: new Date()});

//With Classes, we ca use another type of TYPE GUARD: 
//the INSTANCE OF Type Guard

//This is one way of doing it - using an IF statement with 'in'

class Car {
    drive() {
        console.log('Driving a car...');
    }
}

class Truck{
    drive() {
        console.log('Driving a truck...');
    }
    
    loadCargo(amount: number) {
        console.log('Loading truck cargo ...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    //vehicle.loadCarg(1000); - this on its own does not work.
    //we need an IF statement with 'in':
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2); 

//This is a more elegant way of doing this- using an INSTANCE OF Type Guard

class Boat {
    sail() {
        console.log('Sailing a boat...');
    }
}

class Ship{
    sail() {
        console.log('Sailing a ship...');
    }
    
    loadCargo(amount: number) {
        console.log('Loading ship cargo ...' + amount);
    }
}

type Vessel = Boat | Ship;

const vessel1 = new Boat();
const vessel2 = new Ship();

function useVessel(vessel: Vessel) {
    vessel.sail();
    //here we use a Type Guard (if statement ) with INSTANCE OF
    //instanceof is a normal operator, built in Vanilla JS 
    //JS does not know types, type of Ship, but it does know constructor functions.
    //Types in TS are translated into Constructor functions in JS. 
    //So JS can figure out if Vessel was created using the Ship constructor function.
    if (vessel instanceof Ship) {
        vessel.loadCargo(1000);
    }
}

useVessel(vessel1);
useVessel(vessel2); 

//If we had Interfaces here instead of Types, we would not be able to use the instance of Type Guard
//This is because Interfaces are not compiled to any JS code, and therefore, we can't use them at run time. 
// With classes we can, because JS supposts classes and constructor functions, and so 
//with 'instance of' you can find out if some object is based on that class. 