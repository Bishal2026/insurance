let loggedInUnderwriterId = sessionStorage.getItem("loggedInUnderwriterId");

// Retrieve all underwriters from localStorage
const underwriters = JSON.parse(localStorage.getItem("underwriters")) || [];

// Find the underwriter object based on the logged-in ID
const loggedInUnderwriter = underwriters.find(
  (u) => u.underwriterId === parseInt(loggedInUnderwriterId, 10)
);

// Display the underwriter ID or show an error message
if (loggedInUnderwriter) {
  document.getElementById("underwriter-id").textContent =
    loggedInUnderwriter.underwriterId;
} else {
  document.getElementById("welcome-message").textContent =
    "Error: Underwriter not logged in.";
}

// Logout button event listener
document.getElementById("logoutButton").addEventListener("click", function () {
  // Clear sessionStorage
  sessionStorage.removeItem("loggedInUnderwriterId");
  localStorage.removeItem("insurancePolicies");

  // Redirect to the login page
  window.location.href = "index.html";
});

//create insurance
// Retrieve the logged-in underwriter ID from sessionStorage
const loggedInUnderwriterI = sessionStorage.getItem("loggedInUnderwriterId");
console.log(" HI :", loggedInUnderwriterI);

// Display the Underwriter ID in the form
if (loggedInUnderwriterI) {
  document.getElementById("underwriter-id").value = loggedInUnderwriterI;
} else {
  document.getElementById("insurance-error").innerText =
    "Error: Underwriter not logged in.";
}

// Retrieve existing insurance policies from localStorage
function getInsurancePolicies() {
  return JSON.parse(localStorage.getItem("insurancePolicies")) || [];
}

// Save insurance policies back to localStorage
function saveInsurancePolicies(policies) {
  localStorage.setItem("insurancePolicies", JSON.stringify(policies));
}

// Handle form submission
document
  .getElementById("insuranceForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const vehicleNo = document.getElementById("vehicle-no").value;
    const vehicleType = document.getElementById("vehicle-type").value;
    const customerName = document.getElementById("customer-name").value;
    const engineNo = document.getElementById("engine-no").value;
    const chassisNo = document.getElementById("chassis-no").value;
    const phoneNo = document.getElementById("phone-no").value;
    const premiumAmnt = document.getElementById("premium-amnt").value;
    const insuranceType = document.getElementById("insurance-type").value;
    const fromDate = document.getElementById("from-date").value;
    const toDate = document.getElementById("to-date").value;
    const underwriterId = document.getElementById("underwriter-id").value;

    // Create the new policy object
    const newPolicy = {
      vehicleNo,
      vehicleType,
      customerName,
      engineNo,
      chassisNo,
      phoneNo,
      premiumAmnt,
      insuranceType,
      fromDate,
      toDate,
      underwriterId,
    };

    // Retrieve existing policies, add the new policy, and save it back to localStorage
    const policies = getInsurancePolicies();
    policies.push(newPolicy);
    saveInsurancePolicies(policies);

    // Show success message and reset the form
    document.getElementById("insurance-error").innerText =
      "Insurance policy created successfully!";
    document.getElementById("insuranceForm").reset();
    // Refill the underwriter ID since the form is reset
    document.getElementById("underwriter-id").value = loggedInUnderwriterI;
  });
