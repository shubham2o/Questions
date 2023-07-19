// https://codedamn.com/problem/TQT2z__OZ6fZkcw9TgWhe

console.log(`27.
Find the Difference of Two Arrays`);

function findDiffTwoArr(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const diff1 = [...set1].filter(x => !set2.has(x));
    const diff2 = [...set2].filter(x => !set1.has(x));

    console.log(diff1, diff2);
}

findDiffTwoArr([1, 2, 3], [2, 4, 6]);
findDiffTwoArr([1, 2, 3, 3], [1, 1, 2, 2]);