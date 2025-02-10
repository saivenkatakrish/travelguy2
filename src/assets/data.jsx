export const states = [
  { name: "Andhra Pradesh", image: "https://www.abhibus.com/blog/wp-content/uploads/2023/07/Top-10-Must-Visit-Places-in-Andhra-Pradesh-AP.jpg" },
  { name: "Arunachal Pradesh", image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Golden_Pagoda_Namsai_Arunachal_Pradesh.jpg" },
  { name: "Assam", image: "https://media2.thrillophilia.com/images/photos/000/357/903/original/1602166049_shutterstock_1025334835.jpg?w=753&h=450&dpr=1.5" },
  { name: "Bihar", image: "https://s7ap1.scene7.com/is/image/incredibleindia/takht-sri-patna-sahib-patna-bihar-state-hero1?qlt=82&ts=1726740025571" },
  { name: "Chhattisgarh", image: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/chitrakot-waterfalls.jpg" },
  { name: "Gujarat", image: "https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Feature-Akshardham-Temple.jpg" },
  { name: "Haryana", image: "https://images.unsplash.com/photo-1605469237567-a39930679526?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFyeWFuYXxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Himachal Pradesh", image: "https://assets-news.housing.com/news/wp-content/uploads/2022/07/28101551/Top-10-tourist-places-to-visit-in-Himachal-Pradesh.jpg" },
  { name: "Jharkhand", image: "https://hblimg.mmtcdn.com/content/hubble/img/dest_images/mmt/activities/m_Deoghar_landscape_1_l_661_881.jpg" },
  { name: "Karnataka", image: "https://www.tusktravel.com/blog/wp-content/uploads/2023/06/Hampi-in-karnataka-min.jpg" },
  { name: "Kerala", image: "https://www.indiautentica.com/wp-content/webp-express/webp-images/uploads/2022/10/29ezcwtmtnm.jpg.webp" },
  { name: "Madhya Pradesh", image: "https://holidaysdna.com/wp-content/uploads/best-tourist-destinations-to-visit-in-madhya-pradesh-india-1.jpg" },
  { name: "Maharashtra", image: "https://tripnxt.com/blog/wp-content/uploads/2020/01/tripnxt_gateway_of_india_mumbai.jpg" },
  { name: "Manipur", image: "https://media2.thrillophilia.com/images/photos/000/380/972/original/1647497397_shutterstock_1020528055.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true" },
  { name: "Meghalaya", image: "https://hblimg.mmtcdn.com/content/hubble/img/cherrapunji/mmt/destination/m_destination-cherrapunji-landscape_l_400_640.jpg" },
  { name: "Mizoram", image: "https://www.mizoramtourism.com/post_images/626a539fef5ab_Solomona%20Temple.jpg" },
  { name: "Nagaland", image: "https://clubmahindra.gumlet.io/blog/images/Chumukedima-Village-resized.jpg?w=376&dpr=2.6" },
  { name: "Odisha", image: "https://www.holidify.com/images/bgImages/KONARK.jpg" },
  { name: "Punjab", image: "https://www.holidify.com/images/bgImages/PUNJAB.jpg" },
  { name: "Rajasthan", image: "https://www.jaisalkot.com/wp-content/uploads/2018/03/AdobeStock_103261625-Latest.jpg" },
  { name: "Sikkim", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/04/topmarch.jpg" },
  { name: "Tamil Nadu", image: "https://cdn.britannica.com/12/100812-050-27483D5E/Mamallapuram-Shore-Temple-Chennai-India-Tamil-Nadu.jpg" },
  { name: "Telangana", image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Telangana_Secretariat.jpg" },
  { name: "Tripura", image: "https://www.holidify.com/images/bgImages/AGARTALA.jpg" },
  { name: "Uttar Pradesh", image: "https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/activities/m_Agra_destjulimg_1_l_830_1277.jpg" },
  { name: "Uttarakhand", image: "https://img.freepik.com/free-photo/confluence-indus-zanskar-rivers-leh-ladakh-india_1150-11112.jpg?t=st=1738921571~exp=1738925171~hmac=0bb52a98a41fd2a411418355323f038897d682b009f03c42b93b220b121e0277&w=900" },
  { name: "West Bengal", image: "https://www.tourmyindia.com/states/west-bengal/images/belur-math1.jpg" }
];


export const regions = {
  North: states.filter(state => ["Rajasthan", "Uttar Pradesh", "Kashmir", "Bihar"].includes(state.name)),
  South: states.filter(state => ["Andhra Pradesh", "Telangana" , "Tamil Nadu", "Kerala", "Karnataka"].includes(state.name)),
  East: states.filter(state => ["Bihar", "Chhattisgarh"].includes(state.name)),
  West: states.filter(state => ["Goa", "Maharashtra", "Gujarat"].includes(state.name)),
  
};

export const districts = {
  "Andhra Pradesh": [
    { name: "Visakhapatnam", image: "/images/visakhapatnam.jpg", description: "A coastal city known for its beaches and scenic landscapes." },
    { name: "Vijayawada", image: "/images/vijayawada.jpg", description: "A bustling city famous for the Kanaka Durga temple and Krishna River." },
    { name: "Tirupati", image: "/images/tirupati.jpg", description: "A major pilgrimage center known for Sri Venkateswara Temple." },
    { name: "Guntur", image: "/images/guntur.jpg", description: "A city known for its historic temples and spicy chilies." }
  ],
  "Telangana": [
    { name: "Hyderabad", image: "/images/hyderabad.jpg", description: "The capital city, known for Charminar, biryani, and IT hubs." },
    { name: "Warangal", image: "/images/warangal.jpg", description: "A city with rich historical significance, famous for Warangal Fort." },
    { name: "Karimnagar", image: "/images/karimnagar.jpg", description: "Known for its ancient temples and lush green landscapes." },
    { name: "Nizamabad", image: "/images/nizamabad.jpg", description: "A city with historical forts and rich cultural heritage." }
  ],
  "Rajasthan": [
    { name: "Jaipur", image: "/images/jaipur.jpg", description: "The Pink City, famous for its palaces, forts, and vibrant culture." },
    { name: "Jodhpur", image: "/images/jodhpur.jpg", description: "The Blue City, known for Mehrangarh Fort and stunning architecture." },
    { name: "Udaipur", image: "/images/udaipur.jpg", description: "The City of Lakes, a beautiful destination with heritage sites." },
    { name: "Jaisalmer", image: "/images/jaisalmer.jpg", description: "The Golden City, known for its desert landscape and historic forts." }
  ],
  "Goa": [
    { name: "North Goa", image: "/images/northgoa.jpg", description: "Famous for its nightlife, beaches, and forts." },
    { name: "South Goa", image: "/images/southgoa.jpg", description: "Known for its serene beaches and natural beauty." }
  ],
  "Karnataka": [
    { name: "Bengaluru", image: "/images/bengaluru.jpg", description: "The Silicon Valley of India, a hub for IT and startups." },
    { name: "Mysuru", image: "/images/mysuru.jpg", description: "A cultural city known for the Mysore Palace and Dasara festival." },
    { name: "Mangaluru", image: "/images/mangaluru.jpg", description: "A coastal city famous for its beaches and temples." },
    { name: "Hampi", image: "/images/hampi.jpg", description: "A UNESCO World Heritage site, rich in history and ancient ruins." }
  ],
  "Tamil Nadu": [
    { name: "Chennai", image: "/images/chennai.jpg", description: "The capital city known for its temples, beaches, and culture." },
    { name: "Madurai", image: "/images/madurai.jpg", description: "Famous for the Meenakshi Temple and rich cultural heritage." },
    { name: "Coimbatore", image: "/images/coimbatore.jpg", description: "A major industrial city with a pleasant climate and scenic landscapes." },
    { name: "Kanyakumari", image: "/images/kanyakumari.jpg", description: "The southernmost tip of India, known for the meeting point of three seas." }
  ],
  "Maharashtra": [
    { name: "Mumbai", image: "/images/mumbai.jpg", description: "The financial capital of India, home to Bollywood and the Gateway of India." },
    { name: "Pune", image: "/images/pune.jpg", description: "Known for education institutions and a pleasant climate." },
    { name: "Nagpur", image: "/images/nagpur.jpg", description: "Famous for its oranges and a prominent business hub." },
    { name: "Nashik", image: "/images/nashik.jpg", description: "Known for vineyards, temples, and as a pilgrimage site." }
  ],
  "Uttar Pradesh": [
    { name: "Agra", image: "/images/agra.jpg", description: "Famous for the Taj Mahal, a UNESCO World Heritage site." },
    { name: "Varanasi", image: "/images/varanasi.jpg", description: "The spiritual capital of India, located on the banks of the Ganges." },
    { name: "Lucknow", image: "/images/lucknow.jpg", description: "Known for its Mughal architecture and royal history." },
    { name: "Prayagraj", image: "/images/prayagraj.jpg", description: "Famous for the confluence of three rivers and Kumbh Mela." }
  ],
  "Kashmir": [
    { name: "Srinagar", image: "/images/srinagar.jpg", description: "A beautiful city known for its Dal Lake and Mughal gardens." },
    { name: "Gulmarg", image: "/images/gulmarg.jpg", description: "A hill station famous for its scenic landscapes and skiing resorts." },
    { name: "Pahalgam", image: "/images/pahalgam.jpg", description: "A popular tourist destination known for its natural beauty." },
    { name: "Sonmarg", image: "/images/sonmarg.jpg", description: "Known for its pristine meadows and snow-capped mountains." }
  ],
  "Bihar": [
    { name: "Patna", image: "/images/patna.jpg", description: "The capital city of Bihar, known for historical monuments and the Ganga river." },
    { name: "Gaya", image: "/images/gaya.jpg", description: "A significant pilgrimage site, home to the Mahabodhi Temple." },
    { name: "Nalanda", image: "/images/nalanda.jpg", description: "Known for the ancient Nalanda University ruins." },
    { name: "Muzaffarpur", image: "/images/muzaffarpur.jpg", description: "Famous for its litchi fruit and local industries." }
  ],
  "Chhattisgarh": [
    { name: "Raipur", image: "/images/raipur.jpg", description: "The capital city, known for its vibrant culture and markets." },
    { name: "Bilaspur", image: "/images/bilaspur.jpg", description: "Known for its ancient temples and peaceful surroundings." },
    { name: "Durg", image: "/images/durg.jpg", description: "A city rich in historical significance and industrial development." },
    { name: "Jagdalpur", image: "/images/jagdalpur.jpg", description: "Famous for its waterfalls and tribal culture." }
  ],
  "Goa": [
    { name: "North Goa", image: "/images/northgoa.jpg", description: "Famous for its nightlife, beaches, and forts." },
    { name: "South Goa", image: "/images/southgoa.jpg", description: "Known for its serene beaches and natural beauty." }
  ]
};


export const famousPlaces = {
  // Andhra Pradesh
  Visakhapatnam: [
    { 
      name: "RK Beach", 
      image: "https://media-cdn.tripadvisor.com/media/photo-s/15/cc/f4/d6/sunrise-at-r-k-beach.jpg", 
      location: "17.7191° N, 83.3448° E", 
      description: "A beautiful beach known for its scenic views, sunrise, and evening strolls." 
    },
    { 
      name: "Kailasagiri", 
      image: "https://example.com/kailasagiri.jpg", 
      location: "17.7445° N, 83.3427° E", 
      description: "A hilltop park offering panoramic views of the city and coastline." 
    },
    { 
      name: "Borra Caves", 
      image: "https://example.com/borracaves.jpg", 
      location: "18.3274° N, 82.8722° E", 
      description: "A natural wonder with stunning stalactite and stalagmite formations." 
    },
    { 
      name: "Araku Valley", 
      image: "https://example.com/arakuvalley.jpg", 
      location: "18.3333° N, 82.8667° E", 
      description: "A picturesque valley known for its coffee plantations and tribal culture." 
    },
  ],
  Vijayawada: [
    { 
      name: "Kanaka Durga Temple", 
      image: "https://example.com/kanakadurgatemple.jpg", 
      location: "16.5145° N, 80.6115° E", 
      description: "A revered temple located on the Indrakeeladri hill, dedicated to Goddess Durga." 
    },
    { 
      name: "Bhavani Island", 
      image: "https://example.com/bhavaniisland.jpg", 
      location: "16.5178° N, 80.6170° E", 
      description: "A serene island on the Krishna River, perfect for a family getaway." 
    },
    { 
      name: "Prakasam Barrage", 
      image: "https://example.com/prakasambarrage.jpg", 
      location: "16.5100° N, 80.6226° E", 
      description: "A landmark structure that regulates the flow of the Krishna River." 
    },
    { 
      name: "Undavalli Caves", 
      image: "https://example.com/undavallicaves.jpg", 
      location: "16.4892° N, 80.5883° E", 
      description: "Ancient rock-cut caves showcasing Indian rock architecture." 
    },
  ],
  Tirupati: [
    { 
      name: "Tirumala Temple", 
      image: "https://example.com/tirumalatemple.jpg", 
      location: "13.6835° N, 79.3476° E", 
      description: "One of the most visited temples in the world, dedicated to Lord Venkateswara." 
    },
    { 
      name: "Sri Venkateswara Zoo", 
      image: "https://example.com/venkateswarazoo.jpg", 
      location: "13.6335° N, 79.3821° E", 
      description: "A large zoo housing a variety of animals and birds." 
    },
    { 
      name: "Chandragiri Fort", 
      image: "https://example.com/chandragirifort.jpg", 
      location: "13.5817° N, 79.2952° E", 
      description: "A historic fort offering insights into the region's history." 
    },
    { 
      name: "Kapila Theertham", 
      image: "https://example.com/kapilatheertham.jpg", 
      location: "13.6488° N, 79.4103° E", 
      description: "A sacred waterfall and temple located at the foothills of Tirumala." 
    },
  ],

  // Telangana
  Hyderabad: [
    { 
      name: "Charminar", 
      image: "https://static.toiimg.com/img/69144907/Master.jpg", 
      location: "17.3616° N, 78.4747° E", 
      description: "Hyderabad, city, Telangana state, south-central India. It is Telangana’s largest and most populous city and is the major urban center for all of south-central interior India. From 1956 to 2014 Hyderabad was the capital of Andhra Pradesh state, but, with the creation of Telangana from Andhra Pradesh in 2014, it was redesignated as the capital of both states. In 2024 Hyderabad ceased to serve as the capital of Andhra Pradesh, having been replaced by the newly built Amaravati, which was designated as the new capital.Hyderabad is located on the Musi River in the heart of the Telangana Plateau, a major upland region of the Deccan (peninsular India). The city site is relatively level to the gently rolling terrain, at an elevation of about 1,600 feet (500 meters). The climate is warm to hot and monsoonal (i.e., marked by wet and dry periods), with moderate annual precipitation. Most rain falls during the wet monsoon months of June to October. Pop. (2001) city (district), 3,829,753; urban agglom., 5,742,036; (2011) city (district), 3,943,323; urban agglom., 7,677,018." 
    },
    { 
      name: "Golconda Fort", 
      image: "https://example.com/golcondafort.jpg", 
      location: "17.3833° N, 78.4011° E", 
      description: "A majestic fort known for its architectural brilliance and history." 
    },
    { 
      name: "Hussain Sagar", 
      image: "https://example.com/hussainsagar.jpg", 
      location: "17.4239° N, 78.4738° E", 
      description: "A large artificial lake with a massive Buddha statue in the center." 
    },
    { 
      name: "Ramoji Film City", 
      image: "https://example.com/ramojifilmcity.jpg", 
      location: "17.2543° N, 78.6808° E", 
      description: "The largest integrated film studio complex in the world." 
    },
  ],
  // Add descriptions similarly for other locations...
};

export const placeDetailsData = {
  Telangana: {
    Hyderabad: [
      {
        name: "Golconda Fort",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/77/Golconda_Fort%2C_Hyderabad.jpg",
        description:
          "Golconda Fort is a historic fortress in Hyderabad, Telangana, known for its architectural grandeur and historical significance.",
      },
      {
        name: "Charminar",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Charminar-Hyderabad.jpg",
        description:
          "Charminar is an iconic mosque and monument in Hyderabad, representing the city's rich cultural heritage.",
      },
    ],
    Warangal: [
      {
        name: "Warangal Fort",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Warangal_Fort.jpg",
        description:
          "Warangal Fort is a historic site showcasing the architectural brilliance of the Kakatiya dynasty.",
      },
      {
        name: "Thousand Pillar Temple",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Thousand_Pillar_Temple.jpg",
        description:
          "The Thousand Pillar Temple is a masterpiece of Kakatiya architecture located in Hanamkonda, Warangal.",
      },
    ],
  },
  AndhraPradesh: {
    Visakhapatnam: [
      {
        name: "RK Beach",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/96/RK_Beach_Visakhapatnam.jpg",
        description:
          "RK Beach is a popular tourist destination known for its scenic beauty and serene atmosphere in Visakhapatnam.",
      },
      {
        name: "Kailasagiri",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Kailasagiri_Visakhapatnam.jpg",
        description:
          "Kailasagiri is a hilltop park offering panoramic views of the city and coastline of Visakhapatnam.",
      },
    ],
    Tirupati: [
      {
        name: "Tirumala Temple",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Tirumala_Venkateswara_Temple.jpg",
        description:
          "Tirumala Temple is one of the most famous pilgrimage sites in India, located in the town of Tirupati.",
      },
      {
        name: "Sri Vari Museum",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Sri_Vari_Museum_Tirupati.jpg",
        description:
          "Sri Vari Museum showcases the history and artifacts of the Tirumala Tirupati Devasthanams.",
      },
    ],
  },
};


