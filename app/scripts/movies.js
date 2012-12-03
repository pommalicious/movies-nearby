
define(['router'], function(Router) {

    var Movies = _.extend(Movies || {}, {
        root: "/h",
        Models: {},
        Collections: {},
        Views: {},
        Routers: {},
        AppView: {
            setView: function(viewName, element, view) {
                // TODO
            }
        },

        initialize: function() {
            console.log('And we\'re up and running');
        }

    });

    return Movies;
    

});
