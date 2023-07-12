// https://codedamn.com/problem/rXlToRlABlfi9kMDbua6F

console.log(`24. 
Array Wrapper Class`);

class ArrayWrapperClass {
    constructor(nums) {
        this.nums = nums;
    }

    valueOf() {
        return this.nums.reduce((a, b) => a + b, 0);
    }

    toString() {
        return `[${this.nums.join(",")}]`;
    }
}

const obj1 = new ArrayWrapperClass([1, 2]);
const obj2 = new ArrayWrapperClass([3, 4]);

console.log(obj1 + obj2);
console.log(obj1.valueOf());
console.log(obj2.toString());