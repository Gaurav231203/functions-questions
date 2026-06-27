function addnum(fixednum){
     return function(addednum){
        return fixednum + addednum;


     }
}
let addfive = addnum(5);
console.log(addfive(50));/*samajh lee bhosdike funtion ka naam call hoga orr baki
koi bhi operation uskay parameter mai hoga jhanduu jese + - * / % etc*/