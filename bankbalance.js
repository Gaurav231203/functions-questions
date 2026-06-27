/*let account = bankAccount(1000);

account.deposit(500);
account.withdraw(200);
account.checkBalance();*/
// isami ek enitial bakance hoga jissmai hume change krna hai deposit ,widraw and remaining balance


function bankAccount(initalbalanece){
let balance = initalbalanece;
 return {//object banaya 
//deposit is the name of the function
    deposit: function(account){ //ye hai object kay andr ka pahla function
        balance += account;
            console.log(balance);
    },//,is used in object to seprate function
    //withdraw is also name of the function
    withdraw: function(account){//ye hai object kay andr ka 2nd function
        balance -=account ;
            console.log(balance);
    },
    //avaliabe is the name of the  fucntion
    avaliable:function(account){ // ye hai 3rd function inside object 
        console.log(balance);

    } 

 }

}
let account = bankAccount(1000);
account.deposit(500);
account.withdraw(1500);
account.avaliable();
