document.addEventListener("DOMContentLoaded", () => {

    function timeGreeting() {
        let greeting = new Date();
        if (greeting.getHours() < 12) {
            return "Hello there & Good Morning!";
        } else if (greeting.getHours() < 18) {
            return "Hello there & Good Afternoon!";
        }
        return "Hello there & Good Evening!";
    }

    function timeMessage () {
        let msg = timeGreeting();
        document.getElementById("message").innerHTML = msg;
    }

    function showHour () {
        let hour = new Date().getHours();
        document.getElementById("hour-text").innerHTML = "The time is: " + hour + ":";
    }

    function showMinute () {
        let minute = new Date().getMinutes();
        document.getElementById("minute-text").innerHTML = "0" + minute;
    }

    

    timeMessage();
    showHour();
    showMinute();
    
});