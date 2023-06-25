const data = [
    {
      "name": "Bale Breaker & Yonder Cider Taproom",
      "address": "826 NW 49th St",
      "latitude": 47.664609794917375,
      "longitude": -122.36758355546424,
    },
    {
      "name": "Bickersons Brewhouse",
      "address": "1514 NW Leary Way",
      "latitude": 47.66388670152259,
      "longitude": -122.37703069840407,
    },
    {
      "name": "Bad Jimmy’s Brewing Company",
      "address": "4358 NW Leary Way",
      "latitude": 47.660410265058836,
      "longitude": -122.36545520760077,
    },
    {
      "name": "Fair Isle Brewing",
      "address": "936 NW 49th St",
      "latitude": 47.664581408882604,
      "longitude": -122.37017898575468,
    },
    {
        "name": "Cloudburst on Shilshole",
        "address": "936 NW 49th St",
        "latitude": 47.6679628929004,
        "longitude": -122.38658046778087,
    },
    {
      "name": "Great Notion Brewing",
      "address": "5101 14th Ave NW Suite 101",
      "latitude": 47.66592049008206,
      "longitude": -122.37410830354077,
    }, 
    {
      "name": "Lucky Envelope Brewing",
      "address": "907 NW 50th St",
      "latitude": 47.6648057643723,
      "longitude": -122.36922392195191,
    },
    {
      "name": "Maritime Pacific Brewing Company",
      "address": "1111 NW Ballard Way",
      "latitude": 47.66268211579851,
      "longitude": -122.37179551587259,
    },
    {
      "name": "Obec Brewing",
      "address": "1144 NW 52nd St",
      "latitude": 47.666683819886266,
      "longitude": -122.37252130611722,
    },
    {
      "name": "Reuben’s Brews",
      "address": "5010 14th Ave NW",
      "latitude": 47.66543845038172, 
      "longitude": -122.37324835902376,
    },
    {
      "name": "Stoup Brewing",
      "address": "1108 NW 52nd St",
      "latitude": 47.66669295219885, 
      "longitude": -122.3711921783455,
    },
    {
      "name": "Trailbend Taproom",
      "address": "1118 NW 50th St",
      "latitude": 47.66527706387153,
      "longitude": -122.37165528505005,
    },
    {
      "name": "Urban Family Brewing Co.",
      "address": "1103 NW 52nd St",
      "latitude": 47.66624666185788, 
      "longitude": -122.37101557820023,
    },
    {
      "name": "Wheelie Pop Brewing",
      "address": "1110 NW 50th St",
      "latitude": 47.66521588323629, 
      "longitude": -122.37141445043228
    }
  ]


const map = L.map('map').setView([47.66, -122.38], 13);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const breweryList = document.getElementById('item-list');

// Iterate over the JSON data
data.forEach(brewery => {
    // Create a list item element
    const li = document.createElement('li');
    li.textContent = brewery.name;

    // Add a circle marker to the map at the brewery location
    const marker = L.circleMarker([brewery.latitude, brewery.longitude], {
        color: '#000',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 5
    }).addTo(map);

    // Add a click listener that centers the map on the brewery
    li.addEventListener('click', () => {
        map.setView([brewery.latitude, brewery.longitude], 17);
    });
    // Add a mouseover listener that highlights the brewery
    li.addEventListener('mouseover', () => {
        li.classList.add('hovered');
        // add a popup to the marker
        marker.bindPopup(brewery.name).openPopup();
    });
    // Add the same popup when hovering the marker
    marker.addEventListener('mouseover', () => {
        marker.bindPopup(brewery.name).openPopup();
    });
    // Add a mouseout listener that removes the highlight
    li.addEventListener('mouseout', () => {
        li.classList.remove('hovered');
        // remove the popup from the marker
        marker.closePopup();
    });
    // Remove the popup when not hovering the marker
    marker.addEventListener('mouseout', () => {
        marker.closePopup();
    });

    // Append the list item to the item list
    breweryList.appendChild(li);
});
