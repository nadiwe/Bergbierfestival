// Cookie-Einwilligung: Google Tag Manager wird nur nach Zustimmung geladen.
// Die Wahl wird im Browser gespeichert ("ja" / "nein").
(function () {
  var SCHLUESSEL = 'cookieEinwilligung';
  var GTM_ID = 'GTM-NPCF94L';

  function lesen() {
    try { return localStorage.getItem(SCHLUESSEL); } catch (e) { return null; }
  }

  function speichern(wert) {
    try { localStorage.setItem(SCHLUESSEL, wert); } catch (e) { }
  }

  function ladeGTM() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
    document.head.appendChild(script);
  }

  function zeigeBanner() {
    var banner = document.createElement('div');
    banner.id = 'cookieBanner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie-Einwilligung');
    banner.innerHTML =
      '<p>Wir möchten mit Cookies von Google auswerten, wie die Karte genutzt wird. ' +
      'Die Karte funktioniert auch ohne. <a href="./impressum.html#datenschutz">Mehr erfahren</a></p>' +
      '<div class="cookieKnoepfe">' +
      '<button type="button" id="cookieNein">Ablehnen</button>' +
      '<button type="button" id="cookieJa">Akzeptieren</button>' +
      '</div>';
    document.body.appendChild(banner);

    document.getElementById('cookieJa').onclick = function () {
      speichern('ja');
      banner.remove();
      ladeGTM();
    };
    document.getElementById('cookieNein').onclick = function () {
      speichern('nein');
      banner.remove();
    };
  }

  var wahl = lesen();
  if (wahl === 'ja') {
    ladeGTM();
  } else if (wahl !== 'nein') {
    zeigeBanner();
  }
})();
