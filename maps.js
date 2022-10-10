let metroAreaCenterCoordinates = [44.96, -93.2] // Array of latitude and longitude
let zoomLevel = 9 // 1 = whole world 20 = city blocks


let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] },
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] },
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] },
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] },
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]

campuses.forEach(function (collegeCampus) {
    // todo draw a maker
     // it will get  the name of the college and website for each of the college
    // draw the marker for the college campus
    let marketText = `${collegeCampus.name} <br> <a href="${collegeCampus.website}"> Website </a>`
    L.marker(collegeCampus.coordinates)
        .bindPopup(marketText)
        .addTo(map)
})
// Adding marker

// let mctcCoordinates = [44.9724, -93.2844] // Mctc Latitude adn longitude
// let mctcMarker = L.marker(mctcCoordinates)
//     .bindPopup('Minneapolis College<br><a href="https://minneapolis.edu">Website</a>') // the name of Minneapolis College will be visible when you double click
//     .addTo(map)
//
//
// let stPaulCoordinates = [44.9483, -93.1099]
// let stPaulMarker = L.marker(stPaulCoordinates)
//     .bindPopup('St Paul College<br><a href="https://sainpaul.edu">Website</a>')
//     .addTo(map)
//
// let brooklyCoordinates = [45.0941, -93.3563] // Mctc Latitude adn longitude
// let brooklynMarker = L.marker(brooklyCoordinates)
//     .bindPopup('Brooklyn Park<br><a href="https://www.brooklynpark.org/">Website</a>')
//     .addTo(map)
//
// //  Adding circle to the map
//
 let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
     color: 'green',
     radius: 30000,
     fillOpacity: 0.1

 })
     .bindPopup('Twin Cities Metro Area')
     .addTo(map)
//
//
// let normandaleCoordinates = [44.8297, -93.3312] // Normandales latitude and longitude
// let normandaleMarker = L.marker(normandaleCoordinates)
//     .bindPopup('Normandale Community College <br> <a href="https://www.normandale.edu/">Website</a>')
//     .addTo(map)
//
// let normandaleCoordinates_circle = [44.8297, -93.3312]
// let normandaleCircle = L.circle(normandaleCoordinates_circle, {
//     color: 'red',
//     radius: 3000,
//     fillOpacity: 0.1
// })
//     .addTo(map)