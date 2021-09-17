var fruits = ['Virtual Drives', 'Physical Drives'];
var text = 'erherhe rhe Virtual Drives : 5 e12135 Virtual Drives   : 9 Physical Drives : 3 sfsfdsgery';

function getProp(text, ary) {
  var result = [];
  var obj = "";
  var a = 0;
  
  for (let name of ary) {
    var find = '('+ name + ')\\s+: (\\d+)';
    var regx =  new RegExp(find, 'g');
    result[a] = text.match(regx);
    console.log(result[a]);
    for (let res of result[a]) {
      var value = res.match(/\d+/g);
      obj += '"' + name + '": ' + value + ', ';
    }
    a += 1;
  }

  obj = obj.slice(0,-2);
  return '{' + obj + '}';
}

var test = getProp(text, fruits);
console.log(test);
