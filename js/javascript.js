document.addEventListener('DOMContentLoaded',(Loaded)=> {

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneInput = document.getElementById('phone');
  var phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  
    // Perform validation checks
    if (name === '') {
      alert('Please enter your name.');
      
    }
  
    else if (email === '') {
      alert('Please enter your email.');
      
    }
    
    else if (!phonePattern.test(phoneInput.value)) {
        alert('Please enter a valid phone number in the format 511-545-8827.');
  }
}
});