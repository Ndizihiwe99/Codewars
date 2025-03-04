// Define the base class Animal
class Animal {
    constructor(name, age, legs, species, status) {
      this.name = name;
      this.age = age;
      this.legs = legs;
      this.species = species;
      this.status = status;
    }
  
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  // Define the Shark class
  class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age, 0, "shark", status);
    }
  }
  
  // Define the Cat class
  class Cat extends Animal {
    constructor(name, age, status) {
      super(name, age, 4, "cat", status);
    }
  
    introduce() {
      return `${super.introduce()}  Meow meow!`;
    }
  }
  
  // Define the Dog class
  class Dog extends Animal {
    constructor(name, age, status, master) {
      super(name, age, 4, "dog", status);
      this.master = master;
    }
  
    greetMaster() {
      return `Hello ${this.master}`;
    }
  }
  
  // Create instances and log the results
  const shark = new Shark("Billy", 3, "Alive and well");
  console.log(shark.introduce());
  
  const cat = new Cat("Cathy", 7, "Playing with a ball of yarn");
  console.log(cat.introduce());
  
  const dog = new Dog("Doug", 10, "Serving his master", "Eliza");
  console.log(dog.introduce());
  console.log(dog.greetMaster());
  