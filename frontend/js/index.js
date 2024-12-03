let email = document.getElementById("email")
let password = document.getElementById("Password")
let validateEmail = document.getElementById("validateEmail")
let validatePass = document.getElementById("validatePass")
let loginBtn = document.getElementById("loginBtn")

let HrBtn = document.getElementById("HR")
let employeeBtn = document.getElementById("Employee")



let user = []








email.addEventListener("input", function () {

    if (email.value == "") {
        validateEmail.classList.replace("d-flex", "d-none")
    } else {

        emailValidation()
    }

})


password.addEventListener("input", function () {

    if (password.value == "") {
        validatePass.classList.replace("d-flex", "d-none")
    } else {
        passwordValidation()
    }

})




HrBtn.addEventListener("click", function () {
    HrBtn.value = "HR"
    employeeBtn.value = ""

})



employeeBtn.addEventListener("click", function () {
    employeeBtn.value = "Employee"
    HrBtn.value = ""

})





loginBtn.addEventListener("click", function () {

    if (emailValidation() && passwordValidation()) {

        if (HrBtn.value == "HR") {

            let form = {

                email: email.value,
                password: password.value,
                role: HrBtn.value
            }


            try {

                fetch("http://localhost:3000/signIn", {

                    method: "post",
                    headers: { "content-Type": "application/json" },
                    body: JSON.stringify(form)
                }).then(response => response.json())

                    .then(res => {
                        if (res.massage == "welcome") {

                            user = res.foundedUser
                            console.log(user);
                            sessionStorage.setItem("HR",JSON.stringify(user))
                            location.href = "HR.html"


                        } else if (res == "invalid role") {

                            window.alert("invalid role")

                        } else if (res == "invalid password") {

                            window.alert("invalid password")

                        } else if (res == "invalid email") {

                            window.alert("invalid email")
                        }


                    })

            } catch (error) {


                console.log(error);

            }




        } else if (employeeBtn.value == "Employee") {

            let form = {

                email: email.value,
                password: password.value,
                role: employeeBtn.value
            }

            try {

                fetch("http://localhost:3000/signIn", {

                    method: "post",
                    headers: { "content-Type": "application/json" },
                    body: JSON.stringify(form)
                }).then(response => response.json())

                    .then(res => {
                        if (res.massage == "welcome") {

                            user = res.foundedUser
                            sessionStorage.setItem("Employee",JSON.stringify(user))
                            location.href = "Employee.html"
                            

                        } else if (res == "invalid role") {

                            window.alert("invalid role")

                        } else if (res == "invalid password") {

                            window.alert("invalid password")

                        } else if (res == "invalid email") {

                            window.alert("invalid email")
                        }

                    })

            } catch (error) {


                console.log(error);

            }


        } else {

            window.alert("invalid role")
        }


    } else {

        window.alert("invalid input")
        clear()

    }

})





function clear() {

    email.value = ""
    password.value = ""
}



function emailValidation() {

    let regex = /^.{3,20}(@gmail\.com)$/gmi

    if (regex.test(email.value)) {
        validateEmail.classList.add("d-none")
        return true
    } else {
        validateEmail.classList.replace("d-none", "d-flex")
        return false
    }

}


function passwordValidation() {


    let regex = /^[0-9]{11}$/gmi

    if (regex.test(password.value)) {
        validatePass.classList.add("d-none")
        return true
    } else {
        validatePass.classList.replace("d-none", "d-flex")
        return false
    }


}













