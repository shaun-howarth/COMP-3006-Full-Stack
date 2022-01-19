document.addEventListener("DOMContentLoaded", () => {

    // time greet function containing if statement for establishing greet message depending on date getHours JS object
    function timeGreeting() {
        let greeting = new Date();
        if (greeting.getHours() < 12) {
            return "Hello there & Good Morning!";
        } else if (greeting.getHours() < 18) {
            return "Hello there & Good Afternoon!";
        }
        return "Hello there & Good Evening!";
    }

    // timeMessage function for getting "message" span id in HTML to display msg varaible value linking to timeGreeting fucntion
    function timeMessage () {
        let msg = timeGreeting();
        document.getElementById("message").innerHTML = msg;
    }

    // showHour function for getting "hour-text" span id in HTML to display hour varaible value linking to timeGreeting fucntion
    function showHour () {
        let hour = new Date().getHours();
        document.getElementById("hour-text").innerHTML = "The time is: " + hour + ":";
    }

    // showMinute function for getting "minute-text" span id in HTML to display minute varaible value linking to timeGreeting fucntion
    function showMinute () {
        let minute = new Date().getMinutes();
        document.getElementById("minute-text").innerHTML = "0" + minute;
    }

    // calling functions from above
    timeMessage();
    showHour();
    showMinute();
    
});