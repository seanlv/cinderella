var cinderellaControllers = angular.module('cinderellaControllers', []);

var testData = [
    {"index": 0,
     "name": "数字测验",
     "total": 10,
     "exam": 5,
     "interval": 2,
     "data": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]},
    {"index": 1,
     "name": "拼音(韵母)测验",
     "total": 24,
     "exam": 8,
     "interval": 2,
     "data": ["a", "o", "e", "i", "u", "ü", "ai", "ei", "ui", "ao", "ou", "iu", "ie", "üe", "er", "an", "en", "in", "un", "ün", "ang", "eng", "ing", "ong"]},
    {"index": 2,
     "name": "拼音(声母)测验",
     "total": 23,
     "exam": 8,
     "interval": 2,
     "data": ["b", "p", "m", "f", "d", "t", "n", "l", "g", "k", "h", "j", "q", "x", "z", "c", "s", "r", "zh", "ch", "sh", "y", "w"]},
    {"index": 3,
     "name": "汉字测验",
     "total": 10,
     "exam": 5,
     "interval": 2,
     "data": ["上", "下", "左", "右", "东", "西", "南", "北", "前", "后"]}
  ];

cinderellaControllers.controller('TestListCtrl', function ($scope) {
  $scope.tests = testData;
});

cinderellaControllers.controller('TestDetailCtrl', function($scope, $routeParams) {
  var randArray = function(m, len) {
    m.sort(function() {
      return Math.random() - 0.5;
    });
    return m.slice(0, len);
  };

  var data = testData[$routeParams.testId];
  var examData = randArray(data.data, data.exam);
  var i = 0;
  var stop;

  $scope.show = {
    start: true,
    card: false,
    stop: false,
    result: false
  };

  $scope.card = {
    text: examData[0]
  };

  $scope.detail = examData;

  var updateCard = function() {
    i = i + 1;
    if (i < examData.length) {
      $scope.card.text = examData[i];
    } else {
      $scope.show.card = false;
      $scope.show.stop = true;

      clearInterval(stop);
      stop = undefined;
    };
  };

  $scope.start = function() {
    $scope.show.start = false;
    $scope.show.card = true;

    stop = setInterval(function() {
      $scope.$apply(updateCard);
    }, data.interval * 1000);
  };

  $scope.showDetail = function() {
    $scope.show.result = true;
  };

});