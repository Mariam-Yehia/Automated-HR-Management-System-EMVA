//pages//
let homePage = document.getElementById("homePage")


let createEmployee = document.getElementById("createEmployee")
let CreatePage = document.getElementById("CreatePage")


let ModifyEmployee = document.getElementById("modifyBut")
let modifyPage = document.getElementById("modifyPage")
let displayAllEmpPage = document.getElementById("dispalayAllEmp")
let dispalayEmpDepartmentPage = document.getElementById("dispalayEmpDepartment")
let EditPage = document.getElementById("EditPage")


let taskPage = document.getElementById("taskPage")
let firstTaskPage = document.getElementById("firstTaskPage")
let secondTaskPage = document.getElementById("secondTaskPage")


let attendanceBtn = document.getElementById("attendanceBtn")
let AttendancePage = document.getElementById("AttendancePage")


let analysisPage = document.getElementById("analysis-page")
let analysisFirstPage = document.getElementById("empsChurnPage")
let analysisSecondPage = document.getElementById("empsChurnPage2")
///



//buttons///
let logout = document.getElementById("logout")
let seclogout = document.getElementById("seclogout")
let submitDataEntry = document.getElementById("submitDataEntry")
let updateEmployee = document.getElementById("updateEmployee")
/////



//Elements//
//data entry page//
let employeeName = document.getElementById("employeeName")
let employeeEmail = document.getElementById("employeeEmail")
let employeePass = document.getElementById("employeePass")
let role = document.getElementById("role")
let Age = document.getElementById("Age")
let Distance = document.getElementById("Distance")
let jobLevel = document.getElementById("jobLevel")
let Salary = document.getElementById("Salary")
let companyWorked = document.getElementById("companyWorked")
let yearsAtCompany = document.getElementById("yearsAtCompany")
let YearsInCurrentRole = document.getElementById("YearsInCurrentRole")
let lastPromotion = document.getElementById("lastPromotion")
let travel = document.querySelectorAll("#BusinessTravel")
let department = document.querySelectorAll("#Department")
let educationalField = document.querySelectorAll("#educationalField")
let employeeGender = document.querySelectorAll("#Gender")
let martialStatus = document.querySelectorAll("#martialStatus")


let validateName = document.getElementById("validateName")
let validateEmail = document.getElementById("validateEmail")
let validatePass = document.getElementById("validatePass")
let validateRole = document.getElementById("validateRole")
let validateAge = document.getElementById("validateAge")
let validateDistance = document.getElementById("distanceValidate")
let validateJobLevel = document.getElementById("jobLevelValidate")
let validatCompaniesWorked = document.getElementById("companiesWorkedValidate")
let validateNumberOfYeras = document.getElementById("validateNoYears")
let validateYearsInRole = document.getElementById("validateYearsInRole")
let validatePromotionYears = document.getElementById("validatePromotionYears")
////



let user = JSON.parse(sessionStorage.getItem("HR"))




///nav///

let mainNav = document.getElementById("mainNav")
let secNav = document.getElementById("secNav")
let returnhomeBtn = document.getElementById("returnhomeBtn")

///





//toogle bet pages

createEmployee.addEventListener("click", function () {


    homePage.classList.add("d-none")
    firstTaskPage.classList.add("d-none")
    secondTaskPage.classList.add("d-none")

    modifyPage.classList.replace("d-block", "d-none")

    CreatePage.classList.replace("d-none", "d-block")

    AttendancePage.classList.add("d-none")

    analysisFirstPage.classList.add("d-none")

    EditPage.classList.add("d-none")

    mainNav.classList.add("d-none")
    secNav.classList.replace("d-none", "d-block")

})

ModifyEmployee.addEventListener("click", function () {

    homePage.classList.add("d-none")
    firstTaskPage.classList.add("d-none")
    secondTaskPage.classList.add("d-none")
    CreatePage.classList.replace("d-block", "d-none")
    modifyPage.classList.replace("d-none", "d-block")
    displayAllEmpPage.classList.replace("d-none", "d-block")
    dispalayEmpDepartmentPage.classList.replace("d-block", "d-none")
    analysisFirstPage.classList.add("d-none")
    fetchShowAllEmployee()

    AttendancePage.classList.add("d-none")


    mainNav.classList.add("d-none")
    secNav.classList.replace("d-none", "d-block")

})

taskPage.addEventListener("click", function () {


    firstTaskPage.classList.replace("d-none", "d-block")

    secondTaskPage.classList.add("d-none")

    homePage.classList.add("d-none")

    modifyPage.classList.add("d-none")

    CreatePage.classList.add("d-none")

    AttendancePage.classList.add("d-none")

    analysisFirstPage.classList.add("d-none")

    EditPage.classList.add("d-none")


    mainNav.classList.add("d-none")
    secNav.classList.replace("d-none", "d-block")

})

attendanceBtn.addEventListener("click", function () {

    homePage.classList.add("d-none")
    firstTaskPage.classList.add("d-none")
    secondTaskPage.classList.add("d-none")
    modifyPage.classList.add("d-none")
    CreatePage.classList.add("d-none")
    EditPage.classList.add("d-none")
    analysisFirstPage.classList.add("d-none")
    AttendancePage.classList.replace("d-none", "d-block")


    mainNav.classList.add("d-none")
    secNav.classList.replace("d-none", "d-block")


    fetchShowAllEmployeeAttendance()





})

analysisPage.addEventListener("click", function () {

    homePage.classList.add("d-none")
    firstTaskPage.classList.add("d-none")
    secondTaskPage.classList.add("d-none")
    modifyPage.classList.add("d-none")
    CreatePage.classList.add("d-none")
    EditPage.classList.add("d-none")
    AttendancePage.classList.add("d-none")
    analysisFirstPage.classList.replace("d-none", "d-block")

    mainNav.classList.add("d-none")
    secNav.classList.replace("d-none", "d-block")
    fetchShowAllEmployeeChurn()
})


returnhomeBtn.addEventListener("click", function () {


    mainNav.classList.replace("d-none", "d-block")
    secNav.classList.replace("d-block", "d-none")

    homePage.classList.replace("d-none", "d-block")
    firstTaskPage.classList.add("d-none")
    secondTaskPage.classList.add("d-none")

    modifyPage.classList.add("d-none")

    CreatePage.classList.add("d-none")

    AttendancePage.classList.add("d-none")

    analysisFirstPage.classList.add("d-none")

    EditPage.classList.add("d-none")


})




//Dom of data Entry//

employeeName.addEventListener("input", function () {

    if (employeeName.value == "") {

        validateName.classList.replace("d-flex", "d-none")

    } else {

        nameValidation()

    }



})

employeeEmail.addEventListener("input", function () {

    if (employeeEmail.value == "") {

        validateEmail.classList.replace("d-flex", "d-none")

    } else {

        emailValidation()
    }

})

employeePass.addEventListener("input", function () {

    if (employeePass.value == "") {

        validatePass.classList.add("d-none")

    } else {

        passwordValidation()

    }

})

role.addEventListener("input", function () {

    if (role.value == "") {
        validateRole.classList.replace("d-flex", "d-none")
    } else {

        roleValidation()

    }


})

Age.addEventListener("input", function () {

    if (Age.value == "") {

        validateAge.classList.replace("d-flex", "d-none")

    } else {
        ageValidation()
    }
})

Distance.addEventListener("input", function () {

    if (Distance.value == "") {

        validateDistance.classList.replace("d-flex", "d-none")

    } else {
        distancaValidation()
    }
})

jobLevel.addEventListener("input", function () {
    if (jobLevel.value == "") {
        validateJobLevel.classList.replace("d-flex", "d-none")
    } else {

        jobLevelValidation()

    }
})

