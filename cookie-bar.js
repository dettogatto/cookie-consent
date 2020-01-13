/* Touch */

const CookieConsentText = 'Ciao Bello<br><br><br> :D Clicca <a href="https://cosmo.cat" target="_blank">qui</a> per volare';
const CookieConsentButtonText = "Voglio i biscotti!";
const CookieConsentExitText = "Esci";

/* Don't touch, pls */

function enableCookies(){
  localStorage.setItem("gatto-cookie-bar", "enabled");
  enableJavascriptFiles();
  removeCookieBar();
}

function disableCookies(){
  sessionStorage.setItem("gatto-cookie-bar", "disabled");
  removeCookieBar();
}

function removeCookieBar(){
  var bar = document.getElementById("gatto-cookie-bar");
  bar.parentNode.removeChild(bar);
}

function fireDOMContentLoaded(){
  setTimeout(function(){
    window.document.dispatchEvent(new Event("DOMContentLoaded", {
      bubbles: true,
      cancelable: true
    }));
  }, 300);
}


function enableJavascriptFiles(){
  var ref = window.document.getElementsByTagName( 'head' )[0];

  document.querySelectorAll('script[data-cookieconsent]').forEach(function(e){
    var script = window.document.createElement( 'script' );
    script.src = e.getAttribute("src");
    script.type = "text/javascript";
    ref.appendChild( script );
    e.parentNode.removeChild(e);

  });

  fireDOMContentLoaded();

}

var gattoDidDomLoadAlready = false;

document.addEventListener("DOMContentLoaded", function(event) {
  if(gattoDidDomLoadAlready){return true;}
  gattoDidDomLoadAlready = true;

  if(localStorage.getItem("gatto-cookie-bar") === "enabled"){
    enableJavascriptFiles();
  } else if(sessionStorage.getItem("gatto-cookie-bar") !== "disabled") {

    var bar = window.document.createElement( 'div' );
    bar.setAttribute("class", "gatto-cookie-bar");
    bar.setAttribute("id", "gatto-cookie-bar");

    var barText = window.document.createElement( 'div' );
    barText.innerHTML = CookieConsentText;
    barText.setAttribute("class", "gatto-cookie-bar-text");
    bar.appendChild(barText);

    var barBtnContainer = window.document.createElement( 'div' );
    barBtnContainer.setAttribute("class", "gatto-cookie-bar-btn-container");

    var barBtn = window.document.createElement( 'div' );
    barBtn.setAttribute("class", "gatto-cookie-bar-btn");
    barBtn.setAttribute("onClick", "enableCookies()");
    barBtn.innerHTML = CookieConsentButtonText;
    barBtnContainer.appendChild(barBtn);

    if(CookieConsentExitText){
      var barExit = window.document.createElement( 'div' );
      barExit.setAttribute("class", "gatto-cookie-bar-exit");
      barExit.setAttribute("onClick", "disableCookies()");
      barExit.innerHTML = CookieConsentExitText;
      barBtnContainer.appendChild(barExit);
    }

    bar.appendChild(barBtnContainer);



    document.body.appendChild(bar);

  }

});
