//Search
const diseases = [
    {name:'Headache', modal: '#headache'},
    {name:'Stomachache', modal: '#stomachache'},
    {name:'Back pain', modal: '#backpain'},
    {name:'Eye Strain', modal: '#eyestain'},
    {name:'Muscle pain', modal: '#musclepain'},
    {name:'Cramp', modal: '#musclecramps'},
    {name:'Diarrhea', modal: '#diarrhea'},
    {name:'Runny nose', modal: '#runnynose'},
    {name:'Indigestion', modal: '#indigestion'},
    {name:'Earache', modal: '#earache'},
    {name:'Animal bites', modal: '#animal'},
    {name:'Bruise', modal: '#bruises'},
    {name:'Burn', modal: 'burns'},
    {name:'Dislocation', modal: '#dislocation'},
    {name:'Fracture', modal: '#fracture'},
    {name:'Skin Tear', modal: '#tear'},
    {name:'Sprain', modal: '#sprain'},
    {name:'Electrical Injuries', modal: '#electrical'},
    {name:'Pressure Injuries', modal: '#pressure'},
    {name:'Cold', modal: '#cold'},
    {name:'Flu', modal: '#flu'},
    {name:'RSV', modal: '#rsv'},
    {name:'Croup', modal: '#croup'},
    {name:'Streap throat', modal: '#strep'},
    {name:'Ear infections', modal: '#ear'},
    {name:'Pneumonia', modal: '#pneumonia'},
    {name:'Roseola', modal: '#roseola'},
    {name:'Rotavirus', modal: '#rotavirus'},
    {name:'Eczema', modal: '#eczema'},
    {name:'Skin Cancer', modal: '#skin'},
    {name:'Breast Cancer', modal: '#breast'},
    {name:'Lung Cancer', modal: '#lung'},
    {name:'Liver Cancer', modal: '#liver'},
    {name:'Blood Cancer', modal: '#blood-cancer'},
    {name:'Prostate Cancer', modal: '#prostate-cancer'},
    {name:'Pancreatic Cancer', modal: '#pancreatic-cancer'},
    {name:'Kidney Cancer', modal: '#kidney-cancer'},
    {name:'Bladder Cancer', modal: '#bladder-cancer'},
    {name:'Stomach Cancer', modal: '#stomach-cancer'}
]
const searchBtn = document.getElementById("search-btn");
const searchBar = document.getElementById("search");
const filterDiseases = document.querySelectorAll('.filter-item');
const searchResult = document.getElementById("search-result");

searchBar.addEventListener('keyup', input => {
        const searchInput = input.target.value.toLowerCase().trim();
        console.log(searchInput);

        const result = diseases.filter(item=> item.name.toLocaleLowerCase().trim().includes(searchInput));
        let suggestion = '';

        result.forEach(item => {
            suggestion += `<div class="suggestion" filter-modal="${item.modal}">${item.name}</div>`;

            searchResult.innerHTML = suggestion;
        
    });

    const suggestionModals = document.querySelectorAll('.suggestion');

    suggestionModals.forEach(item => {

        item.addEventListener('mouseover', clicked=> {
            const suggestionModal = clicked.target.getAttribute('filter-modal');
            console.log(suggestionModal);

            item.setAttribute('data-bs-toggle', 'modal');
            item.setAttribute('data-bs-target', suggestionModal);
            item.setAttribute('data-bs-backdrop', 'static');
            item.setAttribute('data-bs-keyboard', 'false');
        })


        item.addEventListener('click', clicked=> {
            const suggestionModal = clicked.target.getAttribute('filter-modal');
            console.log(suggestionModal);

            item.setAttribute('data-bs-toggle', 'modal');
            item.setAttribute('data-bs-target', suggestionModal);
        })
    })



    if(diseases.filter(item=> item.name.toLocaleLowerCase().trim().includes(searchInput))) {
        searchResult.classList.remove('hide');
        searchResult.classList.add('show');
    }
    else{
        // searchResult.classList.remove('show');
        // searchResult.classList.add('hide');
    }


})
    
//     filterDiseases.forEach((item) => {
//         if(item.classList.contains(searchInput)) {
            



//             popUpBtn.addEventListener('click', ()=> {
//                 console.log("Working");
//                 popUpBtn.setAttribute("data-bs-toggle", "modal");
//                 popUpBtn.setAttribute("data-bs-target", `#${searchInput}`);
//             })
//         }
//         else {
            
