//make a discount calculator  with clouser
function discountcalc(discount ){
   
    return function(price){
        let discountamount = (price*discount)/100;
          console.log("Discount Amount:", discountamount);
         return price - discountamount;
    }

}
const finaldiscount = discountcalc(10);
console.log(finaldiscount(1000));
//Discount Amount: 100
//990
//PS C:\Users\bisht\OneDrive\Desktop\functionqns> 