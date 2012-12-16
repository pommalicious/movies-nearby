// Primary view for the app (contains all subviews and everything else).
// This is rendered on all routes.

define(['movies', 'views/MoviesView'], function(Movies, MoviesView) {
    Movies.views.Main = MoviesView.extend(function() {
        el: $('main-view'),
        template: 'text!templates/main.html',

        context: function() {
            return {
                
            }
        },

        events: {

        }


    });
});