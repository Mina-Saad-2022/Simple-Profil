function mina() {
    "use strict"
    var price = document.getElementById("doller").value,
        result = price * 8,
        message = document.getElementById("message");

    if (price === "") {
        message.innerHTML = "this field cant't Be Embity";
    }
    else if (isNaN(price)) {
        message.innerHTML = "Please type a number" ;
    }
    else if (price === "0") {
        message.innerHTML = "The value cannot be calculated 0 "  ;
    }
    else if (price < 0 ) {
        message.innerHTML = "Can not calculate"  + " " + price ;
    }
    else if (price > 499 ) {
        message.innerHTML = "You cannot calculate a value greater than 499 " ;
    }
    else {
        message.innerHTML = "Values" + " " + price + "  American dollar = " + " " + result + " Egyptian Pound ";
    }

}










// function mlll() {
//   "use strict";
//   var x = document.getElementById("doller").value,
//     result = x * 8,
//     message = document.getElementById("message");


//   if (x === "") {
//     message.innerhtml = " this feild cat";
//   } else {
//     message.innerHTML =
//       "  قيمة " + x + "دولار اليوم = " + result + " جنيه مصري لاغير ";
//   }
// }

// function all()
// {
//     "use strict";
//     var x = document.getElementById("dollar").value;
//     console.log(x);
//     // result = x * 8 ;

// }

// // function all()
// // {
// //     "use strict" ;
// //     var x = document.getementByiD ("mina").value ,

// //     result = x * 8 ;

// //     console.log(result);
// // }

// function alll()
// {
//     "use strict"
//     var x = document.getElementById("doller").value,
//     result = x * 8
//     console.log("قيمة الدولار = " +result  + " جنيه مصري")

// }

/*





// function mina()
// {
//     "use strict"
//     var x = document.getElementById("doller").value,
//         result = x * 8 ;
//         document.getElementById("massege").innerHTML = ("قيمة الجنيه المصري اليوم    "  + result + "" + "دولار امريكي"  ) ;

// }
// function mi()
// {
//     "use strict"

// }





/*


function myage (age){
    "use strict "
    var year = 365
    return "your age in this day is = " + age * year + " dayes"
}
var dinmakeage = prompt ("what is your age ?")
document.getElementById("a").innerHTML = myage (dinmakeage)



(function minaa()
{
    "use strict"
    var x = document.getElementById("price").innerHTML;
     message.innerHTML(x * 5);
}());
/*

 (function mina(amount)
 {
     "use selict";

    return message.innerHTML(amount * 3.75) ;
 })(200);






$(function () {
    $("#a").hide(2000)
})();;
*/
