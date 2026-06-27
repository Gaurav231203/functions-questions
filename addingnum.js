function addnum(fixednum){
     return function(addednum){
        return fixednum + addednum;


     }
}
let addfive = addnum(5);
console.log(addfive(50));