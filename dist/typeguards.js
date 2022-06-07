"use strict";
const e1 = {
    name: 'Max',
    priviliges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('priviliges' in emp) {
        console.log('Priviliges: ' + emp.priviliges);
    }
    if ('startDate' in emp) {
        console.log('Priviliges: ' + emp.startDate);
    }
}
printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Phil', startDate: new Date() });
class Car {
    drive() {
        console.log('Driving a car...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading truck cargo ...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
class Boat {
    sail() {
        console.log('Sailing a boat...');
    }
}
class Ship {
    sail() {
        console.log('Sailing a ship...');
    }
    loadCargo(amount) {
        console.log('Loading ship cargo ...' + amount);
    }
}
const vessel1 = new Boat();
const vessel2 = new Ship();
function useVessel(vessel) {
    vessel.sail();
    if (vessel instanceof Ship) {
        vessel.loadCargo(1000);
    }
}
useVessel(vessel1);
useVessel(vessel2);
//# sourceMappingURL=typeguards.js.map