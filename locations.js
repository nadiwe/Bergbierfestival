

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
            center: [10.40000, 46.85009],
            zoom: 11.5,
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
      backToImg();
      backToMap();

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

                      document.getElementById("hidden").style.backgroundColor = '#847f62';

                  
                 
                  break;
                 
                    case   'stand1':
                    
                     // startBierF();

                      var kreis = document.createElement("div");
                      kreis.setAttribute("class", "added");
                      kreis.setAttribute("id","circle");
                      document.getElementById("labels").appendChild(kreis);

                      

                      var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./illustrationen/startBier.png");
                      bild.setAttribute("alt", "startBier");
                      bild.setAttribute("id", "startBier");
                      bild.setAttribute("onclick", "gifStart()");
                      bild.setAttribute("class","added");
                      document.getElementById("circle").appendChild(bild);

                      var kreis = document.createElement("div");
                      kreis.setAttribute("class", "added");
                      kreis.setAttribute("id","circle2");
                      document.getElementById("labels").appendChild(kreis);
                      
                      var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./illustrationen/tier.png");
                      bild.setAttribute("alt", "standBioSchorta");
                      bild.setAttribute("id", "standBioSchorta");
                      bild.setAttribute("class", "added");
                      bild.setAttribute("onclick", "infoblock()");
                      document.getElementById("circle2").appendChild(bild);

                      document.getElementById("hidden").style.width = "47vw";
                      document.getElementById("hidden").style.backgroundColor = 'transparent';


                      break;
                    case   'stand2':
                      var kreis = document.createElement("div");
                      kreis.setAttribute("class", "added");
                      kreis.setAttribute("id","circle");
                      document.getElementById("labels").appendChild(kreis);
                     
                      var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./illustrationen/bier.png");
                      bild.setAttribute("alt", "simmentaler");
                      bild.setAttribute("id", "simmentaler");
                      bild.setAttribute("class","added");
                      bild.setAttribute("onclick", "infoblock()");
                      document.getElementById("circle").appendChild(bild);

                      var kreis = document.createElement("div");
                      kreis.setAttribute("class", "added");
                      kreis.setAttribute("id","circle2");
                      document.getElementById("labels").appendChild(kreis);
                      
                      var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./illustrationen/kaese.png");
                      bild.setAttribute("alt", "paurariaRiatsch");
                      bild.setAttribute("id", "paurariaRiatsch");
                      bild.setAttribute("class", "added");
                      bild.setAttribute("onclick", "infoblock()");
                      document.getElementById("circle2").appendChild(bild);

                      document.getElementById("hidden").style.width = "47vw";
                      document.getElementById("hidden").style.backgroundColor = 'transparent';

                      break;
                    case   'stand3':
                      var kreis = document.createElement("div");
                      kreis.setAttribute("class", "added");
                      kreis.setAttribute("id","circle");
                      document.getElementById("labels").appendChild(kreis);
                     
                      var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./illustrationen/bier.png");
                      bild.setAttribute("alt", "mundart");
                      bild.setAttribute("id", "mundart");
                      bild.setAttribute("class","added");
                      bild.setAttribute("onclick", "infoblock()");
                      document.getElementById("circle").appendChild(bild);

                      var kreis = document.createElement("div");
                      kreis.setAttribute("class", "added");
                      kreis.setAttribute("id","circle2");
                      document.getElementById("labels").appendChild(kreis);
                      
                      var bild = document.createElement("IMG");
                      bild.setAttribute("src", "./illustrationen/fleisch.png");
                      bild.setAttribute("alt", "matze");
                      bild.setAttribute("id", "matze");
                      bild.setAttribute("class", "added");
                      bild.setAttribute("onclick", "infoblock()");
                      document.getElementById("circle2").appendChild(bild);

                      document.getElementById("hidden").style.width = "47vw";
                      document.getElementById("hidden").style.backgroundColor = 'transparent';


                        break;
                    case   'stand4':
                        var kreis = document.createElement("div");
                        kreis.setAttribute("class", "added");
                        kreis.setAttribute("id","circle");
                        document.getElementById("labels").appendChild(kreis);
 
                        var bild = document.createElement("IMG");
                        bild.setAttribute("src", "./illustrationen/bier.png");
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
                      bild.setAttribute("src", "./illustrationen/fleisch.png");
                      bild.setAttribute("alt", "zanetti");
                      bild.setAttribute("id", "zanetti");
                      bild.setAttribute("class", "added");
                      bild.setAttribute("onclick", "infoblock()");
                      document.getElementById("circle2").appendChild(bild);

                        document.getElementById("hidden").style.width = "47vw";
                        document.getElementById("hidden").style.backgroundColor = 'transparent';


                        break;
                    case   'stand5':
                      $('#labelsInfo').empty();
                      document.getElementById("hidden").style.display = "none";
                      document.getElementById("hiddenInfo").style.display = "block";

                      var bierVisionMonstein = document.createElement("H1");
                      bierVisionMonstein.innerHTML = "BierVision Monstein";
                      bierVisionMonstein.setAttribute("class", "added");
                      document.getElementById("labelsInfo").appendChild(bierVisionMonstein);
               
                      var bierVisionMonsteinT = document.createElement("P");
                      bierVisionMonsteinT.innerHTML = "Im Oktober 2000 wurde die BierVision Monstein AG gegründet, welche am 6. Juni 2001 in Monstein als die damals höchstgelegene Brauerei der Schweiz und erste Schaubrauerei des Kantons Graubünden den Betrieb aufnahm. Sie befindet sich in der ehemaligen Dorfsennerei, einem Gebäude, das vor über 100 Jahren errichtet worden ist und sich an zentraler Lage in der Mitte des Walserdorfes Monstein befindet. <br> Heute braut die BierVision Monstein AG aus kristallklarem Bergquellwasser, Schweizer Hopfen und unter anderem einheimischem Bio-Berggerstenmalz von Gran Alpin verschiedene Monsteiner Bierspezialitäten im Kleinformat. «Craft Beer» aus den Bergen sozusagen. "
                      bierVisionMonsteinT.setAttribute("class", "added");
                      document.getElementById("labelsInfo").appendChild(bierVisionMonsteinT);
               
                      var bieraSorten = document.createElement("H2");
                      bieraSorten.innerHTML = "Biersorten";
                      bieraSorten.setAttribute("class", "added");
                      document.getElementById("labelsInfo").appendChild(bieraSorten);
               
                      var bieraSortenT = document.createElement("P");
                      bieraSortenT.innerHTML = "Monsteiner Husbier - Hell, unfiltriert. Bio-Berggerst; untergärig <br> Monsteiner Mungga -  Leichtbier mit 90% Bündner Gerste; obergärig <br> Monsteiner Steinbock - Bock-Bier mit 90% Bündner Gerste; untergärig <br> Monst.Wätterguoga - Amberbier, mit Rauchmalz; Untergärig "
                      bieraSortenT.setAttribute("class", "added");
                      document.getElementById("labelsInfo").appendChild(bieraSortenT);
               
                      
                      var website = document.createElement("A");
                      website.innerHTML = "www.monsteiner.ch <br>";
                      website.href = "https://monsteiner.ch/"; 
                      website.setAttribute("class", "added");
                      document.getElementById("labelsInfo").appendChild(website);   
               
                      var instagram = document.createElement("A");
                      instagram.innerHTML = "Instagram  <br>";
                      instagram.href = "https://www.instagram.com/monsteiner_bier/"; 
                      instagram.setAttribute("class", "added");
                      document.getElementById("labelsInfo").appendChild(instagram);
                      
                      var facebook = document.createElement("A");
                      facebook.innerHTML = "Facebook  ";
                      facebook.href = "https://www.facebook.com/biervision/"; 
                      facebook.setAttribute("class", "added");
                      document.getElementById("labelsInfo").appendChild(facebook);

                          break;
                    case   'stand6':
                            var kreis = document.createElement("div");
                            kreis.setAttribute("class", "added");
                            kreis.setAttribute("id","circle");
                            document.getElementById("labels").appendChild(kreis);
                           
                            var bild = document.createElement("IMG");
                            bild.setAttribute("src", "./illustrationen/bier.png");
                            bild.setAttribute("alt", "doppelleuBoxerAG");
                            bild.setAttribute("id", "doppelleuBoxerAG");
                            bild.setAttribute("onclick", "infoblock()");
                            bild.setAttribute("class","added");
                            document.getElementById("circle").appendChild(bild);
                            var kreis = document.createElement("div");
                            
                            var kreis = document.createElement("div");
                            kreis.setAttribute("class", "added");
                            kreis.setAttribute("id","circle2");
                            document.getElementById("labels").appendChild(kreis);

                            var bild = document.createElement("IMG");
                            bild.setAttribute("src", "./illustrationen/kunfi.png");
                            bild.setAttribute("alt", "etter");
                            bild.setAttribute("id", "etter");
                            bild.setAttribute("class", "added");
                            bild.setAttribute("onclick", "infoblock()");
                            document.getElementById("circle2").appendChild(bild);
    
                            document.getElementById("hidden").style.width = "47vw";
                            document.getElementById("hidden").style.backgroundColor = 'transparent';
  
                            break;
                    case   'stand8':
                      $('#labelsInfo').empty();
                      document.getElementById("hidden").style.display = "none";
                      document.getElementById("hiddenInfo").style.display = "block";

                      var steimandliBier = document.createElement("H1");
                      steimandliBier.innerHTML = "Steimandli Bier";
                      steimandliBier.setAttribute("class", "added");
                     document.getElementById("labelsInfo").appendChild(steimandliBier);

                     var bild = document.createElement("IMG");
       bild.setAttribute("src", "./img/logo/beEngiadinaisa.jpeg");
       bild.setAttribute("class","added");
       document.getElementById("labelsInfo").appendChild(bild);
              
              
                     var steimandliBierT = document.createElement("P");
                     steimandliBierT.innerHTML = "Beim Grünhopfenbier, auch Wet Hop Beer genannt, wird die Hopfengabe mit frischen, ungedarrten Hopfendolden vorgenommen - innert 5 Stunden nach der Ernte. Vom Feld ins Bier sozusagen, und das möglichst ohne Umwege. Und natürlich arbeiten wir mit einheimischem Hopfen aus dem Prättigau. Das 'weltweit' einzige Bier mit Bündner Hopfen."
                     steimandliBierT.setAttribute("class", "added");
                     document.getElementById("labelsInfo").appendChild(steimandliBierT);

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
                              
  
                              break;    
                    
                   case   'foto1': 
                    var bunTschlin = document.createElement("H1");
                    bunTschlin.innerHTML = "Bun Tschlin";
                    bunTschlin.setAttribute("class", "added");
                    document.getElementById("labels").appendChild(bunTschlin);

                    var foto = document.createElement("IMG");
                    foto.setAttribute("src", "./img/memories/foto1.jpg");
                    foto.setAttribute("alt", "wanderung");
                    foto.setAttribute("class", "added");
                    foto.setAttribute("id", "fotos");
                    document.getElementById("labels").appendChild(foto);

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
                        foto.setAttribute("src", "./img/memories/foto2.jpg");
                        foto.setAttribute("alt", "wanderung");
                        foto.setAttribute("class", "added");
                        foto.setAttribute("id", "fotos");
                        document.getElementById("labels").appendChild(foto);

                        var valsotT = document.createElement("P");
                        valsotT.innerHTML = "Die Gemeinde Valsot grenzt an Österreich und an Italien. Ein Teil des Valsoter Gemeindeterritoriums, das Val Fenga (dt. Fimbertal), liegt als Exklave ausserhalb des übrigen Gemeindegebiets und ist von der österreichischen Seite über das Paznauntal erschlossen. Der Deutsche Alpenverein (DAV) besitzt und betreibt auf diesem Gebiet die Heidelberger Hütte, welche als Ausgangspunkt für zahlreiche Mountainbike- und Skitouren gilt. Die Gemeinde Valsot ist Teil der Region Engiadina Bassa Val Müstair. <br> <br>Höhe  -  zw. 1’231 und 1’533 M.ü.M. <br>Fläche - 15’916 Hektaren <br> Einwohner 2010 - 932 <br> <br> Die Fraktionen in alphabetischer Reihenfolge sind: Chaflur/Chasura, Martina, Ramosch, Raschvella, San Niclà, Sclamischot/S-chadatsch, Seraplana, Strada, Tschlin, Vinadi, Vnà" ;                        
                        valsotT.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(valsotT);

                       
                        break;
                   case   'foto3':  

                   var rumantsch = document.createElement("H1");
                        rumantsch.innerHTML = "Rumauntsch <br> nossa lingua";
                        rumantsch.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(rumantsch);

                        var rumantschD = document.createElement("P");
                        rumantschD.innerHTML = "Rätoromanisch unsere Sprache! Wieso nicht das nächste Bier auf romanisch bestellen?";
                        rumantschD.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(rumantschD);

                       

                        var rumantsch = document.createElement("H2");
                        rumantsch.innerHTML = "<i>“Tschüffa üna biera gronda?”</i>";
                        rumantsch.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(rumantsch);
                        var rumantschL = document.createElement("A");
                        rumantschL.innerHTML = "www.curs.ch";
                        rumantschL.href = "https://www.curs.ch/biera"; 
                        rumantschL.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(rumantschL);     

                        var foto = document.createElement("IMG");
                        foto.setAttribute("src", "./img/memories/foto3.jpg");
                        foto.setAttribute("alt", "wanderung");
                        foto.setAttribute("class", "added");
                        foto.setAttribute("id", "fotos");
                        document.getElementById("labels").appendChild(foto);

                        var rumantschT = document.createElement("P");
                        rumantschT.innerHTML = "In nossa regiun discurrina rumantsch e da quai eschna fich superbis. Precis quel character as chatta eir in nossa biera ed in tuot ils prodots da Bun Tschlin. No cumprain il malt dad üerdi in Engiadina, il malt da furmaint illa Val Müstair ed dafatta offa prodüaina per part in nossa regiun. E scha no fain üna biera speciala, sco nossa biera alvetern schi tscherchaina adüna prodots regiunals – in quel cas alveterns dal puschlav. <br> Be pro no daja s-chettas bieras grischunaisas. VIVA nossa regiun! Ed hajat incletta scha quist program es uossa in lingua tudais-cha. Nossa bieraria douvra eir ils giasts d’utrò per pudair surviver ed uschea inclegian eir quels alch. Però, no rumantsch savain daplü!"
                        rumantschT.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(rumantschT);

                                 
                        break;

                    case   'blue':   
                       
                            var h1 = document.createElement("H1");
                        h1.innerHTML = "Finde mich!";
                        h1.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(h1);
                        

                        var foto = document.createElement("IMG");
                        foto.setAttribute("src", "./illustrationen/goldenesBierglas.png");
                        foto.setAttribute("alt", "goldenesBierGlas");
                        foto.setAttribute("class", "added");
                        foto.setAttribute("id", "fotos");
                        foto.setAttribute("id", "gold");
                        document.getElementById("labels").appendChild(foto);

                        document.getElementById("hidden").style.width = "55vw";
                        document.getElementById("hidden").style.height = "53vh";

                        break;
                        
                    case   'konzert':   
                       
                            var h1 = document.createElement("H1");
                        h1.innerHTML = "Festival in Ramosch – MEGAWATT";
                        h1.setAttribute("class", "added");
                        document.getElementById("labels").appendChild(h1);
                        

                        var video = document.createElement("IFRAME");
                        video.setAttribute("class", "added"); 
                        video.setAttribute("frameborder", "0"); 
                        video.setAttribute('allowFullScreen', '');
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

                        document.getElementById("hidden").style.backgroundColor = '#847f62';
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
       case   'zanetti': 

                var zanetti = document.createElement("H1");
                zanetti.innerHTML = "Bacharia Zanetti";
                zanetti.setAttribute("class", "added");
                document.getElementById("labelsInfo").appendChild(zanetti);

                var bild = document.createElement("IMG");
                bild.setAttribute("src", "./img/logo/bzZanetti.jpg");
                bild.setAttribute("class", "added");
                document.getElementById("labelsInfo").appendChild(bild);
         
                var zanettiT = document.createElement("P");
                zanettiT.innerHTML = "Die Metzgerei Zanetti wurde 1992 gegründet. Neben dem Trockenfleisch, das nach einer eigenen Rezeptur hergestellt wird, hat sich die Bacharia auch auf die Veredelung von Wildfleisch spezialisiert. Die Spezialitäten sind Wurstwaren (Salsiz und Siedwürste) sowie Geräuchtes. <br> Die Produkte werden nach überliefertem Rezept mit viel Liebe und Sorgfalt zubereitet. Es werden nur beste Zutaten verwendet. Das Fleisch stammt so weit möglich aus Betrieben der Region."
                zanettiT.setAttribute("class", "added");
                document.getElementById("labelsInfo").appendChild(zanettiT);
         
                var zanettiA = document.createElement("P");
                zanettiA.innerHTML = "Bacharia Zanetti <br> Quadra Secha <br> 7556 Ramosch <br> Tel. +41 (0)81 864 86 50 <br> info@frischwild.ch"
                zanettiA.setAttribute("class", "added");
                document.getElementById("labelsInfo").appendChild(zanettiA);
         
                var websiteZ = document.createElement("A");
                websiteZ.innerHTML = " www.frisch-wild.ch";
                websiteZ.href = "http://www.frisch-wild.ch/"; 
                websiteZ.setAttribute("class", "added");
                document.getElementById("labelsInfo").appendChild(websiteZ); 

                var website = document.createElement("A");
                website.innerHTML = " www.buntschlin.ch";
                website.href = "https://buntschlin.ch/betriebe/bacharia-zanetti/#"; 
                website.setAttribute("class", "added");
                document.getElementById("labelsInfo").appendChild(website); 
         
               
                
         break;    
       case   'bieraEngiadinaisa':

       var bieraEngiadinaisa = document.createElement("H1");
       bieraEngiadinaisa.innerHTML = "Biera Engiadinaisa";
       bieraEngiadinaisa.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(bieraEngiadinaisa);

       var bild = document.createElement("IMG");
       bild.setAttribute("src", "./img/logo/beEngiadinaisa.jpeg");
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


       
       break;  
       case   'etter': 
       var etter = document.createElement("H1");
       etter.innerHTML = "Prodots Etter";
       etter.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(etter);

       var bild = document.createElement("IMG");
       bild.setAttribute("src", "./img/logo/peEtter.jpg");
       bild.setAttribute("class","added");
       document.getElementById("labelsInfo").appendChild(bild);

       var etterP = document.createElement("P");
       etterP.innerHTML = "Im Oktober 2000 wurde die BierVision Monstein AG gegründet, welche am 6. Juni 2001 in Monstein als die damals höchstgelegene Brauerei der Schweiz und erste Schaubrauerei des Kantons Graubünden den Betrieb aufnahm. Sie befindet sich in der ehemaligen Dorfsennerei, einem Gebäude, das vor über 100 Jahren errichtet worden ist und sich an zentraler Lage in der Mitte des Walserdorfes Monstein befindet. <br> Heute braut die BierVision Monstein AG aus kristallklarem Bergquellwasser, Schweizer Hopfen und unter anderem einheimischem Bio-Berggerstenmalz von Gran Alpin verschiedene Monsteiner Bierspezialitäten im Kleinformat. «Craft Beer» aus den Bergen sozusagen. "
       etterP.innerHTML = "Vom Baum, aus dem Kräutergarten oder von der Kuh: Im Weiler San Niclà rechts des Inn gibts Lebensmittel direkt vom Hof. <br><br>Konfitüren, Minzensirup, Johannisbeerlikör, eigene Salsize und eigener Käse: Bei Etters ist alles selbstgemacht und geht aus dem vielfältigen Bauern- betrieb hervor. Das Sortiment variiert je nach Saison."
       etterP.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(etterP);
       break;
       case   'standBioSchorta': 

       var standBioSchorta = document.createElement("H1");
       standBioSchorta.innerHTML = "Stand Bio Schorta";
       standBioSchorta.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(standBioSchorta);

       var bild = document.createElement("IMG");
       bild.setAttribute("src", "./img/logo/bsSchorta.jpg");
       bild.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(bild);

       var standBioSchortaT = document.createElement("P");
       standBioSchortaT.innerHTML = "Ein Bio-Betrieb mit langer Geschichte und exotischer Rinderherde in Tschlin. Die Schortas verkaufen ihre Lebensmittel direkt ab Hof, auch den preisgekrönten Bio-Schlaviner. <br> Schottische Hochlandrinder im Bündner Unterengadin? Das ist nur auf den ersten Blick ungewöhnlich. Ihre Genügsamkeit prädestiniert die Tiere geradezu für das karge Tal. Auf 1500 m ü.M. fühlen sie sich zottelig wohl."
       standBioSchortaT.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(standBioSchortaT);

       var addresse = document.createElement("P");
       addresse.innerHTML = "BS – Bio Schorta <br> Gian-Fadri und Pamela Schorta Curtins 2 <br> 7559 Tschli <br> Tel. +41 (0)79 265 24 32 www.bioschorta.ch" ;
       addresse.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(addresse);
       
       
       var website = document.createElement("A");
       website.innerHTML = "www.buntschlin.ch";
       website.href = "https://buntschlin.ch/betriebe/bio-schorta/#"; 
       website.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(website); 
       break;  
       case   'simmentaler':
        var simmentaler = document.createElement("H1");
        simmentaler.innerHTML = "Simmentaler Bier";
        simmentaler.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(simmentaler);

      var bild = document.createElement("IMG");
      bild.setAttribute("src", "./img/logo/mundart.png");
      bild.setAttribute("class", "added");
      document.getElementById("labelsInfo").appendChild(bild);

      var simmentalerT = document.createElement("P");
      simmentalerT.innerHTML = "Am Fusse des Wildstrubelmassivs im Simmental entsteht das Simmentaler Bier. Seit dem ersten Sud wird das Bier handwerklich, nach traditioneller Art gebraut und abgefüllt. <br> Die Simmentaler Brauerei setzt auf Innovationen und erbringt beste Dienstleistungen. Die Produkte überzeugen durch Qualität und sorgfältig ausgesuchte Rohstoffe. Die Partnerschaften mit Kunden, Mitarbeitern und Lieferanten sind für die Brauerei von zentraler Bedeutung und finden immer auf Augenhöhe statt. So entstehen zwischen den Anspruchsgruppen starke und langjährige Partnerschaften. "
      simmentalerT.setAttribute("class", "added");
      document.getElementById("labelsInfo").appendChild(simmentalerT);

      var bieraSorten = document.createElement("H2");
      bieraSorten.innerHTML = "Biersorten";
      bieraSorten.setAttribute("class", "added");
      document.getElementById("labelsInfo").appendChild(bieraSorten);

      var bieraSortenT = document.createElement("P");
      bieraSortenT.innerHTML = "Simmentaler Lager - Naturtrübes Lagerbier, untergärig <br> Simmentaler Märzen - Märzen - Kräftiges, naturtrübes Bier, untergärig <br> Simmentaler Red Ale - Red Ale Bier mit Irish Moos, obergärig <br> Mountain Pale Ale - IPA Bier mit Irish Moos, obergärig"
      bieraSortenT.setAttribute("class", "added");
      document.getElementById("labelsInfo").appendChild(bieraSortenT);

      var website = document.createElement("A");
      website.innerHTML = "www.simmentalerbier.ch <br>";
      website.href = "https://simmentalerbier.ch/"; 
      website.setAttribute("class", "added");
      document.getElementById("labelsInfo").appendChild(website); 

      var instagram = document.createElement("A");
      instagram.innerHTML = "Instagram <br>";
      instagram.href = "https://www.instagram.com/simmentaler_bier/"; 
      instagram.setAttribute("class", "added");
      document.getElementById("labelsInfo").appendChild(instagram); 

      var facebook = document.createElement("A");
      facebook.innerHTML = "Facebook";
      facebook.href = "https://www.facebook.com/simmentalerbier"; 
      facebook.setAttribute("class", "added");
      document.getElementById("labelsInfo").appendChild(facebook); 
       break;
       case   'paurariaRiatsch':
        var paurariaRiatsch = document.createElement("H1");
        paurariaRiatsch.innerHTML = "Pauraria Riatsch";
        paurariaRiatsch.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(paurariaRiatsch);

       var bild = document.createElement("IMG");
       bild.setAttribute("src", "./img/logo/prRiatsch.jpg");
       bild.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(bild);

       var paurariaRiatschT = document.createElement("P");
       paurariaRiatschT.innerHTML = "Berge, feinste Kräuter, glückliche Kühe: Das steckt in den Bio-Alpprodukten aus Vnà. Und nach Wunsch gibts auch eine medizinische Massage dazu.<b>Dreitausend Kilo Käse produzieren Daniela und Fadri Riatsch jede Saison auf der Alp Pradigiant oberhalb von Vnà. Er gilt als einer der besten seiner Art und begrüssen im kleinsten Käseladen der Welt Ihre Kundschaft: In einem Kühlschrank vor dem Hof.<b>"
       paurariaRiatschT.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(paurariaRiatschT);

       var paurariaRiatschA = document.createElement("P");
       paurariaRiatschA.innerHTML = "Daniela und Fadri Riatsch Padval 211 <br> 7557 Vnà <br> Tel. +41(0)81 866 32 83 <br> bioagricultura@hotmail.com "
       paurariaRiatschA.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(paurariaRiatschA);

       var website = document.createElement("A");
       website.innerHTML = "www.buntschlin.ch";
       website.href = "https://buntschlin.ch/betriebe/pauraria-riatsch/#"; 
       website.setAttribute("class", "added");
       document.getElementById("labelsInfo").appendChild(website); 
       break;
    case 'mundart':

                      var mundart = document.createElement("H1");
                      mundart.innerHTML = "Mundart";
                      mundart.setAttribute("class", "added");
                      document.getElementById("labelsInfo").appendChild(mundart);
               
                     var bild = document.createElement("IMG");
                     bild.setAttribute("src", "./img/logo/mundart.png");
                     bild.setAttribute("class", "added");
                     document.getElementById("labelsInfo").appendChild(bild);
               
                     var mundartT = document.createElement("P");
                     mundartT.innerHTML = "Unser erster eigener Biersud Helles Mundart Hausbier Cler Seit langer Zeit träumt Matze von einer eigenen Bierkreation. Im Juni 2019 ging mit dem eigenen Biersud dieser Traum in Erfüllung und das Mundartbier «Cler», zu Deutsch hell, ist geboren. In Zusammenarbeit mit der Bieraria Tschlin ist ein helles Bier mit einer erfrischenden, leichten Zitrusnote entstanden. <br> Unser zweiter eigener Biersud Schwarzes Mundart Hausbier Dreggsch Nachdem das helle Mundartbier bei den Gästen so gut ankam, hatte Matze die Idee auch noch ein zweites eigenes Bier zu kreieren, aber dieses Mal ein Schwarzes. Nach einigen Versuchen zusammen mit der Bieraria Tschlin entstand das schwarze Mundartbier «Dreggsch». Was heisst Dreggsch? Matzes Frau, Fabrizia, hatte die Idee dieses Bier nach etwas aus Matzes Geburtsort Dresden zu benennen. Da man in Ostdeutschland zu einem schwarzen Bier Dreggsch (dreckig) sagt, wurde dieses Bier so getauft." 
                     mundartT.setAttribute("class", "added");
                     document.getElementById("labelsInfo").appendChild(mundartT);
               
                     var website = document.createElement("A");
                     website.innerHTML = "www.mundart-scuol.ch <br>";
                     website.href = "https://www.mundart-scuol.ch/"; 
                     website.setAttribute("class", "added");
                     document.getElementById("labelsInfo").appendChild(website); 
               
                     var instagram = document.createElement("A");
                     instagram.innerHTML = "Instagram <br>";
                     instagram.href = "https://www.instagram.com/mundartscuol/"; 
                     instagram.setAttribute("class", "added");
                     document.getElementById("labelsInfo").appendChild(instagram); 
               
                     var facebook = document.createElement("A");
                     facebook.innerHTML = "Facebook";
                     facebook.href = "https://www.facebook.com/mundartscuol"; 
                     facebook.setAttribute("class", "added");
                     document.getElementById("labelsInfo").appendChild(facebook); 
                     break;
      case 'matze':
        var matze = document.createElement("H1");
        matze.innerHTML = "«Cullas da Vnà» – Kugeln von Vnà";
        matze.setAttribute("class", "added");
        document.getElementById("labelsInfo").appendChild(matze);

        var matzeT = document.createElement("P");
        matzeT.innerHTML = "Cuschina Engiadinaisa - Engadiner Esskultur <br> Jede Familie hat ihre eigene Esstraditionen und die besten Familienrezepte werden von Generation zu Generation weitergegeben. Hier am Stand von Matze kommt ihr in den Genuss der 'Cullas da Vnà' - wie der Name bereits verrät, haben diese ihren Ursprung in Vnà. Für diejenigen von euch, die nicht genug davon bekommen, hier das Rezept zum selber machen! "
        matzeT.setAttribute("class", "added");
        document.getElementById("labelsInfo").appendChild(matzeT);

        var zutaten = document.createElement("H2");
        zutaten.innerHTML = "Zutaten";
        zutaten.setAttribute("class", "added");
        document.getElementById("labelsInfo").appendChild(zutaten);

      
        var zutatenU = document.createElement("UL");
        zutatenU.setAttribute("id","ul")
        zutatenU.setAttribute("class", "added");
        document.getElementById("labelsInfo").appendChild(zutatenU);

        var zutatenL = document.createElement("LI");
        zutatenL.innerHTML = "10 rohe Kartoffeln"
        zutatenL.setAttribute("class", "added");
        document.getElementById("ul").appendChild(zutatenL);

        var zutatenL1 = document.createElement("LI");
        zutatenL1.innerHTML = "200 g Speck"
        zutatenL1.setAttribute("class", "added");
        document.getElementById("ul").appendChild(zutatenL1);

        var zutatenL2 = document.createElement("LI");
        zutatenL2.innerHTML = "2 geräucherte Engadiner Würste"
        zutatenL2.setAttribute("class", "added");
        document.getElementById("ul").appendChild(zutatenL2);

        var zutaten3 = document.createElement("LI");
        zutaten3.innerHTML = "Salz, Gewürze"
        zutaten3.setAttribute("class", "added");
        document.getElementById("ul").appendChild(zutaten3);

        var zutatenL4 = document.createElement("LI");
        zutatenL4.innerHTML = "200 g Mehl"
        zutatenL4.setAttribute("class", "added");
        document.getElementById("ul").appendChild(zutatenL4);

        var zutatenL5 = document.createElement("LI");
        zutatenL5.innerHTML = "70 g Paniermehl"
        zutatenL5.setAttribute("class", "added");
        document.getElementById("ul").appendChild(zutatenL5);

        var zubereitung = document.createElement("H2");
        zubereitung.innerHTML = "Zubereitung";
        zubereitung.setAttribute("class", "added");
        document.getElementById("labelsInfo").appendChild(zubereitung);

        var zubereitungT = document.createElement("P")
        zubereitungT.innerHTML = "Die Kartoffeln schälen und mit der Bircherraffel fein raffeln. Gut abtropfen lassen. Speck und Würste in Würfeli schneiden, mit den Kartoffeln mischen. Mehl und Paniermehl dazugeben. Alles zusammen zu einem Teig vermischen, würzen. Mit 2 Esslöffeln oder mit beiden Händen Kugeln formen. Damit der Teig nicht klebt, Löffel oder Hände mit Wasser befeuchten. <br> Die Kugeln in siedendes Wasser geben. Wenn sie auftauchen, sind sie gar und man kann sie aus dem Wasser nehmen. In Butter goldgelb anbraten. <br> Reibkäse darüber streuen, mit Salat oder Gemüse servieren.";
        zubereitungT.setAttribute("class", "added");
        document.getElementById("labelsInfo").appendChild(zubereitungT);

        break;
      }
    }
//
function infosGeneral(){
 backToImg();
 backToMap();

  document.getElementById("hiddenInfoGeneral").style.display = "block";
  

    var infosGeneral = document.createElement("H1");
    infosGeneral.innerHTML = "Infos";
    infosGeneral.setAttribute("class", "added");
   document.getElementById("labelsInfo").appendChild(infosGeneral);
  
  
}

function gifStart(){
  var bild = document.getElementById("startBier");
  bild.setAttribute("src", "./illustrationen/startBier.gif");
}

//Overview Icons - popup Infotext desapear
    function backToImg(){
        document.getElementById('hidden').style.display = 'none';
        document.getElementById("hidden").style.width = "87vw";
        document.getElementById("hidden").style.height = "auto";

        document.getElementById("hidden").style.backgroundColor = '#847f62';

        $('#labels').empty();
    }

//Overview Map - Icons desapear
    function backToMap(){
        document.getElementById("hiddenInfo").style.display = "none";
        document.getElementById("hiddenInfoGeneral").style.display = "none";

        $('#labelsInfo').empty();
    }

//Informations about the hike
document.getElementById('bergmassiv').onclick = function(){
  document.getElementById('hoehenprofil').classList.toggle('fade');
}


 



