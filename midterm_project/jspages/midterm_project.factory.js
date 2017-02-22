
angular.module("pawsitive")
       .factory("adoptInfo", adoptCntl)

function adoptCntl () {
  
    var petAvailable = [
    {
      name : "Henry",
      breed  : "Husky",
      type : "Dog",
      gender  : "Male",
      age : 2,
      size : "Large",
      price : 100,
      fixed : "No",
      notes : "This boy likes to be very active. Loves kids!",
      img    : "https://images.pexels.com/photos/167804/pexels-photo-167804.jpeg?h=350&auto=compress&cs=tinysrgb",
      qty : 1
      
    },
    {
      name : "Duchess",
      breed  : "Husky",
      type : "Dog",
      gender  : "Female",
      age : 4,
      size : "Large",
      price : 150,
      fixed : "Yes",
      notes : "Doesn't like children or cats. Scared of thunder and other loud noises.",
      img    : "https://images.pexels.com/photos/60254/pexels-photo-60254.jpeg",
      qty : 1
    },
     {
      name : "Fluffy",
      breed  : "American Shorthair",
      type : "Cat",
      gender  : "Female",
      age : 8,
      size : "Small",
      price : 80,
      fixed : "Yes",
      notes : "Very social indoor cat! Likes to play and sunbathe by the windows. ",
      img    : "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?h=350&auto=compress&cs=tinysrgb",
      qty : 1
    },
      {
      name : "Babette",
      breed  : "French Bulldog",
      type : "Dog",
      gender  : "Female",
      age : 1,
      size : "Small",
      price : 200,
      fixed : "No",
      notes : "Loves to be social with people and other dogs! Barks at cars and bicycles.",
      img    : "https://images.pexels.com/photos/1173/animal-dog-pet-cute.jpg?h=350&auto=compress&cs=tinysrgb",
      qty : 1
    }, 
          {
      name : "Oliver",
      breed  : "British Shorthair",
      type : "Cat",
      gender  : "Male",
      age : 10,
      size : "Medium",
      price : 85,
      fixed : "No",
      notes : "Previously an indoor/outdoor cat. Loves to be outside and loves to sit in your lap when you're home!",
      img    : "https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?h=350&auto=compress&cs=tinysrgb",
      qty : 1      
    },
          {
      name : "Snowflake",
      breed  : "American Shorthair",
      type : "Cat",
      gender  : "Female",
      age : "Kitten",
      size : "Small",
      price : 120,
      fixed : "No",
      notes : "This 8 week old kitten has been litter box trained!",
      img    : "https://images.pexels.com/photos/171227/pexels-photo-171227.jpeg?h=350&auto=compress&cs=tinysrgb",
      qty : 1      
    },
          {
      name : "James Bond",
      breed  : "Pug",
      type : "Dog",
      gender  : "Male",
      age : "Puppy",
      size : "Small",
      price : 200,
      fixed : "No",
      notes : "This 10 week old puppy has not been house broken yet! Loves play time with other dogs!",
      img    : "https://images.pexels.com/photos/30116/pexels-photo-30116.jpg?h=350&auto=compress&cs=tinysrgb",
      qty : 1      
    },
          {
      name : "Rosie",
      breed  : "Labrador",
      type : "Dog",
      gender  : "Female",
      age : 6,
      size : "Large",
      price : 115,
      fixed : "Yes",
      notes : "This girl loves to swim and gently play with kids! Doesn't like cats.",
      img    : "https://images.pexels.com/photos/7720/night-animal-dog-pet.jpg?h=350&auto=compress&cs=tinysrgb",
      qty : 1      
    },
          {
      name : "Lady",
      breed  : "Corgie",
      type : "Dog",
      gender  : "Female",
      age : 8,
      size : "Medium",
      price : 90,
      fixed : "Yes",
      notes : "This little lady prefers to live alone, without other pets or small kids!",
      img    : "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?h=350&auto=compress&cs=tinysrgb",
      qty : 1      
    },
          {
      name : "Marley",
      breed  : "Labradoodle",
      type : "Dog",
      gender  : "Male",
      age : 10,
      size : "Medium",
      price : 100,
      fixed : "Yes",
      notes : "Loves to be groomed and lots of belly rubs! A true lap dog!",
      img    : "https://images.pexels.com/photos/89249/pexels-photo-89249.png?h=350&auto=compress&cs=tinysrgb",
      qty : 1      
    },
          {
      name : "Voldemort",
      breed  : "Sphynx",
      type : "Cat",
      gender  : "Male",
      age : 5,
      size : "Medium",
      price : 130,
      fixed : "Yes",
      notes : "This kitty loves to play! He has special skin care needs and gets cold easily in winter!",
      img    : "https://images.pexels.com/photos/97087/pexels-photo-97087.jpeg?h=350&auto=compress&cs=tinysrgb",
      qty : 1      
    },
          {
      name : "Russell",
      breed  : "Pit Bull",
      type : "Dog",
      gender  : "Male",
      age : 2,
      size : "Large",
      price : 80,
      fixed : "No",
      notes : "Has seperation anxiety but warms up to new people quickly! Loves to play outside!",
      img    : "https://images.pexels.com/photos/192550/pexels-photo-192550.jpeg?h=350&auto=compress&cs=tinysrgb",
      qty : 1
    }
    
  ]
  
  return {
    pet : petAvailable
  }
}




















// angular.module("BuzzCar")
//   .factory("StockRoom", StockFact)

// function StockFact () {
  
//   var liquorStock = [
//     {
//       brand  : "Hendricks",
//       type   : "Gin",
//       price  : 45.00,
//       import : true,
//       qty    : 12,
//       img    : "https://media2.caskers.com/media/catalog/product/cache/1/thumbnail/1000x/9df78eab33525d08d6e5fb8d27136e95/h/e/hendrick_s-gin-1.jpg"
//     },
//     {
//       brand  : "Hennesy",
//       type   : "Cognac",
//       price  : 79.99,
//       import : true,
//       qty    : 7,
//       img    : "http://liquorliquidators.com/media/catalog/product/cache/1/image/391x/9df78eab33525d08d6e5fb8d27136e95/h/e/hennessy_vs_750ml_2.jpg"

//     },
//     {
//       brand  : "Senor O'Houlihans",
//       type   : "Vodka",
//       price  : 13.50,
//       import : false,
//       qty    : 100,
//       img    : "http://bestvodka.net/wp-content/uploads/2012/07/Popov_Vodka.jpg"

//     },
//   ]
  
//   return {
//     stock : liquorStock
//   }
// }