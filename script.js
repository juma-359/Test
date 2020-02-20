function incrementString(str) {
    if(isNaN(str.slice(-1))) {
      return `${str}1`;
    }
    else {
      var chars = str.split('') .filter(n => isNaN(n)).join('');
      var nums = str.split('') .filter(n => !isNaN(n)).join('');
      var incrementedNum = +nums + 1;
      if(nums.length > incrementedNum.toString().length) {
        var zeros = '';
        for(var i = 0; i < nums.length; i++) {
          zeros += '0';
        }
        return chars + (zeros + incrementedNum).slice(-nums.length);
      }
      else {
        return chars + incrementedNum;
      }
    }
  }
  
  
  console.log(incrementString('foo')); 
  console.log(incrementString('foo23')); 
  console.log(incrementString('foo0042'));
  console.log(incrementString('foo9')); 
  console.log(incrementString('foo0099')); 