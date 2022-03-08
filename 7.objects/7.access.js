var person = {
    firstName: 'Scott',
    lastname: 'Desatnick',
    city: 'Boston',
    age: 45
}

person.email = 'scott@ef.com' // CREATE
person.city ="Bengaluru" // UPDATE
delete person.age // DELETE
console.log(person) // READ 


// Object.preventExtenions()
// I can't add new properties

var studentPreventExtensions = {
    firstName: 'Scott',
    lastname: 'Desatnick',
    city: 'Boston',
    age: 45
}

Object.preventExtensions(studentPreventExtensions)

studentPreventExtensions.email = 'scott@ef.com' // CREATE - Not possible
studentPreventExtensions.city ="Bengaluru" // UPDATE
delete studentPreventExtensions.age // DELETE
console.log(studentPreventExtensions) // READ 

// Object.seal()
// I can only update existing properties
var studentSeal = {
    firstName: 'Scott',
    lastname: 'Desatnick',
    city: 'Boston',
    age: 45
}

Object.seal(studentSeal)

studentSeal.email = 'scott@ef.com' // CREATE
studentSeal.city ="Bengaluru" // UPDATE - Only this is possible
delete studentSeal.age // DELETE
console.log(studentSeal) // READ

// Object.freeze()

var studentFreeze = {
    firstName: 'Scott',
    lastname: 'Desatnick',
    city: 'Boston',
    age: 45,
    address: {
        state : 'Massecchusets'
    }
}

Object.freeze(studentFreeze)
Object.freeze(studentFreeze.address)


studentFreeze.email = 'scott@ef.com' // CREATE
studentFreeze.city ="Bengaluru" // UPDATE
delete studentFreeze.age // DELETE

studentFreeze.address.state ='Telangana'

console.log(studentFreeze) // READ

// HACK

var studentStringify= JSON.stringify(studentFreeze)
var studentParse = JSON.parse(studentStringify)

studentParse.email ='scott@ef.com'
console.log(studentParse)

