//gst calculator
 function gst18(){
    let gst=18;

     return function(amount){
     
        let newgst = (amount *gst)/100;
        return amount + newgst ;

     }
 }
 let gst= gst18();
 console.log(gst(100)); 

