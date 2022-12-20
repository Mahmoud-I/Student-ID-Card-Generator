//Innitial values
//Id card-details
let studentName = document.querySelector(".student-fullname");
let studentRegistrationNo = document.querySelector(".id-no");
let studentCourse = document.querySelector(".id-course-name");
let studentAddm = document.querySelector(".id-admission-year")
let expirationMM = document.querySelector(".month")
let expirationYY = document.querySelector(".year")
let studentPassport = document.querySelector(".passportDiv")
let idCard = document.querySelector(".id-card-container")

//Form details
let formStudentName = document.querySelector("#form-student-name");
let formStudentRegistrationNo = document.querySelector("#form-registration-number");
let formStudentCourse = document.querySelector("#form-course-of-study");
let formYearOfAddm = document.querySelector("#form-year-of-admission");
let formExpirationMM = document.querySelector("#form-expiration-mm")
let formExpirationYY = document.querySelector("#form-expiration-year")
let formStudentPassport = document.querySelector("#passport")
let downloadButton = document.querySelector(".submit");
let uploadedImage = " "

//All Event Listeners
formStudentName.addEventListener("input", function(){
   studentName.textContent = formStudentName.value;
})

formStudentRegistrationNo.addEventListener("input", function(){
    studentRegistrationNo.textContent = formStudentRegistrationNo.value;
 })

 formStudentCourse.addEventListener("input", function(){
    studentCourse.textContent = formStudentCourse.value;
 })

 formYearOfAddm.addEventListener("input", function(){
    studentAddm.textContent = formYearOfAddm.value;
 })


formExpirationMM.addEventListener("input", function(){
        expirationMM.textContent = formExpirationMM.value;
})

formExpirationYY.addEventListener("input", function(){
    expirationYY.textContent = formExpirationYY.value;
})

formStudentPassport.addEventListener("change", function() {
    console.log(formStudentPassport.value)
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadedImage = reader.result;
        studentPassport.style.backgroundImage = `url(${uploadedImage})`
    })
    reader.readAsDataURL(this.files[0])
})


downloadButton.addEventListener("click", function(){
    domtoimage.toPng(idCard, domtoimage 
        .toPng(idCard, {
            width: idCard.clientWidth * 3,
            height: idCard.clientHeight * 2,
            style:{
                transform: `scale(1.8)`,
                transformOrigin: "top left",
                width: idCard.clientWidth + "px",
                height: idCard.clientHeight + "px",
            }
        })
    .then(function(dataUrl){
        let link = document.createElement("a");
        link.download = "Id-Card-Image"
        link.href = dataUrl;
        link.click()
    }) )
    .catch(function(error){
        console.error("opps, something went wrong!", error)
    })
})

document.querySelector(".qr-code").style.backgroundImage = `url(assets/img/QR CODE.jpg)`


