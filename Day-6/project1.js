let persons = [
    {
        name: "Raju",
        age: 20,
        city: "Chennai",
        salary: "20k"
    },
    {
        name: "Charan",
        age: 22,
        city: "Tirupati",
        salary: "30k"
    },
    {
        name: "Suresh",
        age: 25,
        city: "Hyderabad",
        salary: "40k"
    },
    {
        name: "Sachin",
        age: 30,
        city: "Bangalore",
        salary: "50k"
    },
    {
        name: "Kiran",
        age: 35,
        city: "Mumbai",
        salary: "45k"
    }
];

//Display function

function display(persons){
    let tabledata = "";
    // let sno = 1;  since we have declared index in the below function
    persons.forEach(function(person , index){
        let currentrow = 
        `<tr> <td>${index+1}</td>
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.city}</td>
        <td>${person.salary}</td>
        <td><button onclick="Deleteperson(${index})">Delete</button></td>
        </tr>`;
       
        tabledata += currentrow; 
    });
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}
display(persons);

// search function by name

function searchByName()
{
     let searchedValue = document.getElementById("searchbyname").value;
     let newdata = persons.filter(function(person) 
     {
        return person.name.toUpperCase().indexOf(searchedValue.toUpperCase()) != -1;
            
    });

    display(newdata); 
 }

 // search function by city

function searchBycity()
{
     let SearchedValue = document.getElementById("searchbycity").value;
     let newdata = persons.filter(function(person) 
     {
        return person.city.toUpperCase().indexOf(SearchedValue.toUpperCase()) != -1;
       
    });

    display(newdata); 
 }
 
 // delete an element or an row

 function Deleteperson(index)
 {
    persons.splice(index , 1);
    display(persons);
 }