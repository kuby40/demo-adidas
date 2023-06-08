reviews = [
  {
    title: "Great fit with a fabulous look and feel",
    stars: 5,
    description:
      "This is a great buy for me because the style of this shirt fit well with everything.",
  },
  {
    title: "Solid fit",
    stars: 4,
    description:
      "Like the comfort and fit of this, Great for layering in the cooler weather and helpful with wicking sweat away in the heat.",
  },
  {
    title: "Comfortable",
    stars: 5,
    description:
      "It is soft and dry very fast and I like the perfect white color it has.",
  },
  {
    title: "My Favorite",
    stars: 5,
    description: "I love dry fit and this has to be my absolute favorite",
  },
  {
    title: "Great purchase, would buy again",
    stars: 4,
    description:
      "Fits perfectly, arrived a lot sooner than expected and if you're trying to look big or what a nice tight fit, get a size under what you normally get",
  },
  {
    title: "Wow",
    stars: 5,
    description:
      "18 dollars is how much I would pay for a shirt half of this quality , I can’t believe they have this on sale for 18… who’s not enjoying that?",
  },
  {
    title: "Great texture",
    stars: 5,
    description: "Great for workouts.",
  },
  {
    title: "White color material too thin and see through",
    stars: 1,
    description:
      "Based on the picture, I expected thicker quality materials. My worst fear came through we I receive it, the material is super thin, and it being white color means my nipple is incredibly obvious. No way I'm able to wear this outside with my nipple so obviously shown. Disappointed because the product pictures (even the zoomed in ones) didn't show any indication that it would be so thin that the nipple would be apparent.",
  },
  {
    title:
      "Tight from chest and waist, good quality but sleeves are very long which I dislike",
    stars: 1,
    description: "Everything checks out good except the long sleeves.",
  },
  {
    title: "Returned it.",
    stars: 2,
    description:
      "I returned it because t shirt very loose on neck. It had a good quality and fitment was great as well but the flow was so big that i could't stand it.",
  },
  {
    title: "It’s came with a red spot in front.",
    stars: 3,
    description: "I thought it will be better. It looks different to me",
  },
  {
    title: "Size is not what you expect",
    stars: 3,
    description: "The size to short and to tight. Is not what you expect",
  },
  {
    title: "good but ...",
    stars: 3,
    description:
      "This is a good shirt for trains on the gym but it is kind of thin. Although is really breathable, it can be a bit translucent for my taste. everything else is as expected of a train shirt. I'd love if Adidas could produce this kind of solid shirts but in V-neck.",
  },
  {
    title: "Vbucks are better",
    stars: 1,
    description: "Just Buy V Bucks instead of this garbage",
  },
  {
    title: "Amazing",
    stars: 5,
    description: "It feels amazing and it looks great! Will buy more.",
  },
  {
    title: "Good Buy",
    stars: 5,
    description: "I would like the quality in this shirt really good",
  },
  {
    title: "Excellent product at a great value.",
    stars: 5,
    description:
      "Great feel. Fit is perfect and as expected. Very light weight.",
  },
];
const materials = [
  "Alpaca",
  "Angora Wool",
  "Azlon",
  "Byssus",
  "Camel Hair",
  "Cashmere wool",
  "Chiengora",
  "Lambswool",
  "Llama",
  "Mohair Wool",
  "Qiviut",
  "Rabbit",
  "Silk",
  "Eri Silk",
  "Spider Silk",
  "Vicuna",
  "Wool",
  "Yak Fiber",
  "Abaca",
  "Acetate",
  "Bamboo",
  "Banana",
  "Kapok",
  "Coir",
  "Cotton",
  "Flax",
  "Hemp",
  "Jute",
  "Kenaf",
  "Lyocell",
  "Modal",
  "Pina",
  "Raffia",
  "Ramie",
  "Rayon",
  "Sisal",
  "Soy Protein",
  "Asbestos Cloth",
  "Fiberglass",
  "Acrylic",
  "Kevlar",
  "Modacrylic",
  "Nomex",
  "Nylon",
  "Polyester",
  "Spandex",
  "Rayon",
];

const materialDescriptions = [
  "Soft",
  "Warm",
  "Lightweight",
  "Silky",
  "Fluffy",
  "Elasticity",
  "Insulating",
  "Quick Drying",
  "Smooth",
  "Strong",
  "High Shine",
  "Luxurious",
  "Heavy",
  "Thin",
  "Lustrous",
  "Thick",
  "Durable",
  "Absorbent",
  "Rough",
  "Fire Resistant",
  "Futuristic",
];
let materialAndDescription = [];
let reviewsArray = [
  reviews[Math.floor(Math.random() * reviews.length)],
  reviews[Math.floor(Math.random() * reviews.length)],
];
materialAndDescription[0] =
  materials[Math.floor(Math.random() * materials.length)];
