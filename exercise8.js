let myMap = new Map();
myMap.set('11', 'prop1');
myMap.set(23, 'prop2');
myMap.set(NaN, 'prop3');
myMap.set(undefined, 'prop4');
myMap.set(1.5, '55');

for(let name of myMap.keys()) {
    console.log(`Ключ — ${name}, значение — ${myMap.get(name)}`)
}