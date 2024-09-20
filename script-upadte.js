// Retrieve underwriters from localStorage
let underwrite = JSON.parse(localStorage.getItem("underwriters")) || [];

document
  .getElementById("updatePasswordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const updateId = parseInt(document.getElementById("update-id").value, 10);
    const newPassword = document.getElementById("new-password").value;

    // Find the underwriter by ID
    const underwriter = underwrite.find((u) => u.underwriterId === updateId);
    if (underwriter) {
      // Validate new password
      const passwordPattern =
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordPattern.test(newPassword)) {
        document.getElementById("update-error").innerText =
          "Password must be at least 8 characters long and contain a special character.";
        return;
      }

      // Update the underwriter's password
      underwriter.password = newPassword;

      // Save the updated underwriters list back to localStorage
      localStorage.setItem("underwriters", JSON.stringify(underwrite));

      document.getElementById("update-error").innerText =
        "Password updated successfully!";
    } else {
      // If no matching underwriter is found
      document.getElementById("update-error").innerText =
        "Underwriter not found";
    }
  });

//view all

//   const underwrite = JSON.parse(localStorage.getItem('underwriters')) || [];

// Reference to the table body
const tableBody = document
  .getElementById("underwriters-table")
  .getElementsByTagName("tbody")[0];

// Populate the table with data from localStorage
underwrite.forEach((u) => {
  const row = tableBody.insertRow();
  row.insertCell(0).textContent = u.underwriterId;
  row.insertCell(1).textContent = u.name;
  row.insertCell(2).textContent = u.dob;
  row.insertCell(3).textContent = u.joiningDate;
});
