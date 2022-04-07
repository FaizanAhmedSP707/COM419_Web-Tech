/*
This file will be used in conjunction with houses.html (2nd task from Week 5) to do certain things
*/

document.getElementById("qn_1-1_ansBtn").addEventListener("click", e=>{
    document.getElementById("secret_para").innerHTML = "<strong>Congratulations you are a Gryffindor</strong>";
    document.getElementById("secret_para").style.display = "block";
    document.getElementById("question_1").style.display = "none";
});

document.getElementById("qn_1-2_ansBtn").addEventListener("click", e=>{
    document.getElementById("question_1").style.display = "none";
    document.getElementById("question_2").style.display = "block";
});

document.getElementById("qn_2-1_ansBtn").addEventListener("click", e=>{
    document.getElementById("secret_para").innerHTML = "<strong>Congratulations you are a Slytherin</strong>";
    document.getElementById("secret_para").style.display = "block";
    document.getElementById("question_2").style.display = "none";
});

document.getElementById("qn_2-2_ansBtn").addEventListener("click", e=>{
    document.getElementById("question_2").style.display = "none";
    document.getElementById("question_3").style.display = "block";
});

document.getElementById("qn_3-1_ansBtn").addEventListener("click", e=>{
    document.getElementById("secret_para").innerHTML = "<strong>Congratulations you are a Ravenclaw</strong>";
    document.getElementById("secret_para").style.display = "block";
    document.getElementById("question_3").style.display = "none";
});

document.getElementById("qn_3-2_ansBtn").addEventListener("click", e=>{
    document.getElementById("secret_para").innerHTML = "<strong>Congratulations you are a Hufflepuff</strong>";
    document.getElementById("secret_para").style.display = "block";
    document.getElementById("question_3").style.display = "none";
});
