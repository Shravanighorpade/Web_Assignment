//Using for in loop with switch statement

const InputtedNumbers = [12, 56, 755, 27, 16, 2, 1104, 65, 88];

for (let i in InputtedNumbers) {
    switch (true) {
        case ((InputtedNumbers[i] % 3 == 0) && (InputtedNumbers[i] % 8 == 0)):
            console.log(`${InputtedNumbers[i]} is Divisible by both 3 & 8`);
            break;
        case (InputtedNumbers[i] % 3 == 0):
            console.log(`${InputtedNumbers[i]} is Divisible by only 3`);
            break;
        case (InputtedNumbers[i] % 8 == 0):
            console.log(`${InputtedNumbers[i]} is Divisible by only 8`);
            break;
        default:
            console.log(`${InputtedNumbers[i]} is not Divisible by both 3 & 8`);
            break;
    }
}