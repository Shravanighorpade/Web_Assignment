//Using for of loop with switch statements

const InputtedNumbers=[12,56,755,27,16,2,1104,65,88];

for(let Num of InputtedNumbers)
{
    switch(true)
    {
        case ((Num%3==0) && (Num%8==0)):
            console.log(`${Num} is Divisible by both 3 & 8`);
            break;
        case (Num%3==0):
            console.log(`${Num} is Divisible by only 3`);
            break;
        case (Num%8==0):
            console.log(`${Num} is Divisible by only 8`);
            break;
        default:
            console.log(`${Num} is not Divisible by both 3 & 8`);
            break;
    }
}
