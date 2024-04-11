const FIRST_NAME = document.querySelector("#firstName");
const LAST_NAME = document.querySelector("#lastName");
const CLIENT_WEIGHT = document.querySelector("#mass");
const CLIENT_HEIGHT = document.querySelector("#height")
const CLIENT_RESULT = document.querySelector(".Result");



function calculatebtn(){
    
    //ARITHEMETIC OPERATION/
    let BMI = (CLIENT_WEIGHT.value) / (CLIENT_HEIGHT.value**2)

    //let us set the BMI value to two decimal.
      BMI = BMI.toFixed(2);

    //Form Validation
    if (FIRST_NAME.value=="" || LAST_NAME.value=="" || CLIENT_HEIGHT.value=="" || CLIENT_WEIGHT.value==""){
        setTimeout(() => {
            CLIENT_RESULT.textContent = "Please fill all fields correctly, u dumb fuck.";
            CLIENT_RESULT.style.color = "red";
            CLIENT_RESULT.style.fontstyle = "Italic";
            setTimeout(() => {
                CLIENT_RESULT.text.content ="";
            }, 1500);
        }, 100);
    
    }else{
        if(BMI > 0 && BMI < 10){
            CLIENT_RESULT.innerHTML = ` ${FIRST_NAME.value} ${LAST_NAME.value} your BMI is ${BMI}kg/m<sup>2</sup>. You are UNDERWEIGHT. You may want to see a doctor. Thank you for using (student name)'s BMI calculator`;
            CLIENT_RESULT.style.color = "orange";
            CLIENT_RESULT.style.fontstyle = "normal";
            CLIENT_RESULT.style.fontweight = "bold";
            CLIENT_RESULT.style.maxWidth = "500px";
            Init()
        
        }else if (BMI > 18 && BMI < 25) {
            CLIENT_RESULT.innerHTML = ` ${FIRST_NAME.value} ${LAST_NAME.value} your BMI value is ${BMI}kg/m<sup>2</sup>. You are NORMAL. Cheers! Thank you for using {student name}'s BMI Calculator`;
            CLIENT_RESULT.style.color = "green";
            CLIENT_RESULT.style.fontstyle = "normal";
            CLIENT_RESULT.style.fontweight = "bold";
            CLIENT_RESULT.style.maxWidth = "500px";
            Init()
       
        }else if (BMI > 25 && BMI < 30) {
            CLIENT_RESULT.innerHTML = ` ${FIRST_NAME.value} ${LAST_NAME.value} your BMI value is ${BMI}kg/m<sup>2</sup>. You are OVERWEIGHT. You neeed to see a mediacal doctor. Thank you for using {student name}'s BMI Calculator`;
            CLIENT_RESULT.style.color = "orange";
            CLIENT_RESULT.style.fontstyle = "normal";
            CLIENT_RESULT.style.fontweight = "bold";
            CLIENT_RESULT.style.maxWidth = "500px";
            Init()
       
        }else{
            CLIENT_RESULT.innerHTML = ` ${FIRST_NAME.value} ${LAST_NAME.value} your BMI value is ${BMI}kg/m<sup>2</sup>. You are OBESE. You need to see a medical doctor URGENTLY. Thank you for using {student name}'s BMI Calculator`;
            CLIENT_RESULT.style.color = "red";
            CLIENT_RESULT.style.fontstyle = "normal";
            CLIENT_RESULT.style.fontweight = "bold";
            CLIENT_RESULT.style.maxWidth = "500px";
            Init()
        }
    }
};

function Init () {
    FIRST_NAME.value="";
    LAST_NAME.value="";
    CLIENT_HEIGHT.value="";
    CLIENT_WEIGHT.value="";
};

