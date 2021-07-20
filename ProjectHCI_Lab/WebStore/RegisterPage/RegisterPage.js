

function checkInputs() {
    var form = document.getElementById('form').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('conf-password').value;
    var fullname = document.getElementById('fullname').value;
    var gender = document.getElementById('gender').value;
    var age = document.getElementById('age').value;
    var terms = document.getElementById('terms').value;

    if(username === ""){
        alert("Username cannot be empty!");
    }else if(password === ""){
        alert("Password cannot be empty!");
    }else if(password2 != password){
        alert("Password must be the same");
    }else if(fullname === ""){
        alert("Fullname cannot be empty!");
    }else if(gender === "GENDER"){
        alert("Select a gender");
    }else if(age === ""){
        alert("Please fill in your age");
    }else if(terms.checked == false){
        alert("Please check the Terms and Condition");
    }else{
        alert("Your account have been made succesdfully");
        location.replace("../ACatalog/ACatalog.html");
    }

    
}
