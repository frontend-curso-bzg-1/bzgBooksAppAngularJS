'use strict';

angular.
  module('core.book').
  factory('Book', ['$resource',
    function($resource) {
      return $resource('data/books.json', {}, {
        query: {
          method: 'GET',
          params: {id: ''},
          isArray: true
        }
      });
    }
  ]);