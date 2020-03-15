/*
В спецификации ES2015 (ES6) нам представили два новых оператора для создания переменных: let и const.
В JavaScript есть два типа области видимости — глобальная и локальная
var VS let
var: function scoped
let: block scoped
Область видимости var переменных ограничена функцией, если вы обратитесь к переменной до её объявления, то получите undefined.
const и let ограничены блоком, а попытка обратится к переменной до её объявления, вернётся ошибкой ReferenceError.
 И наконец, разница между let и const в том, что в первом случае вы можете изменить значение переменной, а во втором нет.
 перейдем к примеру
 */

const discountPricesL = (pricesL, discountL) =>{
    let discountedL = []; // тоже на весь блок функции
    for (let a = 0; a < pricesL.length; a++) {
        let discountedPriceL = pricesL[a] * (1 - discountL);
        let finalPriceL = Math.round(discountedPriceL * 100) / 100;
        discountedL.push(finalPriceL)
    }// а && discountedPriceL && finalPriceL видны только до этой скобки
    console.log(a); // a is not defined
    console.log(discountedPriceL); // discountedPriceL is not defined
    console.log(finalPriceL); // finalPriceL is not defined
    return discountedL
}
discountPricesL([100, 200, 300], .5) ;
/*
если что-то за блоком функции попробовать посмотреть через console.log()
получим ничего ибо let ограничивает видимость от скобки до скобки {}
поэтому в функциях лучше использовать let
 */
const discountPrices = (prices, discount) => {
    var discounted = []; //видно на весь блок функции
    for (var i = 0; i < prices.length; i++) {
        var discountedPrice = prices[i] * (1 - discount);
        var finalPrice = Math.round(discountedPrice * 100) / 100
        discounted.push(finalPrice)
    }
    console.log(i) ;// 3
    console.log(discountedPrice); // 150
    console.log(finalPrice); // 150
    return discounted
}// i && discountedPrice && finalPrice видны только до этой скобки
discountPrices([100, 200, 300], .5) ;
/*
Что хочется сказать , var как по мне устарело для константный значений используем const для тех которые будем изменять let
так же let убирает проблему с повторяющемися переменными.
 */