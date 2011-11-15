(function($) {
    /**
     * Toc module implementation.
     *
     * @author Daniel Koch
     * @namespace Tc.Module
     * @class Toc
     * @extends Tc.Module
     */
    Tc.Module.Toc = Tc.Module.extend({
        
        /**
         * Initializes the Toc module.
         * 
         * @method init
         * @return {void}
         * @constructor
         * @param {jQuery} $ctx the jquery context
         * @param {Sandbox} sandbox the sandbox to get the resources from
         * @param {String} modId the unique module id
         */
        init: function($ctx, sandbox, modId) {
            // call base constructor
            this._super($ctx, sandbox, modId);
        },
        
        /**
         * Hook function to load the module specific dependencies.
         *
         * @method dependencies
         * @return void
         */
        dependencies: function() {
            //this.require('jquery-ui-1.8.16.custom.min.js', 'plugin', 'onBinding');
        },
        
        /**
         * Hook function to do module specific stuff before binding the events (i.e. fetching some data).
         *
         * @method beforeBinding
         * @param {Function} callback the callback function which must be called at the end
         * @return void
         */
        beforeBinding: function(callback) {
            callback();
        },
        
        /**
         * Hook function to bind the module specific events.
         *
         * @method onBinding
         * @return void
         */
        onBinding: function() {
            console.log('Running Toc module javascript.');
            $( '.toc', this.$ctx ).accordion({
                
            });
        },
        
        /**
         * Hook function to do module specific stuff after binding the events (i.e. triggering some events).
         *
         * @method afterBinding
         * @return void
         */
        afterBinding: function() {
        
        }
        
    });
})(Tc.$);
