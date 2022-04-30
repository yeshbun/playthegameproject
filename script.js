function playTheGame() {
    result = window.confirm("Would you like to play?");

    if (!result) {
        alert("No problem, Goodbye");
    return;
    }

    let x = prompt("Choose a number between 0 and 10")

    if (isNaN(x)) {
        alert("Sorry Not a number, Goodbye");
    return;
    }

    if (x > 9 || x < 0) {
        alert("Sorry it’s not a good number, Goodbye");
    return;
    }

    let computerNumber = Math.floor(Math.random() * 10);
    //test(x, computerNumber);
    return;

}
