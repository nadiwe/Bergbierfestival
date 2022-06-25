mapboxgl.accessToken = 'pk.eyJ1Ijoibndmd3NiIiwiYSI6ImNsNHNyaDBnbjBlenIzZGxhejg5ejl2a2sifQ.GRtniIwJvJYrRsWqMR5MYA';
        const bounds = [
            [10.3, 46.78], // [west, south]
            [10.45, 46.9]  // [east, north]
        ];

        let setImg;

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
                map.addSource('national-park', {
                'type': 'geojson',
                'data': {
                'type': 'FeatureCollection',



                
                
                    "features": [
                      {
                        "type": "Feature",
                        "properties": {
                            "icon": 'end',
                          "2": "ramosch"
                        },
                        "geometry": {
                          "coordinates": [
                            10.382085,
                            46.834375
                          ],
                          "type": "Point"
                        },
                        "id": "78b09a7f325b58d1d637ec029f77be80"
                      },
                      {
                        "type": "Feature",
                        "properties": {
                            "icon": 'start',
                          "Start": "tschlin"
                        },
                        "geometry": {
                          "coordinates": [
                            10.425081,
                            46.869304
                          ],
                          "type": "Point"
                        },
                        "id": "86dca45dbbfff1b39a5a97724cbcdd8d"
                      }
                    ],
                    "type": "FeatureCollection"
                  





                }
                });
           
 
                

            map.addLayer({
                'id': 'park-volcanoes',
                'type': 'circle',
                'source': 'national-park',
                'paint': {
                'circle-radius': 6,
                'circle-color': '#B42222'
                },
                'filter': ['==', '$type', 'Point']
                });

            });
    
        
        map.on('click', e => {
          //  console.log('click', e.lngLat);
            
        });
        map.on('click', 'park-volcanoes', (e) =>  {
            
             setImg = e.features[0].properties.icon;
            console.log(setImg);
            //if(!state)
            //state = true;
        });
        
       