//         }
//     })
// });



//Cancer Image Slider
const bigImg1 = document.getElementById('big-pic1') //C
const demoImg1 = document.querySelectorAll(".small-acti");
demoImg1.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg1.setAttribute("src", bigSrc); //C
    })
})

const bigImg2 = document.getElementById('big-pic2') //C
const demoImg2 = document.querySelectorAll(".small-acti");
demoImg2.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg2.setAttribute("src", bigSrc); //C
    })
})

const bigImg3 = document.getElementById('big-pic3') //C
const demoImg3 = document.querySelectorAll(".small-acti");
demoImg3.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg3.setAttribute("src", bigSrc); //C
    })
})

const bigImg4 = document.getElementById('big-pic4') //C
const demoImg4 = document.querySelectorAll(".small-acti");
demoImg4.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg4.setAttribute("src", bigSrc); //C
    })
})

const bigImg5 = document.getElementById('big-pic5') //C
const demoImg5 = document.querySelectorAll(".small-acti");
demoImg5.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg5.setAttribute("src", bigSrc); //C
    })
})

const bigImg6 = document.getElementById('big-pic6') //C
const demoImg6 = document.querySelectorAll(".small-acti");
demoImg6.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg6.setAttribute("src", bigSrc); //C
    })
})

const bigImg7 = document.getElementById('big-pic7') //C
const demoImg7 = document.querySelectorAll(".small-acti");
demoImg7.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg7.setAttribute("src", bigSrc); //C
    })
})

const bigImg8 = document.getElementById('big-pic8') //C
const demoImg8 = document.querySelectorAll(".small-acti");
demoImg8.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg8.setAttribute("src", bigSrc); //C
    })
})

const bigImg9 = document.getElementById('big-pic9') //C
const demoImg9 = document.querySelectorAll(".small-acti");
demoImg9.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg9.setAttribute("src", bigSrc); //C
    })
})

const bigImg10 = document.getElementById('big-pic10') //C
const demoImg10 = document.querySelectorAll(".small-acti");
demoImg10.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg10.setAttribute("src", bigSrc); //C
    })
})

const bigImg11 = document.getElementById('big-pic11') //C
const demoImg11 = document.querySelectorAll(".small-acti");
demoImg11.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg11.setAttribute("src", bigSrc); //C
    })
})

const bigImg12 = document.getElementById('big-pic12') //C
const demoImg12 = document.querySelectorAll(".small-acti");
demoImg12.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg12.setAttribute("src", bigSrc); //C
    })
})

const bigImg13 = document.getElementById('big-pic13') //C
const demoImg13 = document.querySelectorAll(".small-acti");
demoImg13.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg13.setAttribute("src", bigSrc); //C
    })
})

const bigImg14 = document.getElementById('big-pic14') //C
const demoImg14 = document.querySelectorAll(".small-acti");
demoImg14.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg14.setAttribute("src", bigSrc); //C
    })
})

const bigImg15 = document.getElementById('big-pic15') //C
const demoImg15 = document.querySelectorAll(".small-acti");
demoImg15.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg15.setAttribute("src", bigSrc); //C
    })
})

const bigImg16 = document.getElementById('big-pic16') //C
const demoImg16 = document.querySelectorAll(".small-acti");
demoImg16.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg16.setAttribute("src", bigSrc); //C
    })
})

const bigImg17 = document.getElementById('big-pic17') //C
const demoImg17 = document.querySelectorAll(".small-acti");
demoImg17.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg17.setAttribute("src", bigSrc); //C
    })
})

const bigImg18 = document.getElementById('big-pic18') //C
const demoImg18 = document.querySelectorAll(".small-acti");
demoImg18.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg18.setAttribute("src", bigSrc); //C
    })
})

const bigImg19 = document.getElementById('big-pic19') //C
const demoImg19 = document.querySelectorAll(".small-acti");
demoImg19.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg19.setAttribute("src", bigSrc); //C
    })
})

const bigImg20 = document.getElementById('big-pic20') //C
const demoImg20 = document.querySelectorAll(".small-acti");
demoImg20.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg20.setAttribute("src", bigSrc); //C
    })
})

