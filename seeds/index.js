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
    description: "Great feel. Fit is perfect and as expected. Very light weight.",
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
materialAndDescription[0] = materials[Math.floor(Math.random() * materials.length)]
for (i = 0; i < 5; i++) {
    const index = Math.floor(Math.random() * materialDescriptions.length)
    materialAndDescription.push(materialDescriptions[index])
    materialDescriptions.splice(index, 1);
}


const createClothing = () => {
    const obj = {
      name: "Fake NO.2 Long Sleeve",
      description: {
        title: "Long Days, Long Nights, Long sleeves",
        explanation:
          "Cover those arms of yours with our NO.2 series long sleeve shirt designed to keep you warm and cool with patent pending material HOTCOOLZ",
      },
      details: materialAndDescription,
      gender: "Unisex",
      sizes: [
        {
          size: "extraSmall",
          availableColors: [
            {
              color: "red",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "blue",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "green",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "black",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "white",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "orange",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "yellow",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "purple",
              stock: Math.floor(Math.random() * 50),
            },
          ],
        },
        {
          size: "small",
          availableColors: [
            {
              color: "red",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "blue",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "green",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "black",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "white",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "orange",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "yellow",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "purple",
              stock: Math.floor(Math.random() * 50),
            },
          ],
        },
        {
          size: "medium",
          availableColors: [
            {
              color: "red",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "blue",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "green",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "black",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "white",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "orange",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "yellow",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "purple",
              stock: Math.floor(Math.random() * 50),
            },
          ],
        },
        {
          size: "large",
          availableColors: [
            {
              color: "red",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "blue",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "green",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "black",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "white",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "orange",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "yellow",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "purple",
              stock: Math.floor(Math.random() * 50),
            },
          ],
        },
        {
          size: "extraLarge",
          availableColors: [
            {
              color: "red",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "blue",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "green",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "black",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "white",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "orange",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "yellow",
              stock: Math.floor(Math.random() * 50),
            },
            {
              color: "purple",
              stock: Math.floor(Math.random() * 50),
            },
          ],
        },
      ],
      picture:
        "https://res.cloudinary.com/drscfsenq/image/upload/v1681678298/FakeBrand/pictures/clothing/womanLongSleeve_gfatzd.png",
      price: 38.0,
      reviews: [reviewsArray],
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
const createShoe= () => {
  const obj = {
    name: "NO.1 Slide",
    description: {
      title: "The most comfortable slide you can slide",
      explanation:
        "Trust us when we say you will want to wear these to work, school, sports, sleeping, etc. SO COMFY!",
    },
    details: materialAndDescription,
    gender: "Unisex",
    sizes: [
      {
        size: 7,
        availableColors: [
          {
            color: "black",
            stock: Math.floor(Math.random() * 50),
          },
          {
            color: "white",
            stock: Math.floor(Math.random() * 50),
          },
        ],
      },
      {
        size: 7.5,
        availableColors: [
          {
            color: "black",
            stock: Math.floor(Math.random() * 50),
          },
          {
            color: "white",
            stock: Math.floor(Math.random() * 50),
          },
        ],
      },
      {
        size: 8,
        availableColors: [
          {
            color: "black",
            stock: Math.floor(Math.random() * 50),
          },
          {
            color: "white",
            stock: Math.floor(Math.random() * 50),
          },
        ],
      },
      {
        size: 8.5,
        availableColors: [
          {
            color: "black",
            stock: Math.floor(Math.random() * 50),
          },
          {
            color: "white",
            stock: Math.floor(Math.random() * 50),
          },
        ],
      },
      {
        size: 9,
        availableColors: [
          {
            color: "black",
            stock: Math.floor(Math.random() * 50),
          },
          {
            color: "white",
            stock: Math.floor(Math.random() * 50),
          },
        ],
      },
      {
        size: 9.5,
        availableColors: [
          {
            color: "black",
            stock: Math.floor(Math.random() * 50),
          },
          {
            color: "white",
            stock: Math.floor(Math.random() * 50),
          },
        ],
      },
      {
        size: 10,
        availableColors: [
          {
            color: "black",
            stock: Math.floor(Math.random() * 50),
          },
          {
            color: "white",
            stock: Math.floor(Math.random() * 50),
          },
        ],
      },
      {
        size: 10.5,
        availableColors: [
          {
            color: "black",
            stock: Math.floor(Math.random() * 50),
          },
          {
            color: "white",
            stock: Math.floor(Math.random() * 50),
          },
        ],
      },
      {
        size: 11,
        availableColors: [
          {
            color: "black",
            stock: Math.floor(Math.random() * 50),
          },
          {
            color: "white",
            stock: Math.floor(Math.random() * 50),
          },
        ],
      },
      {
        size: 11.5,
        availableColors: [
          {
            color: "black",
            stock: Math.floor(Math.random() * 50),
          },
          {
            color: "white",
            stock: Math.floor(Math.random() * 50),
          },
        ],
      },
      {
        size: 12,
        availableColors: [
          {
            color: "black",
            stock: Math.floor(Math.random() * 50),
          },
          {
            color: "white",
            stock: Math.floor(Math.random() * 50),
          },
        ],
      },
      {
        size: 12.5,
        availableColors: [
          {
            color: "black",
            stock: Math.floor(Math.random() * 50),
          },
          {
            color: "white",
            stock: Math.floor(Math.random() * 50),
          },
        ],
      },
      {
        size: 13,
        availableColors: [
          {
            color: "black",
            stock: Math.floor(Math.random() * 50),
          },
          {
            color: "white",
            stock: Math.floor(Math.random() * 50),
          },
        ],
      },
    ],
    picture:
      "https://res.cloudinary.com/drscfsenq/image/upload/v1681750876/FakeBrand/pictures/shoes/shoeSlides_c30hv1.png",
    price: 35.0,
    reviews: [reviewsArray[0], reviewsArray[1]],
    unitsSold: Math.floor(Math.random() * 500),
  };
  console.log(JSON.stringify(obj));
};
//createClothing()
createShoe()
