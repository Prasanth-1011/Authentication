document.addEventListener('DOMContentLoaded', () => {
    // Register Validation
    const email = document.getElementById('email');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const registerButton = document.getElementById('registerButton');

    if (email && username && password) {
        function validateRegisterForm() {
            if (email.value.trim() !== "" && username.value.trim() !== "" && password.value.trim() !== "") {
                registerButton.removeAttribute("disabled");
                registerButton.classList.remove("opacity-50", "cursor-not-allowed");
                registerButton.classList.add("cursor-pointer");
            } else {
                registerButton.setAttribute("disabled", "true");
                registerButton.classList.add("opacity-50", "cursor-not-allowed");
                registerButton.classList.remove("cursor-pointer");
            }
        }

        [email, username, password].forEach(input => {
            input.addEventListener('input', validateRegisterForm);
        });
    }

    registerButton.addEventListener('click', (event) => {
        // Navigation Function
        function navigateTo(target) {
            const element = document.getElementById(target);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                sessionStorage.setItem('activeSection', target);
            }
        }
        const nameError = document.getElementById('nameError');
        const mailError = document.getElementById('mailError');
        const passwordError = document.getElementById('passwordError');
        const registerMessage = document.getElementById('registerMessage');

        // Regular Expressions
        const nameRegex = /^[a-zA-Z ]{3,}$/;
        const mailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        const passwordRegex = /^.{6,}$/;
        if (!mailRegex.test(email.value)) {
            mailError.style.color = "red";
            mailError.textContent = "Invalid Email";
            setTimeout(() => {
                mailError.style.color = "transparent";
                mailError.textContent = "Valid Email";
            }, 3000);
        }

        if (!nameRegex.test(username.value)) {
            nameError.style.color = "red";
            nameError.textContent = "Name Should Contain Atleast 3 Characters";
            setTimeout(() => {
                nameError.style.color = "transparent";
                nameError.textContent = "Valid Username";
            }, 3000);
        }

        if (!passwordRegex.test(password.value)) {
            passwordError.style.color = "red";
            passwordError.textContent = "Password Should Contain Atleast 6 Characters";
            setTimeout(() => {
                passwordError.style.color = "transparent";
                passwordError.textContent = "Valid Password";
            }, 3000);
        }

        if (mailRegex.test(email.value) && nameRegex.test(username.value) && passwordRegex.test(password.value)) {
            registerMessage.style.color = "green";
            registerMessage.textContent = "Valid Credentials!";
            setTimeout(() => {
                registerMessage.textContent = "Registered Successfully!";
                setTimeout(() => {
                    registerMessage.style.color = "transparent";
                    registerMessage.textContent = "Message";
                    navigateTo('login');
                }, 1500);
            }, 1500);
        }
    });

    const passwordVisible = document.getElementById('passwordVisible');
    passwordVisible.addEventListener("click", () => {
        const isVisible = passwordVisible.getAttribute("visible") === "true";

        if (!isVisible) {
            passwordVisible.setAttribute("visible", "true");
            password.setAttribute("type", "text");
            passwordVisible.classList.replace("bx-lock", "bx-lock-open-alt");
        } else {
            passwordVisible.setAttribute("visible", "false");
            password.setAttribute("type", "password");
            passwordVisible.classList.replace("bx-lock-open-alt", "bx-lock");
        }
    });

    // Login Validation
    const loginInputs = document.querySelectorAll('#login input:not([type="button"])');

    function validateLoginForm() {
        let allFilled = true;
        loginInputs.forEach(input => {
            if (input.value.trim() === "") allFilled = false;
        });

        if (allFilled) {
            loginButton.removeAttribute("disabled");
            loginButton.classList.remove("opacity-50", "cursor-not-allowed");
            loginButton.classList.add("cursor-pointer");
        } else {
            loginButton.setAttribute("disabled", "true");
            loginButton.classList.add("opacity-50", "cursor-not-allowed");
            loginButton.classList.remove("cursor-pointer");
        }
    }

    loginInputs.forEach(input => {
        input.addEventListener('input', validateLoginForm);
    });

    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', () => {
        const loginEmail = document.getElementById('loginEmail');
        const loginPassword = document.getElementById('loginPassword');
        const loginMessage = document.getElementById('loginMessage');

        const mailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        const passwordRegex = /^.{6,}$/;

        if (!mailRegex.test(loginEmail.value)) {
            loginMessage.style.color = "red";
            loginMessage.textContent = "Invalid Email";
            setTimeout(() => {
                loginMessage.style.color = "transparent";
                loginMessage.textContent = "Valid Email";
            }, 3000);
        }

        if (!passwordRegex.test(loginPassword.value)) {
            loginMessage.style.color = "red";
            loginMessage.textContent = "Invalid Password";
            setTimeout(() => {
                loginMessage.style.color = "transparent";
                loginMessage.textContent = "Valid Password";
            }, 3000);
        }

        if (mailRegex.test(loginEmail.value) && passwordRegex.test(loginPassword.value)) {
            loginMessage.style.color = "green";
            loginMessage.textContent = "Valid Credentials!";
            setTimeout(() => {
                loginMessage.textContent = "Login Successful!";
                setTimeout(() => {
                    loginMessage.textContent = "Message";
                    loginMessage.style.color = "transparent";
                    window.location.href = "./Dashboard.html";
                    localStorage.setAttribute("userLogin", "true");
                }, 1500);
            }, 1500);
        }
    });
});