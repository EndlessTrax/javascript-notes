/*
    Object Orientated JavaScript
*/

// Captialize the class name. 

class Pet {
    // First create the constructor method for the class. 
    constructor(animal, age, breed, sound){
        this.animal = animal;
        this.animal = age;
        this.breed = breed;
        this.sound = sound;
    }

    // Getter method allows us to run logic to set an argument fo the class.
    // This is not stored anywhere. It is run each time called. 
    get activity(){
        const today = new Date();
        const hour = today.getHours();
        if (hour > 8 && hour <= 20){
            return 'playing';
        } else {
            return 'sleeping';
        }
    }

    get owner(){
        return this_owner;
    }

    // Setter method is similar to getter but this time it is stored and actions can be performed on it later.
    // Always has one arg for the var to be set.
    set owner(owner){
        // Unlike before, the var cannot have the same name as arg.
        // Convention is to use underscore at the beginning instead.
        // This is called a 'backing property'.
        this._owner = owner;
        console.log('setter called: ${owner}');
    }


    // Class method. Note: don't use the function keyword.
    speak(){
        console.log(this.sound);
    }
}

// Create a new instance of the class. 
const bert = new Pet('dog', 1, 'collie', 'bark');

// Call the method from the class.
bert.speak();

// Print out the getter method.
console.log(bert.activity)

// Set a property with setter method.
bert.owner = 'Me';
// The set value is retrieved by calling it's corresponding getter method. 
bert.owner();

// 