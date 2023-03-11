//Using for loop with if...else ladder.

function Div(Num)
{
    for(let i=0;i<Num.length;i++)
    {
        if((Num[i]%3==0) && (Num[i]%8==0))
        {
        console.log(`${Num[i]} is Divisible By Both 3 and 8`);
        }
        else if(Num[i]%3==0)
        {
            console.log(`${Num[i]} is only Divisible By 3`);
        }
        else if(Num[i]%8==0)
        {
            console.log(`${Num[i]} is only Divisible By 8`);
        }
        else
        {
            console.log(`${Num[i]} is not Divisible By Both 3 and 8`);
        }
    }

}

const InputtedNumbers=[12,56,755,27,16,2,1104,65,88];
var Res=Div(InputtedNumbers);