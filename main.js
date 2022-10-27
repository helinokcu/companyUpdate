// EMPLOYEE
fetch('https://date.nager.at/api/v3/publicholidays/2017/AT')
    .then(response => {
        return response.json();
    }).then(json => {
        // 2.Create a variable to store HTML table headers
        let li = `<tr class="headers">
                    <th>
                        Application ID
                    </th>
                    <th>
                        Date
                    </th>
                    <th>
                        Status
                    </th>
                </tr>`;

        json.forEach((item) => {
            li += '<tr>';
            li += '<td>' + item.date + '</td>';
            if (item.countryCode === null) { li += '<td>' + "No Data" + '</td>' } else { li += '<td>' + item.countryCode + '</td>' };
            if (item.launchYear === null) { li += '<td>' + "No Data" + '</td>' } else { li += '<td>' + item.launchYear + '</td>' };
            li += `<td><span class="options">
                <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
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
                    <th>
                    Application ID
                    </th>
                    <th>
                    First Name
                    </th>
                    <th>
                    Last Name
                    </th>
                    <th>
                    Email
                    </th>
                    <th>
                    Request
                    </th>
                    <th>
                    Date
                    </th>
                    </tr>`;

        json.forEach((item) => {
            li += '<tr>';
            li += '<td>' + item.date + '</td>';
            li += '<td>' + item.localName + '</td>';
            li += '<td>' + item.name + '</td>';
            if (item.countryCode === null) { li += '<td>' + "No Data" + '</td>' } else { li += '<td>' + item.countryCode + '</td>' };
            if (item.launchYear === null) { li += '<td>' + "No Data" + '</td>' } else { li += '<td>' + item.launchYear + '</td>' };
            li += `<div><span class="options">
            <i onClick="approvePost(this)" class="fa-solid fa-check"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
            </span></div>`
            li += '</tr>';
        });

        // 3.DOM display result
        document.getElementById('manager_table').innerHTML = li;
    });

// Welcome text
// document.getElementById('welcome_text').innerHTML = 