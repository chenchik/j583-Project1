var app = angular.module('tabs', []);

app.controller('TabsController', function() {

    this.activeTab = 'bluesteel';

    this.setActiveTab = function(str) {
        this.activeTab = str;
    }

});