companyWorked.addEventListener("input", function () {

    if (companyWorked.value == "") {

        validatCompaniesWorked.classList.replace("d-flex", "d-none")

    } else {

        companiesWorkedValidation()

    }
})

yearsAtCompany.addEventListener("input", function () {

    if (yearsAtCompany.value == "") {

        validatCompaniesWorked.classList.replace("d-flex", "d-none")


    } else {


        numberOfYearsValidation()

    }
})

YearsInCurrentRole.addEventListener("input", function () {

    if (YearsInCurrentRole.value == "") {

        validateYearsInRole.classList.replace("d-flex", "d-none")

    } else {

        yearsInRoleValidation()

    }
})

lastPromotion.addEventListener("input", function () {

    if (lastPromotion.value == "") {

        validatePromotionYears.classList.replace("d-flex", "d-none")

    } else {

        lastPromotionValidation()
    }
})

for (let i = 0; i < travel.length; i++) {

    travel[i].addEventListener("change", function () {
        travel.value = this.value;
        console.log(travel.value);

    })
}

for (let i = 0; i < department.length; i++) {

    department[i].addEventListener("change", function () {
        department.value = this.value;
        console.log(department.value);
    })
}

for (let i = 0; i < educationalField.length; i++) {

    educationalField[i].addEventListener("change", function () {
        educationalField.value = this.value;
        console.log(educationalField.value);
    })
}

for (let i = 0; i < employeeGender.length; i++) {

    employeeGender[i].addEventListener("change", function () {
        employeeGender.value = this.value;
        console.log(employeeGender.value);
    })
}

for (let i = 0; i < martialStatus.length; i++) {

    martialStatus[i].addEventListener("change", function () {
        martialStatus.value = this.value;
        console.log(martialStatus.value);
    })
}

submitDataEntry.addEventListener("click", function () {

    if (nameValidation() && emailValidation() && passwordValidation() && roleValidation() && ageValidation() && distancaValidation() && jobLevelValidation() && companiesWorkedValidation() && numberOfYearsValidation() && yearsInRoleValidation() && lastPromotionValidation() && validateTravel() && validateDepartment() && validateEducationalField() && validateEmployeeGender() && validateMartialStatus()) {


        let form = {
            name: employeeName.value,
            email: employeeEmail.value,
            password: employeePass.value,
            role: role.value,
            age: Age.value,
            businessTravel: travel.value,
            department: department.value,
            distanceFromHome: Distance.value,
            educationalField: educationalField.value,
            gender: employeeGender.value,
            jobLevel: jobLevel.value,
            martialStatus: martialStatus.value,
            income: Salary.value,
            companyWorked: companyWorked.value,
            yearsAtCompany: yearsAtCompany.value,
            YearsInCurrentRole: YearsInCurrentRole.value,
            lastPromotion: lastPromotion.value
        }

        try {

            fetch("http://localhost:3000/addUser", {

                method: "post",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(form)
            }).then(response => response.json())
                .then(res => {

                    if (res.massage == "done") {
                        window.alert("Employee Added Succesfully")
                        clear()
                    } else if (res.massage == "user already founded") {

                        window.alert("Email is already Found")
                    }

                })

        } catch (error) {

            console.log(err);

        }

    } else {
        window.alert("invalid input")

    }

})

//////



//validation data entry page///

function nameValidation() {

    let regex = /^[a-z \s]{15,25}$/gmi
    if (regex.test(employeeName.value)) {

        validateName.classList.replace("d-flex", "d-none")
        return true

    } else {
        validateName.classList.replace("d-none", "d-flex")
        return false
    }

}
function emailValidation() {

    let regex = /^.{3,20}(@gmail\.com)$/gmi

    if (regex.test(employeeEmail.value)) {
        validateEmail.classList.replace("d-flex", "d-none")
        return true
    } else {
        validateEmail.classList.replace("d-none", "d-flex")
        return false
    }

}
function passwordValidation() {


    let regex = /^[0-9]{11}$/gmi

    if (regex.test(employeePass.value)) {
        validatePass.classList.add("d-none")
        return true
    } else {
        validatePass.classList.replace("d-none", "d-flex")
        return false
    }


}
function roleValidation() {

    let regex = /^HR|Employee$/gm

    if (regex.test(role.value)) {
        validateRole.classList.replace("d-flex", "d-none")
        return true
    } else {

        validateRole.classList.replace("d-none", "d-flex")
        return false

    }
}
function ageValidation() {

    let regex = /^([2-5][2-9]|30|31|40|41|50|51){1}$/gmi

    if (regex.test(Age.value)) {
        validateAge.classList.replace("d-flex", "d-none")
        return true
    } else {

        validateAge.classList.replace("d-none", "d-flex")
        return false

    }

}
function distancaValidation() {

    let regex = /^([1-9]|[1-2][0-9]){1}$/gmi

    if (regex.test(Distance.value)) {
        validateDistance.classList.replace("d-flex", "d-none")
        return true
    } else {

        validateDistance.classList.replace("d-none", "d-flex")
        return false

    }


}
function jobLevelValidation() {


    let regex = /^[1-4]{1}$/gmi

    if (regex.test(jobLevel.value)) {
        validateJobLevel.classList.replace("d-flex", "d-none")
        return true
    } else {

        validateJobLevel.classList.replace("d-none", "d-flex")
        return false

    }





}
function companiesWorkedValidation() {

    let regex = /^[0-9]{1}$/gmi


    if (regex.test(companyWorked.value)) {
        validatCompaniesWorked.classList.replace("d-flex", "d-none")
        return true
    } else {

        validatCompaniesWorked.classList.replace("d-none", "d-flex")
        return false

    }
}
function numberOfYearsValidation() {


    let regex = /^([0-9]|[0-3][0-8]){1}$/gmi


    if (regex.test(yearsAtCompany.value)) {
        validateNumberOfYeras.classList.replace("d-flex", "d-none")
        return true
    } else {

        validateNumberOfYeras.classList.replace("d-none", "d-flex")
        return false

    }


}
function yearsInRoleValidation() {


    let regex = /^([0-9]|[1][0-8]){1}$/gmi


    if (regex.test(YearsInCurrentRole.value)) {
        validateYearsInRole.classList.replace("d-flex", "d-none")
        return true
    } else {

        validateYearsInRole.classList.replace("d-none", "d-flex")
        return false

    }

}
function lastPromotionValidation() {


    let regex = /^([0-9]|[1][0-5]){1}$/gmi


    if (regex.test(lastPromotion.value)) {
        validatePromotionYears.classList.replace("d-flex", "d-none")
        return true
    } else {

        validatePromotionYears.classList.replace("d-none", "d-flex")
        return false

    }


}
function validateTravel() {
    if (travel.value == undefined) {
        return false
    } else {
        return true
    }
}
function validateDepartment() {
    if (department.value == undefined) {
        return false
    } else {
        return true
    }
}
function validateEducationalField() {
    if (educationalField.value == undefined) {
        return false
    } else {
        return true
    }
}
function validateEmployeeGender() {
    if (employeeGender.value == undefined) {
        return false
    } else {
        return true
    }
}
function validateMartialStatus() {
    if (martialStatus.value == undefined) {
        return false
    } else {
        return true
    }
}
function clear() {

    employeeName.value = ""
    employeeEmail.value = ""
    employeePass.value = ""
    role.value = ""
    Age.value = ""
    Distance.value = ""
    jobLevel.value = ""
    Salary.value = ""
    companyWorked.value = ""
    yearsAtCompany.value = ""
    YearsInCurrentRole.value = ""
    lastPromotion.value = ""



    $('#BusinessTravel option').prop('selected', function () {
        return this.defaultSelected;
    });

    $('#Department option').prop('selected', function () {
        return this.defaultSelected;
    });

    $('#educationalField option').prop('selected', function () {
        return this.defaultSelected;
    });

    $('#Gender option').prop('selected', function () {
        return this.defaultSelected;
    });

    $('#martialStatus option').prop('selected', function () {
        return this.defaultSelected;
    });

}

