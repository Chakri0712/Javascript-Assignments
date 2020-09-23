
let products = [
    {
      id: 0,
      name: "White Dress",
      size: "L",
      color: "white",
      price: 1200,
      image: "product1.jpg",
      description: "Good looking dress",
    },
    {
      id: 1,
      name: "Black Shirt",
      size: "M",
      color: "Black",
      price: 1500,
      image: "product2.jpg",
      description: "Good looking  shirt",
    },
  
    {
      id: 2,
      name: "Brown Shirt",
      size: "S",
      color: "White & Black",
      price: 900,
      image: "product3.jpg",
      description: "Good looking Shirt",
    },
  
    {
      id: 3,
      name: "Pink Blazer",
      size: "M",
      color: "Black",
      price: 3000,
      image: "product4.jpg",
      description: "Beautifull Blazer",
    },
  
    {
      id: 4,
      name: "Navy Blue",
      size: "S",
      color: "Blue",
      price: 1300,
      image: "product5.jpg",
      description: "Good looking Top",
    },
  
    {
      id: 5,
      name: "Indian Dress",
      size: "M",
      color: "Henna",
      price: 1500,
      image: "product6.jpg",
      description: "Nice Traditional Dress",
    },
    {
        id: 6,
        name: "Sweater",
        size: "M",
        color: "Goldish Silver",
        price: 1500,
        image: "product7.jpg",
        description: "Good sweather",
      },
      {
        id: 7,
        name: "Top",
        size: "M",
        color: "peacock Blue",
        price: 2500,
        image: "product8.jpg",
        description: "Good looking Top",
      },
      {
        id: 8,
        name: "Suits",
        size: "M",
        color: "Henna Blue",
        price: 2500,
        image: "product9.jpg",
        description: "Good looking Suit",
      },
      {
        id: 9,
        name: "Torn Jeans",
        size: "M",
        color: "Blue",
        price: 1500,
        image: "product10.jpg",
        description: "Good looking Torn Jeans",
      },
      {
        id: 10,
        name: "kurtha",
        size: "M",
        color: "Black",
        price: 1100,
        image: "product11.jpg",
        description: "Good looking kurtha Dress",
      },
      {
        id: 11,
        name: "western",
        size: "L",
        color: "Green",
        price: 1000,
        image: "product12.jpg",
        description: "Good looking western Dress",
      },
  ];

   cart = [];
 
  function displayProducts(productsData , who = "productwrapper"){

      let productsString = "";
     productsData.forEach(function(product , index){

        let {name,image,color,description,price,size} = product;

        if(who == "productwrapper"){
         productsString += `<div class="product">
         <div class="prodimg">
             <img src="/images models/${image}" width="100%">
         </div>
         <h3>${name}</h3>
         <p>Price: ${price}</p>
         <p>size : ${size}</p>
         <p>Color: ${color}</p>
         <p>${description}</p>
         <p>
             <button onclick="addToCart(${index})">Add to Cart</button>
         </p>
     </div>`
     }
     else if(who == "cart")
     {
            productsString += `<div class="product">
            <div class="prodimg">
                <img src="/images models/${image}" width="100%">
            </div>
            <h3>${name}</h3>
            <p>Price: ${price}</p>
            <p>size : ${size}</p>
            <p>Color: ${color}</p>
            <p>${description}</p>
            <p>
                <button  onclick="removefromCart(${index})">Remove from Cart</button>
            </p>
        </div>`
     }
     });
     document.getElementById(who).innerHTML = productsString;
  }
  

  displayProducts(products);
  
  function searchProduct(searchValue){
    let searchedProducts = products.filter(function (product, index) {
        let searchString =
          product.name + " " + product.color + " " + product.description;
    
        return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
      });
     // console.log(searchValue);
     displayProducts(searchedProducts);
  }

  function filterbyPrice(event){
    event.preventDefault();
    let min = document.getElementById("from").value;
    let max = document.getElementById("to").value;
    let productsbyprice = products.filter(function(product , index){
      if(product.price <= max && product.price >= min)
      {
        return product.price;
      }
      else{

      }
    });
    displayProducts(productsbyprice);
  }


  // let total = 0;
  // let cartdisplay ;

  // function addToCart(index){
  //   cartdisplay = document.getElementById('count');
  //   cart.push(products[index]);
  //   total ++;
  //   cartdisplay.value = total;         
  //   displayProducts(cart , "cart");
  // }


  // function removefromCart(index){
  //   cartdisplay = document.getElementById('count');
  //   cart.splice(index , 1);
  //   total --;
  //   cartdisplay.value = total;         
  //   displayProducts(cart , "cart");
  // }


  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }
  
  let total = 0;
  let cartdisplay ;
  let pro;
  function addToCart(id) {
    // getting the product
    pro = getProductByID(products, id);
    console.log(pro.id);
    cartdisplay = document.getElementById('count');
    //   putting in cart
    cart.push(pro);
    total++;
    cartdisplay.value = total;   
    displayProducts(cart, "cart");
  }

  function removefromCart(id) {
    // getting the index based on id
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
  
    //   removing from cart based on index
    cartdisplay = document.getElementById('count');
    cart.splice(index, 1);
    total--;
    cartdisplay.value = total;
    displayProducts(cart, "cart");
  }