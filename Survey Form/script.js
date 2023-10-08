
let form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let country = document.getElementById('country').value;
    let gender = document.getElementById('gender').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    alert('First Name : ' + fname + ' Last Name : ' + lname + ' Country :' + country + ' Gender : ' + gender + ' email : ' + email + ' phone : ' + phone);
    document.getElementById("fname").value='';
    document.getElementById("lname").value='';
    document.getElementById("country").value='';
    document.getElementById("gender").value='';
    document.getElementById("email").value='';
    document.getElementById("phone").value = '';
})