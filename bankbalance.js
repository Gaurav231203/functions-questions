/*let account = bankAccount(1000);

account.deposit(500);
account.withdraw(200);
account.checkBalance();*/
// isami ek enitial bakance hoga jissmai hume change krna hai deposit ,widraw and remaining balance


function bankAccount(initalbalanece){
let balance = initalbalanece;
 return {
    deposit: function(account){
        balance += account;
            console.log(balance);
    },
    withdraw: function(account){
        balance -=account ;
            console.log(balance);
    },
    avaliable:function(account){
        console.log(balance);

    } 

 }

}
let account = bankAccount(1000);
account.deposit(500);
account.withdraw(1500);
account.avaliable();
