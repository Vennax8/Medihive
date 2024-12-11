document.addEventListener("DOMContentLoaded", () => {
    
    let filterContainer = document.querySelector(".gallery-filter");
    let dItems = document.querySelectorAll(".doctor-filter");
    
    filterContainer.addEventListener("click", function(event) {
        if(event.target.classList.contains("filter-item")){
            
            let filterValue = event.target.getAttribute("data-doctor");
    
            dItems.forEach((item) => {
                if(item.classList.contains(filterValue) || filterValue === "all"){
                    item.classList.add("show");
                    item.classList.remove("hide");
                }
                else {
                    item.classList.add("hide");
                    item.classList.remove("show");
                }
            })
        }
    })

    const mediHiveUser = JSON.parse(localStorage.getItem("MediHive_User"));
    const chatWithDoctor = document.querySelectorAll(".chatwithdoctor");

    
    const goChat = (i) => {
      if(localStorage.getItem("Current_User")){
        var currentDoctor = {
          name: mediHiveUser[i + 4].name,
          email: mediHiveUser[i + 4].email
        }
        localStorage.setItem("Current_Doctor", JSON.stringify(currentDoctor));
        window.location.href = "../pages/chat.html";
      }else{
        alert("Please Sign-in First! You can do this by clicking the Sign-Up button at the top right corner of the navbar")
      }
    }
     
    chatWithDoctor.forEach((d, i) => {
      d.addEventListener("click", () => {
        goChat(i);
      })
    });
  })