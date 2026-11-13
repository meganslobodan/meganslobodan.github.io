const greeting = document.getElementById("greeting")
greeting.style.textAlign = "center"
greeting.style.marginTop = "50px"
const username = window.prompt("What's your name?", "Jane")
greeting.textContent = "Welcome to my website, "+ username +"!"

function showContact(type) {
    const info = document.getElementById("contact-info")
    if (type === "phone") {
        info.textContent = "703-772-6333";
    }
    else if (type === "email") {
        info.textContent = "meganslobodan@gmail.com"
    }
}