interface Person {
    name: string;
    age: number;
    greet(): void;
  }
  
  const person: Person = {
    name: "John Doe",
    age: 30,
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    },
  };
  
  person.greet(); 