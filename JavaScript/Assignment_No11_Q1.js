function Palindrone(string) {
    var str = string;
    var rev = "";
    for (let i = string.length - 1; i >= 0; i--) {
        rev += string[i];
    }
    if (str == rev) {
        console.log("Given String is Palindrome");
    }
    else {
        console.log("Given String is not Palindrome");
    }
}
const strFirst = "NITIN";
log(Palindrone(strFirst));
const strSecond = "123454321";
Palindrone(strSecond);
const strThird = "madam";
Palindrone(strThird);
const strFourth = "Hello";
Palindrone(strFourth);
