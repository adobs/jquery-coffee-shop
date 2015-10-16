// "use strict";

function makeCoffee(drinkType){
    // makeCoffee2("brew");
    drinksOrdered.push(drinkType);
    console.log(drinksOrdered);
    $("#coffee-image").attr('src', 'static/coffee_machine.jpg');
    setTimeout(function(){$("#coffee-image").attr("src",'static/coffee_mug.jpg'); }, 1000);
    setTimeout(function(){$("#coffee-image").attr("src", "static/coffee_beans.jpg");}, 1500);
    
    $("#revenue").html("$"+updateOrder());
}

$("#espresso").on('click', function(){return makeCoffee("espresso");});
$("#latte").on('click', function(){return makeCoffee("latte");});
$("#hot-chocolate").on('click', function(){return makeCoffee("hot chocolate");});

// function updateOder() loop through and multiply item * corresponding dict price
function updateOrder(){
    var total = 0 ;
    for (var i=0; i<drinksOrdered.length; i++){
        total += prices[drinksOrdered[i]];
    }
    return total.toFixed(2);

}