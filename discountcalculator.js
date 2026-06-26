//make a discount calculator  with clouser
function discountcalc(discount ){
   
    return function(price){
        let discountamount = (price*discount)/100;
          console.log("Discount Amount:", discountamount);
         return price - discount;
    }

}
const finaldiscount = discountcalc(10);
console.log(finaldiscount(100));