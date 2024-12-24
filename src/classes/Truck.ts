// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
	// TODO: Declare properties of the Truck class
	// TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
	// TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)

	vin: string;
	color: string;
	make: string;
	model: string;
	year: number;
	weight: number;
	topSpeed: number;
	wheels: Wheel[];
	towingCapacity: number;

	// TODO: Create a constructor that accepts the properties of the Truck class
	//constructor - this is what you need to implement the class
	constructor(
		//parenthetical inside the (), declaring the class args (what you need to make it work when you invoke it)
		//parameters to the constructor
		vin: string,
		color: string,
		make: string,
		model: string,
		year: number,
		weight: number,
		topSpeed: number,
		wheels: Wheel[],
		towingCapacity: number
	) {
		//assigning constructor arguments to class definitions
		// TODO: The constructor should call the constructor of the parent class, Vehicle
		super(); //gives you access to base constructor Vehicle

		// example - this.started = true; //we now have access to the properties/methods of the Vehicle class (after super();) and can update them

		// TODO: The constructor should initialize the properties of the Truck class
		//this.__ is referring to the class we are inside (Truck) property, setting it equal to the constructor parameter
		this.vin = vin;
		this.color = color;
		this.make = make;
		this.model = model;
		this.year = year;
		this.weight = weight;
		this.topSpeed = topSpeed;
		this.towingCapacity = towingCapacity;

		// TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
		if (wheels.length !== 4) {
			this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()]; //new keyword is using constructor of a class, get back an instance of that class as an object, using default parameters of the Wheel class
		} else {
			this.wheels = wheels;
		}
	}

	// TODO: Implement the tow method from the AbleToTow interface
	tow(vehicle: Truck | Car): void {
		// TODO: Get the make and model of the vehicle if it exists
		let make = vehicle.make; //ex. Toyota
		let model = vehicle.model; //RAV4

		// TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
		if (vehicle.weight <= this.towingCapacity) {
			//this is referring to the truck, vehicle is referring to the thing being towed
			// TODO: If it is, log that the vehicle is being towed
			console.log(`The ${make} ${model} ${vehicle} is being towed.`);
		} else {
			// TODO: If it is not, log that the vehicle is too heavy to be towed
			console.log(
				`The ${make} ${model} ${vehicle} is too heavy to be towed.`
			);
		}
	}

	// TODO: Override the printDetails method from the Vehicle class
	override printDetails(): void {
		// TODO: The method should call the printDetails method of the parent class
		super.printDetails();

		// TODO: The method should log the details of the Truck
		// TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
		console.log(`Vehicle VIN: ${this.vin}.
      Vehicle make: ${this.make}.`);
		console.log(`Vehicle model: ${this.model}`);
		console.log(`Vehicle year: ${this.year}`);
		console.log(`Vehicle weight: ${this.weight}`);
		console.log(`Vehicle top speed: ${this.topSpeed}`);
		console.log(`Vehicle color: ${this.color}`);
		console.log(`Vehicle towing capacity: ${this.towingCapacity}`);
		console.log(`Vehicle wheels: ${this.wheels}`);
	}
}

// Export the Truck class as the default export
export default Truck;
