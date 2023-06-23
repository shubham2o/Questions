// https://www.tutorialstonight.com/js/javascript-star-pattern#:~:text=Create%20a%20variable%20to%20store,the%20line%20and%20space%20in
console.log(`2. Hollow Square Pattern`);

function straightStarLine(n) {
    let star = "";

    for (let i = 0; i < n; i++) {
        star += "*";
    }

    console.log(star);
}

function missingStarLine(n) {
    let star = "*";

    for (let i = 0; i < n - 2; i++) {
        star += " ";
    }

    star += "*";
    console.log(star);
}

function hollowSquarePattern(n) {
    straightStarLine(n);

    for (let i = 0; i < n - 2; i++) {
        missingStarLine(n);
    }

    straightStarLine(n);
}

hollowSquarePattern(5);