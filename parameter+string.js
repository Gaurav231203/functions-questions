/*Question 3 (Parameter + String)
function introduce(name, age){

}

Call:

console.log(introduce("Gaurav", 22));

Expected Output:

My name is Gaurav and I am 22 years old.

👉 Hint: Template literals use karna:

`My name is ${name}`*/

function introduce(name, age){
    return `myname is ${name}` + ` my age is ${age}.`;

}
console.log(introduce("Gaurav", 22));

