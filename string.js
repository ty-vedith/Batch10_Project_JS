const stmt1="Shiwin";
const stmt2="The rustic charm";

console.log("toLowerCase() method");
console.log(stmt1.toLowerCase());

console.log("toUpperCase() method");
console.log(stmt2.toUpperCase());

console.log("charAt() method");
console.log(stmt1.charAt(2));

console.log("indexOf() method");
console.log(stmt2.indexOf('charm'));

console.log("concat() method");
console.log(stmt1.concat(' ',stmt2));

console.log("includes() method");
console.log(stmt1.includes('shiwin'));

console.log("replace() method");
console.log(stmt1.replace('TShiwin','SHIWIN'));

console.log("substring() method");
console.log(stmt2.substr(3,4));
