
define(['movies'], function(Movies) {

    var Router = Backbone.Router.extend({
        routes: {
            //'route': 'trigger',
            'home': 'loadHome',
            '*actions': 'default'
        },

        // Load the default view for when someone first arrives on the page
        loadHome: function() {
            console.log("We're home");
        },

        default: function() {
            this.navigate('#home', {trigger: true});
        }
    });

    return Router;

});