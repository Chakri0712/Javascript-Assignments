//print elements with a in them

let arr = ["chakri" , "Hari" , "uthej"];
for(let i = 0;i < arr.length; i++)
{
        for(let j = 0;j < arr[i].length; j++)
        {
                if(arr[i][j] == "a")
                {
                        console.log(arr[i]);
                }
        }
}