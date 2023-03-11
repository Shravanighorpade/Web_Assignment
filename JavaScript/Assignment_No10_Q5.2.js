//while loop using switch statement

function Div(Num){
    let i=0;
 
    while(i<=Num.length-1){
       switch(true)
       {
         case ((Num[i]%3==0) && (Num[i]%8==0)):
             console.log(`${Num[i]} is Divisible by Both 3 & 8`);
             break;
         case(Num[i]%3==0):
             console.log(`${Num[i]} is Divisible by 3`);
             break;
         case(Num[i]%8==0):
             console.log(`${Num[i]} is Divisible by 8`);
             break;
         default:
             console.log(`${Num[i]} is not Divisible by Both 3 & 8`);
             break;
       }
     
     i++;
    }
 }
 
 const InputtedNumbers=[12,56,755,27,16,2,1104,65,88];
 var Res=Div(InputtedNumbers);
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 