(function(factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery', 'underscore', 'backbone'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		module.exports = factory(require('jquery'), require('underscore'), require('backbone'));
	} else {
		// Globals
		factory(jQuery, _, Backbone);
	}
}(function($, _, Backbone) {

	"use strict";

	var Bonegear = $.fn.bonegear = function() {
		console.log("Log: Bonegear function");
	};

	/**
	 * Bonegear Modal View
	 */
	Bonegear.AlertView = Backbone.View.extend({
		defaults: {
			title: "<strong>Hello World</strong>"
		},

		initialize: function(options) {
			console.log("Log: Bonegear AlertView initialize");
			options || (options = {});
			_.defaults(this, this.defaults);
			_.extend(this, _.pick(options, _.keys(this.defaults)));
		},

		className: "alert alert-warning",

		template: _.template("<%=title%>"),

		render: function() {
			var data = this.model ? this.model.toJSON() : {};
			var view = this;
			this.$el.html(this.template({
				title: _.template(this.title)(data)
			}));

			$("#alert-container").html(this.$el);

			return this;
		}
	});

}));