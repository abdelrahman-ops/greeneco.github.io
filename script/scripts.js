const formOpenBtn = document.querySelector("#form-open"),
    home = document.querySelector(".home"),
    formContainer = document.querySelector(".form_container"),
    formCloseBtn = document.querySelector(".form_close"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShadowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShadowHide.forEach(icon => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        }
        else {
            getPwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

if (!formOpenBtn || !home || !formContainer || !formCloseBtn || !signupBtn || !loginBtn || !pwShadowHide) {
    console.error("One or more elements not found!");
}
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the navigation toggle button
    const navToggle = document.getElementById('nav-toggle');
    const navItems = document.getElementById('nav-items');

    navToggle.addEventListener('click', function () {
        navItems.classList.toggle('show'); // Toggle the 'show' class on the navigation items
        navToggle.querySelector('.toggle_icon').classList.toggle('active'); // Toggle the 'active' class on the toggle icon
    });
});
