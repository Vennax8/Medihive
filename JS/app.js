
// Navbar On Scroll 
const navEl = document.querySelector(".navbar");
const naveText = document.querySelectorAll(".nav-link");
const userText = document.querySelector(".username");
let navbarhamburger = document.getElementById("navbar-togglefixforjs");
var clickcount = 0;

// Hamburger Open 
navbarhamburger.addEventListener("click", ()=>{
  if(clickcount == 0){
    navEl.classList.add('navbar-scrolled');
    naveText[0].classList.add('navbar-scrolledtext');
    naveText[1].classList.add('navbar-scrolledtext');
    naveText[2].classList.add('navbar-scrolledtext');
    naveText[3].classList.add('navbar-scrolledtext');
    naveText[4].classList.add('navbar-scrolledtext');
    naveText[5].classList.add('navbar-scrolledtext');
    userText.classList.add("navbar-scrolledtext");
    clickcount = 1;
    console.log(clickcount)
  }else{
    navEl.classList.remove('navbar-scrolled');
    naveText[0].classList.remove('navbar-scrolledtext');
    naveText[1].classList.remove('navbar-scrolledtext');
    naveText[2].classList.remove('navbar-scrolledtext');
    naveText[3].classList.remove('navbar-scrolledtext');
    naveText[4].classList.remove('navbar-scrolledtext');
    naveText[5].classList.remove('navbar-scrolledtext');
    userText.classList.remove("navbar-scrolledtext");
    clickcount = 0;
  }
});

// Navbar Scroll 
window.addEventListener("scroll",() => {
  if(window.scrollY >= 56){
    navEl.classList.add('navbar-scrolled');
    naveText[0].classList.add('navbar-scrolledtext');
    naveText[1].classList.add('navbar-scrolledtext');
    naveText[2].classList.add('navbar-scrolledtext');
    naveText[3].classList.add('navbar-scrolledtext');
    naveText[4].classList.add('navbar-scrolledtext');
    naveText[5].classList.add('navbar-scrolledtext');
    userText.classList.add("navbar-scrolledtext");
  }else{
    navEl.classList.remove('navbar-scrolled');
    naveText[0].classList.remove('navbar-scrolledtext');
    naveText[1].classList.remove('navbar-scrolledtext');
    naveText[2].classList.remove('navbar-scrolledtext');
    naveText[3].classList.remove('navbar-scrolledtext');
    naveText[4].classList.remove('navbar-scrolledtext');
    naveText[5].classList.remove('navbar-scrolledtext');
    userText.classList.remove("navbar-scrolledtext");
  }
})



// Sign Up Slider 
const signup = document.querySelector('.signup');
const login = document.querySelector('.login');
const slider = document.querySelector('.slider')
const formsection = document.querySelector('.form-section')
const goToLogin = document.querySelector('.ahaa');


// Sign Up Slider 
signup.addEventListener("click",() =>{
  slider.classList.remove("moveslider");
  formsection.classList.remove('form-section-move');
})

login.addEventListener("click",() =>{
    slider.classList.add('moveslider');
    formsection.classList.add('form-section-move');
})

goToLogin.addEventListener("click", () =>{
  slider.classList.add('moveslider');
  formsection.classList.add('form-section-move');
})

// register
let regemailspace = document.getElementById("registeremail");
let regemailspaceLogin = document.getElementById("registeremailLogin");
let regfooterbtn = document.getElementById("regfooterbtn");

regfooterbtn.addEventListener("click", ()=>{
  let regfooteremailspace = document.getElementById("footerregisteremail").value;
  regemailspace.value   = regfooteremailspace;
  regemailspaceLogin.value = regfooteremailspace
});



