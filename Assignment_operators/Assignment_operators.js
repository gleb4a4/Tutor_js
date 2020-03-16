/*
начнем пожалуй с выраженией +=,-=,*=,/=,%=
 */
let a = 2;
let b = 5;
a+=5; // альтернативная запись a= a+5
b-=5; // alternate b = b - 5
console.log(a);
console.log(b);

// инкремент
let c = 10;
c++; // или a = a + 1; или a += 1;
console.log(c) // 11

// декремент
let d = 10;
d--;  // или a = a - 1; или a -= 1;
console.log(d); // 9

// постфиксная форма
let n=10;
let g = n++; // переменная n = 11, переменная g = 10
console.log(n); // 11
console.log(g); // 10

// префиксная форма
let sa = 10
let j = ++sa; // переменная a = 11, переменная b = 11
console.log(sa); // 11
console.log(j); // 11