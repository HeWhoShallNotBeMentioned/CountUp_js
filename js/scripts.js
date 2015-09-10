// var countUp = function(countTo, countBy) {
//   var outputArray = [];
//
//   if ((typeof countTo === "number") && (typeof countBy === "number")) {
//     for (var i = countBy; i <= countTo; i += countBy) {
//       outputArray.push(i);
//     }
//   } else {
//     return false;
//   }
//   return outputArray;
// }

var countUp = function(countTo, countBy) {
  var outputArray = [];

  if (checkNumber(countTo, countBy)) {
    for (var i = countBy; i <= countTo; i += countBy) {
      outputArray.push(i);
    }
  }
  return outputArray;
}

var checkNumber = function(number1, number2) {
  if ((typeof number1 === "number") && (typeof number2 === "number")) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function() {
  $("form#countUp").submit(function(event) {
    var countTo = parseInt($("input#countTo").val());
    var countBy = parseInt($("input#countBy").val());
    var result = countUp(countTo, countBy);


  $(".result").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
