let user = JSON.parse(sessionStorage.getItem("Employee"))
let logout = document.getElementById("logout")



console.log(user._id);


let overTimeContainer = document.getElementById("overTimeContainer")
let yesOvertime = document.getElementById("yes-overtime")
let noOvertime = document.getElementById("no-overtime")

let requestOvertimeBtn = document.getElementById("requestOvertime")

requestOvertimeBtn.addEventListener("click", function () {

    overTimeContainer.classList.replace("d-none", "d-block")


})

yesOvertime.addEventListener("click", function () {

    let form = {

        id: user._id
    }

    try {

        fetch("http://localhost:3000/updateOverTime", {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        }).then(response => response.json())
            .then(res => {
                if (res.massage == "done") {
                    console.log(res.overTime);
                } else if (res.massage == "already Requested") {

                    window.alert("you have already request an over time")
                }
            })


    } catch (error) {

        console.log(error);

    }


    overTimeContainer.classList.replace("d-block", "d-none")

})

noOvertime.addEventListener("click", function () {

    overTimeContainer.classList.replace("d-block", "d-none")

})



/////////////////////













//////////task page Home/////////


let addTask = document.getElementById("addTask")
let showTasks = document.getElementById("showTasks")
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

})

showTasks.addEventListener("click", function () {

    firstTaskPage.classList.replace("d-none", "d-block")
    secondTaskPage.classList.add("d-none")

})


showSubmitedTasks()