////////////////



//// modifyPage///////////////
let empDepartment = document.querySelectorAll("#empDepartment")
let employee = []
let filter = ""

for (let i = 0; i < empDepartment.length; i++) {

    empDepartment[i].addEventListener("change", function () {
        empDepartment.value = this.value;
        if (empDepartment.value == "all") {

            displayAllEmpPage.classList.replace("d-none", "d-block")
            dispalayEmpDepartmentPage.classList.replace("d-block", "d-none")
            fetchShowAllEmployee()

        } else {

            displayAllEmpPage.classList.add("d-none")
            dispalayEmpDepartmentPage.classList.replace("d-none", "d-block")
            fetchShowEmployeeByDepartment(empDepartment.value)
            filter = empDepartment.value

        }


    })
}

function fetchShowEmployeeByDepartment(form) {


    fetch(`http://localhost:3000/getUserByDepartment/${form}`)
        .then(response => response.json())
        .then(res => {
            if (res.massage == "done") {
                employee = res.user
                console.log(employee);
                displayEmpDepartment()
            }
        })



}

function fetchShowAllEmployee() {


    fetch(`http://localhost:3000/`)
        .then(response => response.json())
        .then(res => {
            if (res.massage == "done") {
                employee = res.user
                displayAllEmployee()
            }
        })



}

function displayAllEmployee() {

    let cartona = ""

    for (let i = 0; i < employee.length; i++) {

        cartona += ` <div class="col-md-12">

        <div class="row justify-content-between align-items-center border-top  border-3 rounded">

            <div class="col-md-10 p-2">

            <div class="row">


            <div class="col-md-6"><p>Name:${employee[i].name}</p>
            <p>Age:${employee[i].age}</p></div>


            <div class="col-md-6"><p>Department:${employee[i].department}</p>
            <p>Educational Field:${employee[i].educationalField}</p></div>
                    
                    
            </div>

            
                
                
            </div>

            <div class="col-md-2">
               <button class="btn btn-primary" onclick="editPage('${employee[i]._id}')">Edit</button>
               <button class="btn btn-danger" onclick="deleteApi('${employee[i]._id}')">Delete</button>
            </div>
        </div>

    </div>`
    }

    document.getElementById("dispalayAllEmp").innerHTML = cartona




}

function displayEmpDepartment() {

    let cartona = ""

    for (let i = 0; i < employee.length; i++) {

        cartona += ` <div class="col-md-12">

        <div class="row justify-content-between align-items-center border-top  border-3 rounded">

            <div class="col-md-10 p-2">
            <div class="row">


            <div class="col-md-6"><p>Name:${employee[i].name}</p>
            <p>Age:${employee[i].age}</p></div>


            <div class="col-md-6">
            <p>Educational Field:${employee[i].educationalField}</p></div>
                    
                    
            </div>
            </div>

            <div class="col-md-2">
               <button class="btn btn-primary" onclick="editPage()">Edit</button>
               <button class="btn btn-danger" onclick="deleteInDepApi('${employee[i]._id}')">Delete</button>
            </div>
        </div>

    </div>`
    }

    document.getElementById("dispalayEmpDepartment").innerHTML = cartona

}

function deleteApi(id) {

    let form = {
        _id: id
    }

    try {

        fetch(`http://localhost:3000/deleteUser`, {

            method: "delete",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(form)
        }).then(response => response.json()).then(res => {
            if (res.massage == "done") {
                fetchShowAllEmployee()

            }
        })

    } catch (error) {

        console.log(error);

    }



}

function deleteInDepApi(id) {

    let form = {
        _id: id
    }

    try {

        fetch(`http://localhost:3000/deleteUser`, {

            method: "delete",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(form)
        }).then(response => response.json()).then(res => {
            if (res.massage == "done") {
                fetchShowEmployeeByDepartment(filter)
            }
        })

    } catch (error) {

        console.log(error);

    }



}



//////////////////////////////




//////// Edit Page ///////////////////

let employeeName2 = document.getElementById("employeeName-2")
let employeeEmail2 = document.getElementById("employeeEmail-2")
let role2 = document.getElementById("role2")
let Age2 = document.getElementById("Age2")
let Distance2 = document.getElementById("Distance2")
let jobLevel2 = document.getElementById("jobLevel2")
let Salary2 = document.getElementById("Salary2")
let companyWorked2 = document.getElementById("companyWorked2")
let yearsAtCompany2 = document.getElementById("yearsAtCompany2")
let YearsInCurrentRole2 = document.getElementById("YearsInCurrentRole2")
let lastPromotion2 = document.getElementById("lastPromotion2")
let BusinessTravel2 = document.querySelectorAll("#BusinessTravel2")
let Department2 = document.querySelectorAll("#Department2")
let educationalField2 = document.querySelectorAll("#educationalField2")
let martialStatus2 = document.querySelectorAll("#martialStatus2")

let empId
let travelOpt
let departmentOpt
let educOpt
let statusOpt


function editPage(x) {

    modifyPage.classList.add("d-none")
    EditPage.classList.replace("d-none", "d-block")
    let currentItem = employee.filter((ele) => ele._id == x)[0]

    empId = currentItem._id


    travelOpt = document.getElementsByName('travel')[0].options[0];
    travelOpt.value = currentItem.businessTravel;
    travelOpt.text = currentItem.businessTravel;


    departmentOpt = document.getElementsByName('Dep')[0].options[0];
    departmentOpt.value = currentItem.department;
    departmentOpt.text = currentItem.department;


    educOpt = document.getElementsByName('educ')[0].options[0];
    educOpt.value = currentItem.educationalField;
    educOpt.text = currentItem.educationalField;


    statusOpt = document.getElementsByName('status')[0].options[0];
    statusOpt.value = currentItem.martialStatus;
    statusOpt.text = currentItem.martialStatus



    employeeName2.innerHTML = currentItem.name
    employeeEmail2.innerHTML = currentItem.email
    role2.value = currentItem.role
    Age2.value = currentItem.age
    Distance2.value = currentItem.distanceFromHome
    jobLevel2.value = currentItem.jobLevel
    Salary2.value = currentItem.income
    companyWorked2.value = currentItem.companyWorked
    yearsAtCompany2.value = currentItem.yearsAtCompany
    YearsInCurrentRole2.value = currentItem.YearsInCurrentRole
    lastPromotion2.value = currentItem.lastPromotion


}

for (let i = 0; i < BusinessTravel2.length; i++) {

    BusinessTravel2[i].addEventListener("change", function () {
        travelOpt.value = this.value;

    })
}

for (let i = 0; i < Department2.length; i++) {

    Department2[i].addEventListener("change", function () {
        departmentOpt.value = this.value;
    })
}

for (let i = 0; i < educationalField2.length; i++) {

    educationalField2[i].addEventListener("change", function () {
        educOpt.value = this.value;

    })
}

for (let i = 0; i < martialStatus2.length; i++) {

    martialStatus2[i].addEventListener("change", function () {
        statusOpt.value = this.value;

    })
}

