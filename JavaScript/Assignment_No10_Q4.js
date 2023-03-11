//For Maximum Number
function Max(Num) {
    var Max = 0;
    for (let i = 0; i < Num.length - 1; i++) {
        if ((i == 0) || (Max < Num[i])) {
            Max = Num[i];
        }
    }
    return Max;

}
//For Minimum Number
function Min(Arr) {
    var Min = 0;
    for (let i = 0; i < Num.length - 1; i++) {
        if ((i == 0) || (Min > Num[i])) {
            Min = Num[i];
        }
    }
    return Min;
}

//For 2nd Maximum Number
function Max2(Arr) {
    var max1 = 0;
    var max2 = 0;
    for (let i = 0; i < Arr.length - 1; i++) {
        if (i == 0) {
            max1 = Arr[i];
            max2 = Arr[i];
            continue;
        }
        if (Arr[i] > max1) {
            max1 = Arr[i];
        }
    }
    for (let i = 0; i < Arr.length - 1; i++) {
        if (Arr[i] > max2 && Arr[i] != max1) {
            max2 = Arr[i];

        }
    }
    return [max1, max2];
}


const Num = [12, 58, 65, 85, 35, 75, 6, 24];
var Res1 = Max(Num);
var Res2 = Min(Num);
var Res3 = Max2(Num);
console.log(Res1);
console.log(Res2);
console.log(Res3);