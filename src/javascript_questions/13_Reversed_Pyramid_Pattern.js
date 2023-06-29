// https://www.tutorialstonight.com/js/javascript-star-pattern#:~:text=Create%20a%20variable%20to%20store,the%20line%20and%20space%20in

console.log(`13. 
Reversed Pyramid Pattern`);

function reversedPyramidPatter() {
    let n = 5;
    let string = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            string += " ";
        }

        for (let k = 0; k < 2 * (n - i) - 1; k++) {
            string += "*";
        }

        string += "\n";
    }

    console.log(string);
}

reversedPyramidPatter();