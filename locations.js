

let marker, posLo,posLa;
mapboxgl.accessToken = 'pk.eyJ1Ijoibndmd3NiIiwiYSI6ImNsNHNyaDBnbjBlenIzZGxhejg5ejl2a2sifQ.GRtniIwJvJYrRsWqMR5MYA';
        const bounds = [
            [10.25, 46.68], // [west, south]
            [10.55, 47]  // [east, north]
        ];

        let setImg;
        //create map
        const map = new mapboxgl.Map({


            container: 'map',
            style: 'mapbox://styles/nwfwsb/cl4srws8i002p14lp3up2ng3d',
            center: [10.40000, 46.85009],
            zoom: 11.5,
            maxBounds: bounds
        });
        
        //Standort des Geräts laufend verfolgen
        let geoError, geoWatch = null, wartetAufStandort = false;

        function starteStandort() {
          if (!navigator.geolocation || geoWatch !== null) return;
          geoWatch = navigator.geolocation.watchPosition((pos) => {
            posLo = pos.coords.longitude;
            posLa = pos.coords.latitude;
            geoError = null;
            //Marker läuft während der Wanderung mit
            if (marker && imKartengebiet()) marker.setLngLat([posLo, posLa]);
            if (wartetAufStandort) {
              wartetAufStandort = false;
              geoFindMe();
            }
          }, (err) => {
            geoError = err;
            console.log(err);
            //bei blockiertem Zugriff neu starten können, falls später erlaubt wird
            if (err.code === 1) {
              navigator.geolocation.clearWatch(geoWatch);
              geoWatch = null;
            }
            if (wartetAufStandort) {
              wartetAufStandort = false;
              zeigeStandortFehler();
            }
          }, {
            enableHighAccuracy: true,
            maximumAge: 60000
          });
        }
        starteStandort();

        function imKartengebiet() {
          return posLo >= bounds[0][0] && posLo <= bounds[1][0] &&
                 posLa >= bounds[0][1] && posLa <= bounds[1][1];
        }

        function zeigeStandortFehler() {
          if (geoError && geoError.code === 1) {
            zeigeHinweis("Standortzugriff blockiert – bitte im Browser und in den Einstellungen des Geräts (Ortungsdienste) erlauben.");
          } else {
            zeigeHinweis("Standort konnte nicht bestimmt werden – ist die Ortung am Gerät eingeschaltet?");
          }
        }

        //kurzer Hinweis unten am Bildschirm
        let hinweisTimer;
        function zeigeHinweis(text) {
          var hinweis = document.getElementById("hinweis");
          if (!hinweis) {
            hinweis = document.createElement("div");
            hinweis.id = "hinweis";
            hinweis.setAttribute("role", "status");
            document.body.appendChild(hinweis);
          }
          hinweis.textContent = text;
          hinweis.classList.add("sichtbar");
          clearTimeout(hinweisTimer);
          hinweisTimer = setTimeout(() => hinweis.classList.remove("sichtbar"), 5000);
        }

         
        function geoFindMe() {
          console.log("get location")

          if (!navigator.geolocation) {
            zeigeHinweis("Dein Browser kann den Standort leider nicht bestimmen.");
            return;
          }

          //noch kein Standort: Suche (neu) starten und anzeigen, sobald er da ist
          if (posLo === undefined) {
            wartetAufStandort = true;
            if (geoError && geoError.code !== 1) {
              zeigeStandortFehler();
            } else {
              zeigeHinweis("Standort wird gesucht …");
            }
            starteStandort();
            return;
          }

          if (!imKartengebiet()) {
            zeigeHinweis("Du bist ausserhalb des Kartengebiets. Dein Standort erscheint, sobald du in der Region Tschlin–Ramosch bist.");
            return;
          }

          document.getElementById("hinweis") && document.getElementById("hinweis").classList.remove("sichtbar");

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
            document.getElementById('circleNavi').style.backgroundColor = 'rgb(7, 98, 245)';  
        }      
          
      // var walk = navigator.geolocation.watchPosition(successCallback,errorCallback,options);
     //Source for User Location   
     

          

