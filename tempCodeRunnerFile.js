function discountcalc(discount ){
   
    return function(price){
        let discountamount = price*discount /100;
          console.log("Discount Amount:", discountAmount);
         return price - discount;
    }

}
const finaldiscount = discountcalc(10);
console.log(finaldiscount(100));