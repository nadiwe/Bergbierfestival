

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
            document.getElementById('circleNavi').style.backgroundColor = 'rgb(7, 98, 245)';  
        }      
          
      // var walk = navigator.geolocation.watchPosition(successCallback,errorCallback,options);
     //Source for User Location   
     

          

//implement data - location points 
            map.on('load', () => {
                
                map.addSource('map', {
                'type': 'geojson',
                'data': './data/dataSet.geojson'
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
                    'circle-opacity': 0
                    },
                'filter': ['==', '$type', 'Point']

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
                        video.setAttribute("src", "https://www.youtube.com/embed/3g70Ol0KR9Q");
                        document.getElementById("one").appendChild(video);
                        


                        var text = document.createElement("P");
                        text.innerHTML = "Schön, bist du bei uns. Wir freuen uns, dass wir auch heuer wieder die Bergbierwanderung durchführen können.<br> <br> Die Wanderung ist 11.6 Kilometer lang, gemütlich und aussichtsreich. Auf der gegenüberliegenden Talseite türmen sich die 3000er der Engadiner Dolomiten. Und an diesem speziellen Tag lernt man auch, wie der Schweizer Berg schmeckt, da alle Bergbierbrauereien mit Bergquellwasser produzieren, welche sich mit den Degustationsständen auf der Wanderung präsentieren. Bis zum Festivalgelände kann jedermann/frau etwa 25 Bergbiersorten probieren und auf dem Festivalgelände in Ramosch sein neu erkorenes Lieblingsbier weitertrinken."
                        document.getElementById("one").appendChild(text);

                        var grillstand = document.createElement("H2");
                        grillstand.innerHTML = "Auch für Familien geeignet";
                        document.getElementById("one").appendChild(grillstand);

                        var grillstandT = document.createElement("P");
                        grillstandT.innerHTML = "Die Wanderung ist auch für Kinder sehr geeignet. Einzig kinderwagentauglich ist der Wanderweg nicht. Laufzeit: ca. 3.5 Stunden. Bequeme Wanderschuhe empfohlen. "
                        document.getElementById("one").appendChild(grillstandT);

                        var verkaufsstand = document.createElement("H2");
                        verkaufsstand.innerHTML = "Verkaufsstand";
                        document.getElementById("one").appendChild(verkaufsstand);

                        var verkaufsstandT = document.createElement("P");
                        verkaufsstandT.innerHTML = "In Ramosch können am Ende der Wanderung alle Produkte eingekauft werden, die auf der Wanderung zur Degustation angeboten werden und Sie finden dort noch weitere Spezialitäten der Bun Tschlin Produzenten. ";
                        document.getElementById("one").appendChild(verkaufsstandT);

                    
                   
                    break;
               /*     case   'startGipfelstuermer':
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
                      bild.setAttribute("alt", "girun");
                      bild.setAttribute("id", "girun");
                      bild.setAttribute("onclick", "infoblock()");
                      document.getElementById("circle").appendChild(bild);

                      var kreis = document.createElement("div");
                      kreis.setAttribute("id","circle2");
                      document.getElementById("one").appendChild(kreis);
                      
                      var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./illustrationen/tier.png");
                      bild.setAttribute("alt", "standBioSchorta");
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
                      bild.setAttribute("alt", "chopfab");
                      bild.setAttribute("id", "chopfab");
                      bild.setAttribute("onclick", "infoblock()");
                      document.getElementById("circle").appendChild(bild);

                      var kreis = document.createElement("div");
                      kreis.setAttribute("id","circle2");
                      document.getElementById("one").appendChild(kreis);
                      
                      var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./illustrationen/sandwitch.png");
                      bild.setAttribute("alt", "cilgiaEtter");
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
                      bild.setAttribute("alt", "");
                      bild.setAttribute("id", "simmentaler");
                      bild.setAttribute("onclick", "infoblock()");
                      document.getElementById("circle").appendChild(bild);
                     

                      var kreis = document.createElement("div");
                      kreis.setAttribute("id","circle2");
                      document.getElementById("one").appendChild(kreis);
                      
                      var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./illustrationen/kaese.png");
                      bild.setAttribute("alt", "paurariaRiatsch");
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
                        bild.setAttribute("alt", "bieraEngiadinaisa");
                        bild.setAttribute("id", "bieraEngiadinaisa");
                        bild.setAttribute("onclick", "infoblock()");
                        document.getElementById("circle").appendChild(bild);

                        var kreis = document.createElement("div");
                        kreis.setAttribute("id","circle2");
                        document.getElementById("one").appendChild(kreis);

                        var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./illustrationen/fleisch.png");
                      bild.setAttribute("alt", "zanetti");
                      bild.setAttribute("id", "zanetti");
                      bild.setAttribute("onclick", "infoblock()");
                      document.getElementById("circle2").appendChild(bild);

       


                        break;
                        //_________________text
                    case   'stand5':
                      document.getElementById("layerOne").style.display = 'block';
                      document.getElementById("layerOne").classList.add('boxDesign');
                      document.getElementById("one").classList.add('layoutDesignText');

                      var domleschger = document.createElement("H1");
                      domleschger.innerHTML = "Domleschger Bier";
                     document.getElementById("one").appendChild(domleschger);
              
                    var bild = document.createElement("IMG");
                    bild.setAttribute("src", "./img/logo/DomleschgerBier.jpg");
                    document.getElementById("one").appendChild(bild);
              
                    var domleschgerT = document.createElement("P");
                    domleschgerT.innerHTML = "Das Domleschger Bier ist eine Erfolgsgeschichte, die im Jahr 2006 begann. Mit viel Ehrgeiz und einer eigenen Brauanlage wurde das erste Bier im Jahr 2008 unter dem Namen Domleschger Bier verkauft. Nach einigen Herausforderungen fand die Brauerei schließlich in Feldis einen neuen Standort und hat heute über 30 Verkaufsstellen. Von dem goldfarbenen, naturtrüben Amber Bier wird jährlich ca. 5000 Liter Bier gebraut und mit einer Flaschengärung hergestellt."
                    document.getElementById("one").appendChild(domleschgerT);
              
                    var website = document.createElement("A");
                    website.innerHTML = "<br>www.bierliebe.ch<br>";
                    website.href = "https://shop.bierliebe.ch/produkt-kategorie/brauerei/domleschger-bier/"
                    document.getElementById("one").appendChild(website);

                          break;
                    //_____________________illu
                    case   'stand6':
                      document.getElementById("layerOne").style.display = 'block';
                      document.getElementById("layerOne").classList.add('boxDesign');
                      document.getElementById("one").classList.add('layoutDesignText');

                      var mundart = document.createElement("H1");
                      mundart.innerHTML = "Mundart";
                      document.getElementById("one").appendChild(mundart);
               
                     var bild = document.createElement("IMG");
                     bild.setAttribute("src", "./img/logo/mundart.png");
                     document.getElementById("one").appendChild(bild);

                     var mundartCT = document.createElement("H2");
                     mundartCT.innerHTML = "<br>Helles Mundart Hausbier Cler";
                     document.getElementById("one").appendChild(mundartCT);
               
                     var mundartC = document.createElement("P");
                     mundartC.innerHTML = "Unser erster eigener Biersud Helles Mundart Hausbier. Seit langer Zeit träumt Matze von einer eigenen Bierkreation. Im Juni 2019 ging mit dem eigenen Biersud dieser Traum in Erfüllung und das Mundartbier «Cler», zu Deutsch hell, ist geboren. In Zusammenarbeit mit der Bieraria Tschlin ist ein helles Bier mit einer erfrischenden, leichten Zitrusnote entstanden."
                     document.getElementById("one").appendChild(mundartC);

                     var mundartDT = document.createElement("H2");
                     mundartDT.innerHTML = "<br>Schwarzes Mundart Hausbier Dreggsch";
                     document.getElementById("one").appendChild(mundartDT);
               
                     var mundartD = document.createElement("P");
                     mundartD.innerHTML = "Nachdem das helle Mundartbier bei den Gästen so gut ankam, hatte Matze die Idee auch noch ein zweites eigenes Bier zu kreieren, aber dieses Mal ein Schwarzes. Nach einigen Versuchen zusammen mit der Bieraria Tschlin entstand das schwarze Mundartbier «Dreggsch». Was heisst Dreggsch? Matzes Frau, Fabrizia, hatte die Idee dieses Bier nach etwas aus Matzes Geburtsort Dresden zu benennen. Da man in Ostdeutschland zu einem schwarzen Bier Dreggsch (dreckig) sagt, wurde dieses Bier so getauft."
                     document.getElementById("one").appendChild(mundartD);

                     var weiterInformation = document.createElement("H2");
                     weiterInformation.innerHTML = "<br>Weitere Informationen";
                     document.getElementById("one").appendChild(weiterInformation);
               
                     var website = document.createElement("A");
                     website.innerHTML = "<br>www.mundart-scuol.ch <br>";
                     website.href = "https://www.mundart-scuol.ch/"; 
                     document.getElementById("one").appendChild(website); 
               
                     var instagram = document.createElement("A");
                     instagram.innerHTML = "Instagram <br>";
                     instagram.href = "https://www.instagram.com/mundartscuol/"; 
                     document.getElementById("one").appendChild(instagram); 
               
                     var facebook = document.createElement("A");
                     facebook.innerHTML = "Facebook";
                     facebook.href = "https://www.facebook.com/mundartscuol"; 
                     document.getElementById("one").appendChild(facebook); 


               
                            break;
                   //_________________text
                   case   'stand8':
                      document.getElementById("layerOne").style.display = 'block';
                      document.getElementById("layerOne").classList.add('boxDesign');
                      document.getElementById("one").classList.add('layoutDesignText');


                      var steimandliBier = document.createElement("H1");
                      steimandliBier.innerHTML = "Steimandli Bier";
                     document.getElementById("one").appendChild(steimandliBier);

                     var bild = document.createElement("IMG");
                     bild.setAttribute("src", "./img/logo/beEngiadinaisa.jpeg");
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
                     document.getElementById("one").appendChild(website);   
              
                     var instagram = document.createElement("A");
                     instagram.innerHTML = "Instagram  <br>";
                     instagram.href = "https://www.instagram.com/bierariatschlin/"; 
                     document.getElementById("one").appendChild(instagram);
                     
                     var facebook = document.createElement("A");
                     facebook.innerHTML = "Facebook";
                     facebook.href = "https://www.facebook.com/bieratschlin"; 
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
                    foto.setAttribute("alt", "wanderung");
                    foto.setAttribute("id", "fotos");
                    document.getElementById("one").appendChild(foto);

                    var bunTschlinT = document.createElement("P");
                    bunTschlinT.innerHTML = "Bun Tschlin ist Organisator des Bergbierfestivals. Das Ganze ist mehr als die Summe aller Teile, wusste schon Aristoteles. Bun Tschlin vereinigt engagierte Betriebe aus der Gemeinde Valsot, die mit authentischen Angeboten die Lebensqualität vor Ort sowie einen sanften Tourismus pflegen wollen. <br> «Bun Tschlin» steht für nachhaltig, ökologisch, mutig und unternehmerisch! Wir pflegen die einheimischen Landschaft und bündeln die Kräfte der Natur in unseren authentischen Bun Tschlin Produkten. <br> In Tschlin und den benachbarten Dörfern Martina, Ramosch, Strada und Vnà haben wir uns zusammengetan, um gemeinsam die ursprüngliche Struktur und hohe Lebensqualität in der Region zu erhalten und diese zugleich mit unseren BesucherInnen zu teilen. Denn auch hier gilt: Sharing is caring! Dieser Zusammenschluss heisst Bun Tschlin, was bedeutet: Gutes aus Tschlin."
                    document.getElementById("one").appendChild(bunTschlinT);

                    var bunTschlinL = document.createElement("A");
                    bunTschlinL.innerHTML = " www.buntschlin.ch";
                    bunTschlinL.href = "https://buntschlin.ch/"; 
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
                        foto.setAttribute("alt", "wanderung");
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
                        document.getElementById("one").appendChild(rumantschL);     

                        var foto = document.createElement("IMG");
                        foto.setAttribute("src", "./img/memories/foto3.jpg");
                        foto.setAttribute("alt", "wanderung");
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
                        document.getElementById("one").appendChild(link);

                        var logo = document.createElement("IMG");
                      
                        logo.setAttribute("alt", "logo");
                        logo.setAttribute("id", "fotos");
                        logo.setAttribute("id", "logo");
                        document.getElementById("sponsor").appendChild(logo);




                        switch(setArt){
                          case 'fahne1': case 'fahne5':
                            link.href = "https://www.bezzola-denoth.ch/home"; 
                            logo.setAttribute("src", "./img/logo/bezzolaDenoth.png");
                            break;

                            case 'fahne2': case 'fahne4':
                              link.href = "https://www.valsot.ch/"; 
                              logo.setAttribute("src", "./img/logo/valsot.jpg");
                              break;
                              case 'fahne3':
                                link.href = "https://buntschlin.ch/"; 
                                logo.setAttribute("src", "./img/logo/bt.jpg");
                                break;
                               
                        };




                        break;
                        
                    case   'konzert':   
                       document.getElementById("layerOne").style.display = 'block';
                      document.getElementById("layerOne").classList.add('boxDesign');
                      document.getElementById("layerOne").classList.add('boxDesignKonzert');
                      document.getElementById("one").classList.add('layoutDesignText');


                            var h1 = document.createElement("H1");
                        h1.innerHTML = "Festival in Ramosch – DRAUFGÄNGER";
                        document.getElementById("one").appendChild(h1);

                        var text = document.createElement("P");
                        text.innerHTML = "Türöffnung: 16:00 Uhr  <br><br> Seit mehr als 20 Jahren sind die Draufgänger ein fester Bestandteil auf allen Bühnen im deutschsprachigen Raum. Für die Karriere wird das Jahr 2023 ein aufregendes werden. Chiara wird aus eigener Entscheidung eine Ex-Draufgängerin und die 4 Draufgänger-Bürschen machen weiter mit einer ganz klaren Mission: Sie wollen die erfolgreichste und bekannteste Boyband der gesamten Partyszene werden. Umso aufregender, dass die Band in diesem Jahr Teil des Bergbierfestivals ist und am Abend nach der Bergbierwanderung im Festzelt auftretet!"
                        document.getElementById("one").appendChild(text);
                        

              /*          var video = document.createElement("IFRAME");
                        video.setAttribute("frameborder", "0"); 
                        video.setAttribute('allowFullScreen', '');
                        video.setAttribute("src", "https://www.youtube.com/embed/GoY4dkOD2iE");
                        document.getElementById("one").appendChild(video);

                      

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
       case   'zanetti': 

                var zanetti = document.createElement("H1");
                zanetti.innerHTML = "Bacharia Zanetti";
                document.getElementById("two").appendChild(zanetti);

                var bild = document.createElement("IMG");
                bild.setAttribute("src", "./img/logo/bzZanetti.jpg");
                document.getElementById("two").appendChild(bild);
         
                var zanettiT = document.createElement("P");
                zanettiT.innerHTML = "Die Metzgerei Zanetti wurde 1992 gegründet. Neben dem Trockenfleisch, das nach einer eigenen Rezeptur hergestellt wird, hat sich die Bacharia auch auf die Veredelung von Wildfleisch spezialisiert. Die Spezialitäten sind Wurstwaren (Salsiz und Siedwürste) sowie Geräuchtes. <br> Die Produkte werden nach überliefertem Rezept mit viel Liebe und Sorgfalt zubereitet. Es werden nur beste Zutaten verwendet. Das Fleisch stammt so weit möglich aus Betrieben der Region."
                document.getElementById("two").appendChild(zanettiT);
         
                var zanettiA = document.createElement("P");
                zanettiA.innerHTML = "Bacharia Zanetti <br> Quadra Secha <br> 7556 Ramosch <br> Tel. +41 (0)81 864 86 50 <br> info@frischwild.ch"
                document.getElementById("two").appendChild(zanettiA);
         
                var websiteZ = document.createElement("A");
                websiteZ.innerHTML = " www.frisch-wild.ch";
                websiteZ.href = "http://www.frisch-wild.ch/"; 
                document.getElementById("two").appendChild(websiteZ); 

                var website = document.createElement("A");
                website.innerHTML = " www.buntschlin.ch";
                website.href = "https://buntschlin.ch/betriebe/bacharia-zanetti/#"; 
                document.getElementById("two").appendChild(website); 
         
               
                
         break;    
       case   'bieraEngiadinaisa':

       var bieraEngiadinaisa = document.createElement("H1");
       bieraEngiadinaisa.innerHTML = "Biera Engiadinaisa";
       document.getElementById("two").appendChild(bieraEngiadinaisa);

       var bild = document.createElement("IMG");
       bild.setAttribute("src", "./img/logo/beEngiadinaisa.jpeg");
       document.getElementById("two").appendChild(bild);

       var bieraEngiadinaisaT = document.createElement("P");
       bieraEngiadinaisaT.innerHTML = "Die Idee, einer Bieraria im Unterengadiner Dorf Tschlin zu gründen, geht auf einen Zukunftsworkshop der Gemeinde Tschlin in den ersten Jahren des neuen Jahrtausends zurück. Dort entstand auch die Idee des Werbe- und Verkaufsförderungsverbunds «Bun Tschlin». Am 30. Juni 2004 wurde die Gründung der Bieraria Tschlin SA notariell beglaubigt.<br> Die Brauerei Tschlin produziert und vermarktet regionale BIO Biersorten aus einheimischem Gerstenmalz, Tschliner Wasser, Hopfen und Hefe. Bei uns werden fast alle Biersorten aus 100% Schweizer Rohstoffe hergestellt, so dass wir uns mit gutem Gewissen als «regionalste Brauerei der Schweiz» bezeichnen dürfen.";
       document.getElementById("two").appendChild(bieraEngiadinaisaT);

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

       var bieraSortenL4 = document.createElement("LI");
       bieraSortenL4.innerHTML = "<h3>Staila Alpina</h3>BIO Bier mit Bündner-Edelweiss, untergärig"; 
       document.getElementById("ul").appendChild(bieraSortenL4);

       var bieraSortenL5 = document.createElement("LI");
       bieraSortenL5.innerHTML = "<h3>Engadin Pale Ale</h3>Pale Ale Bier – 100% CH, obergärig"; 
       document.getElementById("ul").appendChild(bieraSortenL5);

       var bieraSortenL6 = document.createElement("LI");
       bieraSortenL6.innerHTML = "<h3>La S-chüra</h3>Dunkles, citrahaltiges Bio Bier, untergärig"; 
       document.getElementById("ul").appendChild(bieraSortenL6);

       var bieraSortenL7 = document.createElement("LI");
       bieraSortenL7.innerHTML = "<h3>Festival-Spezial</h3>Gebraut nach Pilsner-Bierstil"; 
       document.getElementById("ul").appendChild(bieraSortenL7);

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
       website.innerHTML = "<br>www.bieraria.ch <br>";
       website.href = "https://www.bieraria.ch/"; 
       document.getElementById("two").appendChild(website);   

       var instagram = document.createElement("A");
       instagram.innerHTML = "Instagram  <br>";
       instagram.href = "https://www.instagram.com/bierariatschlin/"; 
       document.getElementById("two").appendChild(instagram);
       
       var facebook = document.createElement("A");
       facebook.innerHTML = "Facebook";
       facebook.href = "https://www.facebook.com/bieratschlin"; 
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
       case   'bierariaTschlinSA': 

       var bierariaTschlinSA = document.createElement("H1");
       bierariaTschlinSA.innerHTML = "Bieraria Tschlin SA";
       document.getElementById("two").appendChild(bierariaTschlinSA);

       var bierariaTschlinSAT = document.createElement("P");
       bierariaTschlinSAT.innerHTML = "Via Dal Dazi 233 <br> 7560 Martina <br> Tel. +41 (0)81 860 12 50 <br> Fax +41 (0)81 860 12 51";
       document.getElementById("two").appendChild(bierariaTschlinSAT);

       var weiterInformation = document.createElement("H2");
       weiterInformation.innerHTML = "<br>Weitere Informationen";
       document.getElementById("two").appendChild(weiterInformation);

       var website = document.createElement("A");
       website.innerHTML = "www.bieraria.ch  mit Onlineshop ";
       website.href = "https://www.bieraria.ch/"; 
       document.getElementById("two").appendChild(website);   


       
       break;  
       case   'doppelleuBoxerAG': 

       var doppelleuBoxerAG = document.createElement("H1");
       doppelleuBoxerAG.innerHTML = "Doppelleu Boxer AG";
       document.getElementById("two").appendChild(doppelleuBoxerAG);

       var bild = document.createElement("IMG");
       bild.setAttribute("src", "./img/logo/doppeleu.png");
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
       website.innerHTML = "<br>www.doppelleuboxer.ch <br>";
       website.href = "https://www.doppelleuboxer.ch/de/bier/doppelleu/"; 
       document.getElementById("two").appendChild(website);   

       var instagram = document.createElement("A");
       instagram.innerHTML = "Instagram  <br>";
       instagram.href = "https://www.instagram.com/doppelleu_boxer/"; 
       document.getElementById("two").appendChild(instagram);
       
       var facebook = document.createElement("A");
       facebook.innerHTML = "Facebook  ";
       facebook.href = "https://www.facebook.com/doppelleuboxer/"; 
       document.getElementById("two").appendChild(facebook);


       
       break;  
       case   'cilgiaEtter': 
       var etter = document.createElement("H1");
       etter.innerHTML = "Cilgia Etter";
       document.getElementById("two").appendChild(etter);

       var bild = document.createElement("IMG");
       bild.setAttribute("src", "./img/logo/cilgiaEtter.jpg");
       document.getElementById("two").appendChild(bild);

       var etterP = document.createElement("P");
       etterP.innerHTML = "Das charmante Alpenbistro, Café Etter, verwöhnt seine Gäste mit einer vielfältigen Auswahl an hauseigenen Spezialitäten. Das sind Nusstorten, verschiedene Konfitüren und Sirupsorten und vieles mehr. Darüber hinaus bietet es sieben Gästezimmer in der liebevoll gestalteten Pension."
       document.getElementById("two").appendChild(etterP);

       var weiterInformation = document.createElement("H2");
       weiterInformation.innerHTML = "<br>Weitere Informationen";
       document.getElementById("two").appendChild(weiterInformation);

       var website = document.createElement("A");
       website.innerHTML = "<br>www.buntschlin.ch <br>";
       website.href = "https://buntschlin.ch/betriebe/prodots-etter/";
       document.getElementById("two").appendChild(website);   

       break;
       case   'standBioSchorta': 

       var standBioSchorta = document.createElement("H1");
       standBioSchorta.innerHTML = "Stand Bio Schorta";
       document.getElementById("two").appendChild(standBioSchorta);

       var bild = document.createElement("IMG");
       bild.setAttribute("src", "./img/logo/bsSchorta.jpg");
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
       website.innerHTML = "<br>www.buntschlin.ch";
       website.href = "https://buntschlin.ch/betriebe/bio-schorta/#"; 
       document.getElementById("two").appendChild(website); 
       break;  
       case   'simmentaler':
        var simmentaler = document.createElement("H1");
        simmentaler.innerHTML = "Simmentaler Bier";
       document.getElementById("two").appendChild(simmentaler);

      var bild = document.createElement("IMG");
      bild.setAttribute("src", "./img/logo/simmentaler.png");
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
      website.innerHTML = "<br>www.simmentalerbier.ch <br>";
      website.href = "https://simmentalerbier.ch/"; 
      document.getElementById("two").appendChild(website); 

      var instagram = document.createElement("A");
      instagram.innerHTML = "Instagram <br>";
      instagram.href = "https://www.instagram.com/simmentaler_bier/"; 
      document.getElementById("two").appendChild(instagram); 

      var facebook = document.createElement("A");
      facebook.innerHTML = "Facebook";
      facebook.href = "https://www.facebook.com/simmentalerbier"; 
      document.getElementById("two").appendChild(facebook); 
       break;
       case   'paurariaRiatsch':
        var paurariaRiatsch = document.createElement("H1");
        paurariaRiatsch.innerHTML = "Pauraria Riatsch";
       document.getElementById("two").appendChild(paurariaRiatsch);

       var bild = document.createElement("IMG");
       bild.setAttribute("src", "./img/logo/prRiatsch.jpg");
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
       website.innerHTML = "<br>www.buntschlin.ch";
       website.href = "https://buntschlin.ch/betriebe/pauraria-riatsch/#"; 
       document.getElementById("two").appendChild(website); 
       break;
       case 'mundart':


                      var mundart = document.createElement("H1");
                      mundart.innerHTML = "Mundart";
                      document.getElementById("two").appendChild(mundart);
               
                     var bild = document.createElement("IMG");
                     bild.setAttribute("src", "./img/logo/mundart.png");
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
                     website.innerHTML = "<br>www.mundart-scuol.ch <br>";
                     website.href = "https://www.mundart-scuol.ch/"; 
                     document.getElementById("two").appendChild(website); 
               
                     var instagram = document.createElement("A");
                     instagram.innerHTML = "Instagram <br>";
                     instagram.href = "https://www.instagram.com/mundartscuol/"; 
                     document.getElementById("two").appendChild(instagram); 
               
                     var facebook = document.createElement("A");
                     facebook.innerHTML = "Facebook";
                     facebook.href = "https://www.facebook.com/mundartscuol"; 
                     document.getElementById("two").appendChild(facebook); 
                     break;

       case 'girun':

                     var girun = document.createElement("H1");
                     girun.innerHTML = "Alpenbrauerei Girun";
                     document.getElementById("two").appendChild(girun);
              
                    var bild = document.createElement("IMG");
                    bild.setAttribute("src", "./img/logo/girun.webp");
                    document.getElementById("two").appendChild(bild);
              
                    var girunC = document.createElement("P");
                    girunC.innerHTML = "Er ist lange gekreist. Viele haben ihn beobachtet und seinen Balzruf gehört. Jetzt sind die Jungvögel flügge. Der Horst befindet sich in Tschlin und lädt zur Degustation mit herrlicher Panorama-Aussicht ein. Nach einer Wanderung oder der Dorfbesichtigung von Tschlin kann ein Durstlöscher oder Feierabendbier bei uns genossen werden."
                    document.getElementById("two").appendChild(girunC);

                    var weiterInformation = document.createElement("H2");
                    weiterInformation.innerHTML = "<br>Weitere Informationen";
                    document.getElementById("two").appendChild(weiterInformation);
              
                    var website = document.createElement("A");
                    website.innerHTML = "<br>www.girun.ch<br>";
                    website.href = "https://www.girun.ch/"; 
                    document.getElementById("two").appendChild(website); 
              
                    var facebook = document.createElement("A");
                    facebook.innerHTML = "Facebook";
                    facebook.href = "https://www.facebook.com/AlpenbrauereiGIRUN"; 
                    document.getElementById("two").appendChild(facebook); 
                    break;

                     case 'domleschger':
        var domleschger = document.createElement("H1");
        domleschger.innerHTML = "Domleschger Bier";
       document.getElementById("two").appendChild(domleschger);

      var bild = document.createElement("IMG");
      bild.setAttribute("src", "./img/logo/DomleschgerBier.jpg");
      document.getElementById("two").appendChild(bild);

      var domleschgerT = document.createElement("P");
      domleschgerT.innerHTML = "Das Domleschger Bier ist eine Erfolgsgeschichte, die im Jahr 2006 begann. Mit viel Ehrgeiz und einer eigenen Brauanlage wurde das erste Bier im Jahr 2008 unter dem Namen Domleschger Bier verkauft. Nach einigen Herausforderungen fand die Brauerei schließlich in Feldis einen neuen Standort und hat heute über 30 Verkaufsstellen. Von dem goldfarbenen, naturtrüben Amber Bier wird jährlich ca. 5000 Liter Bier gebraut und mit einer Flaschengärung hergestellt."
      document.getElementById("two").appendChild(domleschgerT);

      var website = document.createElement("A");
      website.innerHTML = "<br>www.bierliebe.ch<br>";
      website.href = "https://shop.bierliebe.ch/produkt-kategorie/brauerei/domleschger-bier/"
      document.getElementById("two").appendChild(website);
         
                     break;
       case 'chopfab':
        var chopfab = document.createElement("H1");
        chopfab.innerHTML = "Chopfab Boxer";
       document.getElementById("two").appendChild(chopfab);

      var bild = document.createElement("IMG");
      bild.setAttribute("src", "./img/logo/chopfabBoxer.png");
      document.getElementById("two").appendChild(bild);

      var chopfabT = document.createElement("P");
      chopfabT.innerHTML = "Seit 2012 prägt Kopfab boxer als führende unabhängige Craft-Brauerei der Schweiz mit den Produktionsstandorten Winterthur und Yverdon-les-Bains den Schweizer Biermarkt nachhaltig. Auf die Qualität legt die Brauerei einen hohen Wert. Zudem bietet die Brauerei verschiedene Biersorten vom naturtrüben Lagerbier über das Weizenbier bis zum speziellen Edelweissbier."
      document.getElementById("two").appendChild(chopfabT);

      var website = document.createElement("A");
      website.innerHTML = "<br>www.chopfabboxer.ch<br>";
      website.href = "https://www.chopfabboxer.ch/de/"; 
      document.getElementById("two").appendChild(website); 

      var facebook = document.createElement("A");
      facebook.innerHTML = "Facebook";
      facebook.href = "https://www.facebook.com/chopfabschweiz";
      document.getElementById("two").appendChild(facebook); 

         
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
        document.getElementById("two").appendChild(link); 

        break;
       case   'steimandli':

          
          var steimandliBier = document.createElement("H1");
          steimandliBier.innerHTML = "Steimandli Bier";
         document.getElementById("two").appendChild(steimandliBier);

         var bild = document.createElement("IMG");
         bild.setAttribute("src", "./img/logo/beEngiadinaisa.jpeg");
         document.getElementById("two").appendChild(bild);
  
  
         var steimandliBierT = document.createElement("P");
         steimandliBierT.innerHTML = "Beim Grünhopfenbier, auch Wet Hop Beer genannt, wird die Hopfengabe mit frischen, ungedarrten Hopfendolden vorgenommen - innert 5 Stunden nach der Ernte. Vom Feld ins Bier sozusagen, und das möglichst ohne Umwege. Und natürlich arbeiten wir mit einheimischem Hopfen aus dem Prättigau. Das 'weltweit' einzige Bier mit Bündner Hopfen."
         document.getElementById("two").appendChild(steimandliBierT);

         var weiterInformation = document.createElement("H2");
         weiterInformation.innerHTML = "<br>Weitere Informationen";
         document.getElementById("two").appendChild(weiterInformation);


         var website = document.createElement("A");
         website.innerHTML = "<br>www.bieraria.ch <br>";
         website.href = "https://www.bieraria.ch/"; 
         document.getElementById("two").appendChild(website);   
  
         var instagram = document.createElement("A");
         instagram.innerHTML = "Instagram  <br>";
         instagram.href = "https://www.instagram.com/bierariatschlin/"; 
         document.getElementById("two").appendChild(instagram);
         
         var facebook = document.createElement("A");
         facebook.innerHTML = "Facebook";
         facebook.href = "https://www.facebook.com/bieratschlin"; 
         document.getElementById("two").appendChild(facebook);
                  break;    
      case 'monstein':
      var bierVisionMonstein = document.createElement("H1");
                      bierVisionMonstein.innerHTML = "BierVision Monstein";
                      document.getElementById("two").appendChild(bierVisionMonstein);

                      var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./img/logo/monsteiner.png");
                      bild.setAttribute("alt", "startBier");
                      bild.setAttribute("id", "startBier");
                      document.getElementById("two").appendChild(bild);

                      var bierVisionMonsteinT = document.createElement("P");
                      bierVisionMonsteinT.innerHTML = "Im Oktober 2000 wurde die BierVision Monstein AG gegründet, welche am 6. Juni 2001 in Monstein als die damals höchstgelegene Brauerei der Schweiz und erste Schaubrauerei des Kantons Graubünden den Betrieb aufnahm. Sie befindet sich in der ehemaligen Dorfsennerei, einem Gebäude, das vor über 100 Jahren errichtet worden ist und sich an zentraler Lage in der Mitte des Walserdorfes Monstein befindet. <br> Heute braut die BierVision Monstein AG aus kristallklarem Bergquellwasser, Schweizer Hopfen und unter anderem einheimischem Bio-Berggerstenmalz von Gran Alpin verschiedene Monsteiner Bierspezialitäten im Kleinformat. «Craft Beer» aus den Bergen sozusagen. "
                      document.getElementById("two").appendChild(bierVisionMonsteinT);

                      var bieraSorten = document.createElement("H2");
                      bieraSorten.innerHTML = "Biersorten";
                      document.getElementById("two").appendChild(bieraSorten);

                      var bieraSortenU = document.createElement("UL");
                      bieraSortenU.setAttribute("id", "ul");
                      document.getElementById("two").appendChild(bieraSortenU);

                      var weiterInformation = document.createElement("H2");
                      weiterInformation.innerHTML = "<br>Weitere Informationen";
                      document.getElementById("two").appendChild(weiterInformation);

                      var website = document.createElement("A");
                      website.innerHTML = "<br>www.monsteiner.ch <br>";
                      website.href = "https://monsteiner.ch/"; 
                      document.getElementById("two").appendChild(website);   

                      var instagram = document.createElement("A");
                      instagram.innerHTML = "Instagram  <br>";
                      instagram.href = "https://www.instagram.com/monsteiner_bier/"; 
                      document.getElementById("two").appendChild(instagram);

                      var facebook = document.createElement("A");
                      facebook.innerHTML = "Facebook  ";
                      facebook.href = "https://www.facebook.com/biervision/"; 
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
  document.getElementById('actionHoehenprofil').classList.toggle('fade');
}


 



