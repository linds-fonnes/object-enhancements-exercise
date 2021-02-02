//Same Keys and Values
function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}

//Computer Property Names
let favoriteNumber = 42;
let instructor = {
    firstName: "Colt",
    favoriteNumber,
}

//Object Methods
let instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye(){
        return this.firstName + ' says bye!';
    }
}

//createAnimal function
function createAnimal(species,verb,noise){
    return {
       species,
       [verb](){
           return noise;
       }
     }
}