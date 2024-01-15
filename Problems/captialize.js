function captialize(str){
  var _strArr = str.split('');
  var current,previous;
  current = 0;
  previous = -1;

  while(current < _strArr.length){
    if(/\s/g.test(_strArr[previous]) || current === 0){
        _strArr[current] = _strArr[current].toUpperCase();
    }
    previous = current
    current = current + 1;
  }  
  console.log(_strArr.join(''));
}

captialize('this is my new function');