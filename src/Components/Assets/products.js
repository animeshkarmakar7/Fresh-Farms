const products=[
    {
        id: 1,
        name: "Apple",
        type: "Fruit",
        description: "Fresh and crispy",
        price: 150,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240104142542/apple.jpg",
      },
      {
        id: 2,
        name: "Banana",
        type: "Fruit",
        description: "Rich in potassium",
        price: 75,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240104142554/banana.jpg",
      },
      {
        id: 3,
        name: "Orange",
        type: "Fruit",
        description: "Packed with vitamin C",
        price: 200,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240104142641/orange.jpg",
      },
      {
        id: 4,
        name: "Carrot",
        type: "Vegetable",
        description: "Healthy and crunchy",
        price: 100,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240104142613/carrot.jpg",
      },
      {
        id: 5,
        name: "Broccoli",
        type: "Vegetable",
        description: "Nutrient-rich greens",
        price: 175,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240104142601/brocoli.jpg",
      },
      {
        id: 6,
        name: "Grapes",
        type: "Fruit",
        description: "Sweet and juicy",
        price: 250,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240104142629/grapes.jpg",
      },
      {
        id: 7,
        name: "Strawberry",
        type: "Fruit",
        description: "Delicious red berries",
        price: 300,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240104142657/strawberry.jpg",
      },
      {
        id: 8,
        name: "Lettuce",
        type: "Vegetable",
        description: "Crisp and fresh",
        price: 120,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240104142635/lettue.jpg",
      },
      {
        id: 9,
        name: "Tomato",
        type: "Vegetable",
        description: "Versatile and flavorful",
        price: 180,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240104142704/tomato.jpg",
      },
      {
        id: 10,
        name: "Cucumber",
        type: "Vegetable",
        description: "Cool and hydrating",
        price: 130,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240104142621/cocumber.jpg",
      },

      {
        id: 11,
        name: "Brinjal",
        price: 50,
        image: "https://www.allthatgrows.in/cdn/shop/products/Brinjal-Oval_6e7b6cc8-2e37-49b8-8676-14dd5738e00b.jpg?v=1598078993"
    },
    {
        id: 12,
        name: "Spinach",
        price: 150,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWeLtrc_d_I0fRUVPT8pNEiiR2cswKU-pdQ&s"
    },
    {
        id: 13,
        name: "Potato",
        price: 90,
        image: "https://m.media-amazon.com/images/I/313dtY-LOEL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 14,
        name: "Tomato",
        price: 180,
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240104142704/tomato.jpg"
    },
    
    {
        id: 15,
        name: "Carrot",
        price: 100,
        image: "https://www.allthatgrows.in/cdn/shop/products/Carrot-Orange.jpg?v=1598079671"
    },
    {
        id: 16,
        name: "Broccoli",
        price: 175,
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240104142601/brocoli.jpg"
    },
    {
        id: 17,
        name: "Cucumber",
        price: 130,
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240104142621/cocumber.jpg"
    },
    
    {
        id: 19,
        name: "Capsicum",
        price: 160,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVaf4F8an37fsnqxhPIXNfaBve2Kk5Ym68g&s"
    },
    {
        id: 20,
        name: "Cauliflower",
        price: 140,
        image: "https://cdn.britannica.com/27/78227-050-28A68F87/cauliflower-Head-colour-White-brown-cultivars.jpg"
    },
    {
        id: 21,
        name: "Green Beans",
        price: 110,
        image: "https://images.everydayhealth.com/images/diet-nutrition/potential-health-benefits-of-green-beans-1440x810.jpg"
    },
    {
        id: 22,
        name: "Peas",
        price: 95,
        image: "https://www.allthatgrows.in/cdn/shop/products/Peas.jpg?v=1598082087"
    },
    {
        id: 23,
        name: "Pumpkin",
        price: 80,
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Pumpkin-sliced-open-f2b8dde.jpg?resize=768,574"
    },
    {
        id: 24,
        name: "Radish",
        price: 70,
        image: "https://seed2plant.in/cdn/shop/products/whiteradish.jpg?v=1611836380&width=1500"
    },
    {
        id: 25,
        name: "Sweet Potato",
        price: 200,
        image: "https://freshunlimited.in/cdn/shop/products/Sweet_Potato_640x.png?v=1609403004"
    },
    {
        id: 26,
        name: "Zucchini",
        price: 150,
        image: "https://www.diggers.com.au/cdn/shop/products/zucchini-tri-coloured-mix-s254_fc72ad55-41f4-4ced-802e-3bf503f77c27_2048x.jpg?v=1637122576"
    },
    {
        id: 27,
        name: "Mushroom",
        price: 250,
        image: "https://m.media-amazon.com/images/I/71XMKwfQCzL.jpg"
    },
    {
        id: 28,
        name: "Onion",
        price: 60,
        image: "https://m.media-amazon.com/images/I/71GUFttn0jL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 29,
        name: "Garlic",
        price: 55,
        image: "https://static.toiimg.com/thumb/msid-105445525,width-1280,height-720,resizemode-4/105445525.jpg"
    },
    {
        id: 30,
        name: "Beetroot",
        price: 105,
        image: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2020/02/277432_2200-800x1200.jpg"
    },
   
    {
        id: 33,
        name: "Orange",
        price: 200,
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240104142641/orange.jpg"
    },
    {
        id: 34,
        name: "Grapes",
        price: 250,
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240104142629/grapes.jpg"
    },
    {
        id: 35,
        name: "Strawberry",
        price: 300,
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240104142657/strawberry.jpg"
    },
    {
        id: 36,
        name: "Pineapple",
        price: 350,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToz2vYMqmYA46Q9QDrcyjfcdBryOUbj06gjQ&s"
    },
    {
        id: 37,
        name: "Mango",
        price: 400,
        image: "https://5.imimg.com/data5/SELLER/Default/2023/9/344928632/OW/RQ/XC/25352890/yellow-mango.jpeg"
    },
    {
        id: 38,
        name: "Papaya",
        price: 280,
        image: "https://media.istockphoto.com/id/864053288/photo/whole-and-half-of-ripe-papaya-fruit-with-seeds-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=hJ5DpNTt0oKjZMIHYV6gUHTntB2zIs_78dPKiuDUXgE="
    },
    {
        id: 39,
        name: "Blueberries",
        price: 320,
        image: "https://www.hkvitals.com/blog/wp-content/uploads/2023/09/900-9-1.jpg"
    },
    {
        id: 40,
        name: "Watermelon",
        price: 210,
        image: "https://hips.hearstapps.com/hmg-prod/images/fresh-ripe-watermelon-slices-on-wooden-table-royalty-free-image-1684966820.jpg?crop=0.88973xw:1xh;center,top&resize=1200:*"
    },
    {
        id: 41,
        name: "Peach",
        price: 290,
        image: "https://www.truebasics.com/blog/wp-content/uploads/2023/09/peach-benefits-for-skin.jpg"
    },
    {
        id: 42,
        name: "Kiwi",
        price: 270,
        image: "https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg"
    },
    {
        id: 43,
        name: "Blackberries",
        price: 330,
        image: "https://cdn.britannica.com/06/186306-050-93C41044/blackberries-blackberry-fruit-aggregate-drupelets-flower-carpels.jpg"
    },
    {
        id: 44,
        name: "Pomegranate",
        price: 310,
        image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/02/pomegranate-seeds-fruit-1296x728-header.jpg?w=1155&h=1528"
    },
    {
        id: 45,
        name: "Plum",
        price: 260,
        image: "https://www.bigbasket.com/media/uploads/p/xl/40026291_1-fresho-plum-organically-grown.jpg"
    },
    {
        id: 46,
        name: "Cherry",
        price: 350,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/640px-Cherry_season_%2848216568227%29.jpg"
    },
    {
        id: 47,
        name: "Pear",
        price: 240,
        image: "https://cdn.policyx.com/images/benefits-of-pear-fruit-main-banner-1.webp"
    },
    {
        id: 48,
        name: "Guava",
        price: 180,
        image: "https://www.health.com/thmb/XlWTD8TZF5574DVtMEfD-XSj5Lg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Guava-15d1050d22034909bfca038ef1f8aaa2.jpg"
    },
    {
        id: 49,
        name: "Lemon",
        price: 120,
        image: "https://cdn.britannica.com/84/188484-050-F27B0049/lemons-tree.jpg"
    },
    {
        id: 50,
        name: "Lychee",
        price: 280,
        image: "https://cdn.britannica.com/18/176518-050-5AB1E61D/lychee-fruits-Southeast-Asia.jpg"
    }
]

export default products;