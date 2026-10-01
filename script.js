document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you for contacting Bean & Brew Cafe! We will get back to you soon.");

    this.reset();
});