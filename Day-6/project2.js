// declaring array of objects
window.onload = function()
{
    let initialbuses = [  ];
    if(localStorage.getItem("buses")== null)
    {
     localStorage.setItem("buses", JSON.stringify(initialbuses));
    }
};


// To get object data as a table

function display(superarray = undefined)
{
    let tabledata = "";
    let buses;
    if(superarray == undefined)
    {
        buses = JSON.parse(localStorage.getItem("buses"));
    }
    else{
        buses = superarray;
    }
    // let sno = 1;  since we have declared index in the below function
    buses.forEach(function(bus , index){
        let currentrow = 
        `<tr> <td>${index+1}</td>
        <td>${bus.name}</td>
        <td>${bus.source}</td>
        <td>${bus.destination}</td>
        <td>${bus.number}</td>
        <td>${bus.passengercapacity}</td>
        </tr>`;
       
        tabledata += currentrow; 
        
    });

    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}

    display();


// add bus

function addbus(event)
{
    event.preventDefault(); // to say to prevent any default events that is happening
    let bus = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let number = document.getElementById("number").value;
    let passengercapacity = document.getElementById("passengercapacity").value;

    bus.name = name;
    bus.source= source;
    bus.destination = destination;
    bus.number = number;
    bus.passengercapacity = passengercapacity;
    // converting strings to obj or array
    let buses = JSON.parse(localStorage.getItem("buses"));
    buses.push(bus);
    // converting arrays or obj to strings
    localStorage.setItem("buses", JSON.stringify(buses));
    display();

    // to clear the input section after displaying for the sake of wrong copying of data

    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("number").value = "";
    document.getElementById("passengercapacity").value = "";
}

// searchibg by source

function searchBysource()
{
     let searchedValue = document.getElementById("searchsource").value;
     let buses = JSON.parse(localStorage.getItem("buses"));//data is fetched
     let newdata = buses.filter(function(bus) //filter is same as foreach used to search element by element
     {
        return bus.source.toUpperCase().indexOf(searchedValue.toUpperCase()) != -1;
       
    });
    display(newdata); 
 }

 // search function by destination

 function searchBydestination()
 {
      let SearchedValue = document.getElementById("searchdestination").value;
      let buses = JSON.parse(localStorage.getItem("buses"));//data is fetched
      let Newdata = buses.filter(function(bus) 
      {
         return bus.destination.toUpperCase().indexOf(SearchedValue.toUpperCase()) != -1;
        
     });
 
     display(Newdata); 
  }

