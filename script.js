console.log(3>5);

console.log(typeof `false`);

console.log(5==`5.00`);
console.log(5===`5.00`);

const age = 15;

if (15>=16){
    console.log(`You can drive`);
} else if(age>=14){
    console.log(`almost there`);
} else{
    console.log(`You can not drive`);
}

const time = 8;
if(time <12){
    console.log("good morning")
} else if (time ===12 ){
    console.log(`wait it is noon`)
} else if (time > 12 && time < 18){
    console.log(`good afternoon`)
} else {
    console.log(`good evening`)
}

let weather = `How is the weather`
if (weather == `rain`){
    console.log(`Grab your umbrella`)
} else {
    console.log(`Wear your your sunglasses`)
}

function checkDrivingAge(){
    const age = parseInt(document.getElementById("ageInput").value);
    const message = age >= 16 ? `You can drive.`:`You cannot drive yet.`;
    document.getElementById("drivingMessage").textContent = message;
}

function greetUser(){
    const time=parseInt(document.getElementById("timeInput").value);
    let message = "";
    if(time <12){
        message = `Good morning!`;
    } else if(time === 12){
        message = `it's noon.`;
    } else if(time>12 &&time<18){
        message = `Good afternoon!`;
    } else {
        message = `Good evening!`;
    }
    document.getElementById("greeting").textContent = message;
}

function checkWeather(){
    const weather = document.getElementById("weatherInput").value;
    const message = weather.toLowerCase() === `rain`? `Grab your umbrella.`:`Wear your sunglasses.`;
    document.getElementById("weatherMessage").textContent = message;
}

function checkGrade(){
    const score = parseInt(document.getElementById("gradeInput").value);
    let grade= "";
    if(score >= 90){
        grade = `A`;
    } else if(score >= 80){
        grade = `B`;
    } else if(score >= 70){
        grade = `C`;
    } else if( score >= 60){
        grade = `D`;
    } else{
        grade = `F`;
    }
    document.getElementById("gradeResult").textContent = `You got a ${grade}.`;
}

function checkVotingAge(){
    const age = parseInt(document.getElementById("voteAgeInput").value);
    const message = age>=18? `You are eligible to vote.` : `You are not old enough to vote.`;
    document.getElementById("voting").textContent = message;
}

function checkPassword(){
    const password = document.getElementById("passwordInput").value;
    let message =  "";
    if (password.length >= 12){
        message = `That's a strong password!`;
    } else if( password.length >=8){
        message = `That's a decent password.`;
    } else {
        message = `Password is too weak.`;
    }
    document.getElementById("passwordStrength").textContent=message;
}

function checkDay(){
    const day = document.getElementById("dayInput").value.trim();
    let message ="";
    if(day.toLowerCase()=== 'saturday'|| day.toLowerCase()=== 'sunday'){
        message = `It's the weekend!`;
    } else{
        message = `It's a weekday.`;
    }
    document.getElementById("dayMessage").textContent = message;
}

function checkTemperature(){
    const temp = parseInt(document.getElementById("tempInput").value);
    let message = "";
    if (temp<0){
        message = `It's freezing!`;
    } else if(temp < 15){
        message = `It's chilly.`;
    } else if(temp< 25){
        message = `Nice weather.`;
    } else {
        message = `It's hot outside!`;
    }
    document.getElementById("tempMessage").textContent = message;
}

function checkLogin(){
    const loginInput = document.getElementById("loginInput").value.toLowerCase();
    const isLoggedIn = loginInput === "yes";
    const message = isLoggedIn? `Welcome back!`: `Please log in`;
    document.getElementById("loginStatus").textContent = message;
}

function suggestMeal(){
    const hour= parseInt(document.getElementById("mealInput").value);
    let meal = "";
    if(hour < 11){
        meal = `Have some Breakfast.`;
    } else if(hour < 15){
        meal = `Time for lunch.`;
    } else if(hour < 21){
        meal = `Dinner sounds good.`;
    } else {
        meal = `Maybe just a snack.`;
    }
    document.getElementById("mealSuggestion").textContent = meal;
}

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

//Declare the count variable
let count = 0;

//Function to increase the counter
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
};

//Function to decrease the counter
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
};

//Function to reset the counter
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
};

//Modify the decrease button function so that the counter does not go below zero.
decreaseBtn.onclick = function(){
    if(count > 0){
        count--;
    }
    countLabel.textContent = count;
}