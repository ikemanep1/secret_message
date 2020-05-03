var messageMaker = function(number) {
    var message = "";
    if (number === 10) {
        message = "If you were a food, you would be a caserolle of pure awesomeness!";
    } else if (number >= 8) {
        message = "Were you to be food, you would be a spectacular sandwich!";
    } else if (number >= 6) {
        message = "As a food, you'd most definitely be some kinda funky pudding!"
    } else if (number >= 4) {
        message = "If you spontaneously became food, I bet you'd be one sassy salad!"
    } else if (number >= 2) {
        message = "Provided you could involuntarily shapeshift, you'd be a potato!"
    } else  {
        message = "On the off chance that you become edible, you would just be you."
    }
    console.log(message);
    messageShifter(message);
}

var messageShifter = function(message) {
    output = [];
    messageArray = message.toLowerCase().split('');
    console.log(messageArray)
    messageArrayLength = parseInt(messageArray.length);
    console.log(parseInt(messageArray.length));
    for (i=0; i <= messageArrayLength; i++) {
        console.log(messageArray[i]);
        if (messageArray[i] === "a") {
            output.push("@");
        } else if (messageArray[i] === "e") {
            output.push("3");
        } else if (messageArray[i] === "i") {
            output.push("1");
        } else if (messageArray[i] === "o") {
            output.push("0");
        } else if (messageArray[i] === "u") {
            output.push("|_|");
        } else {
            output.push(messageArray[i]);
        }
    };
}

$(document).ready(function() {
    $("#foodForm").submit(function(event) {
        event.preventDefault();
        var number = 0;
        $("input:checkbox[name=foodHabit]:checked").each(function(){
            number += parseInt($(this).val());
            console.log(number);
          });
        messageMaker(number);
        $('#result').text(output.reverse().join(''));
    });
});