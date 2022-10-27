// EMPLOYEE
fetch('https://date.nager.at/api/v3/publicholidays/2017/AT')
    .then(response => {
        return response.json();
    }).then(json => {
        // 2.Create a variable to store HTML table headers
        let li = `<tr class="headers">
                    <thead>
                        <td>
                        Application ID
                        </td>
                        <td>
                        Description
                        </td>
                        <td>
                        Date
                        </td>
                        <td>
                        Status
                        </td>
                        <td>
                        </td>
                    </thead>
                </tr>`;

        json.forEach((item) => {
            li += '<tr>';
            li += '<td>' + item.date + '</td>';
            li += '<td>' + item.date + '</td>';
            if (item.countryCode === null) { li += '<td>' + "No Data" + '</td>' } else { li += '<td>' + item.countryCode + '</td>' };
            if (item.launchYear === null) { li += '<td>' + "No Data" + '</td>' } else { li += '<td>' + item.launchYear + '</td>' };
            li += `<td><span class="options">
                <i onClick="deleteRequest(this)" class="fas fa-trash-alt"></i>
                </span></td>`;
            li += '</tr>'
        });

        // 3.DOM display result
        document.getElementById('employee_table').innerHTML = li;
    });


// MANAGER
fetch('https://date.nager.at/api/v3/publicholidays/2019/AT')
    .then(response => {
        return response.json();
    }).then(json => {
        // 2.Create a variable to store HTML table headers
        let li = `<tr class="headers">
                    <thead>
                    <td>
                    Application ID
                    </td>
                    <td>
                    First Name
                    </td>
                    <td>
                    Last Name
                    </td>
                    <td>
                    Email
                    </td>
                    <td>
                    Request
                    </td>
                    <td>
                    Date
                    </td>
                    <td></td>
                    </thead>
                    </tr>`;

        json.forEach((item) => {
            li += '<tr>';
            li += '<td>' + item.date + '</td>';
            li += '<td>' + item.localName + '</td>';
            li += '<td>' + item.name + '</td>';
            li += '<td>' + item.name + '</td>';
            if (item.countryCode === null) { li += '<td>' + "No Data" + '</td>' } else { li += '<td>' + item.countryCode + '</td>' };
            if (item.launchYear === null) { li += '<td>' + "No Data" + '</td>' } else { li += '<td>' + item.launchYear + '</td>' };
            li += `<td><span class="options">
            <i onClick="approveRequest(this)" class="fa-solid fa-check"></i>
            <i onClick="deleteRequest(this)" class="fa-sharp fa-solid fa-xmark"></i>
            </span></td>`
            li += '</tr>';
        });

        // 3.DOM display result
        document.getElementById('manager_table').innerHTML = li;
    });

// Welcome text
// document.getElementById('welcome_text').innerHTML = 

// ADD Request
let form = document.getElementById("form")
let input = document.getElementById("input")
let msg = document.getElementById("msg")
let table = document.getElementById("employee_table")


// form.addEventListener("submit", myFunction);

// submit edildiginde calısacak fonksiyon--> formValidation doner
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

// submit edildiginde input bos degilse acceptData doner
let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
        console.log("failure")
    } else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
}

let createPost = () => {
    table.innerHTML += `
    <div>
        <tr>
        <td>-</td>
        <td>-</td>
        <td>${data.text}</td>
        <td>-</td>
        <td>
        <span class="options">
        <i onClick="deleteRequest(this)" class="fas fa-trash-alt"></i>
        </span>
        </td>
    </div>
    `;
    input.value = "";
}

let deleteRequest = (e) => {
    e.parentElement.parentElement.parentElement.parentElement.remove();
}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML
    e.parentElement.parentElement.remove();
}