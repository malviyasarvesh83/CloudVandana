document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("surveyForm");
  const submitBtn = document.getElementById("submitBtn");
  const resetBtn = document.getElementById("resetBtn");

  submitBtn.addEventListener("click", function () {
    // Get form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    // Validate the form
    if (
      !firstName ||
      !lastName ||
      !dob ||
      !country ||
      !gender ||
      !profession ||
      !email ||
      !mobile
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Display a popup with the collected data
    const popupText = `First Name: ${firstName}\nLast Name: ${lastName}\nDate of Birth: ${dob}\nCountry: ${country}\nGender: ${gender.value}\nProfession: ${profession}\nEmail: ${email}\nMobile Number: ${mobile}`;

    alert(popupText);

    // Reset the form
    form.reset();
  });

  resetBtn.addEventListener("click", function () {
    // Reset the form
    form.reset();
  });
});
