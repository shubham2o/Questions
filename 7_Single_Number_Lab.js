// https://codedamn.com/problem/0B_jWlIvPGPNoe8tlA5UH

console.log(`7. 
Single Number Lab`);

function singleNumber(num) {
    let result = 0;

    for (const n of num) {
        result ^= n;
    }

    return result;
}

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));