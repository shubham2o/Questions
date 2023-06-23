// https://www.tutorialstonight.com/js/javascript-star-pattern#:~:text=Create%20a%20variable%20to%20store,the%20line%20and%20space%20in
console.log(`4. Left Triangle Pattern`);

function leftTrianglePattern() {
    let n = 5;
    let string = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            string += "*";
        }

        string += "\n";
    }

    console.log(string);
}

leftTrianglePattern();