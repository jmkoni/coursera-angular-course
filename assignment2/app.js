(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .provider('ShoppingListCheckOff', ShoppingListCheckOffProvider)

  ToBuyController.$inject = ['ShoppingListCheckOff'];
  function ToBuyController(ShoppingListCheckOff) {
    var list = this;
    list.shoppingList = ShoppingListCheckOff.getToBuyItems();

    list.moveToBought = function(item, index) {
      ShoppingListCheckOff.moveItem(item,index)
    }

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOff'];
  function AlreadyBoughtController(ShoppingListCheckOff) {
    var list = this;
    list.boughtList = ShoppingListCheckOff.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var toBuyItems = [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "Chocolates",
        quantity: "5"
      },
      {
        name: "Cake",
        quantity: "1"
      }
    ];
    var boughtItems = [];


    service.moveItem = function (item, index) {
      toBuyItems.splice(index, 1);
      boughtItems.push(item);
    };

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };
  }

  function ShoppingListCheckOffProvider() {
    var provider = this;

    provider.$get = function () {
      var shoppingList = new ShoppingListCheckOffService();

      return shoppingList;
    };
  }
})();