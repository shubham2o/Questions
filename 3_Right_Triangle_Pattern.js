// https://www.tutorialstonight.com/js/javascript-star-pattern#:~:text=Create%20a%20variable%20to%20store,the%20line%20and%20space%20in
console.log(`3. Right Triangle Pattern`);

function rightTrianglePattern() {
    let n = 5;
    let string = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            string += " ";
        }

        for (let k = 0; k < i; k++) {
            string += "*";
        }

        string += "\n";
    }

    console.log(string);
}

rightTrianglePattern();