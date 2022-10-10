    let metroAreaCenterCoordinates = [44.96, -93.2] // Array of latitude and longitude
    let zoomLevel = 2 // 1 = whole world 20 = city blocks


    let map = L.map('longest-brige-map').setView(metroAreaCenterCoordinates, zoomLevel)

    let issMarker
    let leafletIcon = L.icon({
        iconUrl: 'brige_pic.png',
        iconSize: [50, 40],
        iconAnchor: [10, 10],
        popupAnchor: [-15, -25]
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);



    brigesMaps =  [
        {"name": "Verrazano-Narrows Bridge", "meter": "1298.4 M", "website": "https://en.wikipedia.org/wiki/Verrazzano-Narrows_Bridge", "coordinates": [40.6066, -74.0447] },
        {"name": "Golden Gate Bridge", "meter": "1280.2 M", "website": "https://sv.wikipedia.org/wiki/Golden_Gate", "coordinates": [	37.8199, -122.4783] },
        {"name": "Mackinac Bridge", "meter": "1158.0 M", "website": "https://en.wikipedia.org/wiki/Mackinac_Bridge", "coordinates": [45.8174, -84.72782] },
        {"name": "George Washington Bridge", "meter": "1067.0 M", "website": "https://en.wikipedia.org/wiki/George_Washington_Bridge", "coordinates": [40.6412, -73.3417] },
        {"name": "Tacoma Narrows Bridge", "meter": "853.44 M", "website": "https://en.wikipedia.org/wiki/Tacoma_Narrows_Bridge", "coordinates": [47.2690, -122.5517] }
    ]

    brigesMaps.forEach(function (usBrigesMap ) {
        let briges = ` ${usBrigesMap.name} <br> ${usBrigesMap.meter}
  <br> <a href="${usBrigesMap.website}"> Website</a>`
        //  let name = brigesMaps.name
        // let span = brigesMaps.meter
        // let location = brigesMaps.coordinates
        // let marker = L.marker(location, {icon: leafletIcon}).add(map)
        //     .bindPopup(`${name} <br> ${span}: `)




        L.marker(usBrigesMap.coordinates)
            .bindPopup(briges)
        .addTo(map)

    })

    let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
        color: 'green',
        radius: 3000000,
        fillOpacity: 0.2


    })
        .bindPopup('United States ')
        .addTo(map)
