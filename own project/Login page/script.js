document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const usernameInput = document.querySelector("input[type='text']");
    const passwordInput = document.querySelector("input[type='password']");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "" || password === "") {
            alert("Please enter both username and password.");
        } else {
            alert("Login successful!");
            // Here you can add authentication logic or redirect to another page
            //  window.location.href = "dashboard.html";
        }
    });
});
