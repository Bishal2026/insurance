let underwriters = JSON.parse(localStorage.getItem("underwriters")) || [];
let nextId =
  underwriters.length > 0
    ? underwriters[underwriters.length - 1].underwriterId + 1
    : 100;

// Set the initial value for the Underwriter ID input field
document.getElementById("underwriter-id").value = nextId;

document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const underwriterId = nextId;
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const joiningDate = document.getElementById("joining-date").value;
    const password = document.getElementById("password").value;

    // Validate password
    const passwordPattern =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      document.getElementById("register-error").innerText =
        "Password must be at least 8 characters long and contain a special character.";
      return;
    }

    // Add new underwriter to the list
    underwriters.push({
      underwriterId,
      name,
      dob,
      joiningDate,
      password,
    });

    // Store the updated underwriters array in localStorage
    localStorage.setItem("underwriters", JSON.stringify(underwriters));

    // Increment the nextId for the next underwriter
    nextId++;
    alert("underwriter register suceesfully!");
    // Redirect to admin home after successful registration
    window.location.href = "./admin-home.html";
  });

//go back login page
function logoutFormAdmin() {
  // If you're using localStorage or cookies to store login information, you can clear them here.
  // Example: localStorage.clear(); or sessionStorage.clear();

  // Redirect to login page after logout
  window.location.href = "./index.html";
}