for (i = 0; i < 5; i++) {
  const index = Math.floor(Math.random() * materialDescriptions.length);
  materialAndDescription.push(materialDescriptions[index]);
  materialDescriptions.splice(index, 1);
}

const createClothing = () => {
  const obj = {
    name: "The NO.4 TIE-LESS Shoes",
    description: {
      title: "Relaxed Sneakers With Vintage Hoops Style",
      explanation:
        "Inspired by '80s B-ball high tops, these canvas streetwear shoes have an easygoing vibe. A versatile low-cut shape shows off a rubber toe cap and FAKE-Stripes. A clean-lined sole keeps the look fresh",
    },
    type: "shoes",
    collection: "NO.4",
    details: materialAndDescription,
    gender: "unisex",
    stock: [
      {
        color: "white",
        size: "M 6.5 / W 7.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "white",
        size: "M 7 / W 8",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "white",
        size: "M 7.5 / W 8.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "white",
        size: "M 8 / W 9",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "white",
        size: "M 8.5 / W 9.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "white",
        size: "M 9 / W 10",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "white",
        size: "M 9.5 / W 10.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "white",
        size: "M 10 / W 11",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "white",
        size: "M 10.5 / W 11.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "white",
        size: "M 11 / W 12",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "white",
        size: "M 11.5 / W 12.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "white",
        size: "M 12 / W 13",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "white",
        size: "M 12.5 / W 13.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "white",
        size: "M 13 / W 14",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "white",
        size: "M 13.5 / W 14.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "white",
        size: "M 14 / W 15",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "black",
        size: "M 6.5 / W 7.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "black",
        size: "M 7 / W 8",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "black",
        size: "M 7.5 / W 8.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "black",
        size: "M 8 / W 9",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "black",
        size: "M 8.5 / W 9.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "black",
        size: "M 9 / W 10",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "black",
        size: "M 9.5 / W 10.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "black",
        size: "M 10 / W 11",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "black",
        size: "M 10.5 / W 11.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "black",
        size: "M 11 / W 12",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "black",
        size: "M 11.5 / W 12.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "black",
        size: "M 12 / W 13",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "black",
        size: "M 12.5 / W 13.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "black",
        size: "M 13 / W 14",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "black",
        size: "M 13.5 / W 14.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "black",
        size: "M 14 / W 15",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "baby blue",
        size: "M 6.5 / W 7.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "baby blue",
        size: "M 7 / W 8",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "baby blue",
        size: "M 7.5 / W 8.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "baby blue",
        size: "M 8 / W 9",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "baby blue",
        size: "M 8.5 / W 9.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "baby blue",
        size: "M 9 / W 10",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "baby blue",
        size: "M 9.5 / W 10.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "baby blue",
        size: "M 10 / W 11",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "baby blue",
        size: "M 10.5 / W 11.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "baby blue",
        size: "M 11 / W 12",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "baby blue",
        size: "M 11.5 / W 12.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "baby blue",
        size: "M 12 / W 13",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "baby blue",
        size: "M 12.5 / W 13.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "baby blue",
        size: "M 13 / W 14",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "baby blue",
        size: "M 13.5 / W 14.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "baby blue",
        size: "M 14 / W 15",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "red",
        size: "M 6.5 / W 7.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "red",
        size: "M 7 / W 8",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "red",
        size: "M 7.5 / W 8.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "red",
        size: "M 8 / W 9",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "red",
        size: "M 8.5 / W 9.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "red",
        size: "M 9 / W 10",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "red",
        size: "M 9.5 / W 10.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "red",
        size: "M 10 / W 11",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "red",
        size: "M 10.5 / W 11.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "red",
        size: "M 11 / W 12",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "red",
        size: "M 11.5 / W 12.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "red",
        size: "M 12 / W 13",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "red",
        size: "M 12.5 / W 13.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "red",
        size: "M 13 / W 14",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "red",
        size: "M 13.5 / W 14.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "red",
        size: "M 14 / W 15",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "dark green",
        size: "M 6.5 / W 7.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "dark green",
        size: "M 7 / W 8",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "dark green",
        size: "M 7.5 / W 8.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "dark green",
        size: "M 8 / W 9",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "dark green",
        size: "M 8.5 / W 9.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "dark green",
        size: "M 9 / W 10",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "dark green",
        size: "M 9.5 / W 10.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "dark green",
        size: "M 10 / W 11",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "dark green",
        size: "M 10.5 / W 11.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "dark green",
        size: "M 11 / W 12",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "dark green",
        size: "M 11.5 / W 12.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "dark green",
        size: "M 12 / W 13",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "dark green",
        size: "M 12.5 / W 13.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "dark green",
        size: "M 13 / W 14",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "dark green",
        size: "M 13.5 / W 14.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "dark green",
        size: "M 14 / W 15",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "collegiate green",
        size: "M 6.5 / W 7.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "collegiate green",
        size: "M 7 / W 8",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "collegiate green",
        size: "M 7.5 / W 8.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "collegiate green",
        size: "M 8 / W 9",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "collegiate green",
        size: "M 8.5 / W 9.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "collegiate green",
        size: "M 9 / W 10",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "collegiate green",
        size: "M 9.5 / W 10.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "collegiate green",
        size: "M 10 / W 11",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "collegiate green",
        size: "M 10.5 / W 11.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "collegiate green",
        size: "M 11 / W 12",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "collegiate green",
        size: "M 11.5 / W 12.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "collegiate green",
        size: "M 12 / W 13",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "collegiate green",
        size: "M 12.5 / W 13.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "collegiate green",
        size: "M 13 / W 14",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "collegiate green",
        size: "M 13.5 / W 14.5",
        available: Math.floor(Math.random() * 50),
      },
      {
        color: "collegiate green",
        size: "M 14 / W 15",
        available: Math.floor(Math.random() * 50),
      },
    ],
    picture:
      "https://res.cloudinary.com/drscfsenq/image/upload/v1678300996/FakeBrand/pictures/shoes/result_z5s6cp.png",
    price: 69.99,
    reviews: reviewsArray,
    unitsSold: Math.floor(Math.random() * 500),
  };
  console.log(JSON.stringify(obj));
};
///////
///////
////////
/////////
///////
////////
////////
//////
////////
////////
createClothing();
//createShoe()
// {
//         color: "red",
//         size: "xs",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "red",
//         size: "s",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "red",
//         size: "m",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "red",
//         size: "l",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "red",
//         size: "xl",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "red",
//         size: "xxl",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "blue",
//         size: "xs",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "blue",
//         size: "s",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "blue",
//         size: "m",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "blue",
//         size: "l",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "blue",
//         size: "xl",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "blue",
//         size: "xxl",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "xs",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "s",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "m",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "l",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "xl",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "xxl",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "xs",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "s",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "m",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "l",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "xl",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "xxl",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "xs",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "s",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "m",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "l",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "xl",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "xxl",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "orange",
//         size: "xs",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "orange",
//         size: "s",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "orange",
//         size: "m",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "orange",
//         size: "l",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "orange",
//         size: "xl",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "orange",
//         size: "xxl",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "yellow",
//         size: "xs",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "yellow",
//         size: "s",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "yellow",
//         size: "m",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "yellow",
//         size: "l",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "yellow",
//         size: "xl",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "yellow",
//         size: "xxl",
//         available: Math.floor(Math.random() * 50),
//       },




