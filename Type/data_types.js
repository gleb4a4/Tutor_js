//! Типы данных
/* 
 *1.number для любых чисел: целочисленных или чисел с плавающей точкой, целочисленные значения ограничены диапазоном ±253.
 *2.bigint для целых чисел произвольной длины.
 *3.string для строк. Строка может содержать один или больше символов, нет отдельного символьного типа.
 *4.boolean для true/false.
 *5.null для неизвестных значений – отдельный тип, имеющий одно значение null.
 * Обычно null используется для присвоения переменной «пустого» или «неизвестного» значения, а undefined – для проверок, была ли переменная назначена.
 *6.undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
 *7.object для более сложных структур данных.
 *8.symbol для уникальных идентификаторов.
 */
let Vnumber = 1;
let Vbigint = 1234567890123456789012345678901234567890n;
let Vstring = "hello world"
let Vbool = true;
let Vnull=null;
let Vund;
let Vobject = {};
let Vsymbol = Symbol("id");


console.log(typeof(Vnumber));
console.log(typeof(Vbigint));
console.log(typeof(Vstring));
console.log(typeof(Vbool));
console.log(typeof(Vnull));
console.log(typeof(Vund));
console.log(typeof(Vobject));
console.log(typeof(Vsymbol));
/*
Выведем это на Html страничку
 */
document.write("<br><b>Vnumber - "+ typeof(Vnumber)); //<b> делает все элементы жирными
document.write("<br>Vbigint - "+ typeof(Vbigint));
document.write("<br>Vstring - "+ typeof(Vstring));
document.write("<br>Vbool - "+ typeof(Vbool));
document.write("<br>Vnull - "+ typeof(Vnull));
document.write("<br>Vund - "+ typeof(Vund));
document.write("<br>Vobject - "+ typeof(Vobject));
document.write("<br>Vsymbol - "+ typeof(Vsymbol));
/*
Оператор typeof - возвращает тип аргумента. Это полезно, когда мы хотим обрабатывать значения различных типов по-разному или просто хотим сделать проверку.
У него есть два синтаксиса:
Синтаксис оператора: typeof x.
Синтаксис функции:   typeof(x).
 */
