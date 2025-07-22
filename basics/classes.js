class Animal{
    constructor(name , age ){
        this.name = name;
        this.age = age;
    }
    speak(){
        console.log(`${this.name} makes a noise.`);
    }
    static info(){
        console.log("Animals also have  feelings");// Static class only depend on the class mean associated with the class only 
    }
}
console.log(Animal.info());//use of the static class is like this.
let dog = new Animal("Dog", 5);
dog.speak();