updateEmployee.addEventListener("click", function () {

    let form = {

        _id: empId,
        role: role2.value,
        age: Age2.value,
        businessTravel: travelOpt.value,
        department: departmentOpt.value,
        distanceFromHome: Distance2.value,
        educationalField: educOpt.value,
        jobLevel: jobLevel2.value,
        martialStatus: statusOpt.value,
        income: Salary2.value,
        companyWorked: companyWorked2.value,
        yearsAtCompany: yearsAtCompany2.value,
        YearsInCurrentRole: YearsInCurrentRole2.value,
        lastPromotion: lastPromotion2.value
    }

    if (role2Validation() && age2Validation() && distanca2Validation() && jobLevel2Validation() && companiesWorked2Validation() && companiesWorked2Validation() && numberOfYears2Validation() && yearsInRole2Validation() && lastPromotion2Validation()) {

        try {

            fetch("http://localhost:3000/updateUser", {

                method: "PATCH",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(form)
            }).then(response => response.json())
                .then(res => {
                    if (res.massage == "done") {
                        window.alert("Updated Succesfully")
                        modifyPage.classList.replace("d-none", "d-block")
                        EditPage.classList.replace("d-block", "d-none")
                        fetchShowAllEmployee()
                    }

                })

        } catch (error) {

            console.log(error);

        }
    } else {

        window.alert("invalid input")
    }


})


let validateRole2 = document.getElementById("validateRole2")
let validateAge2 = document.getElementById("validateAge2")
let validateDistance2 = document.getElementById("distanceValidate2")
let validateJobLevel2 = document.getElementById("jobLevelValidate2")
let validatCompaniesWorked2 = document.getElementById("companiesWorkedValidate2")
let validateNumberOfYears2 = document.getElementById("validateNoYears2")
let validateYearsInRole2 = document.getElementById("validateYearsInRole2")
let validatePromotionYears2 = document.getElementById("validatePromotionYears2")


role2.addEventListener("input", function () {

    if (role2.value == "") {
        validateRole.classList.replace("d-flex", "d-none")
    } else {

        role2Validation()

    }


})

Age2.addEventListener("input", function () {

    if (Age2.value == "") {

        validateAge.classList.replace("d-flex", "d-none")

    } else {
        age2Validation()
    }
})

Distance2.addEventListener("input", function () {

    if (Distance2.value == "") {

        validateDistance.classList.replace("d-flex", "d-none")

    } else {
        distanca2Validation()
    }
})

jobLevel2.addEventListener("input", function () {
    if (jobLevel2.value == "") {
        validateJobLevel.classList.replace("d-flex", "d-none")
    } else {

        jobLevel2Validation()

    }
})

companyWorked2.addEventListener("input", function () {

    if (companyWorked2.value == "") {

        validatCompaniesWorked.classList.replace("d-flex", "d-none")

    } else {

        companiesWorked2Validation()

    }
})

yearsAtCompany2.addEventListener("input", function () {

    if (yearsAtCompany2.value == "") {

        validatCompaniesWorked.classList.replace("d-flex", "d-none")


    } else {


        numberOfYears2Validation()

    }
})

YearsInCurrentRole2.addEventListener("input", function () {

    if (YearsInCurrentRole2.value == "") {

        validateYearsInRole.classList.replace("d-flex", "d-none")

    } else {

        yearsInRole2Validation()

    }
})

lastPromotion2.addEventListener("input", function () {

    if (lastPromotion2.value == "") {

        validatePromotionYears.classList.replace("d-flex", "d-none")

    } else {

        lastPromotion2Validation()
    }
})



function role2Validation() {

    let regex = /^HR|Employee$/gm

    if (regex.test(role2.value)) {
        validateRole2.classList.replace("d-flex", "d-none")
        return true
    } else {

        validateRole2.classList.replace("d-none", "d-flex")
        return false

    }
}
function age2Validation() {

    let regex = /^([2-5][2-9]|30|31|40|41|50|51){1}$/gmi

    if (regex.test(Age2.value)) {
        validateAge2.classList.replace("d-flex", "d-none")
        return true
    } else {

        validateAge2.classList.replace("d-none", "d-flex")
        return false

    }

}
function distanca2Validation() {

    let regex = /^([1-9]|[1-2][0-9]){1}$/gmi

    if (regex.test(Distance2.value)) {
        validateDistance2.classList.replace("d-flex", "d-none")
        return true
    } else {

        validateDistance2.classList.replace("d-none", "d-flex")
        return false

    }


}
function jobLevel2Validation() {


    let regex = /^[1-4]{1}$/gmi

    if (regex.test(jobLevel2.value)) {
        validateJobLevel2.classList.replace("d-flex", "d-none")
        return true
    } else {

        validateJobLevel2.classList.replace("d-none", "d-flex")
        return false

    }





}
function companiesWorked2Validation() {

    let regex = /^[0-9]{1}$/gmi


    if (regex.test(companyWorked2.value)) {
        validatCompaniesWorked2.classList.replace("d-flex", "d-none")
        return true
    } else {

        validatCompaniesWorked2.classList.replace("d-none", "d-flex")
        return false

    }
}
function numberOfYears2Validation() {


    let regex = /^([0-9]|[0-3][0-8]){1}$/gmi


    if (regex.test(yearsAtCompany2.value)) {
        validateNumberOfYears2.classList.replace("d-flex", "d-none")
        return true
    } else {

        validateNumberOfYears2.classList.replace("d-none", "d-flex")
        return false

    }


}
function yearsInRole2Validation() {


    let regex = /^([0-9]|[1][0-8]){1}$/gmi


    if (regex.test(YearsInCurrentRole2.value)) {
        validateYearsInRole2.classList.replace("d-flex", "d-none")
        return true
    } else {

        validateYearsInRole2.classList.replace("d-none", "d-flex")
        return false

    }

}
function lastPromotion2Validation() {


    let regex = /^([0-9]|[1][0-5]){1}$/gmi


    if (regex.test(lastPromotion2.value)) {
        validatePromotionYears2.classList.replace("d-flex", "d-none")
        return true
    } else {

        validatePromotionYears2.classList.replace("d-none", "d-flex")
        return false

    }


}

///////////////////////







//////////task page Home/////////


let addTask = document.getElementById("addTask")
let lightboxContainer = document.getElementById("lightboxContainer")
let closeBtn = document.getElementById("close-btn")
let task = []
let l
let value

let empNameDesc = document.getElementById("empNameDesc")
let projectEmailDesc = document.getElementById("projectEmailDesc")
let projectDepartmentDesc = document.getElementById("projectDepartmentDesc")
let projectNametDesc = document.getElementById("projectNametDesc")
let projectDescriptionDesc = document.getElementById("projectDescriptionDesc")
let projectSubmitDesc = document.getElementById("projectSubmitDesc")
let projectDocumentDesc = document.getElementById("projectDocumentDesc")



addTask.addEventListener("click", function () {

    firstTaskPage.classList.add("d-none")
    secondTaskPage.classList.replace("d-none", "d-block")
    fetchShowAllEmployeeTask()


})


showSubmitedTasks()


function showSubmitedTasks() {


    try {

        fetch(`http://localhost:3000/getSubmitedTasks/${user._id}`)
            .then(response => response.json())
            .then(res => {
                if (res.massage == "done") {


                    let x
                    x = res.SubmitedTasks
                    task = x.reverse()
                    l = task.length

                    displaySubmittedTasks(l)
                }
            })


    } catch (error) {


        console.log(error);

    }





}

function displaySubmittedTasks(yyyy) {

    let cartona = ""

    for (let i = 0; i < yyyy; i++) {

        cartona += ` <tr>
        <td>${task[i].from.name}</td>
        <td>${task[i].from.email}</td>
        <td>${task[i].from.department}</td>
        <td>${task[i].title}</td>
        <td>${task[i].submitDate.split("T00:00:00.000Z").join("")}</td>
        <td>
            <i class="fa-regular fa-eye fs-5 mx-2 text-dark" onclick="showDescription('${task[i]._id}')"></i>
            <a href="${task[i].taskUrl}" target="_blank""><i class="fa-solid fa-file text-primary fs-5 mx-4"></a></i>
            <i class="fa-regular fa-trash-can fs-5 text-danger" onclick=" deleteTask('${task[i]._id}')"></i>
        </td>
    </tr>`
    }

    document.getElementById("tableData").innerHTML = cartona
}


