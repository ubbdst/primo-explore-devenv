(function () {
    "use strict";
    'use strict';


    var app = angular.module('viewCustom', ['angularLoad']);

    /****************************************************************************************************/

        /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

        /*var app = angular.module('centralCustom', ['angularLoad']);*/

    /****************************************************************************************************/


/* class="bar alert-bar layout-align-center-center layout-row"*/ 
	/* add focus to search bar */
/* prm-topbar-after
prm-s */

app.component('prmSearchAfter',{
bindings: {parentCtrl: '<'},
controller: 'prmSearchAfterController',
template: '<p>hello world</b>'
});


app.controller('prmSearchAfterController',[ function() {
var vm = this;

setTimeout(function() {
if (detectIE() === false){

return;
}
else {

alert("prm-topbar-after");

/*var prmIeAlertBar = document.createElement("prm-alert-bar");
prmIeAlertBar.setAttribute("class", "flex");
prmIeAlertBar.setAttribute("flex", "");


var prmSearch = document.getElementsByTagName("prmSearch");

prmSearch.insertNode(prmIeAlertBar);

prmIeAlertBar.className = "bar alert-bar layout-align-center-center layout-row";
prmIeAlertBar.appendChild(document.createTextNode("Internet Explorer!"));
*/
return;
}
}, 500);
}

]);
/* add focus to search bar */ 

function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}

})();