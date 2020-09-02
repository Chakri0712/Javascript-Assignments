//search element in an array

let arrayname = "Upgrade";
let arraysearch = arrayname.search("r");
console.log(arraysearch);
let array1 = ["Rusty" , "Dusty" , "John" , "Jack"];
let searcharray= array1.find(function(ele)
                        {
                           return ele == array1[2];
                        });
console.log(searcharray);