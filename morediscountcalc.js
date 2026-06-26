function discountcalc( discount){
    return function(price){
        return price-(price*discount)/100;
           

    }

}
let ten=discountcalc(10);
let fifty= discountcalc(50);
let fulloff= discountcalc(100);
console.log(ten(50));
console.log(fifty(50));
console.log(fulloff(50));