(function () {
  'use strict';

  angular.module('ng1Sample', [])
    .controller('MainController', MainController);

  function MainController() {
    this.title='angular1 sample';
  }
})();
