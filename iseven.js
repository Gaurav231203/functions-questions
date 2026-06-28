function isEven(num){
    
        if (num % 2 == 0){
            
            console.log(`number is even ${num}`)
            return true;
        } 
        else{
           
             console.log(`number is odd ${num}`)
              return false;
        }

        
    }

console.log(isEven(8));
console.log(isEven(7));