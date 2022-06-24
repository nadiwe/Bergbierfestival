mapboxgl.accessToken = 'pk.eyJ1Ijoibndmd3NiIiwiYSI6ImNsNHNyaDBnbjBlenIzZGxhejg5ejl2a2sifQ.GRtniIwJvJYrRsWqMR5MYA';
        const bounds = [
            [10.3, 46.78], // [west, south]
            [10.45, 46.9]  // [east, north]
        ];
        const map = new mapboxgl.Map({


            container: 'map',
            style: 'mapbox://styles/nwfwsb/cl4srws8i002p14lp3up2ng3d',
            center: [10.425259, 46.86209],
            zoom: 13,
            maxBounds: bounds
        });

       
    map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                // When active the map will receive updates to the device's location as it changes.
                trackUserLocation: true,
                // Draw an arrow next to the location dot to indicate which direction the device is heading.
                showUserHeading: true
            })
        );

      

        map.on('load', () => {
            map.addSource('locations', {
                'type': 'geojson',
                'data':{
                    'type': 'FeatureCollections',
                    'features': [
                          {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                              'coordinates': [
                                10.382085,
                                46.834375
                              ] 
                            },
                          }
                        ]
                          } 
                });

            });

    
        map.addLayer({
            'id': 'locations',
            'type': 'circle',
            'source': 'locations',
           
            'paint': {
                'circle-radius': 6,
                'circle-color': '#B42222'

            }
        });
        map.on('click', e => {
            console.log('click', e.lngLat);
        });
       