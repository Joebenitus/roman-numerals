// Business Logic
// 

function toRomanNumeral(number){
  // if (1000 /  === 0){
  //   return "M";
  // }
  let arrayNumeral = [];
  //const mCount = number / 1000;
  for (let mCount = 0; mCount < parseInt(number / 1000); mCount++) {
    arrayNumeral.push("M");
  }
  number %= 1000;
  for (let dCount = 0; dCount < parseInt(number / 500); dCount++){
    arrayNumeral.push("D")
  }
  number %= 500;
  for (let cCount = 0; cCount < parseInt(number / 100); cCount++){
    arrayNumeral.push("C")
  }
  number %= 100;
  for (let lCount = 0; lCount < parseInt(number / 50); lCount++){
    arrayNumeral.push("L")
  }
  number %= 50;
  for (let xCount = 0; xCount < parseInt(number / 10); xCount++){
    arrayNumeral.push("X")
  }
  number %= 10;
  for (let vCount = 0; vCount < parseInt(number / 5); vCount++){
    arrayNumeral.push("V")
  }
  number %= 5;
  for (let iCount = 0; iCount < parseInt(number); iCount++){
    arrayNumeral.push("I")
  }


  return arrayNumeral;
}



// UI Logic
$(document).ready(function() {
  $("form#user-number").submit(function(event) {
    event.preventDefault();
    const userInput = parseInt($("input#number").val());
    console.log(toRomanNumeral(userInput));
  });
});





// function romanize (num) {
//   if (isNaN(num))
//       return NaN;
//   var digits = String(+num).split(""),
//       key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
//              "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
//              "","I","II","III","IV","V","VI","VII","VIII","IX"],
//       roman = "",
//       i = 3;
//   while (i--)
//       roman = (key[+digits.pop() + (i * 10)] || "") + roman;
//   return Array(+digits.join("") + 1).join("M") + roman;
//}