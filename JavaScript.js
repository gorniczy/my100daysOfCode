function myFunct(parameter1, parameter2) {
  console.log(parameter1 * parameter2);
}

myFunct(3, 89);

//

var trueStory = "Smile, beautiful! ";
trueStory += "That's such a lovely day!";
trueStory.length;

//

var trueStory = "Smile, beautiful! ";
trueStory += "That's such a lovely day!";
trueStory[0];

//

console.log("My donut tastes like cigarettes.");

//

function someOtherF(a, b) {
  return(a + b) - 7;
}

someOtherF(45, 9);

//

function jLo(condition) {
  if (condition) {
    return "Taco taco";
  }
  return "Burrito burrito";
}

jLo(true);

// switch statement (selecting from many options)

function mySwitchFun(num) {
  var result;
  switch(num) {
    case 1:
    result = "pizza";
    break;
    case 2:
    result = "tomatoes";
    break;
    case 3:
    result = "cake";
    break;
  }
  return result;
}

mySwitchFun(3);

function otherF(val) {
  var answer;
  switch(val) {
    case "do":
    answer =  "don't";
    break;
    case "jump":
    answer = "fly";
    break;
    case "look":
    answer = "sniff";
    break;
    default:
    answer = "WTF";
  }
  return answer;
}

otherF("jump");

// Counting cards

var count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count += 1;
    break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count -= 1;
    break;
  }

  if (count > 0) {
    return count + " Bet";
  }

  else {
    return count + " Hold";
  }
}

cc(4); cc("J"); cc("A"); cc(6);


// lookup

function whatsInIt(val) {
  var result;
  var here = {
    "cow": "mu mu",
    "cat": "miau miau",
    "lover": "muah muah",
    "bunny": "khrum khrum"
  };
  result = here[val];
  return result;
};

whatsInIt("cat");

// Testing onject for properties

var me = {
  "looks": "good",
  "smells": "nice",
  "tastes": "sweet"
}

function testMe(props) {

  if(me.hasOwnProperty(props)) {
    return me[props];
  }

  return "Are you kidding?";

}

testMe("looks");

// nesting loops

function myLoop(arr) {
  var result = 2;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      result *= arr[i][j];
    }
  }
  return result;
}

myLoop([[2, 3],[8, 6],[4]]);

// while loops

var myArray = [];
var i = 0;
while(i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray);

// Profile lookup I figued out all by myself :)

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
var result = "";
    if(contacts[0].hasOwnProperty(prop)) {
    if(firstName === contacts[0].firstName) {
      result = contacts[0][prop];
    }
    else if(firstName === contacts[1].firstName) {
      result = contacts[1][prop];
    }
    else if(firstName === contacts[2].firstName) {
      result = contacts[2][prop];
    }
    else if(firstName === contacts[3].firstName) {
      result = contacts[3][prop];
    }
    else {
      result = "No such contact";
    }
   }
  else {
    result = "No such property";
  }
  return result;
}

lookUpProfile("Kristian", "lastName");

// creating private properties within object functions

var House = function() {
  var residents;
  this.declareResidents = function(howMany) {
    residents = howMany;
  };
  this.getResidents = function() {
    return residents;
  };
};

var myHouse = new House();
myHouse.declareResidents(100);
myHouse.getResidents();

// map functions

var oldVar = [1, 2, 3, 5];
var newVar = oldVar.map(function(val) {
return val * 2;
});
console.log(newVar);

// factorialize

function factorialize(num) {
  var newArr = [];
  for (var x=1; x<=num; x++) {
    newArr.push(x);
  }
  var result = newArr.reduce(function(previousVal, currentVal) {
    return previousVal*currentVal;
  }, 1);
  return result;
}

factorialize(2);

// palindrome

function palindrome(str) {
  var lc = str.toLowerCase();
  var rem = lc.replace(/\W|_/g, "");
  var newArray = rem.split("");
  var rev = newArray.reverse();
  var join = rev.join("");
  if (rem === join) {
    return true;
  }
  return false;
}

palindrome("E_ye");

// longest word

function wordLength(str) {
  var spl = str.split(" ");
  var arr = [];
  for (var i = 0; i < spl.length; i++) {
    var length = spl[i].length;
    arr.push(length);
  }
  arr.sort(function(a, b) {
    return a - b;
  })
  return arr[arr.length - 1];
}

wordLength("Go home hippies go!");

