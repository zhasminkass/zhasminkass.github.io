$(window).on("hashchange", function ())

if (location.hash.slice(1) == "signup") {
    $(".page").addClass("extend");
    $("#login").removeClass("active");
    $("#signup").addClass("active");
}
var password = document.getElementById("logPassword").value;

if (password.length<8){
    document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
    return false;
    
}

alert("Successfully logged in");
    