// https://www.tutorialstonight.com/js/javascript-star-pattern#:~:text=Create%20a%20variable%20to%20store,the%20line%20and%20space%20in
console.log(`6. Hollow Triangle Star Pattern`);

function hollowTriangleStarPattern() {
    let n = 6;
    let string = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (i === n) {
                string += "*";
            } else {
                if (j == 0 || j == i - 1) {
                    string += "*";
                } else {
                    string += " ";
                }
            }
        }

        string += "\n";
    }

    console.log(string);
}

hollowTriangleStarPattern();