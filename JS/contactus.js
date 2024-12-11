// Contact Us 
const Cuname = document.getElementById("nameinput");
const Cuph = document.getElementById("phnumberinput");
const Cuemail = document.getElementById("emailinput");
const Cmessage = document.getElementById('messageinput');
const Cusumbitbtn = document.getElementById("Cusubmit");

Cusumbitbtn.addEventListener("click", () => {
  if(Cuname.value === "" || Cuph.value === "" || Cuemail.value === "" || Cmessage.value === ""){ 
    alert("Please fill full form!");
    return;
  }else{
    alert("Your information and message have been sent! Thanks for using our website!")
    Cuname.value = "";
    Cuemail.value = "";
    Cuph.value = "";
    Cmessage.value = "";
  }
})