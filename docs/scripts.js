// Thank you Marinel Marian
angular
  .module('Demo', ['moment-picker'])
  .controller('DemoController', ['$scope', function () {
    var ctrl = this;
    ctrl.minDateString = moment('2019-04-15').format('YYYY-MM-DD');
    ctrl.maxDateString = moment('2020-08-15').format('YYYY-MM-DD');
    
    // disable all Sundays in the Month View
    ctrl.isSelectable = function (date, type) {
      //console.log(date);
      //console.log(type);
      var month = date.month()+1;
      return month < 6 || month > 7 
      //return type != 'day' || date.format('dddd') != 'Sunday';
    };
  }]);
