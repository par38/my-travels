import React from "react";
// src/Quotes.js
import Travel from "./Travel"

const travels = [
    {
        destination: "San Francisco",
        country: "USA - California",
        photo: "https://farm8.staticflickr.com/7262/7461778274_f7bff1f106.jpg",
        distance: "11 h d'avion" 
    },
    {
        destination: "Amsterdam",
        country: "Pays Bas",
        photo:"http://farm1.static.flickr.com/661/22506778599_cd9e9bf9ec_m.jpg",
        distance:"500 km" 
    },
    {
        destination:"Venezia",
        country:"Italie",
        photo:"https://farm2.staticflickr.com/1761/29454455268_745901ec71_c.jpg",
        distance:"1100 km" 
    },
    {
        destination:"Cartagena",
        country:"Colombia",
        photo:"https://farm5.staticflickr.com/4757/39662085182_c8472cdb5f_c.jpg",
        distance:"14 h d'avion" 
    },
    {
        destination:"Machu Picchu",
        country:"Pérou",
        photo:"https://farm3.staticflickr.com/2766/4420982878_715eeef855_b.jpg",
        distance:"12h30 d'avion" 
    },
];

const Travels = () => (
  <div>
    {travels.map(travel => (
        <Travel destination={travel.destination} photo={travel.photo} country={travel.country} distance={travel.distance} />
    ))}
  </div>
);

export default Travels;