const bigImg21 = document.getElementById('big-pic21') //C
const demoImg21 = document.querySelectorAll(".small-acti");
demoImg21.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg21.setAttribute("src", bigSrc); //C
    })
})

const bigImg22 = document.getElementById('big-pic22') //C
const demoImg22 = document.querySelectorAll(".small-acti");
demoImg22.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg22.setAttribute("src", bigSrc); //C
    })
})

const bigImg23 = document.getElementById('big-pic23') //C
const demoImg23 = document.querySelectorAll(".small-acti");
demoImg23.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg23.setAttribute("src", bigSrc); //C
    })
})

const bigImg24 = document.getElementById('big-pic24') //C
const demoImg24 = document.querySelectorAll(".small-acti");
demoImg24.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg24.setAttribute("src", bigSrc); //C
    })
})

const bigImg25 = document.getElementById('big-pic25') //C
const demoImg25 = document.querySelectorAll(".small-acti");
demoImg25.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg25.setAttribute("src", bigSrc); //C
    })
})

const bigImg26 = document.getElementById('big-pic26') //C
const demoImg26 = document.querySelectorAll(".small-acti");
demoImg26.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg26.setAttribute("src", bigSrc); //C
    })
})

//////

const bigImg27 = document.getElementById('big-pic27') //C
const demoImg27 = document.querySelectorAll(".small-acti");
demoImg27.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg27.setAttribute("src", bigSrc); //C
    })
})

const bigImg28 = document.getElementById('big-pic28') //C
const demoImg28 = document.querySelectorAll(".small-acti");
demoImg28.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg28.setAttribute("src", bigSrc); //C
    })
})

const bigImg29 = document.getElementById('big-pic29') //C
const demoImg29 = document.querySelectorAll(".small-acti");
demoImg29.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg29.setAttribute("src", bigSrc); //C
    })
})

const bigImg30 = document.getElementById('big-pic30') //C
const demoImg30 = document.querySelectorAll(".small-acti");
demoImg30.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg30.setAttribute("src", bigSrc); //C
    })
})

const bigImg31 = document.getElementById('big-pic31') //C
const demoImg31 = document.querySelectorAll(".small-acti");
demoImg31.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg31.setAttribute("src", bigSrc); //C
    })
})

const bigImg32 = document.getElementById('big-pic32') //C
const demoImg32 = document.querySelectorAll(".small-acti");
demoImg32.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg32.setAttribute("src", bigSrc); //C
    })
})

const bigImg33 = document.getElementById('big-pic33') //C
const demoImg33 = document.querySelectorAll(".small-acti");
demoImg33.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg33.setAttribute("src", bigSrc); //C
    })
})

const bigImg34 = document.getElementById('big-pic34') //C
const demoImg34 = document.querySelectorAll(".small-acti");
demoImg34.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg34.setAttribute("src", bigSrc); //C
    })
})

const bigImg35 = document.getElementById('big-pic35') //C
const demoImg35 = document.querySelectorAll(".small-acti");
demoImg35.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg35.setAttribute("src", bigSrc); //C
    })
})

const bigImg36 = document.getElementById('big-pic36') //C
const demoImg36 = document.querySelectorAll(".small-acti");
demoImg36.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg36.setAttribute("src", bigSrc); //C
    })
})

const bigImg37 = document.getElementById('big-pic37') //C
const demoImg37 = document.querySelectorAll(".small-acti");
demoImg37.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg37.setAttribute("src", bigSrc); //C
    })
})

const bigImg38 = document.getElementById('big-pic38') //C
const demoImg38 = document.querySelectorAll(".small-acti");
demoImg38.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg38.setAttribute("src", bigSrc); //C
    })
})

const bigImg39 = document.getElementById('big-pic39') //C
const demoImg39 = document.querySelectorAll(".small-acti");
demoImg39.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg39.setAttribute("src", bigSrc); //C
    })
})

const bigImg40 = document.getElementById('big-pic40') //C
const demoImg40 = document.querySelectorAll(".small-acti");
demoImg40.forEach((icon) => {  //C
    icon.addEventListener('click', function() {
        var bigSrc = this.getAttribute('alt');
        bigImg40.setAttribute("src", bigSrc); //C
    })
})

function doctorInfo(type = target.getAttribute("data-type")) {
    console.log(type);
}


