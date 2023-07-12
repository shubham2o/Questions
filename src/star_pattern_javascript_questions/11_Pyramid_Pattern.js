// https://www.tutorialstonight.com/js/javascript-star-pattern#:~:text=Create%20a%20variable%20to%20store,the%20line%20and%20space%20in

console.log(`11. 
Pyramid Pattern`);

function pyramidPattern() {
    let n = 5;
    let string = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            string += " ";
        }

        for (let k = 0; k < 2 * i - 1; k++) {
            string += "*";
        }

        string += "\n";
    }

    console.log(string);
}

pyramidPattern();