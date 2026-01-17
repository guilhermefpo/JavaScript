// =====================================================
// 📌 PROGRAMAÇÃO ORIENTADA A OBJETOS (POO) EM JAVASCRIPT
// =====================================================

// A Programação Orientada a Objetos (POO) é um paradigma que
// organiza o código usando classes e objetos, deixando-o
// mais organizado, reutilizável e fácil de manter.


// -----------------------------------------------------
// 🔹 CLASSES E OBJETOS
// -----------------------------------------------------
// Uma classe é um molde.
// Um objeto é uma instância da classe.

class Person {
  constructor(firstName, lastName, age) {
    // O constructor é executado automaticamente ao usar "new"
    // Ele inicializa os atributos do objeto
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // ---------------------------------------------------
  // 🔹 MÉTODOS
  // ---------------------------------------------------
  // Métodos definem comportamentos do objeto

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // ---------------------------------------------------
  // 🔹 MÉTODOS ESTÁTICOS (static)
  // ---------------------------------------------------
  // Métodos estáticos pertencem à classe, não à instância

  static speak() {
    console.log("Hello World!");
  }
}

// Criando um objeto (instância da classe Person)
const person = new Person("Jane", "Doe", 40);
console.log(person.getFullName());

// Chamando método estático (não precisa de instância)
Person.speak();


// -----------------------------------------------------
// 🔹 HERANÇA (extends)
// -----------------------------------------------------
// Herança permite que uma classe herde atributos e métodos
// de outra classe, evitando repetição de código.

class Animal {
  constructor(name) {
    this.name = name;
  }

  // Método da classe pai
  speak() {
    console.log(`${this.name} made some noise!`);
  }
}


// -----------------------------------------------------
// 🔹 SUPER
// -----------------------------------------------------
// super() chama o constructor da classe pai

class Dog extends Animal {
  constructor(name) {
    super(name); // Chama o constructor de Animal
  }

  // ---------------------------------------------------
  // 🔹 POLIMORFISMO
  // ---------------------------------------------------
  // Polimorfismo acontece quando a classe filha sobrescreve
  // um método da classe pai, mudando seu comportamento

  speak() {
    console.log(`${this.name} barked!`);
  }
}


// Criando objetos das classes Animal e Dog
const animal = new Animal("Simba");
const dog = new Dog("Bob");

// Cada objeto executa sua própria versão do método speak()
animal.speak(); // Simba made some noise!
dog.speak();    // Bob barked!


// -----------------------------------------------------
// ✅ RESUMO
// -----------------------------------------------------
// • Classes: moldes para criar objetos
// • Objetos: instâncias das classes
// • Constructor: inicializa os atributos
// • Métodos: comportamentos dos objetos
// • Static: métodos da classe
// • Herança: reutilização de código
// • Polimorfismo: comportamentos diferentes para o mesmo método

