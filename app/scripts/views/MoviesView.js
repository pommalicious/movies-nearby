// All views in this app extend this view
// This view should never itself be instantiated or rendered

define(['movies'], function(Movies) {
    var MovieView = Backbone.View.extend(function() {
        // These need to be set by views that extend this one
        el: '',
        template: '',

        initialize: function(options) {
            /*
            this._addedEventBindings = [];

            // Allows to augment initialization with additional options
            if (this.additionalInit) {
                this.additionalInit(options);
            }*/

        },

        render: function() {
            var data = {};
            var compiled = _.template(this.template, data);
            this.$el.append(compiled);
        },

    });

    return MovieView;
});