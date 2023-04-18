// Function Declaration

function checkDriverAge() {
    var age = prompt("What is your age?");
        if(Number(age) < 18) {
            alert("Sorry, you are too young to drive this car. Powering off");
        } else if (Number(age) > 18) {
            alert("Powering On. Enjoy the ride!");
        } else if (Number(age) === 18) {
            alert("Congratulations on your first year of driving. Enjoy the ride!");
        }
    }

    // Function Expression

var checkDriverAge2 = function checkDriverAge2() {
    var age = prompt("What is your age?");
        if(Number(age) < 18) {
            alert("Sorry, you are too young to drive this car. Powering off");
        } else if (Number(age) > 18) {
            alert("Powering On. Enjoy the ride!");
        } else if (Number(age) === 18) {
            alert("Congratulations on your first year of driving. Enjoy the ride!");
        }
    }

    // Without using prompt

function checkDriverAge3(age) {
    if(Number(age) < 18) {
        return "Sorry, you are too young to drive this car. Powering off";
    } else if (Number(age) > 18) {
        return "Powering On. Enjoy the ride!";
    } else if (Number(age) === 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    }
}

checkDriverAge3(18);