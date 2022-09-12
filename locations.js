

let marker, posLo,posLa;
mapboxgl.accessToken = 'pk.eyJ1Ijoibndmd3NiIiwiYSI6ImNsNHNyaDBnbjBlenIzZGxhejg5ejl2a2sifQ.GRtniIwJvJYrRsWqMR5MYA';
        const bounds = [
            [10.3, 46.78], // [west, south]
            [10.45, 46.9]  // [east, north]
        ];

        let setImg;
        //create map
        const map = new mapboxgl.Map({


            container: 'map',
            style: 'mapbox://styles/nwfwsb/cl4srws8i002p14lp3up2ng3d',
            center: [10.423259, 46.86909],
            zoom: 15,
            //maxBounds: bounds
        });
        
        navigator.geolocation.watchPosition((pos,err,options) =>{
          (err) =>{
            console.log(error);
        },

    
         {
        enableHighAccuracy: true,
        maximumAge: 60000,
        timeout: 50
      }
      posLo = pos.coords.longitude
      posLa = pos.coords.latitude
      console.log(posLo, posLa);
    });

         
        function geoFindMe() {
          console.log("get location")
          

        

          if ( marker){
            console.log("remove marker");
            
            marker.remove();
          }

            var el = document.createElement('div');
            el.className = 'marker';
            
 console.log(posLo, posLa);
         marker = new mapboxgl.Marker(el)
        .setLngLat([posLo, posLa])
       
        .addTo(map);
        map.flyTo({
            center: [posLo, posLa]
            });
            document.getElementById('circleOut').style.border = '2px solid  rgb(7, 98, 245)';
            document.getElementById('circleIn').style.backgroundColor = 'rgb(7, 98, 245)';  
        }     


       


        
          
          
          
      // var walk = navigator.geolocation.watchPosition(successCallback,errorCallback,options);
     //Source for User Location   
     

           
               
 



