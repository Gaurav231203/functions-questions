/*let account = bankAccount(1000);

account.deposit(500);
account.withdraw(200);
account.checkBalance();*/
// isami ek enitial bakance hoga jissmai hume change krna hai deposit ,widraw and remaining balance


function bankaccount(initalbalanece){
let balance = initalbalanece;
 return {
    deposit: function(account){
        deposit += account;
    },
    withdraw: function(account){
        withdraw-=account ;
    },
    avaliable:function(account){
        console.log(account());

    } 

 }

}