let table_size = document.querySelectorAll("#table_size")


for (let index = 0; index < table_size.length; index++) {


    table_size[index].addEventListener("change", function () {

        table_size = this.value;



        if (table_size == "All") {


            displaySubmittedTasks(l)


        } else if (table_size == 5) {


            value = 5
            if (value > l) {

                displaySubmittedTasks(l)

            } else {

                displaySubmittedTasks(value)

            }




        } else if (table_size == 10) {

            value = 10
            if (value > l) {

                displaySubmittedTasks(l)

            } else {

                displaySubmittedTasks(value)

            }



        } else if (table_size == 20) {

            value = 20
            if (value > l) {

                displaySubmittedTasks(l)

            } else {

                displaySubmittedTasks(value)

            }

        }
    })



}

function showDescription(x) {

    lightboxContainer.classList.replace("d-none", "d-flex")
    let currentItem = task.filter((ele) => ele._id == x)[0]
    console.log(currentItem);

    empNameDesc.innerHTML = currentItem.from.name
    projectEmailDesc.innerHTML = currentItem.from.email
    projectDepartmentDesc.innerHTML = currentItem.from.department
    projectNametDesc.innerHTML = currentItem.title
    projectDescriptionDesc.innerHTML = currentItem.description
    projectSubmitDesc.innerHTML = currentItem.submitDate.split("T00:00:00.000Z").join("")
    projectDocumentDesc.setAttribute("href", currentItem.taskUrl)


}

closeBtn.addEventListener("click", function () {

    closeslide()

})

function closeslide() {

    lightboxContainer.classList.replace("d-flex", "d-none")

}

function deleteTask(taskID) {


    try {

        fetch(`http://localhost:3000/deleteTask/${taskID}`, {
            method: "delete"
        })
            .then(response => response.json())
            .then(res => {
                if (res.massage == "done") {

                    showSubmitedTasks(l)
                }
            })


    } catch (error) {


        console.log(error);

    }

}


////////////////////////








///////// task page send tasks /////////////


let uploadfile = document.getElementById("uploadfile")
let fileNameDisplay = document.getElementById('file-name');
let projectTitle = document.getElementById("projectTitle")
let taskDescription = document.getElementById("taskDescription")
let DeadLine = document.getElementById("DeadLine")
let submitTask = document.getElementById("submitTask")
let empDepartmentTask = document.querySelectorAll("#empDepartmentTask")



let id = ""
let deadlinevalue
let deascValue
let titleValue
let file
let x = false



uploadfile.addEventListener('change', (event) => {
    const selectedFile = event.target.files[0];
    file = event.target.files[0];

    if (selectedFile) {
        fileNameDisplay.textContent = ` ${selectedFile.name}`;
        console.log(fileNameDisplay.textContent);
    } else {
        fileNameDisplay.textContent = ''; // Clear the display if no file is selected
    }
});

DeadLine.addEventListener("change", function () {


    deadlinevalue = DeadLine.value

})

projectTitle.addEventListener("input", function () {

    titleValue = projectTitle.value
})

taskDescription.addEventListener("input", function () {

    deascValue = taskDescription.value
})

for (let i = 0; i < empDepartmentTask.length; i++) {

    empDepartmentTask[i].addEventListener("change", function () {
        empDepartmentTask.value = this.value;
        if (empDepartmentTask.value == "all") {


            fetchShowAllEmployeeTask()

        } else {


            fetchShowEmployeeByDepartmentTask(empDepartmentTask.value)


        }


    })
}

submitTask.addEventListener("click", function () {

    if (deadlinevalue && deascValue && titleValue && fileNameDisplay.textContent) {

        if (x) {


            let form = {
                img: file,
                from: user._id,
                to: id,
                title: titleValue,
                description: deascValue,
                deadLine: deadlinevalue
            }

            let fData = objectToFormData(form)



            try {

                fetch(`http://localhost:3000/addTask`, {

                    method: 'POST',
                    body: fData


                }).then(response => response.json())
                    .then(res => {
                        if (res.massage == "done") {
                            console.log(res.addedTask);
                            window.alert("task added succesfully")
                            clearTaskData()

                        }
                    })

            } catch (error) {

                console.log(error);

            }



        } else {
            window.alert("please choose an employee")
        }


    } else {
        window.alert("missing inputs")
    }


})

function fetchShowAllEmployeeTask() {


    fetch(`http://localhost:3000/`)
        .then(response => response.json())
        .then(res => {
            if (res.massage == "done") {

                employee = res.user
                displayAllEmployeeTask()
            }
        })


}

function displayAllEmployeeTask() {

    let cartona = ""

    for (let i = 0; i < employee.length; i++) {

        cartona += `<div class="col-md-12 mb-4">

        <div class="d-flex align-items-center ">
            <div class="form-check">
                <button class="sqrBtn" onclick="getEmployeeId('${employee[i]._id}')">
                    <i class="fa-solid fa-check icon-btn"></i>
                </button>
            </div>


            <div class="ms-3">
                <p class="mb-1 "> <span class="fw-bolder me-2">Name:</span>${employee[i].name}</p>
                <p><span class="fw-bolder  me-2">Department:</span>${employee[i].department}</p>
            </div>

        </div>

    </div>`
    }

    document.getElementById("displayEmpTask").innerHTML = cartona




}

function fetchShowEmployeeByDepartmentTask(form) {


    fetch(`http://localhost:3000/getUserByDepartment/${form}`)
        .then(response => response.json())
        .then(res => {
            if (res.massage == "done") {
                employee = res.user
                displayAllEmployeeTask()
            }
        })



}

function getEmployeeId(_id) {

    id = _id
    x = true

}

function objectToFormData(obj) {
    const formData = new FormData();

    Object.entries(obj).forEach(([key, value]) => {
        formData.append(key, value);
    });

    return formData;
}

function clearTaskData() {

    projectTitle.value = ""
    taskDescription.value = ""
    DeadLine.value = ""
    fileNameDisplay.textContent = ""


}

/////////////////////////////////////////////////





////////////////////// Attendance Page ///////////////////


let displayEmpAttendance = document.getElementById("displayEmpAttendance")
let empDepartmentAttendance = document.querySelectorAll("#empDepartmentAttendance")


let day
let month
let year
let date
let employeeIdForAttendance
let attendanceInfo
let employeeNameAttendance
let employeeDepartmentAttendance
let attendanceTrue
let overTimeTrue
let selectedDateElement = null;