//implement data - location points 
            map.on('load', () => {
                
                map.addSource('map', {
                'type': 'geojson',
                'data': './data/dataSet.geojson',
                'generateId': true
//...until here

                });
           
           
//for testing - where are the stands
    map.addLayer({
                    'id': 'locations',
                    'type': 'circle',
                    'source': 'map',
                    'paint': {
                    'circle-radius': 20,
                    'circle-color': 'white',
                    'circle-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 0.4, 0]
                    },
                'filter': ['==', '$type', 'Point']

    });

//Hover on Map Icons
    let hoveredId = null;
    map.on('mousemove', 'locations', (e) => {
      map.getCanvas().style.cursor = 'pointer';
      if (hoveredId !== null) map.setFeatureState({ source: 'map', id: hoveredId }, { hover: false });
      hoveredId = e.features[0].id;
      map.setFeatureState({ source: 'map', id: hoveredId }, { hover: true });
    });
    map.on('mouseleave', 'locations', () => {
      map.getCanvas().style.cursor = '';
      if (hoveredId !== null) map.setFeatureState({ source: 'map', id: hoveredId }, { hover: false });
      hoveredId = null;
    });
   
   

                   
           
        
//Click on Map Icons 
    map.on('click', 'locations', (e) =>  {
      reset();
             setImg = e.features[0].properties.Icon;
            console.log(setImg);

            switch(setImg){
                    case   'start':
                      document.getElementById("layerOne").style.display = 'block';
                      document.getElementById("layerOne").classList.add('boxDesign');
                      document.getElementById("one").classList.add('layoutDesignText');

                    

                        var h1 = document.createElement("H1");
                        h1.innerHTML = "Allegra, liebe Geniesserinnen und Geniesser";
                        document.getElementById("one").appendChild(h1);

                        var video = document.createElement("IFRAME");
                        video.setAttribute("frameborder", "0"); 
                        video.setAttribute('allowFullScreen', '')
                        video.setAttribute("src", "https://www.youtube-nocookie.com/embed/drDu3fKYQ5o");
                       

                        document.getElementById("one").appendChild(video);
                        


                        var text = document.createElement("P");
                        text.innerHTML = "Schön, bist du bei uns. Wir freuen uns, dass wir auch heuer wieder die Bergbierwanderung durchführen können.<br> <br> Die Wanderung ist 11.6 Kilometer lang, gemütlich und aussichtsreich. Auf der gegenüberliegenden Talseite türmen sich die 3000er der Engadiner Dolomiten. Und an diesem speziellen Tag lernt man auch, wie der Schweizer Berg schmeckt, da alle Bergbierbrauereien mit Bergquellwasser produzieren, welche sich mit den Degustationsständen auf der Wanderung präsentieren. Bis zum Festivalgelände kann jedermann/frau etwa 25 Bergbiersorten probieren und auf dem Festivalgelände in Ramosch sein neu erkorenes Lieblingsbier weitertrinken."
                        document.getElementById("one").appendChild(text);

                        // Kindschi
                        var kindschiLogo = document.createElement("IMG");
                        kindschiLogo.setAttribute("src", "./img/logo/kindschi.png");
                        kindschiLogo.setAttribute("alt", "Kindschi indschegners e geometers SA");
                        kindschiLogo.style.width = "60%";
                        kindschiLogo.style.marginTop = "4vh";
                        document.getElementById("one").appendChild(kindschiLogo);

                        var kindschi = document.createElement("H2");
                        kindschi.innerHTML = "Lavurs d’indschegners cun paschiun: Kindschi indschegners e geometers SA";
                        document.getElementById("one").appendChild(kindschi);

                        var kindschiT = document.createElement("P");
                        kindschiT.innerHTML = "Wo anspruchsvolle Topografie auf zukunftsweisende Technik trifft, stehen wir für Kompetenz und Kontinuität. Ob präzise Vermessungen für komplexe Bauvorhaben, innovative Ingenieurlösungen im Tiefbau oder die professionelle Begleitung von Meliorations- und Infrastrukturprojekten – wir schaffen solide Grundlagen.<br><br>Als lokaler Anbieter gestalten wir den Lebensraum im Unterengadin aktiv mit und setzen dabei auf Qualität, digitale Kompetenz und nachhaltige Lösungen direkt vor Ort.<br><br>Übrigens: Auch den Weg, auf dem ihr gerade unterwegs seid, haben wir im Rahmen der Gesamtmelioration Tschlin von der Planung bis zur Ausführung begleitet – ihr wandert also auf sicherem Grund!<br><br>Daplü infuormaziuns natüramlaing eir in rumantsch – ma uossa co prüm ün VIVA e giodai il di!";
                        document.getElementById("one").appendChild(kindschiT);

                        var kindschiL = document.createElement("A");
                        kindschiL.innerHTML = "www.kindschi-ing.ch";
                        kindschiL.href = "https://kindschi-ing.ch/";
                        kindschiL.target = "_blank";
                        document.getElementById("one").appendChild(kindschiL);

                        var kindschiFoto = document.createElement("IMG");
                        kindschiFoto.setAttribute("src", "./img/memories/kindschi-bergbierfestival.jpg");
                        kindschiFoto.setAttribute("alt", "Wanderweg Gesamtmelioration Tschlin");
                        kindschiFoto.style.marginTop = "3vh";
                        document.getElementById("one").appendChild(kindschiFoto);

                    break;
               /*   
                 case   'startGipfelstuermer':
                       document.getElementById("layerOne").style.display = 'block';
                      document.getElementById("layerOne").classList.add('boxDesign');
                      document.getElementById("layerOne").classList.add('boxAbgesagt'); 
                      document.getElementById("one").classList.add('layoutDesignText');


                      var h1 = document.createElement("H1");
                     h1.innerHTML = "Option Gipfelstürmende <br>Piz Arina";
                  

                      document.getElementById("one").appendChild(h1);

                   /* DURCHFUEHRUNG
                      var text = document.createElement("P");
                        text.innerHTML = "Diverse Gipfelstürmerinnen und Gipfelstürmer sind bereits unterwegs zum Piz Arina. Sie geniessen dort ein einmaliges Gipfelbier. Ab der Station Bieraria Tschlin werden diese auch wieder auf der Strecke sein und die Wanderung mitlaufen. ";
                        document.getElementById("one").appendChild(text);
ABSAGE
                       var text = document.createElement("P");
                        text.innerHTML = "Wegen Schlechtwetteraussichten und aufgrund von Schnee bis in tiefere Lagen, wird es dieses Jahr leider keine Gipfelstürmerroute geben!"
                        document.getElementById("one").appendChild(text);



                  
                 
                  break;
         */        
                    case   'stand1':       
            document.getElementById("layerOne").style.display = "block";
            document.getElementById("layerOne").classList.add('illusDesign');
            document.getElementById("one").classList.add('layoutDesignIllus');


        

                      var kreis = document.createElement("div");
                      kreis.setAttribute("id","circle");
                      document.getElementById("one").appendChild(kreis);

                      

                      var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./illustrationen/bier.png");
                      bild.setAttribute("alt", "Biera Engiadinaisa");
                      bild.setAttribute("id", "bieraEngiadinaisaReduziert");
                      bild.setAttribute("onclick", "infoblock()");
                      document.getElementById("circle").appendChild(bild);

                      var kreis = document.createElement("div");
                      kreis.setAttribute("id","circle2");
                      document.getElementById("one").appendChild(kreis);
                      
                      var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./illustrationen/tier.png");
                      bild.setAttribute("alt", "Stand Bio Schorta");
                      bild.setAttribute("id", "standBioSchorta");
                      bild.setAttribute("onclick", "infoblock()");
                      document.getElementById("circle2").appendChild(bild);

                  


                      break;
                    case   'stand2':
           document.getElementById("layerOne").style.display = "block";
           document.getElementById("layerOne").classList.add('illusDesign');
           document.getElementById("one").classList.add('layoutDesignIllus');


                      var kreis = document.createElement("div");
                      kreis.setAttribute("id","circle");
                      document.getElementById("one").appendChild(kreis);
                     
                      var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./illustrationen/bier.png");
                      bild.setAttribute("alt", "Monsteiner Bier");
                      bild.setAttribute("id", "monstein");
                      bild.setAttribute("onclick", "infoblock()");
                      document.getElementById("circle").appendChild(bild);

                      var kreis = document.createElement("div");
                      kreis.setAttribute("id","circle2");
                      document.getElementById("one").appendChild(kreis);
                      
                      var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./illustrationen/sandwitch.png");
                      bild.setAttribute("alt", "Cilgia Etter");
                      bild.setAttribute("id", "cilgiaEtter");
                      bild.setAttribute("onclick", "infoblock()");
                      document.getElementById("circle2").appendChild(bild);

                    

                      break;
                    case   'stand3':
                      document.getElementById("layerOne").style.display = "block";
                      document.getElementById("layerOne").classList.add('illusDesign');
                      document.getElementById("one").classList.add('layoutDesignIllus');



                      var kreis = document.createElement("div");
                      kreis.setAttribute("id","circle");
                      document.getElementById("one").appendChild(kreis);

                      var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./illustrationen/bier.png");
                      bild.setAttribute("alt", "Engadiner Bier");
                      bild.setAttribute("id", "engadinerbier");
                      bild.setAttribute("onclick", "infoblock()");
                      document.getElementById("circle").appendChild(bild);
                     

                      var kreis = document.createElement("div");
                      kreis.setAttribute("id","circle2");
                      document.getElementById("one").appendChild(kreis);
                      
                      var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./illustrationen/kaese.png");
                      bild.setAttribute("alt", "Pauraria Riatsch");
                      bild.setAttribute("id", "paurariaRiatsch");
                      bild.setAttribute("onclick", "infoblock()");
                      document.getElementById("circle2").appendChild(bild);


                        break;
                    case   'stand4':
                      document.getElementById("layerOne").style.display = "block";
                      document.getElementById("layerOne").classList.add('illusDesign');
                      document.getElementById("one").classList.add('layoutDesignIllus');

                        var kreis = document.createElement("div");
                        kreis.setAttribute("id","circle");
                        document.getElementById("one").appendChild(kreis);
 
                        var bild = document.createElement("IMG");
                        bild.setAttribute("src", "./illustrationen/bier.png");
                        bild.setAttribute("alt", "Bieraria Tschlin");
                        bild.setAttribute("id", "bieraEngiadinaisa");
                        bild.setAttribute("onclick", "infoblock()");
                        document.getElementById("circle").appendChild(bild);

                        var kreis = document.createElement("div");
                        kreis.setAttribute("id","circle2");
                        document.getElementById("one").appendChild(kreis);

                        var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./illustrationen/fleisch.png");
                      bild.setAttribute("alt", "Bacharia Zanetti");
                      bild.setAttribute("id", "zanetti");
                      bild.setAttribute("onclick", "infoblock()");
                      document.getElementById("circle2").appendChild(bild);

       


                        break;
                    case   'stand5':
                      document.getElementById("layerOne").style.display = "block";
                      document.getElementById("layerOne").classList.add('illusDesign');
                      document.getElementById("one").classList.add('layoutDesignIllus');

                        var kreis = document.createElement("div");
                        kreis.setAttribute("id","circle");
                        document.getElementById("one").appendChild(kreis);
 
                        var bild = document.createElement("IMG");
                        bild.setAttribute("src", "./illustrationen/bier.png");
                        bild.setAttribute("alt", "Birraria Poschiavina");
                        bild.setAttribute("id", "poschiavini");
                        bild.setAttribute("onclick", "infoblock()");
                        document.getElementById("circle").appendChild(bild);


                          break;
                    case   'stand6':
                      document.getElementById("layerOne").style.display = "block";
                      document.getElementById("layerOne").classList.add('illusDesign');
                      document.getElementById("one").classList.add('layoutDesignIllus');

                        var kreis = document.createElement("div");
                        kreis.setAttribute("id","circle");
                        document.getElementById("one").appendChild(kreis);
 
                        var bild = document.createElement("IMG");
                        bild.setAttribute("src", "./illustrationen/bier.png");
                        bild.setAttribute("alt", "Appenzeller Bier");
                        bild.setAttribute("id", "brauhaus");
                        bild.setAttribute("onclick", "infoblock()");
                        document.getElementById("circle").appendChild(bild);

                        var kreis = document.createElement("div");
                        kreis.setAttribute("id","circle2");
                        document.getElementById("one").appendChild(kreis);

                        var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./illustrationen/eier.png");
                      bild.setAttribute("alt", "Övs Mayer");
                      bild.setAttribute("id", "mayer");
                      bild.setAttribute("onclick", "infoblock()");
                      document.getElementById("circle2").appendChild(bild);

               
                            break;
                    case   'stand7':
                              document.getElementById("layerOne").style.display = "block";
                              document.getElementById("layerOne").classList.add('illusDesign');
                              document.getElementById("one").classList.add('layoutDesignIllus');
        
                                var kreis = document.createElement("div");
                                kreis.setAttribute("id","circle");
                                document.getElementById("one").appendChild(kreis);
        
                                var bild = document.createElement("IMG");
                              bild.setAttribute("src", "./illustrationen/cullas.png");
                              bild.setAttribute("alt", "Abendmenü");
                              bild.setAttribute("id", "abendmenu");
                              bild.setAttribute("onclick", "infoblock()");
                              document.getElementById("circle").appendChild(bild);
        
                       
                                    break;
                   case   'stand8':
                      document.getElementById("layerOne").style.display = 'block';
                      document.getElementById("layerOne").classList.add('boxDesign');
                      document.getElementById("one").classList.add('layoutDesignText');


                      var steimandliBier = document.createElement("H1");
                      steimandliBier.innerHTML = "Steimandli Bier";
                     document.getElementById("one").appendChild(steimandliBier);

                     var bild = document.createElement("IMG");
                     bild.setAttribute("src", "./img/logo/beEngiadinaisa.jpeg");
                     bild.setAttribute("alt", "Logo Biera Engiadinaisa");
                     document.getElementById("one").appendChild(bild);
              
              
                     var steimandliBierT = document.createElement("P");
                     steimandliBierT.innerHTML = "Beim Grünhopfenbier, auch Wet Hop Beer genannt, wird die Hopfengabe mit frischen, ungedarrten Hopfendolden vorgenommen - innert 5 Stunden nach der Ernte. Vom Feld ins Bier sozusagen, und das möglichst ohne Umwege. Und natürlich arbeiten wir mit einheimischem Hopfen aus dem Prättigau. Das 'weltweit' einzige Bier mit Bündner Hopfen."
                     document.getElementById("one").appendChild(steimandliBierT);

                     var weiterInformation = document.createElement("H2");
                     weiterInformation.innerHTML = "<br>Weitere Informationen";
                     document.getElementById("one").appendChild(weiterInformation);


                     var website = document.createElement("A");
                     website.innerHTML = "<br>www.bieraria.ch <br>";
                     website.href = "https://www.bieraria.ch/"; 
                     website.target = "_blank";
                     document.getElementById("one").appendChild(website);   
              
                     var instagram = document.createElement("A");
                     instagram.innerHTML = "Instagram  <br>";
                     instagram.href = "https://www.instagram.com/bierariatschlin/"; 
                     instagram.target = "_blank";
                     document.getElementById("one").appendChild(instagram);
                     
                     var facebook = document.createElement("A");
                     facebook.innerHTML = "Facebook";
                     facebook.href = "https://www.facebook.com/bieratschlin"; 
                     facebook.target = "_blank";
                     document.getElementById("one").appendChild(facebook);
                              break;    

                   case   'foto1': 
                   document.getElementById("layerOne").style.display = 'block';
                   document.getElementById("layerOne").classList.add('boxDesign');
                   document.getElementById("layerOne").classList.add('boxDesignDidYouKnow');
                   document.getElementById("one").classList.add('layoutDesignText');



                    var bunTschlin = document.createElement("H1");
                    bunTschlin.innerHTML = "Bun Tschlin";
                    document.getElementById("one").appendChild(bunTschlin);

                    var foto = document.createElement("IMG");
                    foto.setAttribute("src", "./img/memories/foto1.jpg");
                    foto.setAttribute("alt", "Impressionen von der Bergbierwanderung");
                    foto.setAttribute("id", "fotos");
                    document.getElementById("one").appendChild(foto);

                    var bunTschlinT = document.createElement("P");
                    bunTschlinT.innerHTML = "Bun Tschlin ist Organisator des Bergbierfestivals. Das Ganze ist mehr als die Summe aller Teile, wusste schon Aristoteles. Bun Tschlin vereinigt engagierte Betriebe aus der Gemeinde Valsot, die mit authentischen Angeboten die Lebensqualität vor Ort sowie einen sanften Tourismus pflegen wollen. <br> «Bun Tschlin» steht für nachhaltig, ökologisch, mutig und unternehmerisch! Wir pflegen die einheimischen Landschaft und bündeln die Kräfte der Natur in unseren authentischen Bun Tschlin Produkten. <br> In Tschlin und den benachbarten Dörfern Martina, Ramosch, Strada und Vnà haben wir uns zusammengetan, um gemeinsam die ursprüngliche Struktur und hohe Lebensqualität in der Region zu erhalten und diese zugleich mit unseren BesucherInnen zu teilen. Denn auch hier gilt: Sharing is caring! Dieser Zusammenschluss heisst Bun Tschlin, was bedeutet: Gutes aus Tschlin."
                    document.getElementById("one").appendChild(bunTschlinT);

                    var bunTschlinL = document.createElement("A");
                    bunTschlinL.innerHTML = " www.buntschlin.ch";
                    bunTschlinL.href = "https://buntschlin.ch/"; 
                    bunTschlinL.target = "_blank";
                    document.getElementById("one").appendChild(bunTschlinL);

                    break;
                   case   'foto2': 
                   document.getElementById("layerOne").style.display = 'block';
                   document.getElementById("layerOne").classList.add('boxDesign');
                   document.getElementById("layerOne").classList.add('boxDesignDidYouKnow');
                   document.getElementById("one").classList.add('layoutDesignText');

                   
                    var valsot = document.createElement("H1");
                    valsot.innerHTML = "Valsot";
                    document.getElementById("one").appendChild(valsot);

                        var foto = document.createElement("IMG");
                        foto.setAttribute("src", "./img/memories/foto2.jpg");
                        foto.setAttribute("alt", "Impressionen von der Bergbierwanderung");
                        foto.setAttribute("id", "fotos");
                        document.getElementById("one").appendChild(foto);

                        var valsotT = document.createElement("P");
                        valsotT.innerHTML = "Die Gemeinde Valsot grenzt an Österreich und an Italien. Ein Teil des Valsoter Gemeindeterritoriums, das Val Fenga (dt. Fimbertal), liegt als Exklave ausserhalb des übrigen Gemeindegebiets und ist von der österreichischen Seite über das Paznauntal erschlossen. Der Deutsche Alpenverein (DAV) besitzt und betreibt auf diesem Gebiet die Heidelberger Hütte, welche als Ausgangspunkt für zahlreiche Mountainbike- und Skitouren gilt. Die Gemeinde Valsot ist Teil der Region Engiadina Bassa Val Müstair. <br> <br>Höhe  -  zw. 1’231 und 1’533 M.ü.M. <br>Fläche - 15’916 Hektaren <br> Einwohner 2010 - 932 <br> <br> Die Fraktionen in alphabetischer Reihenfolge sind: Chaflur/Chasura, Martina, Ramosch, Raschvella, San Niclà, Sclamischot/S-chadatsch, Seraplana, Strada, Tschlin, Vinadi, Vnà" ;                        
                        document.getElementById("one").appendChild(valsotT);

                       
                        break;
                   case   'foto3':  
                   document.getElementById("layerOne").style.display = 'block';
                   document.getElementById("layerOne").classList.add('boxDesign');
                   document.getElementById("layerOne").classList.add('boxDesignDidYouKnow');
                   document.getElementById("one").classList.add('layoutDesignText');


                   var rumantsch = document.createElement("H1");
                        rumantsch.innerHTML = "Rumantsch <br> nossa lingua";
                        document.getElementById("one").appendChild(rumantsch);

                        var rumantschD = document.createElement("P");
                        rumantschD.innerHTML = "Rätoromanisch ist unsere Sprache! Wieso nicht das nächste Bier auf romanisch bestellen?";
                        document.getElementById("one").appendChild(rumantschD);

                       

                        var rumantsch = document.createElement("H2");
                        rumantsch.innerHTML = "<i>“Tschüffa üna biera gronda?”</i>";
                        document.getElementById("one").appendChild(rumantsch);
                        var rumantschL = document.createElement("A");
                        rumantschL.innerHTML = "www.curs.ch";
                        rumantschL.href = "https://www.curs.ch/biera"; 
                        rumantschL.target = "_blank";
                        document.getElementById("one").appendChild(rumantschL);     

                        var foto = document.createElement("IMG");
                        foto.setAttribute("src", "./img/memories/foto3.jpg");
                        foto.setAttribute("alt", "Impressionen von der Bergbierwanderung");
                        foto.setAttribute("id", "fotos");
                        document.getElementById("one").appendChild(foto);

                        var rumantschT = document.createElement("P");
                        rumantschT.innerHTML = "In nossa regiun discurrina rumantsch e da quai eschna fich superbis. Precis quel character as chatta eir in nossa biera ed in tuot ils prodots da Bun Tschlin. No cumprain il malt dad üerdi in Engiadina, il malt da furmaint illa Val Müstair ed dafatta offa Prodüina per part in nossa regiun. E scha no fain üna biera speciala, sco nossa biera alvetern schi tscherchaina adüna prodots regiunals – in quel cas alveterns dal puschlav. <br> Be pro no daja s-chettas bieras grischunaisas. VIVA nossa regiun! Ed hajat incletta scha quist program es uossa in lingua tudais-cha. Nossa bieraria douvra eir ils giasts d’utrò per pudair surviver ed uschea inclegian eir quels alch. Però, no rumantsch savain daplü!"
                        document.getElementById("one").appendChild(rumantschT);

                                 
                        break;

                    case   'blue':   

                    setArt = e.features[0].properties.art;
                    console.log(setArt);

                    document.getElementById("layerOne").style.display = 'block';
                    document.getElementById("layerOne").classList.add('boxDesign');
                    document.getElementById("layerOne").classList.add('boxDesignSmall');
                    document.getElementById("one").classList.add('layoutDesignText');

                  



                            var h1 = document.createElement("H1");
                        h1.innerHTML = "Finde mich!";
                        document.getElementById("one").appendChild(h1);
                        

                       /* var foto = document.createElement("IMG");
                        foto.setAttribute("src", "./illustrationen/goldenesBierglas.png");
                        foto.setAttribute("alt", "goldenesBierGlas");
                        foto.setAttribute("id", "fotos");
                        foto.setAttribute("id", "gold");
                        document.getElementById("one").appendChild(foto);
*/
                        var h1 = document.createElement("P");
                        h1.innerHTML = "Die Wanderung ist gut mit den Bergbierfestival-Fahnen beschildert und leiten euch den Weg!<br><br>Auf der Digital-Map eingezeichnet findet ihr ein paar spezielle Fahnen - Finde mich! Sucht diese Fahnen auf der Wanderung, darauf ist ein QR-Code zu finden, wenn Ihr diesen einlest, erscheint ein Buchstaben. Wer am Schluss auf dem Festgelände das Lösungswort abgibt, kann an der Verlosung von drei Bun Tschlin Apéro-Boxen teilnehmen. Abgabe bei der Garderobe gleich beim Eingang ins Festzelt. <br> <br>Blera furtüna – viel Glück!";
                        document.getElementById("one").appendChild(h1);

                       

                        var link = document.createElement("A");
                        link.setAttribute("id", "sponsor");
                        link.target = "_blank";
                        document.getElementById("one").appendChild(link);

                        var logo = document.createElement("IMG");
                      
                        logo.setAttribute("id", "fotos");
                        logo.setAttribute("id", "logo");
                        document.getElementById("sponsor").appendChild(logo);




                        switch(setArt){
                          case 'fahne1': case 'fahne5':
                            link.href = "https://www.bezzola-denoth.ch/home"; 
                            logo.setAttribute("src", "./img/logo/bezzolaDenoth.png");
                            logo.setAttribute("alt", "Logo Bezzola Denoth");
                            break;

                            case 'fahne2': case 'fahne4':
                              link.href = "https://www.valsot.ch/"; 
                              logo.setAttribute("src", "./img/logo/valsot.jpg");
                              logo.setAttribute("alt", "Logo Gemeinde Valsot");
                              break;
                              case 'fahne3':
                                link.href = "https://buntschlin.ch/"; 
                                logo.setAttribute("src", "./img/logo/bt.jpg");
                                logo.setAttribute("alt", "Logo Bun Tschlin");
                                break;
                               
                        };




                        break;
                        
                    case   'konzert':   
                       document.getElementById("layerOne").style.display = 'block';
                      document.getElementById("layerOne").classList.add('boxDesign');
                      document.getElementById("layerOne").classList.add('boxDesignKonzert');
                      document.getElementById("one").classList.add('layoutDesignText');


                    
//Titel
                        var h1 = document.createElement("H1");
                        h1.innerHTML = "Festival in Ramosch – Kitsch";
                        document.getElementById("one").appendChild(h1);
                        
                        // Video
                        var video = document.createElement("IFRAME");
                        video.setAttribute("frameborder", "0"); 
                        video.setAttribute("allowFullScreen", "");
                        video.setAttribute("src", "https://www.youtube-nocookie.com/embed/sYlYIlP9wwk");
                        document.getElementById("one").appendChild(video);
                        
                        // Text
                        var text = document.createElement("P");
                        text.innerHTML = "Türöffnung: 16:00 Uhr <br><br> Party auf Mundart? Bei uns auf jeden Fall! <strong>Kitsch</strong> bringt die grössten Schweizerhits im Partymodus auf die Bühne und lässt die Meitschi tanzen und die Giele festen wie sich’s gehört – wenn du da nicht heiser nach Hause gehst, hast du etwas falsch gemacht!<br><br> Kitsch besticht durch freches Auftreten und den unverkennbaren Festhütten-Sound – ein Gemisch aus den bekanntesten Mundart-Hits von früher bis heute, zusammen mit Steirischer Harmonika und Bariton. Man könnte auch sagen: «Oktoberfest auf Schweizerdeutsch»! Dazu gibt’s rockige Gitarrenklänge und satte Drum-Beats – hier bleibt ganz sicher kein Füdle auf dem Bank!";
                        document.getElementById("one").appendChild(text);

                 
                        var bild = document.createElement("IMG");
                        bild.setAttribute("src", "./img/logo/sponsoren2026.png");
                        bild.setAttribute("alt", "Logos der Sponsoren");
                        document.getElementById("one").appendChild(bild);
                      
                        



                      
/*
                        var foto1 = document.createElement("IMG");
                        foto1.setAttribute("src", "./img/megawatt/Megawatt1.jpg");
                        document.getElementById("one").appendChild(foto1);

                        var foto2 = document.createElement("IMG");
                        foto2.setAttribute("src", "./img/megawatt/Megawatt2.jpg");
                        document.getElementById("one").appendChild(foto2);

                        var foto3 = document.createElement("IMG");
                        foto3.setAttribute("src", "./img/megawatt/Megawatt3.jpg");
                        document.getElementById("one").appendChild(foto3);

                        var foto4 = document.createElement("IMG");
                        foto4.setAttribute("src", "./img/megawatt/Megawatt4.jpg");
                        document.getElementById("one").appendChild(foto4);
                   */   
                        break;
            }
            
          
            
        });      
    });

