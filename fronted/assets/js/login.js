(function () {
  "use strict";

  var mode = "login";

  function getElement(id) {
    return document.getElementById(id);
  }

  function setStatus(message, type) {
    var status = getElement("authStatus");
    if (!status) return;

    status.textContent = message || "";
    status.className = "auth-status" + (type ? " is-" + type : "");
  }

  function updateMode(nextMode) {
    mode = nextMode === "signup" ? "signup" : "login";

    var isSignup = mode === "signup";
    var title = getElement("authTitle");
    var subtitle = getElement("authSubtitle");
    var submitLabel = getElement("submitLabel");
    var nameGroup = getElement("nameGroup");
    var toggleTitle = getElement("authModeToggleTitle");
    var toggleCopy = getElement("authModeToggleCopy");
    var toggleAction = getElement("authModeToggleAction");

    if (title) title.textContent = isSignup ? "Create Account" : "Welcome Back!";
    if (subtitle) subtitle.textContent = isSignup
      ? "Create your Smart Trip account to save your travel journey"
      : "Login to continue your journey";
    if (submitLabel) submitLabel.textContent = isSignup ? "Create Account" : "Login";
    if (nameGroup) {
      nameGroup.hidden = !isSignup;
      var nameInput = getElement("name");
      if (nameInput) {
        nameInput.required = isSignup;
      }
    }
    if (toggleTitle) toggleTitle.textContent = isSignup ? "Already have an account?" : "New to Smart Trip?";
    if (toggleCopy) toggleCopy.textContent = isSignup
      ? "Switch back to login and continue planning your trip."
      : "Create an account and start planning your perfect trip.";
    if (toggleAction) {
      toggleAction.innerHTML = (isSignup ? "Go to Login" : "Create Account") + ' <i class="fas fa-chevron-right"></i>';
    }

    setStatus("");
  }

  function storeSession(payload) {
    if (!payload) return;

    if (payload.token) {
      localStorage.setItem("smarttrip_token", payload.token);
    }

    if (payload.user) {
      localStorage.setItem("smarttrip_user", JSON.stringify(payload.user));
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    var submitButton = getElement("authSubmit");
    var name = (getElement("name") && getElement("name").value.trim()) || "";
    var email = (getElement("email") && getElement("email").value.trim()) || "";
    var password = (getElement("password") && getElement("password").value) || "";

    if (!email || !password || (mode === "signup" && !name)) {
      setStatus("Please fill all required fields.", "error");
      return;
    }

    if (!window.smartTripApi) {
      setStatus("API configuration is missing.", "error");
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
    }

    setStatus(mode === "signup" ? "Creating your account..." : "Logging you in...", "info");

    try {
      var endpoint = mode === "signup" ? "/api/auth/signup" : "/api/auth/login";
      var payload = mode === "signup"
        ? { name: name, email: email, password: password }
        : { email: email, password: password };

      var response = await window.smartTripApi.postJson(endpoint, payload);
      storeSession(response);
      setStatus(response.message || "Success!", "success");
      window.location.href = "home.html";
    } catch (error) {
      setStatus(error.message || "Authentication failed.", "error");
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
      }
    }
  }

  function togglePassword() {
    var pass = getElement("password");
    var icon = document.querySelector(".toggle-pass");
    if (!pass || !icon) return;

    if (pass.type === "password") {
      pass.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      pass.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  }

  function init() {
    var form = getElement("loginForm");
    var toggleCard = getElement("authModeToggle");

    if (localStorage.getItem("smarttrip_token")) {
      window.location.href = "home.html";
      return;
    }

    updateMode("login");

    if (form) {
      form.addEventListener("submit", handleSubmit);
    }

    if (toggleCard) {
      toggleCard.addEventListener("click", function (event) {
        event.preventDefault();
        updateMode(mode === "login" ? "signup" : "login");
      });
    }

    window.togglePassword = togglePassword;
  }

  document.addEventListener("DOMContentLoaded", init);
})();