function CalendarControl() {
    const calendar = new Date();
    const calendarControl = {
        localDate: new Date(),
        prevMonthLastDate: null,
        calWeekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        calMonthName: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],
        daysInMonth: function (month, year) {
            return new Date(year, month, 0).getDate();
        },
        firstDay: function () {
            return new Date(calendar.getFullYear(), calendar.getMonth(), 1);
        },
        lastDay: function () {
            return new Date(calendar.getFullYear(), calendar.getMonth() + 1, 0);
        },
        firstDayNumber: function () {
            return calendarControl.firstDay().getDay() + 1;
        },
        lastDayNumber: function () {
            return calendarControl.lastDay().getDay() + 1;
        },
        getPreviousMonthLastDate: function () {
            let lastDate = new Date(
                calendar.getFullYear(),
                calendar.getMonth(),
                0
            ).getDate();
            return lastDate;
        },
        navigateToPreviousMonth: function () {
            calendar.setMonth(calendar.getMonth() - 1);
            calendarControl.attachEventsOnNextPrev();
        },
        navigateToNextMonth: function () {
            calendar.setMonth(calendar.getMonth() + 1);
            calendarControl.attachEventsOnNextPrev();
        },
        navigateToCurrentMonth: function () {
            let currentMonth = calendarControl.localDate.getMonth();
            let currentYear = calendarControl.localDate.getFullYear();
            calendar.setMonth(currentMonth);
            calendar.setYear(currentYear);
            calendarControl.attachEventsOnNextPrev();
        },
        displayYear: function () {
            let yearLabel = document.querySelector(".calendar .calendar-year-label");
            yearLabel.innerHTML = calendar.getFullYear();
        },
        displayMonth: function () {
            let monthLabel = document.querySelector(
                ".calendar .calendar-month-label"
            );
            monthLabel.innerHTML = calendarControl.calMonthName[calendar.getMonth()];
        },
        selectDate: function (e) {
            e.preventDefault();
            if (selectedDateElement) {
                selectedDateElement.classList.remove('selected-date');
            }
            e.target.parentElement.classList.add('selected-date');
            selectedDateElement = e.target.parentElement;

            if (calendarControl.calMonthName[calendar.getMonth()] == "Jan") {
                month = "0" + 1
            } else if (calendarControl.calMonthName[calendar.getMonth()] == "Feb") {
                month = "0" + 2
            } else if (calendarControl.calMonthName[calendar.getMonth()] == "Mar") {
                month = "0" + 3
            } else if (calendarControl.calMonthName[calendar.getMonth()] == "Apr") {
                month = "0" + 4
            } else if (calendarControl.calMonthName[calendar.getMonth()] == "May") {
                month = "0" + 5
            } else if (calendarControl.calMonthName[calendar.getMonth()] == "Jun") {
                month = "0" + 6
            } else if (calendarControl.calMonthName[calendar.getMonth()] == "Jul") {
                month = "0" + 7
            } else if (calendarControl.calMonthName[calendar.getMonth()] == "Aug") {
                month = "0" + 8
            } else if (calendarControl.calMonthName[calendar.getMonth()] == "Sep") {
                month = "0" + 9
            } else if (calendarControl.calMonthName[calendar.getMonth()] == "Oct") {
                month = 10
            } else if (calendarControl.calMonthName[calendar.getMonth()] == "Nov") {
                month = 11
            } else if (calendarControl.calMonthName[calendar.getMonth()] == "Dec") {
                month = 12
            }

            if (e.target.textContent == "1") {
                day = "01"
            } else if (e.target.textContent == "2") {
                day = "02"
            } else if (e.target.textContent == "3") {
                day = "03"
            } else if (e.target.textContent == "4") {
                day = "04"
            } else if (e.target.textContent == "5") {
                day = "05"
            } else if (e.target.textContent == "6") {
                day = "06"
            } else if (e.target.textContent == "7") {
                day = "07"
            } else if (e.target.textContent == "8") {
                day = "08"
            } else if (e.target.textContent == "9") {
                day = "09"
            } else {

                day = e.target.textContent
            }

            year = calendar.getFullYear()
            date = year + "-" + month + "-" + day
            console.log(date);




            console.log(
                `${e.target.textContent} ${calendarControl.calMonthName[calendar.getMonth()]
                } ${calendar.getFullYear()}`
            );
        },
        plotSelectors: function () {

            // day = calendarControl.localDate.getDate()
            year = calendarControl.localDate.getFullYear()
            console.log(calendarControl.localDate.getFullYear());

            // console.log(calendarControl.localDate.getDate());
            // console.log(calendarControl.calMonthName[calendarControl.localDate.getMonth()]);


            if (calendarControl.calMonthName[calendar.getMonth()] == "Jan") {
                month = "0" + 1
            } else if (calendarControl.calMonthName[calendar.getMonth()] == "Feb") {
                month = "0" + 2
            } else if (calendarControl.calMonthName[calendar.getMonth()] == "Mar") {
                month = "0" + 3
            } else if (calendarControl.calMonthName[calendar.getMonth()] == "Apr") {
                month = "0" + 4
            } else if (calendarControl.calMonthName[calendar.getMonth()] == "May") {
                month = "0" + 5
            } else if (calendarControl.calMonthName[calendar.getMonth()] == "Jun") {
                month = "0" + 6
            } else if (calendarControl.calMonthName[calendar.getMonth()] == "Jul") {
                month = "0" + 7
            } else if (calendarControl.calMonthName[calendar.getMonth()] == "Aug") {
                month = "0" + 8
            } else if (calendarControl.calMonthName[calendar.getMonth()] == "Sep") {
                month = "0" + 9
            } else if (calendarControl.calMonthName[calendarControl.localDate.getMonth()] == "Oct") {
                month = 10
            } else if (calendarControl.calMonthName[calendarControl.localDate.getMonth()] == "Nov") {
                month = 11
            } else if (calendarControl.calMonthName[calendarControl.localDate.getMonth()] == "Dec") {
                month = 12
            }


            if (calendarControl.localDate.getDate() == "1") {
                day = "01"
            } else if (calendarControl.localDate.getDate() == "2") {
                day = "02"
            } else if (calendarControl.localDate.getDate() == "3") {
                day = "03"
            } else if (calendarControl.localDate.getDate() == "4") {
                day = "04"
            } else if (calendarControl.localDate.getDate() == "5") {
                day = "05"
            } else if (calendarControl.localDate.getDate() == "6") {
                day = "06"
            } else if (calendarControl.localDate.getDate() == "7") {
                day = "07"
            } else if (calendarControl.localDate.getDate() == "8") {
                day = "08"
            } else if (calendarControl.localDate.getDate() == "9") {
                day = "09"
            } else {

                day = calendarControl.localDate.getDate()
            }

            console.log(calendarControl.localDate.getDate());

            date = year + "-" + month + "-" + day
            console.log(date);

            document.querySelector(
                ".calendar"
            ).innerHTML += `<div class="calendar-inner"><div class="calendar-controls">
          <div class="calendar-prev"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M88.2 3.8L35.8 56.23 28 64l7.8 7.78 52.4 52.4 9.78-7.76L45.58 64l52.4-52.4z"/></svg></a></div>
          <div class="calendar-year-month">
          <div class="calendar-month-label"></div>
          <div>-</div>
          <div class="calendar-year-label"></div>
          </div>
          <div class="calendar-next"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M38.8 124.2l52.4-52.42L99 64l-7.77-7.78-52.4-52.4-9.8 7.77L81.44 64 29 116.42z"/></svg></a></div>
          </div>
          <div class="calendar-today-date">Today: 
            ${calendarControl.calWeekDays[calendarControl.localDate.getDay()]}, 
            ${calendarControl.localDate.getDate()}, 
            ${calendarControl.calMonthName[calendarControl.localDate.getMonth()]} 
            ${calendarControl.localDate.getFullYear()}

          </div>
          <div class="calendar-body"></div></div>`;
        },
        plotDayNames: function () {
            for (let i = 0; i < calendarControl.calWeekDays.length; i++) {
                document.querySelector(
                    ".calendar .calendar-body"
                ).innerHTML += `<div>${calendarControl.calWeekDays[i]}</div>`;
            }
        },
        plotDates: function () {
            document.querySelector(".calendar .calendar-body").innerHTML = "";
            calendarControl.plotDayNames();
            calendarControl.displayMonth();
            calendarControl.displayYear();
            let count = 1;
            let prevDateCount = 0;

            calendarControl.prevMonthLastDate = calendarControl.getPreviousMonthLastDate();
            let prevMonthDatesArray = [];
            let calendarDays = calendarControl.daysInMonth(
                calendar.getMonth() + 1,
                calendar.getFullYear()
            );
            // dates of current month
            for (let i = 1; i < calendarDays; i++) {
                if (i < calendarControl.firstDayNumber()) {
                    prevDateCount += 1;
                    document.querySelector(
                        ".calendar .calendar-body"
                    ).innerHTML += `<div class="prev-dates"></div>`;
                    prevMonthDatesArray.push(calendarControl.prevMonthLastDate--);
                } else {
                    document.querySelector(
                        ".calendar .calendar-body"
                    ).innerHTML += `<div class="number-item" data-num=${count}><a class="dateNumber" href="#">${count++}</a></div>`;
                }
            }
            //remaining dates after month dates
            for (let j = 0; j < prevDateCount + 1; j++) {
                document.querySelector(
                    ".calendar .calendar-body"
                ).innerHTML += `<div class="number-item" data-num=${count}><a class="dateNumber" href="#">${count++}</a></div>`;
            }
            calendarControl.highlightToday();
            calendarControl.plotPrevMonthDates(prevMonthDatesArray);
            calendarControl.plotNextMonthDates();
        },
        attachEvents: function () {
            let prevBtn = document.querySelector(".calendar .calendar-prev a");
            let nextBtn = document.querySelector(".calendar .calendar-next a");
            let todayDate = document.querySelector(".calendar .calendar-today-date");
            let dateNumber = document.querySelectorAll(".calendar .dateNumber");
            prevBtn.addEventListener(
                "click",
                calendarControl.navigateToPreviousMonth
            );
            nextBtn.addEventListener("click", calendarControl.navigateToNextMonth);
            todayDate.addEventListener(
                "click",
                calendarControl.navigateToCurrentMonth
            );
            for (var i = 0; i < dateNumber.length; i++) {
                dateNumber[i].addEventListener(
                    "click",
                    calendarControl.selectDate,
                    false
                );
            }
        },
        highlightToday: function () {
            let currentMonth = calendarControl.localDate.getMonth() + 1;
            let changedMonth = calendar.getMonth() + 1;
            let currentYear = calendarControl.localDate.getFullYear();
            let changedYear = calendar.getFullYear();
            if (
                currentYear === changedYear &&
                currentMonth === changedMonth &&
                document.querySelectorAll(".number-item")
            ) {
                document
                    .querySelectorAll(".number-item")
                [calendar.getDate() - 1].classList.add("calendar-today");
            }
        },
        plotPrevMonthDates: function (dates) {
            dates.reverse();
            for (let i = 0; i < dates.length; i++) {
                if (document.querySelectorAll(".prev-dates")) {
                    document.querySelectorAll(".prev-dates")[i].textContent = dates[i];
                }
            }
        },
        plotNextMonthDates: function () {
            let childElemCount = document.querySelector('.calendar-body').childElementCount;
            //7 lines
            if (childElemCount > 42) {
                let diff = 49 - childElemCount;
                calendarControl.loopThroughNextDays(diff);
            }

            //6 lines
            if (childElemCount > 35 && childElemCount <= 42) {
                let diff = 42 - childElemCount;
                calendarControl.loopThroughNextDays(42 - childElemCount);
            }

        },
        loopThroughNextDays: function (count) {
            if (count > 0) {
                for (let i = 1; i <= count; i++) {
                    document.querySelector('.calendar-body').innerHTML += `<div class="next-dates">${i}</div>`;
                }
            }
        },
        attachEventsOnNextPrev: function () {
            calendarControl.plotDates();
            calendarControl.attachEvents();
        },
        init: function () {
            calendarControl.plotSelectors();
            calendarControl.plotDates();
            calendarControl.attachEvents();
        }
    };
    calendarControl.init();
}