// Detailinformation - appear
    function infoblock(){
        $('#two').empty();
        document.getElementById("layerTwo").style.display = "block";

        var stand = event.target.id;
        console.log(stand);
       
         switch(stand){
       case 'zanetti': 

                var titel = document.createElement("H1");
                titel.innerHTML = "Bacharia Zanetti";
                document.getElementById("two").appendChild(titel);

                var bild = document.createElement("IMG");
                bild.setAttribute("src", "./img/logo/bzZanetti.jpg");
                bild.setAttribute("alt", "Logo Bacharia Zanetti");
                document.getElementById("two").appendChild(bild);
         
                var content = document.createElement("P");
                content.innerHTML = "Die Metzgerei Zanetti wurde 1992 gegründet. Neben dem Trockenfleisch, das nach einer eigenen Rezeptur hergestellt wird, hat sich die Bacharia auch auf die Veredelung von Wildfleisch spezialisiert. Die Spezialitäten sind Wurstwaren (Salsiz und Siedwürste) sowie Geräuchtes. <br> Die Produkte werden nach überliefertem Rezept mit viel Liebe und Sorgfalt zubereitet. Es werden nur beste Zutaten verwendet. Das Fleisch stammt so weit möglich aus Betrieben der Region."
                document.getElementById("two").appendChild(content);
         

                var subtitel = document.createElement("H2");
                subtitel.innerHTML = "<br>Weitere Informationen";
                document.getElementById("two").appendChild(subtitel);

                var website = document.createElement("A");
                website.innerHTML = "<br>Webseite Frisch Wild"; 
                website.href = "http://www.frisch-wild.ch/";
                website.target = "_blank";
                document.getElementById("two").appendChild(website); 

                var websiteSecond = document.createElement("A");
                websiteSecond.innerHTML = "<br>Webseite Buntschlin<br>"; 
                websiteSecond.href = "https://buntschlin.ch/betriebe/bacharia-zanetti/#";
                websiteSecond.target = "_blank";
                document.getElementById("two").appendChild(websiteSecond); 
                
         break;    
       case 'mayer':

         var titel = document.createElement("H1");
         titel.innerHTML = "Övs Mayer";
         document.getElementById("two").appendChild(titel);
  
         var bild = document.createElement("IMG");
         bild.setAttribute("src", "./img/logo/ovs.jpg");
         bild.setAttribute("alt", "Logo Övs Mayer");
         document.getElementById("two").appendChild(bild);
  
        var content = document.createElement("P");
        content.innerHTML = "<br>Frische Eier sind ein fragiles Transportgut. Mit der Rhätischen Bahn fahren die Mayer-Eier sicher ins Unterland und erfreuen auch dort die Bio-Kunden.<br><br>Zwei Hühner-Herden von je 500 Tieren sind in Strada bei Familie Mayer zuhause. Deren Eier mit Bio Suisse-Knospe versorgen viele regionale Dorfläden und Hotels im Unterengadin, gehen aber auch in den Grosshandel."
        document.getElementById("two").appendChild(content);

        var weiterInformation = document.createElement("H2");
        weiterInformation.innerHTML = "<br>Weitere Informationen";
        document.getElementById("two").appendChild(weiterInformation);
  
        var website = document.createElement("A");
        website.innerHTML = "<br>Webseite<br>"; 
        website.href = "https://buntschlin.ch/betriebe/oevs-mayer/";
        website.target = "_blank";
        document.getElementById("two").appendChild(website); 
     
        break;
       case 'mia':

        var titel = document.createElement("H1");
        titel.innerHTML = "Mia Iva";
        document.getElementById("two").appendChild(titel);
 
        var bild = document.createElement("IMG");
        bild.setAttribute("src", "./img/logo/mia.jpg");
        bild.setAttribute("alt", "Logo Mia Iva");
        document.getElementById("two").appendChild(bild);
 
       var content = document.createElement("P");
       content.innerHTML = "<br>Mia Iva produziert in der eigenen Manufaktur in Tschlin den traditionellen Engadiner Kräuterlikör iva.<br><br>In der ehemaligen Brauerei in Tschlin produziert Andi Brechbühl iva. Dieser bitterüsse Likör wird im Engadin seit jahrhunderten nach alten Familienrezepten aus Moschus Schafgarbe (romanisch: iva) hergestellt. Eine Hommage an die Natur, das Engadin und seine Traditionen."
       
       document.getElementById("two").appendChild(content);

       var subtitel = document.createElement("H2");
       subtitel.innerHTML = "<br>Weitere Informationen";
       document.getElementById("two").appendChild(subtitel);
 
       var website = document.createElement("A");
       website.innerHTML = "<br>Webseite<br>"; 
       website.href = "https://buntschlin.ch/betriebe/mia-iva"; 
       website.target = "_blank";
       document.getElementById("two").appendChild(website); 

       var facebook = document.createElement("A");
       facebook.innerHTML = "Facebook";
       facebook.href = "https://www.facebook.com/miaiva.ch"; 
       facebook.target = "_blank";
       document.getElementById("two").appendChild(facebook);
 
    
       break;
       

       var titel = document.createElement("H1");
       titel.innerHTML = "Biera Engiadinaisa";
       document.getElementById("two").appendChild(titel);

       var bild = document.createElement("IMG");
       bild.setAttribute("src", "./img/logo/beEngiadinaisa.jpeg");
       bild.setAttribute("alt", "Logo Biera Engiadinaisa");
       document.getElementById("two").appendChild(bild);

       var content = document.createElement("P");
       content.innerHTML = "Die Idee, einer Bieraria im Unterengadiner Dorf Tschlin zu gründen, geht auf einen Zukunftsworkshop der Gemeinde Tschlin in den ersten Jahren des neuen Jahrtausends zurück. Dort entstand auch die Idee des Werbe- und Verkaufsförderungsverbunds «Bun Tschlin». Am 30. Juni 2004 wurde die Gründung der Bieraria Tschlin SA notariell beglaubigt.<br> Die Brauerei Tschlin produziert und vermarktet regionale BIO Biersorten aus einheimischem Gerstenmalz, Tschliner Wasser, Hopfen und Hefe. Bei uns werden fast alle Biersorten aus 100% Schweizer Rohstoffe hergestellt, so dass wir uns mit gutem Gewissen als «regionalste Brauerei der Schweiz» bezeichnen dürfen.";
       document.getElementById("two").appendChild(content);
case 'bieraEngiadinaisa':

var titel = document.createElement("H1");
titel.innerHTML = "Bieraria Tschlin";
document.getElementById("two").appendChild(titel);

var bild = document.createElement("IMG");
bild.setAttribute("src", "./img/logo/beEngiadinaisa.jpeg");
bild.setAttribute("alt", "Logo Bieraria Tschlin");
document.getElementById("two").appendChild(bild);

       var bieraSorten = document.createElement("H2");
       bieraSorten.innerHTML = "Biersorten";
       document.getElementById("two").appendChild(bieraSorten);

       var bieraSortenU = document.createElement("UL");
       bieraSortenU.setAttribute("id", "ul");
       document.getElementById("two").appendChild(bieraSortenU);

       var bieraSortenL1 = document.createElement("LI");
       bieraSortenL1.innerHTML = "<h3>Tschlin cler</h3> naturtrübes BIO-Bier, 100% CH, untergärig"; 
       document.getElementById("ul").appendChild(bieraSortenL1);

       var bieraSortenL2 = document.createElement("LI");
       bieraSortenL2.innerHTML = "<h3>Tschlin ambra</h3> Amberbier BIO aus 100% CH, obergärig"; 
       document.getElementById("ul").appendChild(bieraSortenL2);

       var bieraSortenL3 = document.createElement("LI");
       bieraSortenL3.innerHTML = "<h3>BE Weizen</h3>Weizen BIO mit einh. Weizenmalz, obergärig"; 
       document.getElementById("ul").appendChild(bieraSortenL3);





       var bieraEngiadinaisaSpirituosen = document.createElement("H2");
       bieraEngiadinaisaSpirituosen.innerHTML = "Spirituosen";
       document.getElementById("two").appendChild(bieraEngiadinaisaSpirituosen);

       var bieraEngiadinaisaSpirituosenU = document.createElement("UL");
       bieraEngiadinaisaSpirituosenU.setAttribute("id", "ulS");
       document.getElementById("two").appendChild(bieraEngiadinaisaSpirituosenU);

       var weiterInformation = document.createElement("H2");
       weiterInformation.innerHTML = "<br>Weitere Informationen";
       document.getElementById("two").appendChild(weiterInformation);

       var website = document.createElement("A");
       website.innerHTML = "<br>Webseite<br>";
       website.href = "https://www.bieraria.ch/"; 
       website.target = "_blank";
       document.getElementById("two").appendChild(website);   

       var instagram = document.createElement("A");
       instagram.innerHTML = "Instagram  <br>";
       instagram.href = "https://www.instagram.com/be_bierariatschlin/"; 
       instagram.target = "_blank";
       document.getElementById("two").appendChild(instagram);
       
       var facebook = document.createElement("A");
       facebook.innerHTML = "Facebook";
       facebook.href = "https://www.facebook.com/bieratschlin"; 
       facebook.target = "_blank";
       document.getElementById("two").appendChild(facebook);

       var bieraEngiadinaisaSpirituosenL1 = document.createElement("LI");
       bieraEngiadinaisaSpirituosenL1.innerHTML = "<h3>Tschliner Single Malt</h3>Single Mal aus Tschliner Bier "; 
       document.getElementById("ulS").appendChild(bieraEngiadinaisaSpirituosenL1);

       var bieraEngiadinaisaSpirituosenL2 = document.createElement("LI");
       bieraEngiadinaisaSpirituosenL2.innerHTML = "<h3>Dschin da Tschlin</h3>GIN"; 
       document.getElementById("ulS").appendChild(bieraEngiadinaisaSpirituosenL2);


       var bieraEngiadinaisaSpirituosenL4 = document.createElement("LI");
       bieraEngiadinaisaSpirituosenL4.innerHTML = "<h3>Tschliner Bier Brand</h3>Tschliner Bier-Destilat"; 
       document.getElementById("ulS").appendChild(bieraEngiadinaisaSpirituosenL4);


       
      


       
       break;  
       case 'bieraEngiadinaisaReduziert':

       var titel = document.createElement("H1");
       titel.innerHTML = "Biera Engiadinaisa";
       document.getElementById("two").appendChild(titel);

       var bild = document.createElement("IMG");
       bild.setAttribute("src", "./img/logo/beEngiadinaisa.jpeg");
       bild.setAttribute("alt", "Logo Biera Engiadinaisa");
       document.getElementById("two").appendChild(bild);

       var content = document.createElement("P");
       content.innerHTML = "Die Idee, einer Bieraria im Unterengadiner Dorf Tschlin zu gründen, geht auf einen Zukunftsworkshop der Gemeinde Tschlin in den ersten Jahren des neuen Jahrtausends zurück. Dort entstand auch die Idee des Werbe- und Verkaufsförderungsverbunds «Bun Tschlin». Am 30. Juni 2004 wurde die Gründung der Bieraria Tschlin SA notariell beglaubigt.<br> Die Brauerei Tschlin produziert und vermarktet regionale BIO Biersorten aus einheimischem Gerstenmalz, Tschliner Wasser, Hopfen und Hefe. Bei uns werden fast alle Biersorten aus 100% Schweizer Rohstoffe hergestellt, so dass wir uns mit gutem Gewissen als «regionalste Brauerei der Schweiz» bezeichnen dürfen.";
       document.getElementById("two").appendChild(content);

       var weiterInformation = document.createElement("H2");
       weiterInformation.innerHTML = "<br>Weitere Informationen";
       document.getElementById("two").appendChild(weiterInformation);

       var website = document.createElement("A");
       website.innerHTML = "<br>Webseite<br>";
       website.href = "https://www.bieraria.ch/"; 
       website.target = "_blank";
       document.getElementById("two").appendChild(website);   

       var instagram = document.createElement("A");
       instagram.innerHTML = "Instagram  <br>";
       instagram.href = "https://www.instagram.com/be_bierariatschlin/"; 
       instagram.target = "_blank";
       document.getElementById("two").appendChild(instagram);
       
       var facebook = document.createElement("A");
       facebook.innerHTML = "Facebook";
       facebook.href = "https://www.facebook.com/bieratschlin"; 
       facebook.target = "_blank";
       document.getElementById("two").appendChild(facebook);

       var bieraEngiadinaisaSpirituosenL1 = document.createElement("LI");
       bieraEngiadinaisaSpirituosenL1.innerHTML = "<h3>Tschliner Single Malt</h3>Single Mal aus Tschliner Bier "; 
       document.getElementById("ulS").appendChild(bieraEngiadinaisaSpirituosenL1);

       var bieraEngiadinaisaSpirituosenL2 = document.createElement("LI");
       bieraEngiadinaisaSpirituosenL2.innerHTML = "<h3>Dschin da Tschlin</h3>GIN"; 
       document.getElementById("ulS").appendChild(bieraEngiadinaisaSpirituosenL2);

       var bieraEngiadinaisaSpirituosenL3 = document.createElement("LI");
       bieraEngiadinaisaSpirituosenL3.innerHTML = "<h3>Ofa d’or</h3>Hopfenschnaps"; 
       document.getElementById("ulS").appendChild(bieraEngiadinaisaSpirituosenL3);

       var bieraEngiadinaisaSpirituosenL4 = document.createElement("LI");
       bieraEngiadinaisaSpirituosenL4.innerHTML = "<h3>Tschliner Bier Brand</h3>Tschliner Bier-Destilat"; 
       document.getElementById("ulS").appendChild(bieraEngiadinaisaSpirituosenL4);

       var bieraEngiadinaisaSpirituosenL5 = document.createElement("LI");
       bieraEngiadinaisaSpirituosenL5.innerHTML = "<h3>Tschliner Edelweiss</h3>Feines Likör mit Edelweissblumen "; 
       document.getElementById("ulS").appendChild(bieraEngiadinaisaSpirituosenL5);

       var bieraEngiadinaisaSpirituosenL6 = document.createElement("LI");
       bieraEngiadinaisaSpirituosenL6.innerHTML = "<h3>Tschliner Honig Likör</h3>Likör mit Honig"; 
       document.getElementById("ulS").appendChild(bieraEngiadinaisaSpirituosenL6);
       
      


       
       break;        
       case 'bierariaTschlinSA': 

       var titel = document.createElement("H1");
       titel.innerHTML = "Bieraria Tschlin SA";
       document.getElementById("two").appendChild(titel);

       var bierariaTschlinSAT = document.createElement("P");
       bierariaTschlinSAT.innerHTML = "Via Dal Dazi 233 <br> 7560 Martina <br> Tel. +41 (0)81 860 12 50 <br> Fax +41 (0)81 860 12 51";
       document.getElementById("two").appendChild(bierariaTschlinSAT);

       var weiterInformation = document.createElement("H2");
       weiterInformation.innerHTML = "<br>Weitere Informationen";
       document.getElementById("two").appendChild(weiterInformation);

       var website = document.createElement("A");
       website.innerHTML = "Webseite";
       website.href = "https://www.bieraria.ch/"; 
       website.target = "_blank";
       document.getElementById("two").appendChild(website);   


       
       break;  
       case 'doppelleuBoxerAG': 

       var doppelleuBoxerAG = document.createElement("H1");
       doppelleuBoxerAG.innerHTML = "Doppelleu Boxer AG";
       document.getElementById("two").appendChild(doppelleuBoxerAG);

       var bild = document.createElement("IMG");
       bild.setAttribute("src", "./img/logo/doppeleu.png");
       bild.setAttribute("alt", "Logo Doppelleu Boxer AG");
       document.getElementById("two").appendChild(bild);

       var doppelleuBoxerAGT = document.createElement("P");
       doppelleuBoxerAGT.innerHTML = "2012 gegründet, verheiratete sich die Doppelleu Brauwerkstatt AG mit der Bière du Boxer S.A. im Jahr 2017. So entstand die dynamische Doppelleu Boxer AG. Mit der Vision, die qualitativ hochwertigsten Biere in grosser und abwechslungsreicher Vielfalt zu produzieren sind unsere Mitarbeitenden gefordert, immer wieder neue Wege zu gehen. Diverse – auch internationale – Auszeichnungen bestätigen den Erfolg.";
       document.getElementById("two").appendChild(doppelleuBoxerAGT);

       var bieraSorten = document.createElement("H2");
       bieraSorten.innerHTML = "Biersorten";
       document.getElementById("two").appendChild(bieraSorten);

       var bieraSortenU = document.createElement("UL");
       bieraSortenU.setAttribute("id", "ul");
       document.getElementById("two").appendChild(bieraSortenU);

       var weiterInformation = document.createElement("H2");
       weiterInformation.innerHTML = "<br>Weitere Informationen";
       document.getElementById("two").appendChild(weiterInformation);

       var bieraSortenL1 = document.createElement("LI");
       bieraSortenL1.innerHTML = "<h3>Chopfab Draft</h3>Idealer Durstlöscher, obergärig"; 
       document.getElementById("ul").appendChild(bieraSortenL1);

       var bieraSortenL2 = document.createElement("LI");
       bieraSortenL2.innerHTML = "<h3>Chopfab Amber</h3>American Red Ale, rotglänzend, obergärig"; 
       document.getElementById("ul").appendChild(bieraSortenL2);

       var bieraSortenL3 = document.createElement("LI");
       bieraSortenL3.innerHTML = "<h3>Chopfab Trüeb</h3>Australian Pale Ale mit tasmanischem Galaxy Hopfen, obergärig"; 
       document.getElementById("ul").appendChild(bieraSortenL3);

       var bieraSortenL4 = document.createElement("LI");
       bieraSortenL4.innerHTML = "<h3>Chopfab Weize</h3>Belgian Blanche mir fruchtigem Zitrusaroma, obergärig"; 
       document.getElementById("ul").appendChild(bieraSortenL4);

       var bieraSortenL5 = document.createElement("LI");
       bieraSortenL5.innerHTML = "<h3>Doppelleu India Pale Ale</h3>Mit viel charakterstarkem Simcoe- und Chinook-Hopfen, obergärig"; 
       document.getElementById("ul").appendChild(bieraSortenL5);

       var bieraSortenL6 = document.createElement("LI");
       bieraSortenL6.innerHTML = "<h3>Doppelleu Citra Double Wit</h3>Fruchtiges, belgisches Wit Bier, obergärig"; 
       document.getElementById("ul").appendChild(bieraSortenL6);
       
       var website = document.createElement("A");
       website.innerHTML = "<br>Webseite<br>";
       website.href = "https://www.doppelleuboxer.ch/de/bier/doppelleu/"; 
       website.target = "_blank";
       document.getElementById("two").appendChild(website);   

       var instagram = document.createElement("A");
       instagram.innerHTML = "Instagram  <br>";
       instagram.href = "https://www.instagram.com/doppelleu_boxer/"; 
       instagram.target = "_blank";
       document.getElementById("two").appendChild(instagram);
       
       var facebook = document.createElement("A");
       facebook.innerHTML = "Facebook  ";
       facebook.href = "https://www.facebook.com/doppelleuboxer/"; 
       facebook.target = "_blank";
       document.getElementById("two").appendChild(facebook);


       
       break;  
       case 'cilgiaEtter': 
       var etter = document.createElement("H1");
       etter.innerHTML = "Cilgia Etter";
       document.getElementById("two").appendChild(etter);

       var bild = document.createElement("IMG");
       bild.setAttribute("src", "./img/logo/cilgiaEtter.jpg");
       bild.setAttribute("alt", "Logo Cilgia Etter");
       document.getElementById("two").appendChild(bild);

       var etterP = document.createElement("P");
       etterP.innerHTML = "Das charmante Alpenbistro, Café Etter, verwöhnt seine Gäste mit einer vielfältigen Auswahl an hauseigenen Spezialitäten. Das sind Nusstorten, verschiedene Konfitüren und Sirupsorten und vieles mehr. Darüber hinaus bietet es sieben Gästezimmer in der liebevoll gestalteten Pension."
       document.getElementById("two").appendChild(etterP);

       var weiterInformation = document.createElement("H2");
       weiterInformation.innerHTML = "<br>Weitere Informationen";
       document.getElementById("two").appendChild(weiterInformation);

       var website = document.createElement("A");
       website.innerHTML = "<br>Webseite<br>";
       website.href = "https://buntschlin.ch/betriebe/prodots-etter/";
       website.target = "_blank";
       document.getElementById("two").appendChild(website);   

       break;
       case 'standBioSchorta': 

       var standBioSchorta = document.createElement("H1");
       standBioSchorta.innerHTML = "Stand Bio Schorta";
       document.getElementById("two").appendChild(standBioSchorta);

       var bild = document.createElement("IMG");
       bild.setAttribute("src", "./img/logo/bsSchorta.jpg");
       bild.setAttribute("alt", "Logo Stand Bio Schorta");
       document.getElementById("two").appendChild(bild);

       var standBioSchortaT = document.createElement("P");
       standBioSchortaT.innerHTML = "Ein Bio-Betrieb mit langer Geschichte und exotischer Rinderherde in Tschlin. Die Schortas verkaufen ihre Lebensmittel direkt ab Hof, auch den preisgekrönten Bio-Schlaviner. <br> Schottische Hochlandrinder im Bündner Unterengadin? Das ist nur auf den ersten Blick ungewöhnlich. Ihre Genügsamkeit prädestiniert die Tiere geradezu für das karge Tal. Auf 1500 m ü.M. fühlen sie sich zottelig wohl."
       document.getElementById("two").appendChild(standBioSchortaT);

       var addresse = document.createElement("P");
       addresse.innerHTML = "BS – Bio Schorta <br> Gian-Fadri & Pamela Schorta Curtins 2 <br> 7559 Tschli <br> Tel. +41 (0)79 265 24 32 www.bioschorta.ch" ;
       document.getElementById("two").appendChild(addresse);
       
       var weiterInformation = document.createElement("H2");
       weiterInformation.innerHTML = "<br>Weitere Informationen";
       document.getElementById("two").appendChild(weiterInformation);

       var website = document.createElement("A");
       website.innerHTML = "<br>Webseite";
       website.href = "https://buntschlin.ch/betriebe/bio-schorta/#"; 
       website.target = "_blank";
       document.getElementById("two").appendChild(website); 
       break;  
       case 'simmentaler':
        var simmentaler = document.createElement("H1");
        simmentaler.innerHTML = "Simmentaler Bier";
       document.getElementById("two").appendChild(simmentaler);

      var bild = document.createElement("IMG");
      bild.setAttribute("src", "./img/logo/simmentaler.png");
      bild.setAttribute("alt", "Logo Simmentaler Bier");
      document.getElementById("two").appendChild(bild);

      var simmentalerT = document.createElement("P");
      simmentalerT.innerHTML = "Am Fusse des Wildstrubelmassivs im Simmental entsteht das Simmentaler Bier. Seit dem ersten Sud wird das Bier handwerklich, nach traditioneller Art gebraut und abgefüllt. <br> Die Simmentaler Brauerei setzt auf Innovationen und erbringt beste Dienstleistungen. Die Produkte überzeugen durch Qualität und sorgfältig ausgesuchte Rohstoffe. Die Partnerschaften mit Kunden, Mitarbeitern und Lieferanten sind für die Brauerei von zentraler Bedeutung und finden immer auf Augenhöhe statt. So entstehen zwischen den Anspruchsgruppen starke und langjährige Partnerschaften. "
      document.getElementById("two").appendChild(simmentalerT);

      var bieraSorten = document.createElement("H2");
      bieraSorten.innerHTML = "Biersorten";
      document.getElementById("two").appendChild(bieraSorten);

      var bieraSortenU = document.createElement("UL");
      bieraSortenU.setAttribute("id", "ul");
      document.getElementById("two").appendChild(bieraSortenU);

      var weiterInformation = document.createElement("H2");
      weiterInformation.innerHTML = "<br>Weitere Informationen";
      document.getElementById("two").appendChild(weiterInformation);

      var bieraSortenL1 = document.createElement("LI");
      bieraSortenL1.innerHTML = "<h3>Simmentaler Lager</h3>Naturtrübes Lagerbier, untergärig"; 
      document.getElementById("ul").appendChild(bieraSortenL1);

      var bieraSortenL2 = document.createElement("LI");
      bieraSortenL2.innerHTML = "<h3>Simmentaler Märzen</h3>Märzen - Kräftiges, naturtrübes Bier, untergärig"; 
      document.getElementById("ul").appendChild(bieraSortenL2);

      var bieraSortenL3 = document.createElement("LI");
      bieraSortenL3.innerHTML = "<h3>Simmentaler Red Ale</h3>Red Ale Bier mit Irish Moos, obergärig"; 
      document.getElementById("ul").appendChild(bieraSortenL3);

      var bieraSortenL4 = document.createElement("LI");
      bieraSortenL4.innerHTML = "<h3> Mountain Pale Ale</h3>IPA Bier mit Irish Moos, obergärig"; 
      document.getElementById("ul").appendChild(bieraSortenL4);

      var website = document.createElement("A");
      website.innerHTML = "<br>Webseite<br>";
      website.href = "https://simmentalerbier.ch/"; 
      website.target = "_blank";
      document.getElementById("two").appendChild(website); 

      var instagram = document.createElement("A");
      instagram.innerHTML = "Instagram <br>";
      instagram.href = "https://www.instagram.com/simmentaler_bier/"; 
      instagram.target = "_blank";
      document.getElementById("two").appendChild(instagram); 

      var facebook = document.createElement("A");
      facebook.innerHTML = "Facebook";
      facebook.href = "https://www.facebook.com/simmentalerbier"; 
      facebook.target = "_blank";
      document.getElementById("two").appendChild(facebook); 
       break;
       case 'paurariaRiatsch':
        var paurariaRiatsch = document.createElement("H1");
        paurariaRiatsch.innerHTML = "Pauraria Riatsch";
       document.getElementById("two").appendChild(paurariaRiatsch);

       var bild = document.createElement("IMG");
       bild.setAttribute("src", "./img/logo/prRiatsch.jpg");
       bild.setAttribute("alt", "Logo Pauraria Riatsch");
       document.getElementById("two").appendChild(bild);

       var paurariaRiatschT = document.createElement("P");
       paurariaRiatschT.innerHTML = "Berge, feinste Kräuter, glückliche Kühe: Das steckt in den Bio-Alpprodukten aus Vnà. Und nach Wunsch gibts auch eine medizinische Massage dazu. Dreitausend Kilo Käse produzieren Daniela und Fadri Riatsch jede Saison auf der Alp Pradigiant oberhalb von Vnà. Er gilt als einer der besten seiner Art und sie begrüssen im kleinsten Käseladen der Welt ihre Kundschaft: In einem Kühlschrank vor dem Hof.<b>"
       document.getElementById("two").appendChild(paurariaRiatschT);

       var paurariaRiatschA = document.createElement("P");
       paurariaRiatschA.innerHTML = "Daniela und Fadri Riatsch Padval 211 <br> 7557 Vnà <br> Tel. +41(0)81 866 32 83 <br> bioagricultura@hotmail.com "
       document.getElementById("two").appendChild(paurariaRiatschA);

       var weiterInformation = document.createElement("H2");
       weiterInformation.innerHTML = "<br>Weitere Informationen";
       document.getElementById("two").appendChild(weiterInformation);

       var website = document.createElement("A");
       website.innerHTML = "<br>Webseite";
       website.href = "https://buntschlin.ch/betriebe/pauraria-riatsch/#"; 
       website.target = "_blank";
       document.getElementById("two").appendChild(website); 
       break;
       case 'mundart':


                      var mundart = document.createElement("H1");
                      mundart.innerHTML = "Mundart";
                      document.getElementById("two").appendChild(mundart);
               
                     var bild = document.createElement("IMG");
                     bild.setAttribute("src", "./img/logo/mundart.png");
                     bild.setAttribute("alt", "Logo Mundart");
                     document.getElementById("two").appendChild(bild);

                     var mundartCT = document.createElement("H2");
                     mundartCT.innerHTML = "<br>Helles Mundart Hausbier Cler";
                     document.getElementById("two").appendChild(mundartCT);
               
                     var mundartC = document.createElement("P");
                     mundartC.innerHTML = "Unser erster eigener Biersud Helles Mundart Hausbier. Seit langer Zeit träumt Matze von einer eigenen Bierkreation. Im Juni 2019 ging mit dem eigenen Biersud dieser Traum in Erfüllung und das Mundartbier «Cler», zu Deutsch hell, ist geboren. In Zusammenarbeit mit der Bieraria Tschlin ist ein helles Bier mit einer erfrischenden, leichten Zitrusnote entstanden."
                     document.getElementById("two").appendChild(mundartC);

                     var mundartDT = document.createElement("H2");
                     mundartDT.innerHTML = "<br>Schwarzes Mundart Hausbier Dreggsch";
                     document.getElementById("two").appendChild(mundartDT);
               
                     var mundartD = document.createElement("P");
                     mundartD.innerHTML = "Nachdem das helle Mundartbier bei den Gästen so gut ankam, hatte Matze die Idee auch noch ein zweites eigenes Bier zu kreieren, aber dieses Mal ein Schwarzes. Nach einigen Versuchen zusammen mit der Bieraria Tschlin entstand das schwarze Mundartbier «Dreggsch». Was heisst Dreggsch? Matzes Frau, Fabrizia, hatte die Idee dieses Bier nach etwas aus Matzes Geburtsort Dresden zu benennen. Da man in Ostdeutschland zu einem schwarzen Bier Dreggsch (dreckig) sagt, wurde dieses Bier so getauft."
                     document.getElementById("two").appendChild(mundartD);

                     var weiterInformation = document.createElement("H2");
                     weiterInformation.innerHTML = "<br>Weitere Informationen";
                     document.getElementById("two").appendChild(weiterInformation);
               
                     var website = document.createElement("A");
                     website.innerHTML = "<br>Webseite<br>";
                     website.href = "https://www.mundart-scuol.ch/";
                     website.target = "_blank"; 
                     document.getElementById("two").appendChild(website); 
               
                     var instagram = document.createElement("A");
                     instagram.innerHTML = "Instagram <br>";
                     instagram.href = "https://www.instagram.com/mundartscuol/"; 
                     instagram.target = "_blank";
                     document.getElementById("two").appendChild(instagram); 
               
                     var facebook = document.createElement("A");
                     facebook.innerHTML = "Facebook";
                     facebook.href = "https://www.facebook.com/mundartscuol"; 
                     facebook.target = "_blank";
                     document.getElementById("two").appendChild(facebook); 
                     break;
       case 'girun':

                     var girun = document.createElement("H1");
                     girun.innerHTML = "Alpenbrauerei Girun";
                     document.getElementById("two").appendChild(girun);
              
                    var bild = document.createElement("IMG");
                    bild.setAttribute("src", "./img/logo/girun.webp");
                    bild.setAttribute("alt", "Logo Alpenbrauerei Girun");
                    document.getElementById("two").appendChild(bild);
              
                    var girunC = document.createElement("P");
                    girunC.innerHTML = "Er ist lange gekreist. Viele haben ihn beobachtet und seinen Balzruf gehört. Jetzt sind die Jungvögel flügge. Der Horst befindet sich in Tschlin und lädt zur Degustation mit herrlicher Panorama-Aussicht ein. Nach einer Wanderung oder der Dorfbesichtigung von Tschlin kann ein Durstlöscher oder Feierabendbier bei uns genossen werden."
                    document.getElementById("two").appendChild(girunC);

                    var weiterInformation = document.createElement("H2");
                    weiterInformation.innerHTML = "<br>Weitere Informationen";
                    document.getElementById("two").appendChild(weiterInformation);
              
                    var website = document.createElement("A");
                    website.innerHTML = "<br>Webseite<br>";
                    website.href = "https://www.girun.ch/"; 
                    website.target = "_blank";
                    document.getElementById("two").appendChild(website); 
              
                    var facebook = document.createElement("A");
                    facebook.innerHTML = "Facebook";
                    facebook.href = "https://www.facebook.com/AlpenbrauereiGIRUN"; 
                    facebook.target = "_blank";
                    document.getElementById("two").appendChild(facebook); 
                    break;
       case 'stadtbier':

                     var titel = document.createElement("H1");
                     titel.innerHTML = "Churer Stadtbier";
                     document.getElementById("two").appendChild(titel);
              
                     var bild = document.createElement("IMG");
                     bild.setAttribute("src", "./img/logo/stadtbierChur.jpg");
                     bild.setAttribute("alt", "Logo Churer Stadtbier");
                     document.getElementById("two").appendChild(bild);
              
                    var content = document.createElement("P");
                    content.innerHTML = "Das Ziel der Stadtbier Brauerei Chur ist es, die Konsumenten mit einem ehrlichen, gehaltvollen und naturbelassenen Bier von hier zu begeistern. Die Hausbrauerei Stadtbier Chur AG setzt auf erstklassige Rohprodukte, auf Leidenschaft und Handwerk."
                    document.getElementById("two").appendChild(content);

                    var weiterInformation = document.createElement("H2");
                    weiterInformation.innerHTML = "<br>Weitere Informationen";
                    document.getElementById("two").appendChild(weiterInformation);
              
                    var website = document.createElement("A");
                    website.innerHTML = "<br>Webseite<br>";
                    website.href = "https://www.stadtbier.ch/"; 
                    website.target = "_blank";
                    document.getElementById("two").appendChild(website); 
              
                    var facebook = document.createElement("A");
                    facebook.innerHTML = "Facebook";
                    facebook.href = "https://www.facebook.com/profile.php?id=100063726575014"; 
                    facebook.target = "_blank";
                    document.getElementById("two").appendChild(facebook); 
                    break;
      case 'abendmenu':

                   // Titel
var titel = document.createElement("H1");
titel.innerHTML = "Abendmenü";
document.getElementById("two").appendChild(titel);



var bild = document.createElement("IMG");
bild.setAttribute("src", "./img/logo/Suppe_knoedel.jpg");
bild.setAttribute("alt", "Knödelsuppe");
document.getElementById("two").appendChild(bild);

// Text
var content = document.createElement("P");
content.innerHTML = "Läuft euch schon das Wasser im Mund zusammen? Am Ziel stärkt ihr euch mit einer herzhaften Knödelsuppe.<br><br>" + 
"Und im Festzelt geht’s weiter:<br>" +
"🥘 Knödel von Cilgia Etter<br>" +
"🥪 Schnitzelbrot BE Marinade<br>" +
"🌭 Bierbratwurst Hot Dog<br>" +
"🍰 Cremeschnitte & Nusstorte<br><br>" +
"👉 Natürlich auch mit leckeren vegetarischen Optionen!";
document.getElementById("two").appendChild(content);

                  
                   break;
       case 'brauhaus':

                    var titel = document.createElement("H1");
                    titel.innerHTML = "Appenzeller Bier";
                    document.getElementById("two").appendChild(titel);
             
                   var bild = document.createElement("IMG");
                   bild.setAttribute("src", "./img/logo/appenzeller.png");
                   bild.setAttribute("alt", "Logo Appenzeller Bier");
                   document.getElementById("two").appendChild(bild);
             
                   var content = document.createElement("P");
                   content.innerHTML = "<br>Seit 1886 und bereits in der fünften Generation braut die Familie Locher das Appenzeller Bier. Heute umfasst das preisgekrönte Sortiment über 40 verschiedene Bierspezialitäten.";
                   document.getElementById("two").appendChild(content);

                   var weiterInformation = document.createElement("H2");
                   weiterInformation.innerHTML = "<br>Weitere Informationen";
                   document.getElementById("two").appendChild(weiterInformation);

                   var website = document.createElement("A");
                   website.innerHTML = "<br>Webseite<br>";
                   website.href = "https://appenzellerbier.ch"; 
                   website.target = "_blank";
                   document.getElementById("two").appendChild(website); 
             
                   var facebook = document.createElement("A");
                   facebook.innerHTML = "Facebook";
                   facebook.href = "https://www.facebook.com/appenzellerbier"; 
                   facebook.target = "_blank";
                   document.getElementById("two").appendChild(facebook); 
                   break;
       case 'poschiavini':

                    var brauhaus = document.createElement("H1");
                    brauhaus.innerHTML = "Birraria Poschiavina";
                    document.getElementById("two").appendChild(brauhaus);
             
                   var bild = document.createElement("IMG");
                   bild.setAttribute("src", "./img/logo/BP1.png");
                   bild.setAttribute("alt", "Logo Birraria Poschiavina");
                   document.getElementById("two").appendChild(bild);
             
                   var brauhausC = document.createElement("P");
                   brauhausC.innerHTML = "<br>Die Geschichte der Birraria Poschiavina geht auf das Jahr 1850 zurück, als die Familie Hosig-Lardi beschloss, dass auch die Valposchiavo ein eigenes Bier verdiente.<br><br>2020 wurde diese Geschichte wieder aufgenommen und heute produziert die Brauerei mit der gleichen Leidenschaft und den gleichen lokalen Zutaten der Vergangenheit La Bira ('100% Valposchiavo') und Na Bira ('Fait sü in Valposchiavo')."

                   document.getElementById("two").appendChild(brauhausC);

                   var weiterInformation = document.createElement("H2");
                   weiterInformation.innerHTML = "<br>Weitere Informationen";
                   document.getElementById("two").appendChild(weiterInformation);
             
                   var facebook = document.createElement("A");
                   facebook.innerHTML = "<br>Facebook<br>";
                   facebook.href = "https://www.facebook.com/BirrariaPoschiavina"; 
                   facebook.target = "_blank";
                   document.getElementById("two").appendChild(facebook); 
                   break;
       case 'domleschger':
       var domleschger = document.createElement("H1");
       domleschger.innerHTML = "Domleschger Bier";
      document.getElementById("two").appendChild(domleschger);

     var bild = document.createElement("IMG");
     bild.setAttribute("src", "./img/logo/DomleschgerBier.jpg");
     bild.setAttribute("alt", "Logo Domleschger Bier");
     document.getElementById("two").appendChild(bild);

     var domleschgerT = document.createElement("P");
     domleschgerT.innerHTML = "Das Domleschger Bier ist eine Erfolgsgeschichte, die im Jahr 2006 begann. Mit viel Ehrgeiz und einer eigenen Brauanlage wurde das erste Bier im Jahr 2008 unter dem Namen Domleschger Bier verkauft. Nach einigen Herausforderungen fand die Brauerei schließlich in Feldis einen neuen Standort und hat heute über 30 Verkaufsstellen. Von dem goldfarbenen, naturtrüben Amber Bier wird jährlich ca. 5000 Liter Bier gebraut und mit einer Flaschengärung hergestellt."
     document.getElementById("two").appendChild(domleschgerT);

     var website = document.createElement("A");
     website.innerHTML = "<br>Webseite<br>";
     website.href = "https://shop.bierliebe.ch/produkt-kategorie/brauerei/domleschger-bier/"
     website.target = "_blank";
     document.getElementById("two").appendChild(website);
        
                    break;
       case 'domleschger':
        var domleschger = document.createElement("H1");
        domleschger.innerHTML = "Domleschger Bier";
       document.getElementById("two").appendChild(domleschger);

      var bild = document.createElement("IMG");
      bild.setAttribute("src", "./img/logo/DomleschgerBier.jpg");
      bild.setAttribute("alt", "Logo Domleschger Bier");
      document.getElementById("two").appendChild(bild);

      var domleschgerT = document.createElement("P");
      domleschgerT.innerHTML = "Das Domleschger Bier ist eine Erfolgsgeschichte, die im Jahr 2006 begann. Mit viel Ehrgeiz und einer eigenen Brauanlage wurde das erste Bier im Jahr 2008 unter dem Namen Domleschger Bier verkauft. Nach einigen Herausforderungen fand die Brauerei schließlich in Feldis einen neuen Standort und hat heute über 30 Verkaufsstellen. Von dem goldfarbenen, naturtrüben Amber Bier wird jährlich ca. 5000 Liter Bier gebraut und mit einer Flaschengärung hergestellt."
      document.getElementById("two").appendChild(domleschgerT);

      var weiterInformation = document.createElement("H2");
      weiterInformation.innerHTML = "<br>Weitere Informationen";
      document.getElementById("two").appendChild(weiterInformation);

      var website = document.createElement("A");
      website.innerHTML = "<br>Webseite<br>";
      website.href = "https://shop.bierliebe.ch/produkt-kategorie/brauerei/domleschger-bier/"
      website.target = "_blank";
      document.getElementById("two").appendChild(website);
         
                     break;
         
                     break;                     
       case 'matze':
        var matze = document.createElement("H1");
        matze.innerHTML = "«Cullas da Vnà» – Kugeln von Vnà";
        document.getElementById("two").appendChild(matze);

        var titel = document.createElement("H2");
        titel.innerHTML = "Cuschina Engiadinaisa - Engadiner Esskultur";
        document.getElementById("two").appendChild(titel);

        var matzeT = document.createElement("P");
        matzeT.innerHTML = "Jede Familie hat ihre eigenen Esstraditionen und die besten Familienrezepte werden von Generation zu Generation weitergegeben. Hier am Stand von Matze kommt ihr in den Genuss der 'Cullas da Vnà' – in einer etwas abgeänderten vegetarischen Version mit Randen.<br><br>Wie der Name bereits verrät, haben die 'Cullas da Vnà' ihren Ursprung in Vnà. Für diejenigen von euch, die nicht genug davon bekommen, hier das Originalrezept von Iris Riatsch, Bun Tschlin-Mitglied, Gewinnerin Kultsendung von SRF 'die Landfrauenküche' und Köchin des Jahrzehnts, Iris Riatsch, zum selbst machen:"
        document.getElementById("two").appendChild(matzeT);

        var zutaten = document.createElement("H2");
        zutaten.innerHTML = "Zutaten";
        document.getElementById("two").appendChild(zutaten);
      
        var zutatenU = document.createElement("UL");
        zutatenU.setAttribute("id","ul")
        document.getElementById("two").appendChild(zutatenU);

        var zutatenL = document.createElement("LI");
        zutatenL.innerHTML = "10 rohe Kartoffeln"
        document.getElementById("ul").appendChild(zutatenL);

        var zutatenL1 = document.createElement("LI");
        zutatenL1.innerHTML = "200 g Speck"
        document.getElementById("ul").appendChild(zutatenL1);

        var zutatenL2 = document.createElement("LI");
        zutatenL2.innerHTML = "2 geräucherte Engadiner Würste"
        document.getElementById("ul").appendChild(zutatenL2);

        var zutaten3 = document.createElement("LI");
        zutaten3.innerHTML = "Salz, Gewürze"
        document.getElementById("ul").appendChild(zutaten3);

        var zutatenL4 = document.createElement("LI");
        zutatenL4.innerHTML = "200 g Mehl"
        document.getElementById("ul").appendChild(zutatenL4);

        var zutatenL5 = document.createElement("LI");
        zutatenL5.innerHTML = "70 g Paniermehl"
        document.getElementById("ul").appendChild(zutatenL5);

        var zubereitung = document.createElement("H2");
        zubereitung.innerHTML = "Zubereitung";
        document.getElementById("two").appendChild(zubereitung);

        var zubereitungT = document.createElement("P")
        zubereitungT.innerHTML = "Die Kartoffeln schälen und mit der Bircherraffel fein raffeln. Gut abtropfen lassen. Speck und Würste in Würfeli schneiden, mit den Kartoffeln mischen. Mehl und Paniermehl dazugeben. Alles zusammen zu einem Teig vermischen, würzen. Mit 2 Esslöffeln oder mit beiden Händen Kugeln formen. Damit der Teig nicht klebt, Löffel oder Hände mit Wasser befeuchten. <br> Die Kugeln in siedendes Wasser geben. Wenn sie auftauchen, sind sie gar und man kann sie aus dem Wasser nehmen. In Butter goldgelb anbraten. <br> Reibkäse darüber streuen, mit Salat oder Gemüse servieren.";
        document.getElementById("two").appendChild(zubereitungT);

      

        var link = document.createElement("A");
        link.innerHTML = "SRF bi de Lüt";
        link.href = "https://www.srf.ch/sendungen/srf-bi-de-luet-landfrauenkueche/rezepte-landfrauenkueche-2015/cullas-da-vna-kugeln-von-vna"; 
        link.target = "_blank";
        document.getElementById("two").appendChild(link); 

        break;
       case 'steimandli':

          
          var steimandliBier = document.createElement("H1");
          steimandliBier.innerHTML = "Steimandli Bier";
         document.getElementById("two").appendChild(steimandliBier);

         var bild = document.createElement("IMG");
         bild.setAttribute("src", "./img/logo/beEngiadinaisa.jpeg");
         bild.setAttribute("alt", "Logo Biera Engiadinaisa");
         document.getElementById("two").appendChild(bild);
  
  
         var steimandliBierT = document.createElement("P");
         steimandliBierT.innerHTML = "Beim Grünhopfenbier, auch Wet Hop Beer genannt, wird die Hopfengabe mit frischen, ungedarrten Hopfendolden vorgenommen - innert 5 Stunden nach der Ernte. Vom Feld ins Bier sozusagen, und das möglichst ohne Umwege. Und natürlich arbeiten wir mit einheimischem Hopfen aus dem Prättigau. Das 'weltweit' einzige Bier mit Bündner Hopfen."
         document.getElementById("two").appendChild(steimandliBierT);

         var weiterInformation = document.createElement("H2");
         weiterInformation.innerHTML = "<br>Weitere Informationen";
         document.getElementById("two").appendChild(weiterInformation);


         var website = document.createElement("A");
         website.innerHTML = "<br>Webseite<br>";
         website.href = "https://www.bieraria.ch/"; 
         website.target = "_blank";
         document.getElementById("two").appendChild(website);   
  
         var instagram = document.createElement("A");
         instagram.innerHTML = "Instagram  <br>";
         instagram.href = "https://www.instagram.com/bierariatschlin/"; 
         instagram.target = "_blank";
         document.getElementById("two").appendChild(instagram);
         
         var facebook = document.createElement("A");
         facebook.innerHTML = "Facebook";
         facebook.href = "https://www.facebook.com/bieratschlin"; 
         facebook.target = "_blank";
         document.getElementById("two").appendChild(facebook);
                  break;    
      case 'engadinerbier':

          
                  var steimandliBier = document.createElement("H1");
                  steimandliBier.innerHTML = "Engadiner Bier";
                 document.getElementById("two").appendChild(steimandliBier);
        
                 var bild = document.createElement("IMG");
                 bild.setAttribute("src", "./img/logo/EngadinerBier.jpg");
                 bild.setAttribute("alt", "Logo Engadiner Bier");
                 document.getElementById("two").appendChild(bild);
          
                 var bergBierText = document.createElement("P");
                 bergBierText.innerHTML = "Hier oben, wo klare Bergluft und sprudelndes Quellwasser auf echte Handwerkskunst treffen, brauen wir Biere, die nach Engadin schmecken: frisch, aromatisch und unverwechselbar. <br> Aus besten Rohstoffen und mit viel Leidenschaft entsteht bei uns kein Massenprodukt, sondern ein Stück Heimat, das du mit jedem Schluck spürst.<br><br><strong>Komm ans Bergbierfest</strong>, probiere unsere Vielfalt und lass dich von der Kraft der Engadiner Berge begeistern: für Momente, die bleiben.";
                 document.getElementById("two").appendChild(bergBierText);
                 
        
                 var weiterInformation = document.createElement("H2");
                 weiterInformation.innerHTML = "<br>Weitere Informationen";
                 document.getElementById("two").appendChild(weiterInformation);
        
        
                 var website = document.createElement("A");
                 website.innerHTML = "<br>Webseite<br>";
                 website.href = "https://www.engadinerbier.ch/brauerei";
                 website.target = "_blank";
                 document.getElementById("two").appendChild(website);   
          
                 var instagram = document.createElement("A");
                 instagram.innerHTML = "Instagram  <br>";
                 instagram.href = "https://www.instagram.com/explore/locations/947773904/brauerei-engadiner-bier/"; 
                 instagram.target = "_blank";
                 document.getElementById("two").appendChild(instagram);
                 
          
                          break;  
       case 'monstein':
      var bierVisionMonstein = document.createElement("H1");
                      bierVisionMonstein.innerHTML = "Monsteiner Bier";
                      document.getElementById("two").appendChild(bierVisionMonstein);

                      var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./img/logo/monsteiner-logo.png");
                      bild.setAttribute("alt", "Logo Monsteiner Bier");
                      bild.setAttribute("id", "startBier");
                      document.getElementById("two").appendChild(bild);

                      var bierVisionMonsteinT = document.createElement("P");
                      bierVisionMonsteinT.innerHTML = "Willkommen in einer der schönst gelegenen Brauereien Europas. Die Monsteiner Bierspezialitäten werden mit kristallklarem Wasser, Schweizer Hopfen und aus einheimischem Gerstenmalz von Gran Alpin gebraut."
                      document.getElementById("two").appendChild(bierVisionMonsteinT);

                     /* var bieraSorten = document.createElement("H2");
                      bieraSorten.innerHTML = "Biersorten";
                      document.getElementById("two").appendChild(bieraSorten);

                      var bieraSortenU = document.createElement("UL");
                      bieraSortenU.setAttribute("id", "ul");
                      document.getElementById("two").appendChild(bieraSortenU);

                      */ var weiterInformation = document.createElement("H2");
                      weiterInformation.innerHTML = "<br>Weitere Informationen";
                      document.getElementById("two").appendChild(weiterInformation);

                      var website = document.createElement("A");
                      website.innerHTML = "<br>Webseite<br>";
                      website.href = "https://monsteiner.ch/"; 
                      website.target = "_blank";
                      document.getElementById("two").appendChild(website);   

                      var instagram = document.createElement("A");
                      instagram.innerHTML = "Instagram  <br>";
                      instagram.href = "https://www.instagram.com/monsteiner_bier/"; 
                      instagram.target = "_blank";
                      document.getElementById("two").appendChild(instagram);

                      var facebook = document.createElement("A");
                      facebook.innerHTML = "Facebook  ";
                      facebook.href = "https://www.facebook.com/biervision/?locale=de_DE"; 
                      facebook.target = "_blank";
                      document.getElementById("two").appendChild(facebook);

                      var bieraSortenL1 = document.createElement("LI");
                      bieraSortenL1.innerHTML = "<h3>Monsteiner Husbier</h3> Hell, unfiltriert. Bio-Berggerst; untergärig"; 
                      document.getElementById("ul").appendChild(bieraSortenL1);

                      var bieraSortenL2 = document.createElement("LI");
                      bieraSortenL2.innerHTML = "<h3>Monsteiner Husbier </h3>Hell, unfiltriert. Bio-Berggerst; untergärig "; 
                      document.getElementById("ul").appendChild(bieraSortenL2);

                      var bieraSortenL3 = document.createElement("LI");
                      bieraSortenL3.innerHTML = "<h3>Monsteiner Munga </h3>Leichtbier mit 90% Bündner Gerste; obergärig "; 
                      document.getElementById("ul").appendChild(bieraSortenL3);

                      var bieraSortenL4 = document.createElement("LI");
                      bieraSortenT.innerHTML = "<h3>  Monsteiner Steinbock </h3>  Bock-Bier mit 90% Bündner Gerste; untergärig  "; 
                      document.getElementById("ul").appendChild(bieraSortenL4);


                      var bieraSortenL5 = document.createElement("LI");
                      bieraSortenL5.innerHTML = "<h3> Monst.Wätterguoga </h3> Amberbier, mit Rauchmalz; Untergärig ";
                      document.getElementById("ul").appendChild(bieraSortenL5); 
                      break;
    }
    }
