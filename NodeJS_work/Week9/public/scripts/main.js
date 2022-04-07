/* 
'e' is a parameter which refers to an event, and in this case it's
referring to the click event that happens when a user clicks on the X
button for the banner.

'e=>{}' is an arrow function, a much faster and a short hand way of writing functions
in JavaScript.
*/

/*
document.getElementById("BtnCookieBanner").addEventListener("click", e=>{
    document.getElementById("cookieBanner").style.display = "none";
    
    This is the JavaScript part of the annoying cookie banner.
});
*/

/*
document.getElementById("queryUserQn").style.display = "none";
document.getElementById("queryUserQn").style.display = "block";
*/

document.getElementById("firstRightBtn").addEventListener("click", e=>{
    document.getElementById("queryUserQn1").style.display = "none";
});

document.getElementById("firstLeftBtn").addEventListener("click", e=>{
    document.getElementById("firstLeftBtn").style.display = "none";
    document.getElementById("firstRightBtn").innerText = "Yay!";
    document.getElementById("firstheading").innerHTML = "First Lesson - Don't admit that";
    document.getElementById("alterpara1").innerHTML = "But you did! So as a reward, your third year will now feature 30% extra dementor!";
});