//implement data - location points 
            map.on('load', () => {
                
                map.addSource('map', {
                'type': 'geojson',
                'data': {
                'type': 'FeatureCollection',

//GeoData from here ...



  "features": [
    {
      "type": "Feature",
      "properties": {
        "Icon": "start",
        "art": "loc"
      },
      "geometry": {
        "coordinates": [
          10.422906,
          46.868087
        ],
        "type": "Point"
      },
      "id": "07d1296a6c61de55fac38564fab60ad2"
    },
    {
      "type": "Feature",
      "properties": {
        "Icon": "blue",
        "art": "bier"
      },
      "geometry": {
        "coordinates": [
          10.40901,
          46.863066
        ],
        "type": "Point"
      },
      "id": "0c9b16763bc96a839f67c7800bd655e7"
    },
    {
      "type": "Feature",
      "properties": {
        "Icon": "konzert"
      },
      "geometry": {
        "coordinates": [
          10.380926,
          46.831074
        ],
        "type": "Point"
      },
      "id": "11c164987075cc87b58b2790d24fe1be"
    },
    {
      "type": "Feature",
      "properties": {
        "Icon": "blue",
        "art": "bier"
      },
      "geometry": {
        "coordinates": [
          10.39429,
          46.838456
        ],
        "type": "Point"
      },
      "id": "175f06b59c764d4a406d3c9b059e91e7"
    },
    {
      "type": "Feature",
      "properties": {
        "Icon": "foto1",
        "art": "foto"
      },
      "geometry": {
        "coordinates": [
          10.426942,
          46.871937
        ],
        "type": "Point"
      },
      "id": "1846bf45663f700ec395798378290663"
    },
    {
      "type": "Feature",
      "properties": {
        "Icon": "foto2",
        "art": "foto"
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
        "Icon": "stand1",
        "art": "loc"
      },
      "geometry": {
        "coordinates": [
          10.419061,
          46.868784
        ],
        "type": "Point"
      },
      "id": "28341757ff7f71c733268d6ed3e74ad8"
    },
    {
      "type": "Feature",
      "properties": {
        "Icon": "blue",
        "art": "bier"
      },
      "geometry": {
        "coordinates": [
          10.421863,
          46.870509
        ],
        "type": "Point"
      },
      "id": "43fdc7575b003027fd86251a7fda746d"
    },
    {
      "type": "Feature",
      "properties": {
        "Icon": "startGipfelstuermer",
        "art": "loc"
      },
      "geometry": {
        "coordinates": [
          10.368192,
          46.851996
        ],
        "type": "Point"
      },
      "id": "4c5bbb4269e918f02af89c255c9a8d3f"
    },
    {
      "type": "Feature",
      "properties": {
        "Icon": "stand3",
        "art": "loc"
      },
      "geometry": {
        "coordinates": [
          10.382407,
          46.834475
        ],
        "type": "Point"
      },
      "id": "55660bb521f930b393c260a90b0fd3a2"
    },
    {
      "type": "Feature",
      "properties": {
        "Icon": "stand2",
        "art": "loc"
      },
      "geometry": {
        "coordinates": [
          10.382944,
          46.835456
        ],
        "type": "Point"
      },
      "id": "7ade03f97fb52d36b8dc11558f660849"
    },
    {
      "type": "Feature",
      "properties": {
        "Icon": "weg"
      },
      "geometry": {
        "coordinates": [
          [
            10.422942,
            46.868119
          ],
          [
            10.42333,
            46.868339
          ],
          [
            10.424228,
            46.868561
          ],
          [
            10.42472,
            46.868774
          ],
          [
            10.424998,
            46.86905
          ],
          [
            10.425023,
            46.869274
          ],
          [
            10.425363,
            46.869294
          ],
          [
            10.425659,
            46.869365
          ],
          [
            10.425978,
            46.869474
          ],
          [
            10.426222,
            46.869695
          ],
          [
            10.42642,
            46.869984
          ],
          [
            10.426624,
            46.870276
          ],
          [
            10.426555,
            46.870773
          ],
          [
            10.426463,
            46.871015
          ],
          [
            10.426564,
            46.871361
          ],
          [
            10.427214,
            46.872288
          ],
          [
            10.427242,
            46.87251
          ],
          [
            10.42708,
            46.872842
          ],
          [
            10.426919,
            46.873029
          ],
          [
            10.426745,
            46.873129
          ],
          [
            10.426598,
            46.873074
          ],
          [
            10.426325,
            46.872913
          ],
          [
            10.426118,
            46.872824
          ],
          [
            10.426159,
            46.872692
          ],
          [
            10.426409,
            46.872462
          ],
          [
            10.426464,
            46.872337
          ],
          [
            10.426401,
            46.872144
          ],
          [
            10.426116,
            46.871924
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
            10.425436,
            46.872038
          ],
          [
            10.424925,
            46.871895
          ],
          [
            10.424036,
            46.87161
          ],
          [
            10.423585,
            46.87144
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
            10.419138,
            46.868783
          ],
          [
            10.417442,
            46.868172
          ],
          [
            10.417148,
            46.868018
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
            10.41367,
            46.866539
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
            10.412596,
            46.865871
          ],
          [
            10.411982,
            46.86552
          ],
          [
            10.411754,
            46.865416
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
            10.410379,
            46.864501
          ],
          [
            10.410171,
            46.864231
          ],
          [
            10.409912,
            46.863985
          ],
          [
            10.409825,
            46.863853
          ],
          [
            10.409894,
            46.863825
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
            10.397748,
            46.86604
          ],
          [
            10.398119,
            46.865517
          ],
          [
            10.398011,
            46.865438
          ],
          [
            10.39816,
            46.865216
          ],
          [
            10.398026,
            46.865126
          ],
          [
            10.398083,
            46.865078
          ],
          [
            10.398016,
            46.864907
          ],
          [
            10.398179,
            46.864455
          ],
          [
            10.398314,
            46.86399
          ],
          [
            10.398866,
            46.863099
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
            10.40222,
            46.843983
          ],
          [
            10.4014,
            46.843262
          ],
          [
            10.401001,
            46.843054
          ],
          [
            10.400871,
            46.842885
          ],
          [
            10.400894,
            46.842645
          ],
          [
            10.400989,
            46.84251
          ],
          [
            10.401167,
            46.84245
          ],
          [
            10.401268,
            46.842273
          ],
          [
            10.401316,
            46.84205
          ],
          [
            10.4012,
            46.841743
          ],
          [
            10.400831,
            46.841455
          ],
          [
            10.400362,
            46.841171
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
            10.382145,
            46.831732
          ],
          [
            10.382507,
            46.831571
          ],
          [
            10.383257,
            46.831231
          ],
          [
            10.383785,
            46.831096
          ],
          [
            10.3841,
            46.830956
          ],
          [
            10.384487,
            46.830669
          ],
          [
            10.383142,
            46.830828
          ],
          [
            10.381851,
            46.830985
          ],
          [
            10.381079,
            46.831187
          ]
        ],
        "type": "LineString"
      },
      "id": "b0c104b981fdd72ef11de84819f85a38"
    },
    {
      "type": "Feature",
      "properties": {
        "Icon": "foto3",
        "art": "foto"
      },
      "geometry": {
        "coordinates": [
          10.426453,
          46.869939
        ],
        "type": "Point"
      },
      "id": "cf907d6ddbd5bba2aeb5bd6c458da70f"
    },
    {
      "type": "Feature",
      "properties": {
        "Icon": "blue",
        "art": "bier"
      },
      "geometry": {
        "coordinates": [
          10.40223,
          46.852015
        ],
        "type": "Point"
      },
      "id": "d047a89a54275851c6cc5bd92f8aab5f"
    },
    {
      "type": "Feature",
      "properties": {
        "Icon": "bergweg"
      },
      "geometry": {
        "coordinates": [
          [
            10.368233,
            46.85217
          ],
          [
            10.371019,
            46.867494
          ],
          [
            10.370953,
            46.867663
          ],
          [
            10.37092,
            46.867941
          ],
          [
            10.37068,
            46.868042
          ],
          [
            10.370757,
            46.868078
          ],
          [
            10.370623,
            46.868134
          ],
          [
            10.370673,
            46.868252
          ],
          [
            10.370442,
            46.86839
          ],
          [
            10.37017,
            46.868681
          ],
          [
            10.369954,
            46.868799
          ],
          [
            10.369936,
            46.869227
          ],
          [
            10.369365,
            46.871298
          ],
          [
            10.369216,
            46.871474
          ],
          [
            10.368955,
            46.872212
          ],
          [
            10.369321,
            46.873326
          ],
          [
            10.369872,
            46.873092
          ],
          [
            10.369982,
            46.873197
          ],
          [
            10.370126,
            46.873125
          ],
          [
            10.370238,
            46.87321
          ],
          [
            10.370591,
            46.873092
          ],
          [
            10.371049,
            46.872804
          ],
          [
            10.371173,
            46.872671
          ],
          [
            10.371319,
            46.872773
          ],
          [
            10.371471,
            46.872673
          ],
          [
            10.371552,
            46.872763
          ],
          [
            10.371676,
            46.872705
          ],
          [
            10.371738,
            46.872779
          ],
          [
            10.371895,
            46.872699
          ],
          [
            10.371965,
            46.87271
          ],
          [
            10.372013,
            46.872673
          ],
          [
            10.372083,
            46.872703
          ],
          [
            10.372147,
            46.87264
          ],
          [
            10.372267,
            46.872658
          ],
          [
            10.372403,
            46.872495
          ],
          [
            10.37254,
            46.872546
          ],
          [
            10.372692,
            46.872551
          ],
          [
            10.37279,
            46.872331
          ],
          [
            10.372766,
            46.872188
          ],
          [
            10.372988,
            46.872202
          ],
          [
            10.373083,
            46.872128
          ],
          [
            10.373187,
            46.872178
          ],
          [
            10.373247,
            46.872122
          ],
          [
            10.373484,
            46.872221
          ],
          [
            10.373722,
            46.872205
          ],
          [
            10.373787,
            46.871946
          ],
          [
            10.373871,
            46.871968
          ],
          [
            10.374027,
            46.871888
          ],
          [
            10.374234,
            46.871883
          ],
          [
            10.374856,
            46.872096
          ],
          [
            10.375159,
            46.872129
          ],
          [
            10.376547,
            46.871894
          ],
          [
            10.377054,
            46.871897
          ],
          [
            10.377262,
            46.871873
          ],
          [
            10.377385,
            46.871781
          ],
          [
            10.378253,
            46.871607
          ],
          [
            10.378591,
            46.871569
          ],
          [
            10.378824,
            46.871418
          ],
          [
            10.379232,
            46.871241
          ],
          [
            10.379463,
            46.871264
          ],
          [
            10.380126,
            46.871139
          ],
          [
            10.380893,
            46.871148
          ],
          [
            10.381196,
            46.871203
          ],
          [
            10.381329,
            46.871159
          ],
          [
            10.381392,
            46.871007
          ],
          [
            10.381705,
            46.870944
          ],
          [
            10.382009,
            46.870924
          ],
          [
            10.382153,
            46.871066
          ],
          [
            10.382569,
            46.870928
          ],
          [
            10.382864,
            46.871046
          ],
          [
            10.383372,
            46.871076
          ],
          [
            10.383988,
            46.871015
          ],
          [
            10.384037,
            46.870744
          ],
          [
            10.384156,
            46.87068
          ],
          [
            10.384382,
            46.870685
          ],
          [
            10.384586,
            46.870809
          ],
          [
            10.384871,
            46.871324
          ],
          [
            10.3848,
            46.871458
          ],
          [
            10.385011,
            46.871423
          ],
          [
            10.385389,
            46.871205
          ],
          [
            10.38566,
            46.870957
          ],
          [
            10.385591,
            46.870754
          ],
          [
            10.385226,
            46.870426
          ],
          [
            10.385044,
            46.870316
          ],
          [
            10.385008,
            46.870071
          ],
          [
            10.38508,
            46.86975
          ],
          [
            10.385175,
            46.869599
          ],
          [
            10.385412,
            46.869494
          ],
          [
            10.385636,
            46.86922
          ],
          [
            10.385869,
            46.868745
          ],
          [
            10.386922,
            46.86795
          ],
          [
            10.387128,
            46.867652
          ],
          [
            10.387164,
            46.866717
          ],
          [
            10.387008,
            46.866515
          ],
          [
            10.386877,
            46.866167
          ],
          [
            10.387138,
            46.865358
          ],
          [
            10.387186,
            46.864548
          ],
          [
            10.387316,
            46.864347
          ],
          [
            10.387268,
            46.863998
          ],
          [
            10.387615,
            46.863413
          ],
          [
            10.387668,
            46.862088
          ],
          [
            10.387529,
            46.861482
          ],
          [
            10.387216,
            46.861046
          ],
          [
            10.386982,
            46.860642
          ],
          [
            10.38665,
            46.860296
          ],
          [
            10.38645,
            46.859755
          ],
          [
            10.386229,
            46.859597
          ],
          [
            10.386199,
            46.85947
          ],
          [
            10.38625,
            46.859292
          ],
          [
            10.38614,
            46.859154
          ],
          [
            10.386199,
            46.859103
          ],
          [
            10.386403,
            46.859237
          ],
          [
            10.387111,
            46.859588
          ],
          [
            10.38722,
            46.859601
          ],
          [
            10.387308,
            46.859523
          ],
          [
            10.387073,
            46.859398
          ],
          [
            10.386605,
            46.859079
          ],
          [
            10.386173,
            46.85852
          ],
          [
            10.385719,
            46.858438
          ],
          [
            10.385543,
            46.858475
          ],
          [
            10.385227,
            46.858308
          ],
          [
            10.384682,
            46.857866
          ],
          [
            10.384599,
            46.857764
          ],
          [
            10.384625,
            46.857558
          ],
          [
            10.384359,
            46.857385
          ],
          [
            10.384306,
            46.857228
          ],
          [
            10.384148,
            46.85689
          ],
          [
            10.383581,
            46.856419
          ],
          [
            10.383277,
            46.856242
          ],
          [
            10.382777,
            46.855905
          ],
          [
            10.382573,
            46.855647
          ],
          [
            10.382418,
            46.85554
          ],
          [
            10.382086,
            46.855471
          ],
          [
            10.381792,
            46.855258
          ],
          [
            10.381706,
            46.855052
          ],
          [
            10.381531,
            46.854825
          ],
          [
            10.381282,
            46.854621
          ],
          [
            10.381041,
            46.85448
          ],
          [
            10.380933,
            46.854387
          ],
          [
            10.380676,
            46.854177
          ],
          [
            10.380453,
            46.853941
          ],
          [
            10.379507,
            46.852842
          ],
          [
            10.379461,
            46.852582
          ],
          [
            10.379342,
            46.852145
          ],
          [
            10.379362,
            46.852112
          ],
          [
            10.379302,
            46.851939
          ],
          [
            10.37936,
            46.851784
          ],
          [
            10.379538,
            46.851678
          ],
          [
            10.379846,
            46.851633
          ],
          [
            10.38004,
            46.851681
          ],
          [
            10.380467,
            46.851994
          ],
          [
            10.381258,
            46.852385
          ],
          [
            10.381624,
            46.852431
          ],
          [
            10.381994,
            46.852492
          ],
          [
            10.382445,
            46.852769
          ],
          [
            10.383068,
            46.853025
          ],
          [
            10.384436,
            46.853207
          ],
          [
            10.384756,
            46.853324
          ],
          [
            10.385199,
            46.853301
          ],
          [
            10.385481,
            46.853168
          ],
          [
            10.385609,
            46.853003
          ],
          [
            10.385816,
            46.852904
          ],
          [
            10.386074,
            46.852921
          ],
          [
            10.386626,
            46.853091
          ],
          [
            10.386896,
            46.853255
          ],
          [
            10.387291,
            46.85334
          ],
          [
            10.387899,
            46.853547
          ],
          [
            10.388968,
            46.853613
          ],
          [
            10.390028,
            46.853851
          ],
          [
            10.390147,
            46.853814
          ],
          [
            10.390225,
            46.853735
          ],
          [
            10.390207,
            46.853649
          ],
          [
            10.389782,
            46.852541
          ],
          [
            10.390126,
            46.852619
          ],
          [
            10.390229,
            46.852721
          ],
          [
            10.391461,
            46.853387
          ],
          [
            10.391539,
            46.853633
          ],
          [
            10.392062,
            46.853904
          ],
          [
            10.392241,
            46.854133
          ],
          [
            10.392812,
            46.854666
          ],
          [
            10.393119,
            46.854794
          ],
          [
            10.393545,
            46.854855
          ],
          [
            10.393738,
            46.855005
          ],
          [
            10.393775,
            46.855179
          ],
          [
            10.394091,
            46.855734
          ],
          [
            10.394813,
            46.856466
          ],
          [
            10.395175,
            46.856515
          ],
          [
            10.395441,
            46.856777
          ],
          [
            10.39546,
            46.85726
          ],
          [
            10.395836,
            46.8575
          ],
          [
            10.395891,
            46.85774
          ],
          [
            10.396566,
            46.858679
          ],
          [
            10.396893,
            46.858819
          ],
          [
            10.397113,
            46.859063
          ],
          [
            10.39758,
            46.859483
          ],
          [
            10.398226,
            46.859909
          ],
          [
            10.398313,
            46.860319
          ],
          [
            10.398606,
            46.860982
          ],
          [
            10.39862,
            46.861315
          ],
          [
            10.399323,
            46.861825
          ]
        ],
        "type": "LineString"
      },
      "id": "fac60784e4ca808aa73da772395314c1"
    }
  ],
  "type": "FeatureCollection"
}
//...until here

                });
           
           
//for testing - where are the stands
    map.addLayer({
                    'id': 'locations',
                    'type': 'circle',
                    'source': 'map',
                    'paint': {
                    'circle-radius': 20,
                    'circle-color': 'blue',
                    'circle-opacity': 0.5
                    },
                'filter': ['==', '$type', 'Point']

    });
   
   

                   
           
        
//Overview - appear 
    map.on('click', 'locations', (e) =>  {
            $('#labels').empty();
             setImg = e.features[0].properties.Icon;
            console.log(setImg);
            document.getElementById("hidden").style.display = "block";

            switch(setImg){
                    case   'start':
                

                        var h1 = document.createElement("H1");
                        h1.innerHTML = "Allegra, liebe Geniesserinnen und Geniesser";
                        h1.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(h1);
                        document.getElementById("hidden").style.backgroundColor = '#c68d2e';

                        var video = document.createElement("IFRAME");
                        video.setAttribute("class", "added"); 
                        video.setAttribute("frameborder", "0"); 
                        video.setAttribute('allowFullScreen', '')
                        video.setAttribute("src", "https://www.youtube.com/embed/Mo5dzzMCG3s");
                        document.getElementById("labels").appendChild(video);


                        var text = document.createElement("P");
                        text.innerHTML = "Schön, sind Sie bei uns. Wir freuen uns, dass wir auch heuer wieder die Bergbierwanderung durchführen können. Es gibt gewisse Anpassungen und Neuigkeiten, welche wir hiermit präsentieren möchten. ";
                        text.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(text);

                        var grillstand = document.createElement("H2");
                        grillstand.innerHTML = "Grillstand";
                        grillstand.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(grillstand);

                        var grillstandT = document.createElement("P");
                        grillstandT.innerHTML = "Ungefähr in der Mitte der Wanderung haben wir dieses Jahr einen Grillstand organisiert. Die Bacharia Zanetti grilliert dort regionale Spezialitäten. Für CHF 5.– erhalten Sie dort eine Wurst (Biergriller, Käsengadiner, Bratwurst...) mit Brot. ";
                        grillstandT.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(grillstandT);

                        var verkaufsstand = document.createElement("H2");
                        verkaufsstand.innerHTML = "Verkaufsstand";
                        verkaufsstand.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(verkaufsstand);

                        var verkaufsstandT = document.createElement("P");
                        verkaufsstandT.innerHTML = "In Ramosch können am Ende der Wanderung alle Produkte eingekauft werden, die auf der Wanderung zur Degustation angeboten werden und Sie finden dort noch weitere Spezialitäten der Bun Tschlin Produzenten. ";
                        verkaufsstandT.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(verkaufsstandT);

                    
                   
                    break;
                    case   'startGipfelstuermer':

                      var h1 = document.createElement("H1");
                      h1.innerHTML = "Option Gipfelbier Piz Arina";
                      h1.setAttribute("class", "added");
                      document.getElementById("labels").appendChild(h1);

                      var text = document.createElement("P");
                        text.innerHTML = "Diverse Gipfelstürmerinnen und Gipfelstürmer sind bereits unterwegs zum Piz Arina. Sie geniessen dort ein einmaliges Gipfelbier. Ab der Station Bieraria Tschlin werden diese auch wieder auf der Strecke sein und die Wanderung mitlaufen. ";
                        text.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(text);

                      document.getElementById("hidden").style.backgroundColor = '#c5bc20';

                      


                  
                 
                  break;
                 
                    case   'stand1':

                      var kreis = document.createElement("div");
                      kreis.setAttribute("class", "added");
                      kreis.setAttribute("id","circle");
                      document.getElementById("labels").appendChild(kreis);
                      document.getElementById("hidden").style.backgroundColor = '#c68d2e';

                     
                      var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./footage/bier.png");
                      bild.setAttribute("alt", "bieraEngiadinaisa");
                      bild.setAttribute("id", "bieraEngiadinaisa");
                      bild.setAttribute("onclick", "infoblock()");
                      bild.setAttribute("class","added");
                      document.getElementById("circle").appendChild(bild);

                      var kreis = document.createElement("div");
                      kreis.setAttribute("class", "added");
                      kreis.setAttribute("id","circle2");
                      document.getElementById("labels").appendChild(kreis);
  
                      
                      var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./footage/kaese.png");
                      bild.setAttribute("alt", "kaese");
                      bild.setAttribute("id", "kaese");
                      bild.setAttribute("class", "added");
                      bild.setAttribute("onclick", "infoblock()");
                      document.getElementById("circle2").appendChild(bild);

                      break;
                    case   'stand2':
                      var kreis = document.createElement("div");
                      kreis.setAttribute("class", "added");
                      kreis.setAttribute("id","circle");
                      document.getElementById("labels").appendChild(kreis);
                      document.getElementById("hidden").style.backgroundColor = '#c68d2e';

                     
                      var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./footage/bier.png");
                      bild.setAttribute("alt", "bierariaTschlinSA");
                      bild.setAttribute("id", "bierariaTschlinSA");
                      bild.setAttribute("class","added");
                      bild.setAttribute("onclick", "infoblock()");
                      document.getElementById("circle").appendChild(bild);

                      var kreis = document.createElement("div");
                      kreis.setAttribute("class", "added");
                      kreis.setAttribute("id","circle2");
                      document.getElementById("labels").appendChild(kreis);
  
                      
                      var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./footage/fleisch.png");
                      bild.setAttribute("alt", "fleisch");
                      bild.setAttribute("id", "fleisch");
                      bild.setAttribute("class", "added");
                      bild.setAttribute("onclick", "infoblock()");
                      document.getElementById("circle2").appendChild(bild);
                      
                      break;
                    case   'stand3':

                        var kreis = document.createElement("div");
                        kreis.setAttribute("class", "added");
                        kreis.setAttribute("id","circle");
                        document.getElementById("labels").appendChild(kreis);
                        document.getElementById("hidden").style.backgroundColor = '#c68d2e';

                       
                        var bild = document.createElement("IMG");
                        bild.setAttribute("src", "./footage/bier.png");
                        bild.setAttribute("alt", "doppelleuBoxerAG");
                        bild.setAttribute("id", "doppelleuBoxerAG");
                        bild.setAttribute("onclick", "infoblock()");
                        bild.setAttribute("class","added");
                        document.getElementById("circle").appendChild(bild);

                        var kreis = document.createElement("div");
                        kreis.setAttribute("class", "added");
                        kreis.setAttribute("id","circle2");
                        document.getElementById("labels").appendChild(kreis);
    
                        
                        var bild = document.createElement("IMG");
                        bild.setAttribute("src", "./footage/kaese.png");
                        bild.setAttribute("alt", "kaese");
                        bild.setAttribute("id", "kaese");
                        bild.setAttribute("class", "added");
                        bild.setAttribute("onclick", "infoblock()");
                        document.getElementById("circle2").appendChild(bild);

                        break;
    
                    case   'foto1': 
                    var bunTschlin = document.createElement("H1");
                    bunTschlin.innerHTML = "Bun Tschlin";
                    bunTschlin.setAttribute("class", "added");
                    document.getElementById("labels").appendChild(bunTschlin);

                    var foto = document.createElement("IMG");
                    foto.setAttribute("src", "./img/atmosphäre/foto1.jpg");
                    foto.setAttribute("alt", "wanderung");
                    foto.setAttribute("class", "added");
                    foto.setAttribute("id", "fotos");
                    document.getElementById("labels").appendChild(foto);
                    document.getElementById("hidden").style.backgroundColor = '#c68d2e';

                    var bunTschlinT = document.createElement("P");
                    bunTschlinT.innerHTML = "Bun Tschlin ist Organisator des Bergbierfestivals. Das Ganze ist mehr als die Summe aller Teile, wusste schon Aristoteles. Bun Tschlin vereinigt engagierte Betriebe aus der Gemeinde Valsot, die mit authentischen Angeboten die Lebensqualität vor Ort sowie einen sanften Tourismus pflegen wollen. <br> «Bun Tschlin» steht für nachhaltig, ökologisch, mutig und unternehmerisch! Wir pflegen die einheimischen Landschaft und bündeln die Kräfte der Natur in unseren authentischen Bun Tschlin Produkten. <br> In Tschlin und den benachbarten Dörfern Martina, Ramosch, Strada und Vnà haben wir uns zusammengetan, um gemeinsam die ursprüngliche Struktur und hohe Lebensqualität in der Region zu erhalten und diese zugleich mit unseren BesucherInnen zu teilen. Denn auch hier gilt: Sharing is caring! Dieser Zusammenschluss heisst Bun Tschlin, was bedeutet: Gutes aus Tschlin."
                    bunTschlinT.setAttribute("class", "added");
                    document.getElementById("labels").appendChild(bunTschlinT);

                    var bunTschlinL = document.createElement("A");
                    bunTschlinL.innerHTML = " www.buntschlin.ch";
                    bunTschlinL.href = "https://buntschlin.ch/"; 
                    bunTschlinL.setAttribute("class", "added");
                    document.getElementById("labels").appendChild(bunTschlinL);

                    break;

                    case   'foto2':  
                    var valsot = document.createElement("H1");
                    valsot.innerHTML = "Valsot";
                    valsot.setAttribute("class", "added");
                    document.getElementById("labels").appendChild(valsot);

                        var foto = document.createElement("IMG");
                        foto.setAttribute("src", "./img/atmosphäre/foto2.jpg");
                        foto.setAttribute("alt", "wanderung");
                        foto.setAttribute("class", "added");
                        foto.setAttribute("id", "fotos");
                        document.getElementById("labels").appendChild(foto);
                        document.getElementById("hidden").style.backgroundColor = '#c68d2e';

                        var valsotT = document.createElement("P");
                        valsotT.innerHTML = "Die Gemeinde Valsot grenzt an Österreich und an Italien. Ein Teil des Valsoter Gemeindeterritoriums, das Val Fenga (dt. Fimbertal), liegt als Exklave ausserhalb des übrigen Gemeindegebiets und ist von der österreichischen Seite über das Paznauntal erschlossen. Der Deutsche Alpenverein (DAV) besitzt und betreibt auf diesem Gebiet die Heidelberger Hütte, welche als Ausgangspunkt für zahlreiche Mountainbike- und Skitouren gilt. Die Gemeinde Valsot ist Teil der Region Engiadina Bassa Val Müstair. <br> <br>Höhe  -  zw. 1’231 und 1’533 M.ü.M. <br>Fläche - 15’916 Hektaren <br> Einwohner 2010 - 932 <br> <br> Die Fraktionen in alphabetischer Reihenfolge sind: Chaflur/Chasura, Martina, Ramosch, Raschvella, San Niclà, Sclamischot/S-chadatsch, Seraplana, Strada, Tschlin, Vinadi, Vnà" ;                        
                        valsotT.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(valsotT);

                       
                        break;

                   case   'foto3':  

                   var rumantsch = document.createElement("H1");
                        rumantsch.innerHTML = "Rumantsch, nossa lingua";
                        rumantsch.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(rumantsch);

                        var foto = document.createElement("IMG");
                        foto.setAttribute("src", "./img/atmosphäre/foto3.jpg");
                        foto.setAttribute("alt", "wanderung");
                        foto.setAttribute("class", "added");
                        foto.setAttribute("id", "fotos");
                        document.getElementById("labels").appendChild(foto);
                        document.getElementById("hidden").style.backgroundColor = '#c68d2e';

                        var rumantschT = document.createElement("P");
                        rumantschT.innerHTML = "In nossa regiun discurrina rumantsch e da quai eschna fich superbis. Precis quel character as chatta eir in nossa biera ed in tuot ils prodots da Bun Tschlin. No cumprain il malt dad üerdi in Engiadina, il malt da furmaint illa Val Müstair ed dafatta offa prodüaina per part in nossa regiun. E scha no fain üna biera speciala, sco nossa biera alvetern schi tscherchaina adüna prodots regiunals – in quel cas alveterns dal puschlav. <br> Be pro no daja s-chettas bieras grischunaisas. VIVA nossa regiun! Ed hajat incletta scha quist program es uossa in lingua tudais-cha. Nossa bieraria douvra eir ils giasts d’utrò per pudair surviver ed uschea inclegian eir quels alch. Però, no rumantsch savain daplü!"
                        rumantschT.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(rumantschT);

                        var rumantschL = document.createElement("A");
                        rumantschL.innerHTML = "www.curs.ch";
                        rumantschL.href = "https://www.curs.ch/biera"; 
                        rumantschL.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(rumantschL);                       
                        break;

                    case   'blue':   
                       
                            var h1 = document.createElement("H1");
                        h1.innerHTML = "Finde mich!";
                        h1.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(h1);
                        document.getElementById("hidden").style.backgroundColor = '#c68d2e';

                        var foto = document.createElement("IMG");
                        foto.setAttribute("src", "./footage/blauBierglas.png");
                        foto.setAttribute("alt", "blauesBierGlas");
                        foto.setAttribute("class", "added");
                        foto.setAttribute("id", "fotos");
                        foto.setAttribute("id", "blue");
                        document.getElementById("labels").appendChild(foto);
                        break;
                        
                    case   'konzert':   
                       
                            var h1 = document.createElement("H1");
                        h1.innerHTML = "Festival in Ramosch – MEGAWATT";
                        h1.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(h1);

                        var video = document.createElement("IFRAME");
                        video.setAttribute("class", "added"); 
                        video.setAttribute("frameborder", "0"); 
                        video.setAttribute('allowFullScreen', '')
                        video.setAttribute("src", "https://www.youtube.com/embed/GoY4dkOD2iE");
                        document.getElementById("labels").appendChild(video);

                        var text = document.createElement("P");
                        text.innerHTML = "Dieses Jahr können sich alle Partygänger/innen freuen – denn das Fest am Abend findet mit der Band «MEGAWATT» statt. Leidenschaftlich, rockig, modern und eingängig gesungen in Thomas' unverwechselbarem Dialekt sorgt die Band für noch mehr Heimatgefühl. Alle Bergbierwanderer und -Wanderinnen können am Abend noch zur Musik tanzen und das degustierte Bier weiter geniessen. Natürlich sind auch alle Gäste willkommen, die nicht an der Wanderung teilgenommen haben. "
                        text.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(text);

                        var foto1 = document.createElement("IMG");
                        foto1.setAttribute("src", "./img/megawatt/Megawatt1.jpg");
                        foto1.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(foto1);

                        var foto2 = document.createElement("IMG");
                        foto2.setAttribute("src", "./img/megawatt/Megawatt2.jpg");
                        foto2.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(foto2);

                        var foto3 = document.createElement("IMG");
                        foto3.setAttribute("src", "./img/megawatt/Megawatt3.jpg");
                        foto3.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(foto3);

                        var foto4 = document.createElement("IMG");
                        foto4.setAttribute("src", "./img/megawatt/Megawatt4.jpg");
                        foto4.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(foto4);

                        document.getElementById("hidden").style.backgroundColor = '#c68d2e';
                        break;
            }
            
          
            
        });      
    });