// title case a sentence

function titleCase(str) {
  var string = str.split(" ");
  var arr = [];
  for (var i = 0; i < string.length; i++) {
   var word = string[i][0].toUpperCase() + string[i].substring(1).toLowerCase();
   arr.push(word);
  }
  var result = arr.join(" ");
  return result;
}

titleCase("wHen TO feED A dOG");

// largest number in arrays

function largestOfFour(arr) {
  var large = [];
  for (i = 0; i < arr.length; i++) {
    var sort = arr[i].sort(function(a, b) {
      return a - b;
    });
    var result = arr[i][arr[i].length - 1];
    large.push(result);

  }
  return large;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// confirm the ending

function confirmEnding(str, target) {
  if (str.substring(str.length - target.length, str.length) === target) {
      return true;
      }
  return false;
}

confirmEnding("Bastian", "ian");

// repeat a substring

function repeatString (str, num) {
  if (num > 0) {var result = str.repeat(num);
    return result;}
  return "";
}

repeatString ("Moo", 4);

// truncate a substring

function truncateString(str, num) {
  if (str.length > num && num > 3) {
    return str.substring(0, num - 3) + "...";
  }
  else if (str.length == num) {
    return str;
  }
  else if (str.length < num) {
    return str;
  }
  return str.substring(0, num) + "...";
}

truncateString("Absolutely Longer", 2);

// chunky monkey

function chunkArrayInGroups(arr, size) {
  var myArr = [];
  var i = 0;
  if (arr.length/size <= size) {
    while (i < arr.length/size) {
    myArr.push(arr.slice(size * i, size * i + size));
    i++;
   }
  }
   else {
     while (i < arr.length/size) {
    myArr.push(arr.slice(size * i, size * i + size));
    i++;
      }
    }
    return myArr;
  }

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 3);

// slasher flick

function slasher(arr, howMany) {
  var newArr = [];
  for (i = howMany; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

slasher([1, 2, 3], 2);

// mutations

function mutation(arr) {
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toLowerCase());
  }
  var newNewArr = [];
  newNewArr.push(newArr[0]);
  newNewArr.push(newArr[1].split(""));
  var result = [];
  for (i = 0; i < newNewArr[1].length; i++) {
    result.push(newNewArr[0].indexOf(newNewArr[1][i]));
  }
    if (result.includes(-1) == false) {
      return true;
    }
    return false;
}

mutation(["Mary", "mary"]);

// falsy bouncer

function bouncer(arr) {
  var newArr = arr.filter(function(val) {return Boolean(val) == true;});
  return newArr;
}

bouncer([false, null, 0, NaN, undefined, ""]);

// seek and destroy

function destroyer(arr) {
  var target = arguments[0];
  var gun = [];
  for (i = 1; i < arguments.length; i++) {
    gun.push(arguments[i]);
  }
  var result = target.filter(function(val) {return val !== gun[0] && val !== gun[1] && val !== gun[2];});
  return result;
}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);

// where do I belong

function getIndexToIns(arr, num) {
  var newArr = arr.sort(function(a, b) {return a - b;});
  var here = [];
  for (i = 0; i < newArr.length; i++) {
  if (newArr[i] < num) {
  here.push(newArr[i]);
}
  }
  return here.length;
}

getIndexToIns([40, 60], 50);

// Ceasers Cipher

function rot13(str) { // LBH QVQ VG!
  var arr = str.split("");
  var result = [];
  var cipher = {
    "A": "N",
    "B": "O",
    "C": "P",
    "D": "Q",
    "E": "R",
    "F": "S",
    "G": "T",
    "H": "U",
    "I": "V",
    "J": "W",
    "K": "X",
    "L": "Y",
    "M": "Z",
    "N": "A",
    "O": "B",
    "P": "C",
    "Q": "D",
    "R": "E",
    "S": "F",
    "T": "G",
    "U": "H",
    "V": "I",
    "W": "J",
    "X": "K",
    "Y": "L",
    "Z": "M",
  };
for (i = 0; i < arr.length; i++) {
var lookup = arr[i];
  if (cipher[lookup]) {
result.push(cipher[lookup]);
  }
  else {
    result.push(arr[i]);
  }
}
  return result.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

// Function without return - does the work but return undefined

var digit = 0;
function bum() {
  digit = digit + 9000;
}

var result = bum();

console.log(result);
console.log(digit);
