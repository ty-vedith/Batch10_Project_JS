const soaps = ['orange', 'charcoal', 'coffee'];

function iterate(soaps) {
  console.log(soaps);
}

soaps.forEach(iterate);

console.log("isArray() method");
console.log(Array.isArray(soaps));

console.log("includes() method");
console.log(soaps.includes('lavander'));

console.log("push() method");
console.log(soaps.push('sandle'));

console.log("pop() method");
console.log(soaps.pop());

console.log("Shift() method");
console.log(soaps.shift());

console.log("UnShift() method");
console.log(soaps.unshift('orange'));

console.log("Splice() method");
soaps.splice(1,0,'coffee');
console.log(soaps);

console.log("Slice() method");
console.log(soaps.slice(1,2));

console.log("Join() method");
console.log(soaps.join());

console.log("IndexOf() method");
console.log(soaps.indexOf('charcoal',1));
console.log(soaps.indexOf('charcoal'));

console.log("Map() method");
console.log(soaps.map(x => x+'!'));

console.log("Filter() method");
console.log(soaps.filter(word => word.length>4));