//
function infosGeneral(){
 one();
 two();

  document.getElementById("hiddenInfoGeneral").style.display = "block";
  document.getElementById('circleGeneral').style.backgroundColor = '#a1c9c9';  



    var infosGeneral = document.createElement("H1");
    infosGeneral.innerHTML = "Infos";
   document.getElementById("two").appendChild(infosGeneral);
  
  
}
function infosBus(){
  one();
  two();
 
   document.getElementById("hiddenBus").style.display = "block";
   document.getElementById('circleBus').style.backgroundColor = '#d3e9f5';  
 

   
   
 }

function gifStart(){
  var bild = document.getElementById("startBier");
  bild.setAttribute("src", "./illustrationen/startBier.gif");
}

//Overview Icons - popup Infotext desapear
    function one(){
        document.getElementById("hiddenInfoGeneral").style.display = 'none';
        document.getElementById("hiddenBus").style.display = 'none';
        document.getElementById("layerOne").style.display = 'none';
        document.getElementById("layerOne").classList.remove('boxDesign');
        document.getElementById("layerOne").classList.remove('illusDesign');
        document.getElementById("layerOne").classList.remove('boxDesignSmall');
        document.getElementById("layerOne").classList.remove('boxDesignDidYouKnow');
        document.getElementById("layerOne").classList.remove('boxDesignKonzert');
        document.getElementById("one").classList.remove('layoutDesignText');
        document.getElementById("one").classList.remove('layoutDesignIllus');
        document.getElementById("layerOne").classList.remove('boxAbgesagt'); 

        document.getElementById("circleGeneral").style.background = 'white';
        document.getElementById("circleBus").style.background = 'white';

      

        $('#one').empty();
    }

//Overview Map - Icons desapear
    function two(){
        document.getElementById("layerTwo").style.display = "none";
        document.getElementById("hiddenInfoGeneral").style.display = "none";

        $('#two').empty();  
    }
    function reset(){
      two();
      one();
  }


//Informations about the hike
document.getElementById('bergmassiv').onclick = function(){
  var offen = document.getElementById('actionHoehenprofil').classList.toggle('fade');
  this.setAttribute('data-tooltip', offen ? 'Höhenprofil ausblenden' : 'Höhenprofil anzeigen');
}

//Esc schliesst alle Fenster und das Höhenprofil
document.addEventListener('keydown', function(event){
  if (event.key !== 'Escape') return;
  reset();
  document.getElementById('actionHoehenprofil').classList.remove('fade');
  document.getElementById('bergmassiv').setAttribute('data-tooltip', 'Höhenprofil anzeigen');
});


 



