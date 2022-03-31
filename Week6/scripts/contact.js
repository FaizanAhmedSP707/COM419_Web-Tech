/* 
'e' is a parameter which refers to an event, and in this case it's
referring to the click event that happens when a user clicks on the X
button for the banner.

'e=>{}' is an arrow function, a much faster and a short hand way of writing functions
in JavaScript.
*/


document.getElementById("BtnCookieBanner").addEventListener("click", e=>{
    document.getElementById("cookieBanner").style.display = "none";
    
    /*This is the JavaScript part of the annoying cookie banner.*/
});

// Getting the stuff from the form to be validated using variables!

document.getElementById("contact_form").addEventListener("submit", e=>{
    
    let name = document.forms["contact_form"]["Name"].value;
    let user_email = document.forms["contact_form"]["email"].value;
    let scare_rank_u = document.forms["contact_form"]["U_scare_rank"].value;
    let user_pquery = document.forms["contact_form"]["User_query"].value;
    
    //This a regular expression below!
    let Validregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //booleans below
    let name_chk = true;
    let email_chk = true;
    let scare_chk = true;
    let user_qchk = true;


    if (name.length == 0){

        //alert("Please enter a name!");  <-- earlier part of week 6's tasks
        
        document.forms["contact_form"]["Name"].style.backgroundColor = "red";
        document.getElementById("form_error_genp").innerHTML += "Please enter a name!<br>"
        name_chk = false;
        // In the event of invalid data, you can stop a form from submitting by using e.preventDefault()
    }
    
    if (scare_rank_u < 1 || scare_rank_u > 10){
        
        // The double pipe characters above perform a logical OR operation!
        
        //alert("Please enter a number between 1 and 10 (Inclusive)");  <-- earlier part of week 6's tasks

        scare_chk = false;
        document.forms["contact_form"]["U_scare_rank"].style.backgroundColor = "red";
        document.getElementById("form_error_genp").innerHTML += "Please enter a number between 1 and 10 (Inclusive) !<br>";
        //e.preventDefault();
    
    }
        
    if (user_pquery.trim() == "") {
        
        //alert("Please enter your query!");  <-- earlier part of week 6's tasks
        
        user_qchk = false;
        document.getElementById("form_error_genp").innerHTML += "Please enter your query!<br>";
        document.forms["contact_form"]["User_query"].style.backgroundColor = "red";
        //e.preventDefault();
    
    };
    
    if (user_email.match(Validregex)) {

        //alert("Valid email address!");

        document.forms["contact_form"]["email"].style.backgroundColor = "green";

        } else{
        
        //alert("Please enter a proper email address!");  <-- earlier part of week 6's tasks
        document.forms["contact_form"]["email"].style.backgroundColor = "red";
        document.getElementById("form_error_genp").innerHTML += "Please enter a proper email address!";
        e.preventDefault();
    };
    
    if (name_chk == false &&
        email_chk == false &&
        scare_chk == false &&
        user_qchk == false
        ) {
            alert("Please fill the form again using the tips given below");
            e.preventDefault();
    };
});