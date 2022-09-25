$(document).ready(onReady)

let employees = [];
let totalMonthlyCost= 0;

function onReady(){
    console.log('In JQ')
    $('#submit').on('click',addEmployee);
    $('#employees').on('click',`#deleteBtn`,removeEmployee)
    
}

function addEmployee() {
let newEmployee = {
    fName:$('#fName').val(),
    lName: $('#lName').val(),
    idNumb: $('#idNumb').val(),
    title:$('#title').val(),
    salary:$('#salary').val()
    }
console.log('Employees:',employees);
employees.push(newEmployee)
monthlyCost()
render()
}

function monthlyCost(){
    let cost = 0;
    for(let each of employees){
        cost += Number(each.salary)
        totalMonthlyCost = (cost/12).toFixed(2)
        $('#total').text(`Total Monthly:$${totalMonthlyCost}`)
    }
    if(totalMonthlyCost >=20000){
        $('#total').css(`background-color`,`red`);
      }
    
}

function removeEmployee(){
    $(this).parent().parent().remove();
}


function render(){
    $('#employees').empty();
    for (let each of employees) {
        $('#employees').append(`
        <tr>
            <td>${each.fName}</td>
            <td>${each.lName}</td>
            <td>${each.idNumb}</td>
            <td>${each.title}</td>
            <td>${each.salary}</td>
            <td>
             <button id="deleteBtn">Delete button</button>
            </td>
        </tr>
        `);
      }
      if(totalMonthlyCost >=20000){
        $('#total').css('background-color','red');
      }
}