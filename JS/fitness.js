const calBtn = document.getElementById("calculateBtn");

calBtn.addEventListener("click", ()=> {
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);

    if (height === "" || isNaN(height)) {
        alert("Provide a valid height!")
    }
    else if (weight === "" || isNaN(weight)) {
        alert("Provide valid weight!")
    }
    else {
        const bmi = weight / (height * height);
        if (bmi < 18.6) (
            alert("Hey you are under weight!")
        )
        else if (bmi >= 18.6 && bmi < 24.9) (
            alert("Congrats! You are in your healthy weight!")
        )
        else {
            alert("Hey you are over weight")
        }
    }
})
