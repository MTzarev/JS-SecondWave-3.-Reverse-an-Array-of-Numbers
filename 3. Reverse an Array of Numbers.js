function reverseAnArrayOfNumbers(num, arr) {
let newArr = arr.slice(0,num).reverse();
let final=newArr.join(` `);
    console.log(final);
}
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);