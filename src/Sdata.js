import room1a from "./images/ROOMSIMG/1a.webp";
import room1b from "./images/ROOMSIMG/1b.jpg";

import room2a from "./images/ROOMSIMG/2a.jpg";
import room2b from "./images/ROOMSIMG/2b.jpg";
import room3a from "./images/ROOMSIMG/3a.jpg";
import room3b from "./images/ROOMSIMG/3b.webp";
import room4a from "./images/ROOMSIMG/4a.jpg";
import room4b from "./images/ROOMSIMG/4b.jpg";
import room5a from "./images/ROOMSIMG/5a.jpg";
import room5b from "./images/ROOMSIMG/5b.jpg";
import room6a from "./images/ROOMSIMG/6a.jpg";
import room6b from "./images/ROOMSIMG/6b.jpg";
import room7a from "./images/ROOMSIMG/7a.jpg";
import room7b from "./images/ROOMSIMG/7b.webp";
import copy1 from "./images/ROOMSIMG/copy1.jpg";
import copy2 from "./images/ROOMSIMG/copy2.jpg";
import copy3 from "./images/ROOMSIMG/copy3.jpg";
import copy4 from "./images/ROOMSIMG/copy4.jpg";
import copy5 from "./images/ROOMSIMG/copy5.jpg";
import { Link } from "react-router-dom";

const Sdata = [
  {
    id: 1,
    title: "Royal Room",
    img: room1a,
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur cipsum dolor sit amet consectetur adipiscing elit amet consect piscing elit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing ",
    price: "2000 euro $/night",
    Size: "200 m²",
    Maxcapacity: "2 Persons",
    infoPets:
      "For your pets we warmly recommend our partner hotel Fetch Dubai https://www.fetchdubai.",
    Img_one: room1b,
    Img_two: copy1,
  },
  {
    id: 2,
    title: "Double-Deluxe",
    img: room2a,
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur cipsum dolor sit amet consectetur adipiscing elit amet consect piscing elit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit",
    price: "1700 euro $/night",
    Size: "150 m²",
    Maxcapacity: "2 Persons",
    infoPets:
      "For your pets we warmly recommend our partner hotel Fetch Dubai https://www.fetchdubai.",
    Img_one: room2b,
    Img_two: copy3,
  },
  {
    id: 3,
    title: "Aquarium Room",
    img: room3a,
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur cipsum dolor sit amet consectetur adipiscing elit amet consect piscing elit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit",
    price: "2000 euro $/night",
    Size: "180 mp",
    Maxcapacity: "2 Persons",
    infoPets:
      "For your pets we warmly recommend our partner hotel Fetch Dubai https://www.fetchdubai.",
    Img_one: room3b,
    Img_two: copy4,
  },
  {
    id: 4,
    title: "Single-Deluxe",
    img: room4a,
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur cipsum dolor sit amet consectetur adipiscing elit amet consect piscing elit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit",
    price: "1700 euro $/night",
    Size: "160 m²",
    Maxcapacity: "2 Persons",
    infoPets:
      "For your pets we warmly recommend our partner hotel Fetch Dubai https://www.fetchdubai.",
    Img_one: room4b,
    Img_two: copy2,
  },
  {
    id: 5,
    title: "Double-Economy",
    img: room5a,
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur cipsum dolor sit amet consectetur adipiscing elit amet consect piscing elit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit",
    price: "1700 euro $/night",
    Size: "150 m²",
    Maxcapacity: "2 Persons",
    infoPets:
      "For your pets we warmly recommend our partner hotel Fetch Dubai https://www.fetchdubai.",
    Img_one: room5b,
    Img_two: room3b,
  },
  {
    id: 6,
    title: "Double-Basic",
    img: room6a,
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur cipsum dolor sit amet consectetur adipiscing elit amet consect piscing elit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit",
    price: "1700 euro $/night",
    Size: "150 m²",
    Maxcapacity: "2 Persons",
    infoPets:
      "For your pets we warmly recommend our partner hotel Fetch Dubai https://www.fetchdubai.",
    Img_one: room6b,
    Img_two: room7b,
  },
  {
    id: 7,
    title: "Double-Standard",
    img: room7a,
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur cipsum dolor sit amet consectetur adipiscing elit amet consect piscing elit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit",
    price: "1800 euro $/night",
    Size: "170 m²",
    Maxcapacity: "2 Persons",
    infoPets:
      "For your pets we warmly recommend our partner hotel Fetch Dubai https://www.fetchdubai.",
    Img_one: room7b,
    Img_two: room5b,
  },
];
export default Sdata;
