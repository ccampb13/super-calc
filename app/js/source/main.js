(function(){
    'use strict';

    $(document).ready(initialize);

    function initialize(){
      $('#title').click(title);
      $('.number').click(number);
      $('.clear').click(clear);
      $('.decimal').click(decimal);
      $('.sign').click(sign);
      $('.push').click(push);
      $('.operator').click(operator);
    }

    function operator (){
      var op = $(this).data('op');
      var x  = $('#queue > div:nth-child(1)').text() *1;
      var y  = $('#queue > div:nth-child(2)').text() *1;
      switch(op){
        case 'add':
          var add = x + y;
          $('#display').text(add);
          break;
        case 'sub':
          var sub = y -x;
          $('#display').text(sub);
          break;
        case 'mul':
          var mul = x * y;
          $('#display').text(mul);
          break;
        case 'div':
          var div = y / x;
          $('#display').text(div);
          break;
        case 'root':
          var root = Math.sqrt(x);
          $('#display').text(root);
          break;
        case 'fac':
          var fac = factorial(x);
          $('#display').text(fac);
          break;
        case 'exp':
          var exp = Math.pow(y,x);
          $('#display').text(exp);
          break;
        case 'sum':
          var sum = summation();
          $('#display').text(sum);
          break;


      }
    }

    function summation (){
      var total = 0;

      $('#queue > div').each(function(index,div){
        var x = div.textContent * 1;
        total += x;

      });
        return total;
    }

    function factorial (){
      var sum = 1;
      var x = $('#queue > div:nth-child(1)').text() *1;
      for(var i =2; i <= x; i++){
        sum *=i;
      }
      return sum;
    }

    function push (){
      var display = $('#display').text();
      $('#display').text(0);
      var $div = $('<div>');
      $div.text(display);
      $('#queue').prepend($div);
    }

    function title (){
      var display= $('#calculator').css('display');

      if(display === 'none'){
        $('#calculator').fadeIn();
      } else {
      $('#calculator').fadeOut();
      }
    }

    function number(){
    var num = this.textContent;
    var output = $('#display').text();

    if(output === '0'){
      output = num;
    } else {
      output += num;
    }
    $('#display').text(output);

  }
    function clear(){
      var type = this.textContent;

      if(type === 'Clear'){
        $('#display').text(0);
      } else {
        $('#queue').empty();
        $('#display').text(0);
      }
    }

    function decimal(){
    var display = $('#display').text();
    var noDecimal = display.indexOf('.') === -1;

    if(noDecimal){
      $('#display').text(display + '.');

    }
  }

    function sign(){
      var display = $('#display').text();
      $('#display').text(display * -1);
    }
})();
