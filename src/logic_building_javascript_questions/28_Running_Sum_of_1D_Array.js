// https://codedamn.com/problem/doqHK1kyJZkwErth8iHcA

console.log(`28. 
Running Sum of 1D Array`);

function runningSumOf1DArray(nums) {
    if (nums.length === 0) {
        return [];
    }

    const result = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        result.push(result[i - 1] + nums[i]);
    }

    return result;
};

console.log(runningSumOf1DArray([1, 2, 3, 4]));
console.log(runningSumOf1DArray([1, 1, 1, 1, 1]));
console.log(runningSumOf1DArray([3, 1, 2, 10, 1]));
console.log(runningSumOf1DArray([]));