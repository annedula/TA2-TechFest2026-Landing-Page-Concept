window.addEventListener("scroll", function () {
  var navbar = document.getElementById("mainNavbar");

  if (window.scrollY > 50) {
    navbar.style.padding = "8px 0";
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.5)";
  } else {
    navbar.style.padding = "15px 0";
    navbar.style.boxShadow = "none";
  }
});

var navLinks = document.querySelectorAll("#navMenu .nav-link");

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    var navMenu = document.getElementById("navMenu");

    if (navMenu.classList.contains("show")) {
      var bsCollapse = bootstrap.Collapse.getInstance(navMenu);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  });
}

var revealElements = document.querySelectorAll(".reveal");

var observer = new IntersectionObserver(
  function (entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add("visible");
        observer.unobserve(entries[i].target);
      }
    }
  },
  { threshold: 0.12 }
);

for (var i = 0; i < revealElements.length; i++) {
  observer.observe(revealElements[i]);
}

var form = document.getElementById("registrationForm");

function checkField(field) {
  if (field.id === "github") {
    var githubPattern = /^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/;
    var isValidGithub = githubPattern.test(field.value.trim());

    if (isValidGithub) {
      field.setCustomValidity("");
    } else {
      field.setCustomValidity("Invalid GitHub URL");
    }
  } else {
    field.setCustomValidity("");
  }

  if (field.checkValidity()) {
    field.classList.add("is-valid");
    field.classList.remove("is-invalid");
  } else {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
  }
}
var allFields = form.querySelectorAll("input, select");

for (var i = 0; i < allFields.length; i++) {
  allFields[i].addEventListener("input", function () {
    if (form.classList.contains("was-validated")) {
      checkField(this);
    }
  });

  allFields[i].addEventListener("blur", function () {
    checkField(this);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  form.classList.add("was-validated");

  var isFormValid = true;
  var formFields = form.querySelectorAll("input, select");

  for (var i = 0; i < formFields.length; i++) {
    checkField(formFields[i]);

    if (!formFields[i].checkValidity()) {
      isFormValid = false;
    }
  }

  if (isFormValid) {
    var toastElement = document.getElementById("successToast");
    var toast = new bootstrap.Toast(toastElement);
    toast.show();

    setTimeout(function () {
      form.reset();
      form.classList.remove("was-validated");

      var validatedFields = form.querySelectorAll(".is-valid, .is-invalid");
      for (var i = 0; i < validatedFields.length; i++) {
        validatedFields[i].classList.remove("is-valid", "is-invalid");
      }
    }, 1500);
  } else {
    var firstBadField = form.querySelector(".is-invalid");
    if (firstBadField) {
      firstBadField.scrollIntoView({ behavior: "smooth", block: "center" });
      firstBadField.focus();
    }
  }
});
