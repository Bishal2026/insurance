const underwriterss = JSON.parse(localStorage.getItem("underwriters")) || [];

// Event listener for form submission
document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const searchId = parseInt(document.getElementById("search-id").value, 10);

    // Find the underwriter by ID
    const result = underwriterss.find((u) => u.underwriterId === searchId);

    if (result) {
      // Display the underwriter's details if found
      document.getElementById("search-results").innerHTML = `
                <p>ID: ${result.underwriterId}</p>
                <p>Name: ${result.name}</p>
                <p>Date of Birth: ${result.dob}</p>
                <p>Joining Date: ${result.joiningDate}</p>
            `;
    } else {
      // Display a message if no matching underwriter is found
      document.getElementById("search-results").innerText =
        "Underwriter not found";
    }
  });
// delete
document
  .getElementById("deleteForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const deleteId = parseInt(document.getElementById("delete-id").value, 10);

    // Retrieve underwriters from localStorage
    // let underwriters = JSON.parse(localStorage.getItem('underwriters')) || [];

    // Find the index of the underwriter to delete
    const index = underwriterss.findIndex((u) => u.underwriterId === deleteId);

    if (index > -1) {
      // Remove the underwriter from the array
      underwriterss.splice(index, 1);

      // Update localStorage with the modified underwriters list
      localStorage.setItem("underwriters", JSON.stringify(underwriterss));

      document.getElementById("delete-error").innerText =
        "Underwriter deleted successfully!";
    } else {
      document.getElementById("delete-error").innerText =
        "Underwriter not found";
    }
  });
