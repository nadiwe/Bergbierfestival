



mapboxgl.accessToken = 'pk.eyJ1Ijoibndmd3NiIiwiYSI6ImNsNHNyaDBnbjBlenIzZGxhejg5ejl2a2sifQ.GRtniIwJvJYrRsWqMR5MYA';
        const bounds = [
            [10.3, 46.78], // [west, south]
            [10.45, 46.9]  // [east, north]
        ];

        let setImg;

       

        const map = new mapboxgl.Map({


            container: 'map',
            style: 'mapbox://styles/nwfwsb/cl4srws8i002p14lp3up2ng3d',
            center: [10.425259, 46.86909],
            zoom: 15,
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
                
                map.addSource('map', {
                'type': 'geojson',
                'data': {
                'type': 'FeatureCollection',



                
                
                
                    "features": [
                      {
                        "type": "Feature",
                        "properties": {
                          "Icon": "start"
                        },
                        "geometry": {
                          "coordinates": [
                            10.425391,
                            46.869797
                          ],
                          "type": "Point"
                        },
                        "id": "07d1296a6c61de55fac38564fab60ad2"
                      },
                      {
                        "type": "Feature",
                        "properties": {
                          "Icon": "blue"
                        },
                        "geometry": {
                          "coordinates": [
                            10.408661,
                            46.863247
                          ],
                          "type": "Point"
                        },
                        "id": "0c9b16763bc96a839f67c7800bd655e7"
                      },
                      {
                        "type": "Feature",
                        "properties": {
                          "Icon": "blue"
                        },
                        "geometry": {
                          "coordinates": [
                            10.394582,
                            46.838818
                          ],
                          "type": "Point"
                        },
                        "id": "175f06b59c764d4a406d3c9b059e91e7"
                      },
                      {
                        "type": "Feature",
                        "properties": {
                          "Icon": "foto1"
                        },
                        "geometry": {
                          "coordinates": [
                            10.427881,
                            46.872054
                          ],
                          "type": "Point"
                        },
                        "id": "1846bf45663f700ec395798378290663"
                      },
                      {
                        "type": "Feature",
                        "properties": {
                          "Icon": "foto2"
                        },
                        "geometry": {
                          "coordinates": [
                            10.401619,
                            46.844231
                          ],
                          "type": "Point"
                        },
                        "id": "1fe84f60991c9aa58a0e41b097c34955"
                      },
                      {
                        "type": "Feature",
                        "properties": {
                          "Icon": "blue"
                        },
                        "geometry": {
                          "coordinates": [
                            10.421524,
                            46.870734
                          ],
                          "type": "Point"
                        },
                        "id": "43fdc7575b003027fd86251a7fda746d"
                      },
                      {
                        "type": "Feature",
                        "properties": {
                          "Icon": "end"
                        },
                        "geometry": {
                          "coordinates": [
                            10.382315,
                            46.834446
                          ],
                          "type": "Point"
                        },
                        "id": "55660bb521f930b393c260a90b0fd3a2"
                      },
                      {
                        "type": "Feature",
                        "properties": {
                          "Icon": "weg"
                        },
                        "geometry": {
                          "coordinates": [
                            [
                              10.4242,
                              46.868864
                            ],
                            [
                              10.425943,
                              46.869399
                            ],
                            [
                              10.426659,
                              46.870513
                            ],
                            [
                              10.426641,
                              46.871418
                            ],
                            [
                              10.42739,
                              46.872484
                            ],
                            [
                              10.426832,
                              46.87313
                            ],
                            [
                              10.426146,
                              46.872833
                            ],
                            [
                              10.426498,
                              46.872395
                            ],
                            [
                              10.426406,
                              46.872081
                            ],
                            [
                              10.425909,
                              46.871834
                            ],
                            [
                              10.426023,
                              46.872035
                            ],
                            [
                              10.425905,
                              46.872152
                            ],
                            [
                              10.42372,
                              46.871513
                            ],
                            [
                              10.422771,
                              46.870925
                            ],
                            [
                              10.422863,
                              46.871066
                            ],
                            [
                              10.422863,
                              46.871191
                            ],
                            [
                              10.422576,
                              46.87103
                            ],
                            [
                              10.422188,
                              46.870716
                            ],
                            [
                              10.420544,
                              46.869484
                            ],
                            [
                              10.419683,
                              46.869162
                            ],
                            [
                              10.419216,
                              46.868787
                            ],
                            [
                              10.417375,
                              46.868144
                            ],
                            [
                              10.416449,
                              46.867638
                            ],
                            [
                              10.415863,
                              46.867417
                            ],
                            [
                              10.415475,
                              46.867356
                            ],
                            [
                              10.41505,
                              46.867316
                            ],
                            [
                              10.413902,
                              46.86659
                            ],
                            [
                              10.413459,
                              46.866461
                            ],
                            [
                              10.412868,
                              46.866002
                            ],
                            [
                              10.411982,
                              46.86552
                            ],
                            [
                              10.411423,
                              46.865321
                            ],
                            [
                              10.411042,
                              46.865114
                            ],
                            [
                              10.410709,
                              46.864893
                            ],
                            [
                              10.410484,
                              46.864672
                            ],
                            [
                              10.410171,
                              46.864231
                            ],
                            [
                              10.409804,
                              46.86385
                            ],
                            [
                              10.409979,
                              46.863807
                            ],
                            [
                              10.409542,
                              46.863507
                            ],
                            [
                              10.409346,
                              46.863261
                            ],
                            [
                              10.408882,
                              46.863001
                            ],
                            [
                              10.40872,
                              46.862604
                            ],
                            [
                              10.407967,
                              46.862243
                            ],
                            [
                              10.407765,
                              46.861964
                            ],
                            [
                              10.406894,
                              46.861751
                            ],
                            [
                              10.406374,
                              46.861485
                            ],
                            [
                              10.40521,
                              46.861751
                            ],
                            [
                              10.404315,
                              46.861729
                            ],
                            [
                              10.403716,
                              46.862407
                            ],
                            [
                              10.403496,
                              46.862637
                            ],
                            [
                              10.403246,
                              46.86269
                            ],
                            [
                              10.402788,
                              46.862977
                            ],
                            [
                              10.402368,
                              46.863163
                            ],
                            [
                              10.401886,
                              46.863515
                            ],
                            [
                              10.401672,
                              46.863684
                            ],
                            [
                              10.401456,
                              46.86375
                            ],
                            [
                              10.401081,
                              46.863879
                            ],
                            [
                              10.400977,
                              46.863949
                            ],
                            [
                              10.400637,
                              46.864213
                            ],
                            [
                              10.400239,
                              46.864534
                            ],
                            [
                              10.39989,
                              46.864848
                            ],
                            [
                              10.399712,
                              46.865189
                            ],
                            [
                              10.399299,
                              46.864905
                            ],
                            [
                              10.39882,
                              46.865401
                            ],
                            [
                              10.399065,
                              46.865437
                            ],
                            [
                              10.398802,
                              46.865837
                            ],
                            [
                              10.398614,
                              46.865812
                            ],
                            [
                              10.398189,
                              46.865988
                            ],
                            [
                              10.397839,
                              46.86601
                            ],
                            [
                              10.39814,
                              46.865103
                            ],
                            [
                              10.398016,
                              46.864907
                            ],
                            [
                              10.398236,
                              46.864224
                            ],
                            [
                              10.398887,
                              46.863092
                            ],
                            [
                              10.399333,
                              46.861847
                            ],
                            [
                              10.399257,
                              46.860723
                            ],
                            [
                              10.399592,
                              46.85971
                            ],
                            [
                              10.3982,
                              46.857675
                            ],
                            [
                              10.39818,
                              46.857462
                            ],
                            [
                              10.3983,
                              46.856981
                            ],
                            [
                              10.398227,
                              46.856435
                            ],
                            [
                              10.398406,
                              46.856226
                            ],
                            [
                              10.398405,
                              46.855996
                            ],
                            [
                              10.39872,
                              46.855488
                            ],
                            [
                              10.399474,
                              46.854942
                            ],
                            [
                              10.399414,
                              46.854237
                            ],
                            [
                              10.399748,
                              46.853502
                            ],
                            [
                              10.39979,
                              46.852853
                            ],
                            [
                              10.399682,
                              46.852451
                            ],
                            [
                              10.401606,
                              46.852533
                            ],
                            [
                              10.402077,
                              46.852596
                            ],
                            [
                              10.402516,
                              46.852447
                            ],
                            [
                              10.403143,
                              46.851967
                            ],
                            [
                              10.403332,
                              46.851524
                            ],
                            [
                              10.403072,
                              46.850809
                            ],
                            [
                              10.402754,
                              46.850395
                            ],
                            [
                              10.403303,
                              46.850049
                            ],
                            [
                              10.403526,
                              46.849729
                            ],
                            [
                              10.403274,
                              46.849264
                            ],
                            [
                              10.403281,
                              46.848752
                            ],
                            [
                              10.403565,
                              46.848007
                            ],
                            [
                              10.404099,
                              46.84725
                            ],
                            [
                              10.404046,
                              46.84635
                            ],
                            [
                              10.403772,
                              46.845486
                            ],
                            [
                              10.403007,
                              46.844909
                            ],
                            [
                              10.402863,
                              46.844489
                            ],
                            [
                              10.400859,
                              46.842841
                            ],
                            [
                              10.401316,
                              46.84205
                            ],
                            [
                              10.400962,
                              46.841484
                            ],
                            [
                              10.399918,
                              46.840988
                            ],
                            [
                              10.398982,
                              46.841145
                            ],
                            [
                              10.398051,
                              46.841134
                            ],
                            [
                              10.397083,
                              46.840974
                            ],
                            [
                              10.396191,
                              46.840658
                            ],
                            [
                              10.39565,
                              46.840634
                            ],
                            [
                              10.395702,
                              46.840328
                            ],
                            [
                              10.396058,
                              46.839953
                            ],
                            [
                              10.396571,
                              46.839599
                            ],
                            [
                              10.397369,
                              46.839352
                            ],
                            [
                              10.397858,
                              46.838817
                            ],
                            [
                              10.39788,
                              46.838465
                            ],
                            [
                              10.397787,
                              46.838373
                            ],
                            [
                              10.39763,
                              46.838393
                            ],
                            [
                              10.397372,
                              46.838621
                            ],
                            [
                              10.396983,
                              46.838729
                            ],
                            [
                              10.396333,
                              46.838524
                            ],
                            [
                              10.395331,
                              46.838598
                            ],
                            [
                              10.394232,
                              46.838423
                            ],
                            [
                              10.393655,
                              46.83874
                            ],
                            [
                              10.393183,
                              46.838894
                            ],
                            [
                              10.392952,
                              46.838857
                            ],
                            [
                              10.391735,
                              46.838621
                            ],
                            [
                              10.390779,
                              46.838284
                            ],
                            [
                              10.390575,
                              46.838251
                            ],
                            [
                              10.3904,
                              46.838271
                            ],
                            [
                              10.39026,
                              46.838256
                            ],
                            [
                              10.390176,
                              46.838206
                            ],
                            [
                              10.390051,
                              46.837984
                            ],
                            [
                              10.389971,
                              46.837951
                            ],
                            [
                              10.388993,
                              46.837811
                            ],
                            [
                              10.388649,
                              46.837646
                            ],
                            [
                              10.388319,
                              46.837622
                            ],
                            [
                              10.387984,
                              46.837563
                            ],
                            [
                              10.385177,
                              46.836461
                            ],
                            [
                              10.384663,
                              46.83614
                            ],
                            [
                              10.384458,
                              46.836085
                            ],
                            [
                              10.383907,
                              46.835856
                            ],
                            [
                              10.383573,
                              46.835669
                            ],
                            [
                              10.382889,
                              46.83544
                            ],
                            [
                              10.382377,
                              46.835222
                            ],
                            [
                              10.382062,
                              46.834977
                            ],
                            [
                              10.382606,
                              46.834162
                            ],
                            [
                              10.382202,
                              46.834009
                            ],
                            [
                              10.381874,
                              46.833665
                            ],
                            [
                              10.381266,
                              46.833373
                            ],
                            [
                              10.380989,
                              46.833185
                            ],
                            [
                              10.380259,
                              46.832784
                            ],
                            [
                              10.381537,
                              46.832243
                            ],
                            [
                              10.382165,
                              46.831756
                            ],
                            [
                              10.382566,
                              46.831523
                            ],
                            [
                              10.383602,
                              46.831116
                            ],
                            [
                              10.384028,
                              46.830979
                            ],
                            [
                              10.384378,
                              46.830764
                            ]
                          ],
                          "type": "LineString"
                        },
                        "id": "b0c104b981fdd72ef11de84819f85a38"
                      },
                      {
                        "type": "Feature",
                        "properties": {
                          "Icon": "blue"
                        },
                        "geometry": {
                          "coordinates": [
                            10.40223,
                            46.852015
                          ],
                          "type": "Point"
                        },
                        "id": "d047a89a54275851c6cc5bd92f8aab5f"
                      }
                    ],
                    "type": "FeatureCollection"
                  }
                  





                
                });
           
 
                

          

           
          
                map.addLayer({
                    'id': 'locations',
                    'type': 'circle',
                    'source': 'map',
                    'paint': {
                    'circle-radius': 6,
                    'circle-color': 'blue'
                    },
                'filter': ['==', '$type', 'Point']

                    });
                   
           
        
      
        map.on('click', 'locations', (e) =>  {
            
             setImg = e.features[0].properties.Icon;
            console.log(setImg);

            switch(setImg){
                case   'start':
                    document.getElementById("hidden").style.display = "block";

                    var c = document.createElement("div");
                    c.setAttribute("class", "added");
                        c.setAttribute("id","circle");
                        document.getElementById("labels").appendChild(c);

                    var x = document.createElement("IMG");
                    x.setAttribute("src", "kaese.png");
                    x.setAttribute("alt", "fahne");
                    x.setAttribute("class", "added");
                    document.getElementById("circle").appendChild(x);

                    
                   
                    break;
                    case   'end':
                        document.getElementById("hidden").style.display = "block";

                        var c = document.createElement("div");
                        c.setAttribute("class", "added");
                        c.setAttribute("id","circle");
                        document.getElementById("labels").appendChild(c);

                       
                        var x = document.createElement("IMG");
                        x.setAttribute("src", "./footage/fleisch.png");
                        x.setAttribute("alt", "fahne");
                        x.setAttribute("class","added");
                        document.getElementById("circle").appendChild(x);

                        var c = document.createElement("div");
                        c.setAttribute("class", "added");
                        c.setAttribute("id","circle2");
                        document.getElementById("labels").appendChild(c);
    
                        
                        var x = document.createElement("IMG");
                        x.setAttribute("src", "kaese.png");
                        x.setAttribute("alt", "fahne");
                        x.setAttribute("class", "added");
                        document.getElementById("circle2").appendChild(x);
    
                        
                       
                       

                        
                        break;
                        
            }
            
          
            //if(cross == true){ document.getElementById("hidden").style.display = "none";}
            
            //state = true;
        });
        
    });

    function back(){
        document.getElementById('hidden').style.display = 'none';

        //document.getElementById('labels').removeChild('added');

        $('#labels').empty();
  

    }