const calendarControl = new CalendarControl();

function fetchShowAllEmployeeAttendance() {


    fetch(`http://localhost:3000/`)
        .then(response => response.json())
        .then(res => {
            if (res.massage == "done") {

                employee = res.user
                displayAllEmployeeAttendance()
            }
        })


}

function displayAllEmployeeAttendance() {

    let cartona = ""

    for (let i = 0; i < employee.length; i++) {

        cartona += `<div class="mt-4">

        <div class="d-flex align-items-center ">
            <div class="form-check">
                <button class="sqrBtn" onclick="getEmployeeIdAttendace('${employee[i]._id}','${employee[i].name}','${employee[i].department}')">
                    <i class="fa-solid fa-check icon-btn"></i>
                </button>
            </div>


            <div class="ms-3">
                <p class="mb-1 "> <span class="fw-bolder me-2">Name:</span>${employee[i].name}</p>
                <p><span class="fw-bolder  me-2">Department:</span>${employee[i].department}</p>
            </div>

        </div>

    </div>`
    }

    document.getElementById("displayEmpAttendance").innerHTML = cartona




}

for (let i = 0; i < empDepartmentAttendance.length; i++) {

    empDepartmentAttendance[i].addEventListener("change", function () {
        empDepartmentAttendance.value = this.value;
        if (empDepartmentAttendance.value == "all") {


            fetchShowAllEmployeeAttendance()

        } else {


            fetchShowEmployeeByAttendance(empDepartmentAttendance.value)


        }


    })
}

function fetchShowEmployeeByAttendance(form) {


    fetch(`http://localhost:3000/getUserByDepartment/${form}`)
        .then(response => response.json())
        .then(res => {
            if (res.massage == "done") {
                employee = res.user
                displayAllEmployeeAttendance()
            }
        })



}

function getEmployeeIdAttendace(_id, name, department) {

    employeeNameAttendance = name
    employeeDepartmentAttendance = department
    employeeIdForAttendance = _id

    console.log(employeeNameAttendance, employeeDepartmentAttendance, employeeIdForAttendance);


    fetchAttendance()


}

function fetchAttendance() {

    try {

        fetch(`http://localhost:3000/attendance/${employeeIdForAttendance}/${date}`)
            .then(response => response.json())
            .then(res => {
                if (res.massage == "done") {


                    attendanceInfo = res.attendance

                    if (attendanceInfo.length == 0) {
                        displayEmployeeAttendanceInfoEmpty()

                    } else {

                        if (attendanceInfo[0].attend == true) {
                            attendanceTrue = "Yes"
                        }

                        if (attendanceInfo[0].overtime == true) {
                            overTimeTrue = "Yes"
                        } else {
                            overTimeTrue = "NO"
                        }

                        displayEmployeeAttendanceInfo()

                    }



                }
            })

    } catch (error) {

        console.log(error);

    }


}

function displayEmployeeAttendanceInfo() {

    let cartona = ""

    for (let i = 0; i < attendanceInfo.length; i++) {


        cartona += `<tr>
        <td>${attendanceInfo[0].user.name}</td>
        <td>${attendanceInfo[0].user.department}</td>
        <td>${attendanceTrue}</td>
        <td>${overTimeTrue}</td>
    </tr>`
    }

    document.getElementById("attend").innerHTML = cartona




}

function displayEmployeeAttendanceInfoEmpty() {

    let cartona = ""

    for (let i = 0; i <= attendanceInfo.length; i++) {

        cartona += `<tr>
        <td>${employeeNameAttendance}</td>
        <td>${employeeDepartmentAttendance}</td>
        <td>NO</td>
        <td>No</td>
    </tr>`
    }

    document.getElementById("attend").innerHTML = cartona



}

//////////////////////////////////




/////// CHURN PREDECTION PAGE ///////////

let dispalayAllEmpChurn = document.getElementById("displayAllEmpChurn")
let displayEmpDepartmentChurn = document.getElementById("displayEmpDepartmentChurn")
let empDepartmentChurn = document.querySelectorAll("#empDepartmentChurn")
let employeeInChurn = []
let filterChurn = ""

let empInChurnId

