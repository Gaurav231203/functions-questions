/*Agla Question (Thoda interesting 😎)

Ek function banao:

function findLargest(a, b, c){

}

Call:

console.log(findLargest(10, 50, 30));
console.log(findLargest(100, 20, 80));

Expected Output:

50
100*/
let findLargest=( a ,b , c )=>{
    if ( a>b && a> c){
        return` a is bigger ${a}`
    }
    if(b>a && b>c){
    return ` b is bigger ${b}`
}
   else{
    return ` c is bigger ${c}`
   }

}
console.log(findLargest(10, 50, 30));
console.log(findLargest(100, 20, 80));
console.log(findLargest(100, 20, 180));
