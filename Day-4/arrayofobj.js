let arrayname = [
    person1 = {
        name: "Joey Tribbiani",
        age: 20,
        country: "India",
        hobbies:["cricket" , "acting" , "eating"]
    },
    person2 = {
        name: "Chandler Bing",
        age: 22,
        country: "SriLanka",
        hobbies: ["carroms" , "fishing" , "Tennis"]
    },
    person3 = {
        name: "Ross Geller",
        age: 32,
        country: "Russia",
        hobbies: ["carroms" , "chess" , "Football"]
    }
];

function display()
{
    arrayname.forEach(function(object)
    {
        console.log(object);
    });
}
function age()
{
    arrayname.forEach(function(object)
    {
        if(object.age < 30)
        {
        console.log(object);
        }
    });
}

function Country()
{
    arrayname.forEach(function(object)
    {
        if(object.country == "India")
        {
        console.log(object);
        }
    });
}
    
