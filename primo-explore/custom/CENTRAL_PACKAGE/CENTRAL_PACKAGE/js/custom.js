(function () {
    "use strict";
    'use strict';


    var app = angular.module('viewCustom', ['angularLoad']);

    /****************************************************************************************************/

        /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

        /*var app = angular.module('centralCustom', ['angularLoad']);*/

    /****************************************************************************************************/

	/* add focus to search bar */
app.component('prmSearchBarAfter',{
bindings: {parentCtrl: '<'},
controller: 'prmSearchBarAfterController',
template: ''
});


app.controller('prmSearchBarAfterController',[ function() {
var vm = this;

vm.focusOnSearchBar = function focusOnSearchBar(i){
if (i>3){
return;
};
setTimeout(function() {
var searchBarElement= document.querySelector('prm-autocomplete input');
if (searchBarElement){
searchBarElement.focus();
return;
}
vm.focusOnSearchBar(i+1);
}, 500);
};
vm.focusOnSearchBar();
}])();
/* add focus to search bar */ 

})();