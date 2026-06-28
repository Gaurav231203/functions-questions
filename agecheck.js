/* Ek function banao:

function checkAge(age){

}

Call:

console.log(checkAge(20));
console.log(checkAge(15));

Expected Output:

Eligible
Not Eligible */
function checkAge(age) {
    if (age > 18) {
        return "Eligible";
    }
    else {
        return 'notEligible';
    }


}
console.log(checkAge(20));
console.log(checkAge(15));
