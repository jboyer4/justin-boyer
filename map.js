const data = [
    {
      "name": "Bale Breaker & Yonder Cider Taproom*",
      "address": "826 NW 49th St",
      "latitude": 47.6652,
      "longitude": -122.3727
    },
    {
      "name": "Bickersons Brewhouse*",
      "address": "1514 NW Leary Way",
      "latitude": 47.6643,
      "longitude": -122.3712
    },
    {
      "name": "Bad Jimmy’s Brewing Company*",
      "address": "4358 NW Leary Way",
      "latitude": 47.6597,
      "longitude": -122.3797
    },
    {
      "name": "Fair Isle Brewing*",
      "address": "936 NW 49th St",
      "latitude": 47.6688,
      "longitude": -122.3777
    },
    {
      "name": "Great Notion Brewing",
      "address": "5101 14th Ave NW Suite 101",
      "latitude": 47.6655,
      "longitude": -122.3717
    },
    {
      "name": "Lucky Envelope Brewing*",
      "address": "907 NW 50th St",
      "latitude": 47.6681,
      "longitude": -122.3674
    },
    {
      "name": "Maritime Pacific Brewing Company*",
      "address": "1111 NW Ballard Way",
      "latitude": 47.6637,
      "longitude": -122.3792
    },
    {
      "name": "Obec Brewing*",
      "address": "1144 NW 52nd St",
      "latitude": 47.6685,
      "longitude": -122.3846
    },
    {
      "name": "Reuben’s Brews*",
      "address": "5010 14th Ave NW",
      "latitude": 47.6681,
      "longitude": -122.3768
    },
    {
      "name": "Stoup Brewing*",
      "address": "1108 NW 52nd St",
      "latitude": 47.6686,
      "longitude": -122.3842
    },
    {
      "name": "Trailbend Taproom",
      "address": "1118 NW 50th St",
      "latitude": 47.6682,
      "longitude": -122.3679
    },
    {
      "name": "Urban Family Brewing Co.*",
      "address": "1103 NW 52nd St",
      "latitude": 47.6686,
      "longitude": -122.3849
    },
    {
      "name": "Wheelie Pop Brewing*",
      "address": "1110 NW 50th St",
      "latitude": 47.6681,
      "longitude": -122.3678
    }
  ]


const map = L.map('map').setView([47.66, -122.38], 13);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const itemList = document.getElementById('item-list');

// Iterate over the JSON data
data.forEach(item => {
    // Create a list item element
    const li = document.createElement('li');
    li.textContent = item.name;

    // Append the list item to the item list
    itemList.appendChild(li);
});
