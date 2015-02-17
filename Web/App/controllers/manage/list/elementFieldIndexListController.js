//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

(function () {
    'use strict';

    var controllerId = 'elementFieldIndexListController';
    angular.module('main')
        .controller(controllerId, ['elementFieldIndexService',
            'logger',
			elementFieldIndexListController]);

    function elementFieldIndexListController(elementFieldIndexService,
        logger) {
        logger = logger.forSource(controllerId);

        var vm = this;
        vm.deleteElementFieldIndex = deleteElementFieldIndex;
        vm.elementFieldIndexSet = [];

        initialize();

        function initialize() {
            getElementFieldIndexSet();
        };

        function deleteElementFieldIndex(elementFieldIndex) {
            elementFieldIndexService.deleteElementFieldIndex(elementFieldIndex);

            elementFieldIndexService.saveChanges()
                .then(function () {
                    vm.elementFieldIndexSet.splice(vm.elementFieldIndexSet.indexOf(elementFieldIndex), 1);
                    logger.logSuccess("Hooray we saved", null, true);
                })
                .catch(function (error) {
                    logger.logError("Boooo, we failed: " + error.message, null, true);
                    // Todo: more sophisticated recovery. 
                    // Here we just blew it all away and start over
                    // refresh();
                })
        };

        function getElementFieldIndexSet() {
            elementFieldIndexService.getElementFieldIndexSet(false)
			    .then(function (data) {
                    vm.elementFieldIndexSet = data;
                });
        }
    };
})();