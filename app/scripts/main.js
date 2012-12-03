// RequireJS Configuration
var config = {
    // main.js
    deps: ["main"],

    // Define paths to common folders/libs
    paths: {
        /*
        transit: "libs/jquery.transit"
        */
    },

    // Use this for 3rd party libs that aren't AMD (requirejs) compatible
    shim: {
    }
};

require.config(config);

// Main app entry point: we start here
require(['Movies', 'router'], function(Movies, Router) {

    Movies.initialize();
    Movies.router = new Router();

    Backbone.history.start({
        root: Movies.root
    });

    console.log("Main started");

});

