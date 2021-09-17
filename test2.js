const fruits = ['Virtual Drives', 'Physical Drives'];
const text = 'erherhe rhe Virtual Drives : 5 e12135 Virtual Drives   : 9 Physical Drives : 3 sfsfdsgery';

function getProp(text, ary) {
  var result = [];
  var obj = [];
  var a = 0;
  
  for (let name of ary) {
    const find = '('+ name + ')\\s+: (\\d+)';
    const regx =  new RegExp(find, 'g');
    result[a] = text.match(regx);
    console.log(result[a]);
    for (let res of result[a]) {
      const value = res.match(/\d+/g);
      obj[name] = Number(value);
    }
    a += 1;
  }

  return obj
}

var test = getProp(text, fruits);
console.log(test);

for (let name of fruits) {
  console.log(name, " = ", Number(test[name]));
}
