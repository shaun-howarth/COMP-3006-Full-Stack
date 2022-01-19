document.addEventListener("DOMContentLoaded", () => {

    // variable made from button Class "drop-down" in help.ejs
    let drop = document.getElementsByClassName("drop-down");

    // event listener included within for loop for the button to reveal the hidden answer text and turn arrow svg 90 degrees right usign toggle active in CSS "style" file
    for (let i = 0; i < drop.length; i++) {
        drop[i].addEventListener("click", function() {
            this.classList.toggle("active");
            this.getElementsByClassName("arrow-icon")[0].classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

});