// {
//         color: "hemp",
//         size: "28x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "28x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "28x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "30x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "30x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "30x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "32x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "32x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "32x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "34x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "34x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "34x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "36x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "36x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "36x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "38x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "38x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "38x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "28x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "28x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "28x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "30x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "30x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "30x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "32x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "32x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "32x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "34x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "34x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "34x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "36x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "36x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "36x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "38x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "38x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "38x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "28x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "28x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "28x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "30x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "30x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "30x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "32x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "32x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "32x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "34x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "34x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "34x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "36x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "36x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "36x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "38x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "38x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "38x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "28x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "28x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "28x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "30x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "30x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "30x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "32x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "32x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "32x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "34x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "34x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "34x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "36x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "36x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "36x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "38x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "38x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "grey",
//         size: "38x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "28x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "28x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "28x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "30x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "30x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "30x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "32x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "32x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "32x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "34x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "34x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "34x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "36x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "36x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "36x34",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "38x30",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "38x32",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "38x34",
//         available: Math.floor(Math.random() * 50),
//       },



/////

// {
//         color: "hemp",
//         size: "00",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "0",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "2",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "4",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "6",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "8",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "10",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "12",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "14",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "16",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "18",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "hemp",
//         size: "00",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "0",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "2",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "4",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "6",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "8",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "10",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "12",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "14",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "16",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "black",
//         size: "18",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "0",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "2",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "4",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "6",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "8",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "10",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "12",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "14",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "16",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "white",
//         size: "18",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "0",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "2",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "4",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "6",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "8",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "10",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "12",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "14",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "16",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "navy",
//         size: "18",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "brown",
//         size: "0",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "brown",
//         size: "2",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "brown",
//         size: "4",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "brown",
//         size: "6",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "brown",
//         size: "8",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "brown",
//         size: "10",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "brown",
//         size: "12",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "brown",
//         size: "14",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "brown",
//         size: "16",
//         available: Math.floor(Math.random() * 50),
//       },
//       {
//         color: "brown",
//         size: "18",
//         available: Math.floor(Math.random() * 50),
//       },