let employeeNameInChurn = document.getElementById("employeeNameInChurn")
let employeeEmailInChurn = document.getElementById("employeeEmailInChurn")
let employeeRoleInChurn = document.getElementById("employeeRoleInChurn")
let employeeAgeInChurn = document.getElementById("employeeAgeInChurn")
let employeeDistanceInChurn = document.getElementById("employeeDistanceInChurn")
let employeeJobLevelInChurn = document.getElementById("employeeJobLevelInChurn")
let employeeSalaryInChurn = document.getElementById("employeeSalaryInChurn")
let employeeCompanyWorkedInChurn = document.getElementById("employeeCompanyWorkedInChurn")
let employeeYearsAtCompanyInChurn = document.getElementById("employeeYearsAtCompanyInChurn")
let employeeYearsInCurrentRoleInChurn = document.getElementById("employeeYearsInCurrentRoleInChurn")
let employeeLastPromotionInChurn = document.getElementById("employeeLastPromotionInChurn")
let employeeBusinessTravelInChurn = document.getElementById("employeeBusinessTravelInChurn")
let employeeDepartmentInChurn = document.getElementById("employeeDepartmentInChurn")
let employeeEducationalFieldChurn = document.getElementById("employeeEducationalFieldChurn")
let employeeGenderChurn = document.getElementById("employeeGenderChurn")
let employeeMartialChurn = document.getElementById("employeeMartialChurn")
let performanceRating = document.getElementById("rating")
let attendanceDays = document.getElementById("attendanceDays")
let jobSatisfaction = document.getElementById("JobSatisfaction")
let overTimeDays = document.getElementById("overTimeDays")
let churnPrediction = document.getElementById("churnPrediction")




for (let i = 0; i < empDepartmentChurn.length; i++) {

    empDepartmentChurn[i].addEventListener("change", function () {
        empDepartmentChurn.value = this.value;
        if (empDepartmentChurn.value == "all") {

            dispalayAllEmpChurn.classList.replace("d-none", "d-block")
            displayEmpDepartmentChurn.classList.replace("d-block", "d-none")
            fetchShowAllEmployee()

        } else {

            dispalayAllEmpChurn.classList.add("d-none")
            displayEmpDepartmentChurn.classList.replace("d-none", "d-block")
            fetchShowEmployeeByDepartmentChurn(empDepartmentChurn.value)
            filterChurn = empDepartmentChurn.value

        }


    })
}

function fetchShowEmployeeByDepartmentChurn(form) {


    fetch(`http://localhost:3000/getUserByDepartment/${form}`)
        .then(response => response.json())
        .then(res => {
            if (res.massage == "done") {
                employeeInChurn = res.user
                displayEmployeeDepChurn()
            }
        })



}

function fetchShowAllEmployeeChurn() {


    fetch(`http://localhost:3000/`)
        .then(response => response.json())
        .then(res => {
            if (res.massage == "done") {
                employeeInChurn = res.user
                displayAllEmployeeChurn()
            }
        })



}

function displayAllEmployeeChurn() {

    let cartona = ""

    for (let i = 0; i < employeeInChurn.length; i++) {

        cartona += ` <div class="col-md-12">

        <div class="row justify-content-between align-items-center border-top  border-3 rounded">

            <div class="row gy-md-3 gx-md-5">

            <div class="col-md-3">
            <p>Name:${employeeInChurn[i].name}</p>
            </div>

            <div class="col-md-2">
            <p>Department:${employeeInChurn[i].department}</p>
            </div>

            <div class="col-md-2">
            <p>Age:${employeeInChurn[i].age}</p>
            </div>

            <div class="col-md-3">
            <p>educationalField : ${employeeInChurn[i].educationalField}</p>
            </div>

            <div class="col-md-2">
            <button class="btn btn-danger" onclick="showChurn('${employeeInChurn[i]._id}')">Churn</button>
            </div>

            </div>


        </div>

    </div>`
    }

    dispalayAllEmpChurn.innerHTML = cartona




}

function displayEmployeeDepChurn() {

    let cartona = ""

    for (let i = 0; i < employeeInChurn.length; i++) {

        cartona += ` <div class="col-md-12">

        <div class="row justify-content-between align-items-center border-top  border-3 rounded">

            <div class="row gy-md-3 gx-md-5">

            <div class="col-md-3">
            <p>Name:${employeeInChurn[i].name}</p>
            </div>

            <div class="col-md-2">
            <p>Department:${employeeInChurn[i].department}</p>
            </div>

            <div class="col-md-2">
            <p>Age:${employeeInChurn[i].age}</p>
            </div>

            <div class="col-md-3">
            <p>educationalField : ${employeeInChurn[i].educationalField}</p>
            </div>

            <div class="col-md-2">
            <button class="btn btn-danger" onclick="showChurn('${employeeInChurn[i]._id}')">Churn</button>
            </div>

            </div>


        </div>

    </div>`
    }

    displayEmpDepartmentChurn.innerHTML = cartona




}

function showChurn(x) {

    homePage.classList.add("d-none")
    firstTaskPage.classList.add("d-none")
    secondTaskPage.classList.add("d-none")
    modifyPage.classList.add("d-none")
    CreatePage.classList.add("d-none")
    EditPage.classList.add("d-none")
    AttendancePage.classList.add("d-none")
    analysisFirstPage.classList.add("d-none")
    analysisSecondPage.classList.replace("d-none", "d-block")
    mainNav.classList.add("d-none")
    secNav.classList.replace("d-none", "d-block")


    let currentItem = employeeInChurn.filter((ele) => ele._id == x)[0]

    empInChurnId = currentItem._id


    employeeNameInChurn.innerHTML = currentItem.name
    employeeEmailInChurn.innerHTML = currentItem.email
    employeeRoleInChurn.innerHTML = currentItem.role
    employeeAgeInChurn.innerHTML = currentItem.age
    employeeDistanceInChurn.innerHTML = currentItem.distanceFromHome
    employeeSalaryInChurn.innerHTML = currentItem.income
    employeeBusinessTravelInChurn.innerHTML = currentItem.businessTravel
    employeeCompanyWorkedInChurn.innerHTML = currentItem.companyWorked
    employeeDepartmentInChurn.innerHTML = currentItem.department
    employeeEducationalFieldChurn.innerHTML = currentItem.educationalField
    employeeGenderChurn.innerHTML = currentItem.gender
    employeeMartialChurn.innerHTML = currentItem.martialStatus
    employeeYearsAtCompanyInChurn.innerHTML = currentItem.yearsAtCompany
    employeeJobLevelInChurn.innerHTML = currentItem.jobLevel
    employeeYearsInCurrentRoleInChurn.innerHTML = currentItem.YearsInCurrentRole
    employeeLastPromotionInChurn.innerHTML = currentItem.lastPromotion




    let _id = {

        id: empInChurnId
    }

    predict(_id)




}


async function predict(id) {

    try {

        const response = await fetch('http://localhost:3000/churn', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(id)
        });


        let data = await response.json();

        if (data.massage == "done") {

            performanceRating.innerHTML = data.PerformanceRating

            attendanceDays.innerHTML = data.attendanceDays

            jobSatisfaction.innerHTML = data.jobSat

            overTimeDays.innerHTML = data.overTimeDays

            churnPrediction.innerHTML = data.predictChurn

            if (data.predictChurn == "Yes") {

                churnPrediction.classList.add("text-danger")
            } else {

                churnPrediction.classList.add("text-success")

            }



        }



    } catch (error) {

        console.log(error);

    }

}

/////////////////////////////////////////////////////////



logout.addEventListener("click", function () {

    location.href = "index.html"
    sessionStorage.clear()
})

seclogout.addEventListener("click", function () {

    location.href = "index.html"
    sessionStorage.clear()

})

