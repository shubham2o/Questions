// https://www.tutorialstonight.com/js/javascript-star-pattern#:~:text=Create%20a%20variable%20to%20store,the%20line%20and%20space%20in
console.log(`1. Square Star Pattern in Javascript`);

function squareStarPattern(n) {
    let star = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            star += "*";
        }
        star += "\n"; 
    }
    console.log(star);
}

squareStarPattern(5);