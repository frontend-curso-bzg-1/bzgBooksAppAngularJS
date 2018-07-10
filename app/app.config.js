'use strict';

angular.
  module('bzgBooksApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/books', {
          template: '<book-list></book-list>'
        }).
        when('/books/:bookId', {
          template: '<book-detail></book-detail>'
        }).
        otherwise('/books');
    }
  ]);