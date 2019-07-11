/*
1
Create a function called sum 
that takes a single parameter n, 
and return the sum of all integers up to n starting from 0

Ex: sum(2); => 2 + 1 + 0 => 3 
Ex: sum(5); => 5 + 4 + 3 + 2 + 1 + 0 => 15

*/
function sum(n) {
    if (n === 0) {
        return 0;
    }
    return n + sum(n - 1);
    // your code here 
}
console.log(sum(2));
console.log(sum(5));

/*
2
Create a function called factorial 
that takes a single parameter n, 
and return the product of all integers up to n starting from 1

Ex: factorial(2); => 2 * 1 => 6 
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24 

*/
function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
    // your code here 
}
console.log(factorial(2));
console.log(factorial(4));

/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space

Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/
function repeatStr(str, num) {
    if (num === 1) {
        return "to ";
    }
    return str + repeatStr("str", num - 1);
}
console.log(repeatStr("to ", 2))
    /*
    4
    Create a function called fibon
    that takes 1 parameter a number,
    and return the fibonacci for this number

    Ex: fibon(7); => 21
    Ex: fibon(2); => 2
    Ex: fibon(1); => 1
    Ex: fibon(0); => 1

    fib(n): 1 1 2 3 5 8 13 21
            | | | | | |  |  |
    n:      0 1 2 3 4 5  6  7
    */


/*
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/
function sum2(num1, num2) {
    if (num1 === num2) {
        return num2;

    }
    return num1 + sum2(num1 + 1, num2);
}
console.log(sum2(4, 5));
console.log(sum2(3, 6));




// */
/*
5
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/


/*
6
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
Important: the stop condition should be [somthing=== 0]
Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/
var x = 0;
var n = 0;

function repeatStr2(str1, str2) {
    if (n === 0)
        x = str2.length;
    n = n + 1;
    if (x === 0)
        return "";
    x = x - 1;
    return str1 + " " + (repeatStr2(str1, str2));
}
console.log(repeatStr2("ro", "cc"))

/*
7
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
the second one ^ the third one
Ex: multiOf(4,3,10); => 4000
Ex: multiOf(6,2,4); => 96
*/
function multiOf(num1, num2, num3) {
    if (num3 === 0) {
        return num1;
    }
    return num2 * multiOf(num1, num2, num3 - 1);

}
console.log(multiOf(4, 10, 3));


/*
6
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
Important: the stop condition should be [somthing=== 0]
Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/



/*
8
Create a function called muti2
that take two parameter
and will return the multiplication from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/
function multi2(num1, num2) {
    if (num1 === num2) {
        return num1;

    }
    return num2 * multi2(num1, num2 - 1);

}
console.log(multi2(4, 5));
console.log(multi2(3, 6));
/*



// // /*/
// *
// 8
// Create a
// function called muti2
// that take two parameter
// and will
// return the multiplication from the first number to the second number
// Ex: muti2(4, 5); => 4 * 5 => 20
// Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360 *
//     /


/*
9
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/

function numberBetweenUs(x, y) {
    if (x === (y - 2)) {
        return y - 1;
    }

    return (x + 1) + ", " + numberBetweenUs(x + 1, y);
}
console.log(numberBetweenUs(2, 8));
console.log(numberBetweenUs(1, 3));
console.log(numberBetweenUs(1, 20));











/*
10
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 need to ahve "done"
between each number a comma and space
** you need to use recursion
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/
function countDown(num) {
    if (num === 0) {
        return "done"
    }
    return num + ", " + countDown(num - 1)
}
console.log(countDown(5))
    /*
    11
    Write a function called multiplication2
    that takes two parameters
    and return the multiplication of them
    you need to use only sum
    multiplication2(5,4) => 20
    multiplication2(2,8) => 16
    multiplication2(7,6) =>  42
    */
function multiplication2(num1, num2) {
    if (num2 === 0) {
        return 0;

    }
    return num1 + multiplication2(num1, num2 - 1);

}
console.log(multiplication2(5, 4))
    /*
    11
    Write a function called mod2
    that takes two parameters
    and return the module of them
    without using %
    mod2(5,4) => 1
    mod2(2,8) => 2
    mod2(7,4) => 3
    */
function mod2(num1, num2) {
    if (num1 - num2 === 0) {
        return 0

    } else if (num1 <= num2) {
        return num1

    }
    return mod2((num1 - num2), num2)
}
console.log(mod2(10, 3))


/*
12
Write a function called mirror
that takes one parameter a string
and return the reversed string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
** Important: You should dint have extra space at the end
mirror("school") => "loohcs"
mirror("car") => "rac"
mirror("maDrasa") => "asarDam"
*/
function mirror(str) {
    var num = str.length;
    if (num === 0) {
        return ""
    }


    return ((str.slice(num - 1)) + (mirror(str.slice(0, num - 1))))

}
console.log(mirror("hello"))


var str = "hello"
var y = str.length;
var z = (str.slice((y - 1)))

console.log(z.toUpperCase());
var w = z.toUpperCase();

if ("w" !== "W") { console.log("not equal") }
/*
13
Write a function called mirrorCaseAlso
that takes one parameter a string
and return the reversed string order
and the lower case to upper case
and the upper case to lower case
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
** Important: You should dint have extra space at the end
mirrorCaseAlso("sChOol") => "LOoHcS"
mirrorCaseAlso("THOR") => "roht"
mirrorCaseAlso("BaBa") => "AbAb"
*/
function mirrorCaseAlso(str) {
    var num = str.length;
    if (num === 0) {
        return ""
    }

    var w = (str.slice(num - 1));


    if (w === w.toUpperCase()) {
        var q = w.toLowerCase();
    } else {
        var q = w.toUpperCase();
    }


    return (q + (mirrorCaseAlso(str.slice(0, num - 1))))
}

console.log(mirrorCaseAlso("Hello"));

// w = "o"
// if (w === w.toUpperCase()) {
//     w.toLowerCase();
// } else {
//     w.toUpperCase();
// }

/*
14
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
repeatChar("schOol","o") => 2
repeatChar("school","a") => 0
repeatChar("School","s") => 1
try more case by yourself
*/
var c = 0;

function repeatChar(str1, str2) {
    var num = str1.length;

    if (num === 0) {
        var y = c;
        c = 0;
        return y
    }

    var w = (str1.slice(num - 1));
    var q = w.toLowerCase();
    var e = str2.toLowerCase();

    if (e === q) {
        c = c + 1;
    }


    return ((repeatChar(str1.slice(0, num - 1), str2)))
}


/*
15
Write a function called repeatChar2
that takes two parameters
and return the times that this char
wit case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
repeatChar2("schOol","o") => 1
repeatChar2("school","a") => 0
repeatChar2("School","S") => 1
try more case by yourself
*/

var c = 0;

function repeatChar2(str1, str2) {
    var num = str1.length;

    if (num === 0) {
        var y = c;
        c = 0;
        return y
    }

    var w = (str1.slice(num - 1));
    // var q = w.toLowerCase();
    // var e = str2.toLowerCase();

    if (w === str2) {
        c = c + 1;
    }


    return ((repeatChar2(str1.slice(0, num - 1), str2)))
}