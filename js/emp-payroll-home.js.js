let employeePayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    employeePayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();
    // localStorage.removeItem('employeePayrollList');
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('employeePayrollList') ?
        JSON.parse(localStorage.getItem('employeePayrollList')) : [];
}
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Nane</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    if (employeePayrollList.length == 0) {
        return;
    }
    let innerHtml = `${headerHtml}`;
    for (const employeePayroll of employeePayrollList) {
        innerHtml = `${innerHtml}
            <tr>
                <td><img class="profile" alt="" src="${employeePayroll._profilePic}"></td>
                <td>${employeePayroll._name}</td>
                <td>${employeePayroll._gender}</td>
                <td>${getDeptHtml(employeePayroll._department)}</td>
                <td>${employeePayroll._salary}</td>
                <td>${employeePayroll._startDate}</td>
                <td>
                    <img id="${employeePayroll._id}" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
                    <img id="="${employeePayroll._id}" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
                </td>
            </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}


const getDeptHtml = (deptList) => {
    let deptHtml = '';

    if(typeof deptList == 'string') {
        deptHtml = `${deptHtml} <div class="dept-label">${deptList}</div>`
        return deptHtml;
    }
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }

    return deptHtml;
}