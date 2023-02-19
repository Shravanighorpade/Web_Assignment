var num=10;
var temp=0;
for(let i=2;i<num;i++){
    if(num%i==0){
      temp++;
    }
}
if(num>0)
{
    console.log("Given Number is not prime");
}
else
{ 
    console.log("Given Number is  prime");
}