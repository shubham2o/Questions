// https://codedamn.com/problem/NEkcLlEzoewLmyIVPh_fv

console.log(`26. 
Missing Number Lab`);

function missingNumberLab(nums) {
    let expectedSum = (nums.length * (nums.length + 1)) / 2;
    let actualSum = nums.reduce((a, b) => a + b, 0);

    console.log(expectedSum - actualSum);
};

missingNumberLab([3, 0, 1]);
missingNumberLab([0, 1]);
missingNumberLab([9, 6, 4, 2, 3, 5, 7, 0, 1]);