(function (window) {
    'use strict';
    var App = window.App || {};

    function DataStore() {
        console.log('running datastore function');
        this.data = {};
    }

    App.DataStore = DataStore;
    window.App = App;
})(window);