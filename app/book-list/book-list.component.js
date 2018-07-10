'use strict';

// Register `bookList` component, along with its associated controller and template
angular.
  module('bookList').
  component('bookList', {
    templateUrl: 'book-list/book-list.template.html',
    controller: ['$http', '$routeParams',
      function BookListController($http, $routeParams) {
        var self = this;

        $http.get('data/books.json').then(function(response) {          
            self.books = response.data.items;
        });
      }
    ]
  });