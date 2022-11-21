const body = document.getElementsByTagName("body")[0];
const a = body.getElementsByTagName("a")[0];
a.removeAttribute("target");

console.log(body);
console.log(a);