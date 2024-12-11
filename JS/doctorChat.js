
document.addEventListener("DOMContentLoaded", () => {

  const currentUser = JSON.parse(localStorage.getItem("Current_User"));
  const mediHiveUser = JSON.parse(localStorage.getItem("MediHive_User"));
  const profileDiv = document.querySelector(".profile");
  const chatWithDoctor = document.querySelectorAll(".chatwithdoctor");
  
  var profileImg = document.createElement('img');
  profileImg.classList.add("profile_img");
  profileImg.setAttribute("src", `../image3/${currentUser.img}.jpg`);
  profileDiv.appendChild(profileImg);
  
  const goChat = (i) => {
    if(localStorage.getItem("Current_User")){
      var currentDoctor = {
        name: mediHiveUser[i + 4].name,
        email: mediHiveUser[i + 4].email
      }
      localStorage.setItem("Current_Doctor", JSON.stringify(currentDoctor));
      window.location.href = "../pages/chat.html";
    }else{
      alert("Please Sign-in First!")
    }
  }
   
  chatWithDoctor.forEach((d, i) => {
    d.addEventListener("click", () => {
      goChat(i);
    })
  });
})