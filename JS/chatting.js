// Chat Js 
// Search 
document.addEventListener("DOMContentLoaded", () => {
  if(!localStorage.getItem("Chats")){
    localStorage.setItem("Chats", JSON.stringify([]));
  }

  const searchBtn = document.getElementById('searchuserbtn');
  const profileDiv = document.querySelector(".profile");
  const searchMother = document.querySelector(".searchmother");
  const chatpovMother = document.querySelector(".chatpovmother");
  const logoutBtn = document.querySelector("#log-out");
  const adminbox = document.querySelectorAll(".chatpovvip_box");
  const selectInfoParent = document.querySelector(".selectinfoparent");
  const chattingBox = document.querySelector(".chattingbox");
  const canChatText = document.querySelector(".can_chat");
  const typebox = document.querySelector('.messagetypingbox');
  const sendbtn = document.querySelector('.sendbutton');
  let activecheck = [];
  let checkcurrentchat = '';

  var currentUser = JSON.parse(localStorage.getItem("Current_User"));
  var medihiveUser = JSON.parse(localStorage.getItem("MediHive_User"));
  var profileImg = document.createElement('img');
  profileImg.classList.add("profile_img");
  profileImg.setAttribute("src", `../image3/${currentUser.img}.jpg`);
  profileDiv.appendChild(profileImg);


  const displayUsers = (user) => {
    var serachUserDiv = document.createElement("div");
    var serachUserImgDiv = document.createElement("div");
    var searchUserImg = document.createElement("img");
    var searchUserInfo = document.createElement("p");
    serachUserDiv.classList.add('chatpov_box');
    serachUserDiv.setAttribute('data-email', user.email)
    serachUserImgDiv.classList.add("chatpovImgbox");
    searchUserImg.setAttribute('src', `../image3/${user.img}.jpg`)
    searchUserImg.classList.add('chatpovvip_img');
    searchUserInfo.innerText = user.name;
    searchUserInfo.classList.add("chatpov_info");

    serachUserImgDiv.append(searchUserImg);

    serachUserDiv.append(serachUserImgDiv);
    serachUserDiv.append(searchUserInfo);
    
    chatpovMother.append(serachUserDiv);
    serachUserDiv.addEventListener("click", () => {
      slectfriend(user.img, user.name, user.email);
      setactive(serachUserDiv);
    });
  }

  const searchFriends = () => {
    var userInput = document.getElementById('search_input');
    var newarray = medihiveUser.filter((i)=>{
      if(i.name.toLowerCase().includes(userInput.value.toLowerCase())){
        if(i.name.toLowerCase() !== currentUser.name.toLowerCase()){
          return(i);
        }
      }
    });

    if(newarray.length < 1 || !newarray){
      searchMother.innerHTML = "";
      var notFoundDiv = document.createElement("div");
      var notFoundText = document.createElement("p");
      notFoundDiv.classList.add("notfDiv");

      notFoundText.innerText = "User Not Found!"
      notFoundDiv.append(notFoundText);
      searchMother.append(notFoundDiv);
    }else{
      searchMother.innerHTML = "";
      newarray.forEach((user) => {
        displayUsers(user);
      });
    };
  }

  const slectfriend = (img,name,email) =>{
    canChatText.style.display = 'none';
    selectInfoParent.innerHTML = '';
    var parentimgDiv = document.createElement('div');
    parentimgDiv.classList.add('chatpovImgbox');
    parentimgDiv.classList.add('chatpovImgbox2');
    var profileImg = document.createElement('img');
    profileImg.classList.add("profile_img");
    profileImg.setAttribute("src", `../image3/${img}.jpg`);
    parentimgDiv.appendChild(profileImg);

    var slectfriendinfo = document.createElement("p");
    slectfriendinfo.innerText = name;
    slectfriendinfo.classList.add("slectfriendtext");
    selectInfoParent.appendChild(parentimgDiv);
    selectInfoParent.appendChild(slectfriendinfo);
    checkcurrentchat = email;
    displayChat();
  }

  const setactive = (a) =>{
    activecheck.push(a);
    if(activecheck.length > 1){
      activecheck[0].classList.remove("activechatpov");
      a.classList.add("activechatpov");
      activecheck = [a];
    }else{
      a.classList.add("activechatpov");
    }
  }

  const displayChat = () => {
    var chats = JSON.parse(localStorage.getItem("Chats"));
    chattingBox.innerHTML = "";
    console.log("chat updated2...");
    var filterToFrom = chats.filter((c) => {
      if(c.to === checkcurrentchat && c.from === currentUser.email || c.to === currentUser.email && c.from === checkcurrentchat){
        return(c);
      }
    });
    console.log(filterToFrom);
    filterToFrom.forEach((pop) => {
      var chatPopUpBoxParent = document.createElement("div");
      var chatPopUpBox = document.createElement("div");
      var chatPopUpText = document.createElement("p");
      var chatPopUpDate = document.createElement("p");
      chatPopUpBox.classList.add("chatpopupbox");
      chatPopUpBoxParent.classList.add("cpbparent");
      chatPopUpText.innerText = pop.chatInfo.text;
      chatPopUpDate.innerText = pop.chatInfo.date;
      chatPopUpBox.appendChild(chatPopUpDate);
      chatPopUpBox.appendChild(chatPopUpText);
      chatPopUpBoxParent.appendChild(chatPopUpBox);
      chattingBox.appendChild(chatPopUpBoxParent);
      chatPopUpDate.classList.add("popupdate");
      chatPopUpText.classList.add("popuptext");
      if(pop.from === currentUser.email){
        chatPopUpBoxParent.classList.add("rightcpbparent");
        chatPopUpBox.classList.add("rightchatpopup");
      }
      else{
        chatPopUpBoxParent.classList.add("leftcpbparent");
        chatPopUpBox.classList.add("leftchatpopup");
      }
      console.log("chat updated...");
    })
  }


  if(localStorage.getItem("Current_Doctor")){
    var doctor = JSON.parse(localStorage.getItem("Current_Doctor"));
    console.log("doctor is here...")
    searchMother.innerHTML = "";
    medihiveUser.forEach((u) => {
      if(u.email === doctor.email){
        console.log(u);
        displayUsers(u);
      }
    })
  }


  searchBtn.addEventListener("click",() =>{
    var userInput = document.getElementById('search_input');
    if(userInput.value === ""){
      alert("Type the name of your search person first!")
    }else{
      searchFriends();
    };
  });

  logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("Current_User");
      window.location.href = "../index.html";
  });

  sendbtn.addEventListener('click', () => {
    var chats = JSON.parse(localStorage.getItem("Chats"));

    var newchat = {
      to: checkcurrentchat,
      from: currentUser.email,
      chatInfo: {
        date:String(new Date().getDate()+ " " + new Date().getMonth() + " " + new Date().getFullYear()),
        text:typebox.value
      }
    }

    var newDb2 = [...chats, newchat];

    localStorage.setItem("Chats", JSON.stringify(newDb2));
    displayChat();
  });

  adminbox.forEach((a, i) =>{
    a.addEventListener("click", () =>{
      slectfriend(medihiveUser[i].img, medihiveUser[i].name, medihiveUser[i].email);
      setactive(a);
    })
  });

});