// userPFP
document.addEventListener("DOMContentLoaded", () => {
  let signupBtn = document.getElementById("signupbtn");
  let userInfoBox = document.getElementById("userinfobox");
  let userNameDisplay = document.getElementById("user-username");
  let signupSubmit = document.getElementById("signupSubmit");
  let usernameInput = document.getElementById("nameinputresult");
  let usernamePsw  = document.querySelector(".password");
  let confirmPsw  = document.querySelector(".confirm_password");
  let usernameEmail = document.querySelector(".email");
  let loginEmail = document.querySelector(".email_login");
  let loginPsw = document.querySelector(".password_login");
  let loginBtn = document.getElementById("login_btn");

  // display saved username from localStorage on page load
  const savedUser = localStorage.getItem("Current_User");
  const savedUsername  = JSON.parse(savedUser);
  if(savedUsername){
    userNameDisplay.innerHTML = savedUsername.name;
    signupBtn.classList.add("hide");
    signupBtn.classList.remove("show");
    userInfoBox.classList.add("show");
    userInfoBox.classList.remove("hide");
    var userIcon = document.createElement("img");
    if(window.location.pathname.includes("index")){
      userIcon.setAttribute("src",`image3/${String(savedUsername.img)}.jpg`);
    }else{
      userIcon.setAttribute("src",`../image3/${String(savedUsername.img)}.jpg`);
    }
    userIcon.classList.add("PFP");
    userIcon.setAttribute("id", "user-PFPimg");
    userInfoBox.prepend(userIcon);
  }

   // ---- Adding Local Storage ----

  // 4 admin Saving to Data Base 
   let creators = [
    {
      name:"Bhone Hein Htet",
      role:"Founder",
      email:"bryanHein89@email.com",
      psw:"848499810",
      img:"BhoneHeinHtet",
      chat:[]
    },
    {
      name:"Shin Thant Aung",
      role:"Reseacher",
      email:"ShinoneandOnly1@email.com",
      psw:"1&onlyShin",
      img:"ShinThant",
      chat:[]
    },
    {
      name:"Thwin Moe Nyunt",
      role:"Information Manager",
      email:"ThwinMN29@email.com",
      psw:"Tim21e",
      img:"ThwinMoe",
      chat:[]
    },
    {
      name:"Phone Pyae Phyo Naing",
      role:"Admin",
      email:"PhonePyae9@email.com",
      psw:"Vennax810",
      img:"PhonePyae",
      chat:[]
    },
    {
      name: "Dr. Wai Lwan",
      role: "General practice",
      email: "wailwan@email.com",
      psw: "doctorpsw",
      img: "doctor2",
      chat: []
    },
    {
      name: "Dr. Anu J",
      role: "General practice",
      email: "anuj@email.com",
      psw: "doctorpsw",
      img: "doctor3",
      chat: []
    },
    {
      name: "Dr. Kaung Myat Soe Oo",
      role: "General practice",
      email: "kaungmyatsoeoo@email.com",
      psw: "doctorpsw",
      img: "doctor1",
      chat: []
    },
    {
      name: "Dr. Kaung Htet Kyaw",
      role: "General practice",
      email: "kaunghtetkyaw@email.com",
      psw: "doctorpsw",
      img: "doctor1",
      chat: []
    },
    {
      name: "Dr. Mahesh Vemavarapu",
      role: "General practice",
      email: "meheshvemavarapu@email.com",
      psw: "doctorpsw",
      img: "doctor1",
      chat: []
    },
    {
      name: "Dr. Khin Cho Win",
      role: "Radiation Oncologist",
      email: "khinchowin@email.com",
      psw: "doctorpsw",
      img: "doctor1",
      chat: []
    },
    {
      name: "Dr. Shu Mon",
      role: "Oncologist",
      email: "shumon@email.com",
      psw: "doctorpsw",
      img: "doctor1",
      chat: []
    },
    {
      name: "Dr. Sunny Jain",
      role: "Medical Oncologist",
      email: "sunnyjain@email.com",
      psw: "doctorpsw",
      img: "doctor5",
      chat: []
    },
    {
      name: "Dr. Ang Pan Tiam",
      role: "Medical Oncologist",
      email: "angpantiam@email.com",
      psw: "doctorpsw",
      img: "doctor6",
      chat: []
    },
    {
      name: "Prof: U Myo Myint Zaw",
      role: "Medical Oncologist",
      email: "myomyintzaw@email.com",
      psw: "doctorpsw",
      img: "doctor1",
      chat: []
    },
    {
      name: "Dr. Seinn War War Seinn",
      role: "Radiation Oncologist",
      email: "seinnwarwarseinn@email.com",
      psw: "doctorpsw",
      img: "doctor1",
      chat: []
    },
    {
      name: "Dr. Yan Lin Aung",
      role: "Consultant Psychaitrist",
      email: "yanlinaung@email.com",
      psw: "doctorpsw",
      img: "doctor7",
      chat: []
    },
    {
      name: "Dr. zaw sein Lwin",
      role: "M.B.,B.S, D.P.M",
      email: "zawseinlwin@email.com",
      psw: "doctorpsw",
      img: "doctor1",
      chat: []
    },
    {
      name: "Prof: Swe Swe Win",
      role: "Consultant Psychaitrist",
      email: "sweswewin@email.com",
      psw: "doctorpsw",
      img: "doctor1",
      chat: []
    },
    {
      name: "Prof: Myint Myint Sein",
      role: "M.B.,B.S, D.P.M",
      email: "myintmyintsein@email.com",
      psw: "doctorpsw",
      img: "doctor1",
      chat: []
    },
    {
      name: "Dr. Htike AUng Myint Nwe",
      role: "Psychaitrist",
      email: "htikeaungmyintnwe@email.com",
      psw: "doctorpsw",
      img: "doctor8",
      chat: []
    },
    {
      name: "Prof: Kyaw Min Soe",
      role: "Orthopedic Surgeon",
      email: "kyawminsoe@email.com",
      psw: "doctorpsw",
      img: "doctor1",
      chat: []
    },
    {
      name: "Dr. Yezar Niaung",
      role: "Orthopedic Surgeon",
      email: "yezarniaung@email.com",
      psw: "doctorpsw",
      img: "doctor9",
      chat: []
    },
    {
      name: "Dr. Soe Wai Lin",
      role: "Orthopedic Surgeon",
      email: "soewailin@email.com",
      psw: "doctorpsw",
      img: "doctor10",
      chat: []
    },
    {
      name: "Dr. Thiha Zaw",
      role: "Consultant Orthopedic Surgeon",
      email: "thihazaw@email.com",
      psw: "doctorpsw",
      img: "doctor11",
      chat: []
    },
    {
      name: "Dr. Than Win",
      role: "Senior Orthopedic Surgeon",
      email: "thanwin@email.com",
      psw: "doctorpsw",
      img: "doctor12",
      chat: []
    }
    
  ]

  if(!localStorage.getItem("MediHive_User")){
    localStorage.setItem("MediHive_User", JSON.stringify(creators));
    console.log("Have saved!")
  }


  // handle signup button click
  signupSubmit.addEventListener("click",()=>{
    let enteredUsername = usernameInput.value.trim();
    let enteredPsw = usernamePsw.value;
    let enteredEmail = usernameEmail.value;
    if(enteredUsername === "" || enteredPsw === "" || enteredEmail === "" || confirmPsw.value === ""){ 
      alert("Please fill full form!");
      return;
    }
    if(enteredPsw !== confirmPsw.value){
      alert("Please check your password again!")
      return;
    } 

    // Setting current User 
    let currentUser = {
      name:enteredUsername,
      role:"User",
      email: enteredEmail,
      psw: enteredPsw,
      img:Math.floor((Math.random() * 4) + 1).toString(),
      chat:[]
    }
    // Changing to aray again
    let dataBaseUsers = localStorage.getItem("MediHive_User");
    let DBjs = JSON.parse(dataBaseUsers);
    DBjs.forEach((e) => {
      if(e.email == currentUser.email){
        alert("User Already Exsist - Go to Login!")
        return
      }
    })

    // Putting userinfo to data base 
    var addUser = [...DBjs,currentUser] // three dots meaning expand
    localStorage.setItem("MediHive_User", JSON.stringify(addUser));
    localStorage.setItem("Current_User", JSON.stringify(currentUser));
    userNameDisplay.innerHTML = enteredUsername;

    // Toggle visibility of elements
    signupBtn.classList.add("hide");
    signupBtn.classList.remove("show");
    userInfoBox.classList.add("show");
    userInfoBox.classList.remove("hide");
    var userIcon = document.createElement("img");
    if(window.location.pathname.includes("index")){
      userIcon.setAttribute("src",`image3/${String(currentUser.img)}.jpg`);
    }else{
      userIcon.setAttribute("src",`../image3/${String(currentUser.img)}.jpg`);
    }
    userIcon.classList.add("PFP");
    userIcon.setAttribute("id", "user-PFPimg");
    userInfoBox.prepend(userIcon);
  });

  loginBtn.addEventListener("click", () =>{
    var DbUser = JSON.parse(localStorage.getItem("MediHive_User"));
    var success = false
    DbUser.forEach((uinfo) =>{
      if(uinfo.email === loginEmail.value){
        if(uinfo.psw === loginPsw.value){
          var existUser = {
            name:uinfo.name,
            role:uinfo.role,
            email: uinfo.email,
            psw: uinfo.psw,
            img:uinfo.img
          }
          localStorage.setItem("Current_User", JSON.stringify(existUser));
          alert("Login Success");
          userNameDisplay.innerHTML = uinfo.name;
          signupBtn.classList.add("hide");
          signupBtn.classList.remove("show");
          userInfoBox.classList.add("show");
          userInfoBox.classList.remove("hide");
          var userIcon = document.createElement("img");
          if(window.location.pathname.includes("index")){
            userIcon.setAttribute("src",`image3/${String(uinfo.img)}.jpg`);
          }else{
            userIcon.setAttribute("src",`../image3/${String(uinfo.img)}.jpg`);
          }
          userIcon.classList.add("PFP");
          userIcon.setAttribute("id", "user-PFPimg");
          userInfoBox.prepend(userIcon);
          success = true
        }else{
          alert("Wrong Password");
          success = true
        }
        return
      }
    })
    if(!success){
      alert("Can't find user, Please Sign Up first or Try again");
    }
  })
  
});
// Chat access
const chat = document.querySelector(".chat_link");

chat.addEventListener("click", (e) => {
  if(!localStorage.getItem("Current_User")){
    alert("Please Sign Up first!")
    e.preventDefault();
  }else{
    alert("You can chat now!");
  }
})

