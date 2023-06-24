// https://www.tutorialstonight.com/js/javascript-star-pattern#:~:text=Create%20a%20variable%20to%20store,the%20line%20and%20space%20in

console.log(`5. 
Downward Triangle Star Pattern`);

function downwardTriangleStarPattern() {
    let n = 5;
    let star = "";

    for (let i = 0; i < n; i++) {
        for (let k = 0; k < n - i; k++) {
            star += "*";
        }

        star += "\n";
    }

    console.log(star);
}

downwardTriangleStarPattern();