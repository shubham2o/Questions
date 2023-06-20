// https://www.tutorialstonight.com/js/javascript-star-pattern#:~:text=Create%20a%20variable%20to%20store,the%20line%20and%20space%20in
console.log(`2. Hollow Square Pattern`);

function hollowLineStar(n) {
    let star = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === n - 1) {
                star += "*";
            } else {
                if (j === 0 || j === n - 1) {
                    star += "*";
                } else {
                    star += " ";
                }
            }
        }
        star += "\n";
    }

    console.log(star);
}

hollowLineStar(5);