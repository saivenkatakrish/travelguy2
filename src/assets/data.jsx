export const states = [
  { name: "Andhra Pradesh", image: "https://thumbs.dreamstime.com/b/scenic-arch-railway-bridge-across-godavari-river-rajahmundry-andhra-pradesh-india-godavari-bridge-bowstring-girder-292503035.jpg" },
  { name: "Telangana", image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Telangana_Secretariat.jpg" },
  { name: "Rajasthan", image: "https://www.jaisalkot.com/wp-content/uploads/2018/03/AdobeStock_103261625-Latest.jpg" },
  { name: "Kerala", image: "https://www.indiautentica.com/wp-content/webp-express/webp-images/uploads/2022/10/29ezcwtmtnm.jpg.webp" },
  { name: "Goa", image: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandgoa-goa/images/overview/headmast-desktop/beach-experience.png" },
  { name: "Tamil Nadu", image: "https://cdn.britannica.com/12/100812-050-27483D5E/Mamallapuram-Shore-Temple-Chennai-India-Tamil-Nadu.jpg" },
  { name: "Maharashtra", image: "https://tripnxt.com/blog/wp-content/uploads/2020/01/tripnxt_gateway_of_india_mumbai.jpg" },
  { name: "Uttar Pradesh", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTTF1HIScT9ncMVkT2mnXH0nTggXs_wY5gWA&s" },
  { name: "Kashmir", image: "https://media.cntraveler.com/photos/643d5d0a5722b1af03793a06/16:9/w_2560%2Cc_limit/Dal%2520Lake_GettyImages-1323846766.jpg" },
  { name: "Karnataka", image: "https://www.tusktravel.com/blog/wp-content/uploads/2023/06/Hampi-in-karnataka-min.jpg" },
  { name: "Bihar", image: "https://s7ap1.scene7.com/is/image/incredibleindia/takht-sri-patna-sahib-patna-bihar-state-hero1?qlt=82&ts=1726740025571" },
  { name: "Chhattisgarh", image: "https://www.savaari.com/blog/wp-content/uploads/2023/06/chhattisgarh-fort.jpg" },
  
];

export const districts = {
  "Andhra Pradesh" : ["Visakhapatnam", "Vijayawada", "Tirupati", "Guntur"],
  "Telangana": ["Hyderabad", "Warangal", "Karimnagar", "Nizamabad"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Alappuzha"],
  "Goa": ["North Goa", "South Goa"],
  "Tamil Nadu" : ["Chennai", "Madurai", "Coimbatore", "Kanyakumari"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
  "Uttar Pradesh" : ["Agra", "Varanasi", "Lucknow", "Prayagraj"],
  "Kashmir": ["Srinagar", "Gulmarg", "Pahalgam", "Sonmarg"],
  "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hampi"],
  "Bihar": ["Patna", "Gaya", "Nalanda", "Muzaffarpur"],
  "Chhattisgarh": ["Raipur", "Bilaspur", "Durg", "Jagdalpur"],
};


export const places = {
  // Andhra Pradesh
  Visakhapatnam: [
    { name: "RK Beach", image: "https://media-cdn.tripadvisor.com/media/photo-s/15/cc/f4/d6/sunrise-at-r-k-beach.jpg" },
    { name: "Kailasagiri", image: "kailasagiri.jpg" },
    { name: "Borra Caves", image: "borracaves.jpg" },
    { name: "Araku Valley", image: "arakuvalley.jpg" },
  ],
  Vijayawada: [
    { name: "Kanaka Durga Temple", image: "kanakadurgatemple.jpg" },
    { name: "Bhavani Island", image: "bhavaniisland.jpg" },
    { name: "Prakasam Barrage", image: "prakasambarrage.jpg" },
    { name: "Undavalli Caves", image: "undavallicaves.jpg" },
  ],
  Tirupati: [
    { name: "Tirumala Temple", image: "tirumalatemple.jpg" },
    { name: "Sri Venkateswara Zoo", image: "venkateswarazoo.jpg" },
    { name: "Chandragiri Fort", image: "chandragirifort.jpg" },
    { name: "Kapila Theertham", image: "kapilatheertham.jpg" },
  ],

  // Telangana
  Hyderabad: [
    { name: "Charminar", image: "charminar.jpg" },
    { name: "Golconda Fort", image: "golcondafort.jpg" },
    { name: "Hussain Sagar", image: "hussainsagar.jpg" },
    { name: "Ramoji Film City", image: "ramojifilmcity.jpg" },
  ],
  Warangal: [
    { name: "Warangal Fort", image: "warangalfort.jpg" },
    { name: "Thousand Pillar Temple", image: "thousandpillar.jpg" },
    { name: "Pakhal Lake", image: "pakhallake.jpg" },
    { name: "Bhadrakali Temple", image: "bhadrakali.jpg" },
  ],

  // Rajasthan
  Jaipur: [
    { name: "Hawa Mahal", image: "hawamahal.jpg" },
    { name: "Amer Fort", image: "amerfort.jpg" },
    { name: "Jal Mahal", image: "jalmahal.jpg" },
    { name: "Jantar Mantar", image: "jantarmantar.jpg" },
  ],
  Jodhpur: [
    { name: "Mehrangarh Fort", image: "mehrangarhfort.jpg" },
    { name: "Umaid Bhawan Palace", image: "umaidbhawan.jpg" },
    { name: "Jaswant Thada", image: "jaswantthada.jpg" },
    { name: "Clock Tower", image: "clocktower.jpg" },
  ],

  // Kerala
  Thiruvananthapuram: [
    { name: "Padmanabhaswamy Temple", image: "padmanabhaswamy.jpg" },
    { name: "Kovalam Beach", image: "kovalam.jpg" },
    { name: "Napier Museum", image: "napiermuseum.jpg" },
    { name: "Ponmudi Hills", image: "ponmudi.jpg" },
  ],

  // Goa
  "North Goa": [
    { name: "Baga Beach", image: "bagabeach.jpg" },
    { name: "Aguada Fort", image: "aguadafort.jpg" },
    { name: "Basilica of Bom Jesus", image: "basilicabomjesus.jpg" },
    { name: "Chapora Fort", image: "chaporafort.jpg" },
  ],
  "South Goa": [
    { name: "Colva Beach", image: "colvabeach.jpg" },
    { name: "Dudhsagar Falls", image: "dudhsagarfalls.jpg" },
    { name: "Palolem Beach", image: "palolembeach.jpg" },
    { name: "Shri Mangeshi Temple", image: "mangeshitemple.jpg" },
  ],

  // Tamil Nadu
  Chennai: [
    { name: "Marina Beach", image: "marinabeach.jpg" },
    { name: "Kapaleeshwarar Temple", image: "kapaleeshwarartemple.jpg" },
    { name: "Fort St. George", image: "fortstgeorge.jpg" },
    { name: "Guindy Park", image: "guindypark.jpg" },
  ],

  // Maharashtra
  Mumbai: [
    { name: "Gateway of India", image: "gatewayofindia.jpg" },
    { name: "Marine Drive", image: "marinedrive.jpg" },
    { name: "Elephanta Caves", image: "elephantacaves.jpg" },
    { name: "Juhu Beach", image: "juhubeach.jpg" },
  ],
  Pune: [
    { name: "Shaniwar Wada", image: "shaniwarwada.jpg" },
    { name: "Aga Khan Palace", image: "agakhanpalace.jpg" },
    { name: "Sinhagad Fort", image: "sinhagadfort.jpg" },
    { name: "Rajiv Gandhi Zoological Park", image: "rajivgandhizoo.jpg" },
  ],

  // Uttar Pradesh
  Agra: [
    { name: "Taj Mahal", image: "tajmahal.jpg" },
    { name: "Agra Fort", image: "agrafort.jpg" },
    { name: "Mehtab Bagh", image: "mehtabbagh.jpg" },
    { name: "Fatehpur Sikri", image: "fatehpursikri.jpg" },
  ],
  Varanasi: [
    { name: "Kashi Vishwanath Temple", image: "kashivishwanath.jpg" },
    { name: "Dashashwamedh Ghat", image: "dashashwamedhghat.jpg" },
    { name: "Manikarnika Ghat", image: "manikarnikaghat.jpg" },
    { name: "Banaras Hindu University", image: "bhu.jpg" },
  ],

  // Kashmir
  Srinagar: [
    { name: "Dal Lake", image: "dallake.jpg" },
    { name: "Shankaracharya Temple", image: "shankaracharya.jpg" },
    { name: "Nishat Bagh", image: "nishatbagh.jpg" },
    { name: "Gulmarg", image: "gulmarg.jpg" },
  ],

  // Karnataka
  Bengaluru: [
    { name: "Lalbagh Botanical Garden", image: "lalbagh.jpg" },
    { name: "Bangalore Palace", image: "bangalorepalace.jpg" },
    { name: "Cubbon Park", image: "cubbonpark.jpg" },
    { name: "ISKCON Temple", image: "iskcon.jpg" },
  ],
  Mysuru: [
    { name: "Mysore Palace", image: "mysorepalace.jpg" },
    { name: "Brindavan Gardens", image: "brindavan.jpg" },
    { name: "Chamundi Hill", image: "chamundihill.jpg" },
    { name: "St. Philomena's Church", image: "stphilomena.jpg" },
  ],

  // Bihar
  Patna: [
    { name: "Golghar", image: "golghar.jpg" },
    { name: "Buddha Smriti Park", image: "buddhastupa.jpg" },
    { name: "Patna Museum", image: "patnamuseum.jpg" },
    { name: "Takht Sri Patna Sahib", image: "patnasahib.jpg" },
  ],

  // Chhattisgarh
  Raipur: [
    { name: "Mahant Ghasidas Museum", image: "mahantmuseum.jpg" },
    { name: "Nandan Van Zoo", image: "nandanvanzoo.jpg" },
    { name: "Swami Vivekananda Sarovar", image: "vivekanandasarovar.jpg" },
    { name: "Dudhadhari Math", image: "dudhadhari.jpg" },
  ],
};