// Detailinformation - appear
    function infoblock(){
        $('#labelsInfo').empty();
        document.getElementById("hiddenInfo").style.display = "block";

        var stand = event.target.id;
        console.log(stand);
       
         switch(stand){
       case   'fleisch': 

                var fleisch = document.createElement("H1");
                fleisch.innerHTML = "Fleisch";
                fleisch.setAttribute("class", "added");
                document.getElementById("labelsInfo").appendChild(fleisch);
         
                var fleischT = document.createElement("P");
                fleischT.innerHTML =        "Am Fusse des Wildstrubelmassivs im Simmental entsteht das Simmentaler Bier. Seit dem ersten Sud wird das Bier handwerklich, nach traditioneller Art gebraut und abgefüllt. Die Simmentaler Brauerei setzt auf Innovationen und erbringt beste Dienstleistungen. Die Produkte überzeugen durch Qualität und sorgfältig ausgesuchte Rohstoffe. Die Partnerschaften mit Kunden, Mitarbeitern und Lieferanten sind für die Brauerei von zentraler Bedeutung und finden immer auf Augenhöhe statt. So entstehen zwischen den Anspruchsgruppen starke und langjährige Partnerschaften. Am Fusse des Wildstrubelmassivs im Simmental entsteht das Simmentaler Bier. Seit dem ersten Sud wird das Bier handwerklich, nach traditioneller Art gebraut und abgefüllt. Die Simmentaler Brauerei setzt auf Innovationen und erbringt beste Dienstleistungen. Die Produkte überzeugen durch Qualität und sorgfältig ausgesuchte Rohstoffe. Die Partnerschaften mit Kunden, Mitarbeitern und Lieferanten sind für die Brauerei von zentraler Bedeutung und finden immer auf Augenhöhe statt. So entstehen zwischen den Anspruchsgruppen starke und langjährige Partnerschaften";
                fleischT.setAttribute("class", "added");
                document.getElementById("labelsInfo").appendChild(fleischT);
                
                document.getElementById("hiddenInfo").style.backgroundColor = '#a6d1dd';
         break;

       case   'kaese': 

       var kaese = document.createElement("H1");
       kaese.innerHTML = "Käse";
       kaese.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(kaese);

       var kaeseT = document.createElement("P");
       kaeseT.innerHTML =        "Am Fusse des Wildstrubelmassivs im Simmental entsteht das Simmentaler Bier. Seit dem ersten Sud wird das Bier handwerklich, nach traditioneller Art gebraut und abgefüllt. Die Simmentaler Brauerei setzt auf Innovationen und erbringt beste Dienstleistungen. Die Produkte überzeugen durch Qualität und sorgfältig ausgesuchte Rohstoffe. Die Partnerschaften mit Kunden, Mitarbeitern und Lieferanten sind für die Brauerei von zentraler Bedeutung und finden immer auf Augenhöhe statt. So entstehen zwischen den Anspruchsgruppen starke und langjährige Partnerschaften. Am Fusse des Wildstrubelmassivs im Simmental entsteht das Simmentaler Bier. Seit dem ersten Sud wird das Bier handwerklich, nach traditioneller Art gebraut und abgefüllt. Die Simmentaler Brauerei setzt auf Innovationen und erbringt beste Dienstleistungen. Die Produkte überzeugen durch Qualität und sorgfältig ausgesuchte Rohstoffe. Die Partnerschaften mit Kunden, Mitarbeitern und Lieferanten sind für die Brauerei von zentraler Bedeutung und finden immer auf Augenhöhe statt. So entstehen zwischen den Anspruchsgruppen starke und langjährige Partnerschaften";
       kaeseT.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(kaeseT);
       
       document.getElementById("hiddenInfo").style.backgroundColor = '#a6d1dd';

       break;
       
       case   'bieraEngiadinaisa': 

       var bieraEngiadinaisa = document.createElement("H1");
       bieraEngiadinaisa.innerHTML = "Biera Engiadinaisa";
       bieraEngiadinaisa.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(bieraEngiadinaisa);

       var bild = document.createElement("IMG");
       bild.setAttribute("src", "./img/logoBier/bieraEngadinaLogo.jpeg");
       bild.setAttribute("class","added");
       document.getElementById("labelsInfo").appendChild(bild);

       var bieraEngiadinaisaT = document.createElement("P");
       bieraEngiadinaisaT.innerHTML = "Die Idee einer Bieraria im Unterengadin «Tschlin» geht auf einen «Zukunfts-Workshop» der Gemeinde Tschlin in den ersten Jahren des neuen Jahrtausends zurück. Dort entstand auch die Idee des Werbe- und Verkaufsförderungsverbunds «Bun Tschlin». Am 30. Juni 2004 wurde die Gründung der Bieraria Tschlin SA notariell beglaubigt. <br> Die Brauerei Tschlin produziert und vermarktet regionale BIO Biersorten aus einheimischem Gerstenmalz, Tschliner Wasser, Hopfen und Hefe. Bei uns werden fast alle Biersorten aus 100% aus Schweizer Rohstoffe hergestellt, so dass wir uns mit gutem Gewissen als «regionalste Brauerei der Schweiz» bezeichnen dürfen.";
       bieraEngiadinaisaT.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(bieraEngiadinaisaT);

       var bieraSorten = document.createElement("H2");
       bieraSorten.innerHTML = "Biersorten";
       bieraSorten.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(bieraSorten);

       var bieraSortenT = document.createElement("P");
       bieraSortenT.innerHTML = "Tschlin cler -  naturtrübes BIO-Bier, 100% CH, untergärig <br> Tschlin ambra - Amberbier BIO aus 100% CH, obergärig <br> BE Weizen - Weizen BIO mit einh. Weizenmalz, obergärig <br> Staila Alpina - BIO Bier mit Bündner-Edelweiss, untergärig <br> Engadin Pale Ale -  Pale Ale Bier – 100% CH, obergärig <br> La S-chüra -  Dunkles, citrahaltiges Bio Bier, untergärig <br> Festival-Spezial - Gebraut nach Pilsner-Bierstil";
       bieraSortenT.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(bieraSortenT);

       var bieraEngiadinaisaSpirituosen = document.createElement("H2");
       bieraEngiadinaisaSpirituosen.innerHTML = "Spirituosen";
       bieraEngiadinaisaSpirituosen.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(bieraEngiadinaisaSpirituosen);

       var bieraEngiadinaisaSpirituosenT = document.createElement("P");
       bieraEngiadinaisaSpirituosenT.innerHTML = "Tschliner Single Malt - Single Mal aus Tschliner Bier <br> Dschin da Tschlin - GIN <br> Ofa d’or - Hopfenschnaps <br> Tschliner Bier Brand - Tschliner Bier-Destilat <br> Tschliner Edelweiss - Feines Likör mit Edelweissblumen <br> Tschliner Honig Likör - Likör mit Honig";
       bieraEngiadinaisaSpirituosenT.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(bieraEngiadinaisaSpirituosenT);
       
       var website = document.createElement("A");
       website.innerHTML = "www.bieraria.ch <br>";
       website.href = "https://www.bieraria.ch/"; 
       website.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(website);   

       var instagram = document.createElement("A");
       instagram.innerHTML = "Instagram  <br>";
       instagram.href = "https://www.instagram.com/bierariatschlin/"; 
       instagram.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(instagram);
       
       var facebook = document.createElement("A");
       facebook.innerHTML = "Facebook";
       facebook.href = "https://www.facebook.com/bieratschlin"; 
       facebook.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(facebook);

       document.getElementById("hiddenInfo").style.backgroundColor = '#a6d1dd';

       
       break;  
       
       case   'bierariaTschlinSA': 

       var bierariaTschlinSA = document.createElement("H1");
       bierariaTschlinSA.innerHTML = "Bieraria Tschlin SA";
       bierariaTschlinSA.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(bierariaTschlinSA);

       var bierariaTschlinSAT = document.createElement("P");
       bierariaTschlinSAT.innerHTML = "Via Dal Dazi 233 <br> 7560 Martina <br> Tel. +41 (0)81 860 12 50 <br> Fax +41 (0)81 860 12 51";
       bierariaTschlinSAT.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(bierariaTschlinSAT);

       
       var website = document.createElement("A");
       website.innerHTML = "www.bieraria.ch  mit Onlineshop ";
       website.href = "https://www.bieraria.ch/"; 
       website.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(website);   

       document.getElementById("hiddenInfo").style.backgroundColor = '#a6d1dd';

       
       break;  

       case   'doppelleuBoxerAG': 

       var doppelleuBoxerAG = document.createElement("H1");
       doppelleuBoxerAG.innerHTML = "Doppelleu Boxer AG";
       doppelleuBoxerAG.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(doppelleuBoxerAG);

       var doppelleuBoxerAGT = document.createElement("P");
       doppelleuBoxerAGT.innerHTML = "2012 gegründet, verheiratete sich die Doppelleu Brauwerkstatt AG mit der Bière du Boxer S.A. im Jahr 2017. So entstand die dynamische Doppelleu Boxer AG. Mit der Vision, die qualitativ hochwertigsten Biere in grosser und abwechslungsreicher Vielfalt zu produzieren sind unsere Mitarbeitenden gefordert, immer wieder neue Wege zu gehen. Diverse – auch internationale – Auszeichnungen bestätigen den Erfolg.";
       doppelleuBoxerAGT.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(doppelleuBoxerAGT);

       var bieraSorten = document.createElement("H2");
       bieraSorten.innerHTML = "Biersorten";
       bieraSorten.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(bieraSorten);

       var bieraSortenT = document.createElement("P");
       bieraSortenT.innerHTML = "Chopfab Draft - Idealer Durstlöscher, obergärig <br> Chopfab Amber - American Red Ale, rotglänzend, obergärig <br> Chopfab Trüeb - Australian Pale Ale mit tasmanischem Galaxy Hopfen, obergärig <br> Chopfab Weize - Belgian Blanche mir fruchtigem Zitrusaroma, obergärig <br> Doppelleu India Pale Ale - Mit viel charakterstarkem Simcoe- und Chinook-Hopfen, obergärig <br> Doppelleu Citra Double Wit - Fruchtiges, belgisches Wit Bier, obergärig "
       bieraSortenT.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(bieraSortenT);

       
       var website = document.createElement("A");
       website.innerHTML = "www.doppelleuboxer.ch <br>";
       website.href = "https://www.doppelleuboxer.ch/de/bier/doppelleu/"; 
       website.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(website);   

       var instagram = document.createElement("A");
       instagram.innerHTML = "Instagram  <br>";
       instagram.href = "https://www.instagram.com/doppelleu_boxer/"; 
       instagram.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(instagram);
       
       var facebook = document.createElement("A");
       facebook.innerHTML = "Facebook  ";
       facebook.href = "https://www.facebook.com/doppelleuboxer/"; 
       facebook.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(facebook);

       document.getElementById("hiddenInfo").style.backgroundColor = '#a6d1dd';

       
       break;  
    }
    }

//Overview - popup desapear
    function back(){
        document.getElementById('hidden').style.display = 'none';
        $('#labels').empty();
    }

//Detail inormation - desapear
    function backToOverview(){
        document.getElementById("hiddenInfo").style.display = "none";
        $('#labelsInfo').empty();
    }