function showSubmitedTasks() {


    try {

        fetch(`http://localhost:3000/getTaks/${user._id}`)
            .then(response => response.json())
            .then(res => {
                if (res.massage == "done") {


                    let x
                    x = res.allTask

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
        <td>${task[i].title}</td>
        <td>${task[i].deadLine.split("T22:00:00.000Z").join("")}</td>
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
    projectNametDesc.innerHTML = currentItem.title
    projectDescriptionDesc.innerHTML = currentItem.description
    projectSubmitDesc.innerHTML = currentItem.deadLine.split("T22:00:00.000Z").join("")
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

                    showSubmitedTasks()
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
let submitTask = document.getElementById("submitTask")
let empDepartmentTask = document.querySelectorAll("#empDepartmentTask")







let deascValue
let titleValue
let file




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

projectTitle.addEventListener("input", function () {

    titleValue = projectTitle.value
})

taskDescription.addEventListener("input", function () {

    deascValue = taskDescription.value
})

submitTask.addEventListener("click", function () {

    if (deascValue && titleValue && fileNameDisplay.textContent) {




        let form = {
            img: file,
            from: user._id,
            to: "6667265bda23e7745b4c47f4", //mtsabet 3shan 3ndena hr wahedd for now
            title: titleValue,
            description: deascValue,

        }

        let fData = objectToFormData(form)



        try {

            fetch(`http://localhost:3000/SumbitTask`, {

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
        window.alert("missing inputs")
    }


})

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
    fileNameDisplay.textContent = ""


}


////////////////////////// rating //////////////////////////////////


let employee = [];
let loggedInUserId = user._id;
let empId

function fetchShowAllEmployee() {
    fetch(`http://localhost:3000/`)
        .then(response => response.json()
        ).then(res => {
            if (res.massage == "done") {
                employee = res.user;
                displayAllEmployee();
            }
        }).catch(error => console.error('Error fetching employees:', error));
}
function displayAllEmployee() {
    if (!user || !user.department) {
        console.error('User department not found.');
        return;
    }
    let cartona = "";
    let currentUserEntry = null; // To store the entry for the current user (if found)

    for (let i = 0; i < employee.length; i++) {
        if (employee[i].department === user.department) {
            let isCurrentUser = employee[i]._id === loggedInUserId;
            let names = employee[i].name.split(' ');
            let displayName = names.slice(0, 2).join(' ');

            if (isCurrentUser) {
                // Store the current user entry
                currentUserEntry = `
                    <div class="employee-container">
                        <div class="employee-entry">
                            <div class="employee-details">
                                <p>${displayName} (You)</p>
                            </div>
                            <div class="employee-details">
                                <button class="btn btn-primary" onclick="editPage('${employee[i]._id}')">Rate</button>
                            </div>
                        </div>
                        <hr>
                    </div>
                `;
            } else {
                // Add other employees' entries
                cartona += `
                    <div class="employee-container">
                        <div class="employee-entry">
                            <div class="employee-details">
                                <p>${displayName}</p>
                            </div>
                            <div class="employee-details">
                                <button class="btn btn-primary" onclick="editPage('${employee[i]._id}')">Rate</button>
                            </div>
                        </div>
                        <hr>
                    </div>
                `;
            }
        }
    }

    // Add the current user entry first (if found)
    if (currentUserEntry) {
        cartona = currentUserEntry + cartona;
    }

    document.getElementById("employee-list").innerHTML = cartona;
}


function editPage(employeeId) {

    empId = employeeId
    console.log(empId);

    let surveyHimSection = document.getElementById('survey-form-him');
    let surveyOtherSection = document.getElementById('survey-form-oth');
    if (employeeId === loggedInUserId) {
        surveyHimSection.style.display = 'block';
        surveyOtherSection.style.display = 'none';
        window.location.hash = 'survey-form-him';
    } else {
        surveyHimSection.style.display = 'none';
        surveyOtherSection.style.display = 'block';
        window.location.hash = 'survey-form-oth';
    }
}

fetchShowAllEmployee();

async function calculateAverageAndSendToHR() {
    const ratings = document.querySelectorAll('input[name="obj"]:checked, input[name="comm"]:checked, input[name="pressure"]:checked, input[name="delegation"]:checked, input[name="problem-solving"]:checked, input[name="role"]:checked, input[name="productivity"]:checked');
    if (ratings.length < 7) {
        alert('Please select ratings for all questions.');
        return;
    }

    let totalRating = 0;
    ratings.forEach(ratingInput => {
        totalRating += parseInt(ratingInput.value);
    });

    const averageRating = totalRating / ratings.length;

    if (!user._id) {
        alert('Rater ID not found');
        return;
    }

    const raterId = user._id;
    if (!/^[0-9a-fA-F]{24}$/.test(empId) || !/^[0-9a-fA-F]{24}$/.test(raterId)) {
        alert('Invalid ID format');
        return;
    }

    console.log(averageRating.toFixed(2));

    const payload = { raterId: raterId, ratedUserId: empId, star: averageRating.toFixed(2) };

    try {
        let response = await fetch('http://localhost:3000/rateEmployee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        let data = await response.json();
        console.log('Response data:', data);


        if (data.message == "You have already rated this employee for this month") {
            window.alert("You have already rated this employee for this month")
            window.location.href = 'Employee.html';
        }

        if (data.massage == "done") {
            window.alert("Thank you for submitting your rating!")
            window.location.href = 'Employee.html';
        }


    } catch (error) {
        console.error('Error submitting rating:', error);
        alert('Error submitting rating. Please try again later.');
    }
}

async function calculateAverageAndSendToHR1() {
    const ratings = document.querySelectorAll('input[name="communication"]:checked, input[name="deadlines"]:checked, input[name="collaborate"]:checked, input[name="stress"]:checked, input[name="solving"]:checked');
    if (ratings.length < 5) {
        alert('Please select ratings for all questions.');
        return;
    }
    let totalRating = 0;
    ratings.forEach(ratingInput => {
        totalRating += parseInt(ratingInput.value);
    });
    const averageRating = totalRating / ratings.length;

    if (!user._id) {
        alert('Rater ID not found');
        return;
    }
    const raterId = user._id;
    // Check if IDs are valid ObjectId format (24 hex characters)
    if (!/^[0-9a-fA-F]{24}$/.test(empId) || !/^[0-9a-fA-F]{24}$/.test(raterId)) {
        alert('Invalid ID format');
        return;
    }

    const payload = { raterId: raterId, ratedUserId: empId, star: averageRating.toFixed(2) };
    try {
        let response = await fetch('http://localhost:3000/rateEmployee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });


        let data = await response.json();
        console.log('Response data:', data);

        if (data.message == "You have already rated this employee for this month") {
            window.alert("You have already rated this employee for this month")
            window.location.href = 'Employee.html';
        }

        if (data.massage == "done") {
            window.alert("Thank you for submitting your rating!")
            window.location.href = 'Employee.html';
        }

    }
    catch (error) {
        console.error('Error submitting rating:', error);
        alert('Error submitting rating. Please try again later.');
    }
}


///////////////////////////////




////////////sentiment///////


let sentimentContainer = document.getElementById("sentimentContainer")
const submitButton = document.querySelector('.submit-sentiment-btn');
let closeSentimentBtn = document.getElementById("close-sentiment-btn")


logout.addEventListener("click", function () {

    sentimentContainer.classList.replace("d-none", "d-block")

})

closeSentimentBtn.addEventListener("click", function () {

    location.href = "index.html"
    sessionStorage.clear()

})

submitButton.addEventListener('click', async () => {

    const feedback = document.getElementById('feedback').value;
    const id = user._id

    let form = {
        feedback: feedback,
        id: id
    }

    const response = await fetch('http://localhost:3000/sentimentAnalysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
    });

    let data = await response.json();


    if (data.message == "You already submitted your response today") {
        window.alert("You already submitted your response today")
        location.href = "index.html"
        sessionStorage.clear()
    }

    if (data.message == "done") {

        window.alert('Thank you for submitting!')
        location.href = "index.html"
        sessionStorage.clear()

    }


});


/////////////////////////////////






