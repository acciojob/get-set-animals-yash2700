class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("The " + this._species + " makes a sound.");
  }
}

class Cat extends Animal {
  purr() {
    console.log("The Siamese makes a sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("The Golden Retriever makes a sound");
  }
}

window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;