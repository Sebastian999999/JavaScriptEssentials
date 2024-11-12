const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 , specialization: 'Javascript'},
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 , specialization: 'Python'},
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 , specialization: 'Java' },
      //... More employee records can be added here
    ];

    function displayEmployees(){
        const totalEmployees = employees.map((employee , index) => `${employee.id} ${employee.name} ${employee.age} ${employee.department} ${employee.salary}`).join('');
        document.getElementById('employeesDetails').innerHTML = totalEmployees;
    }

    function calculateTotalSalaries(){
        const totalsalary = employees.reduce((total , emp) => total + emp.salary , 0);
        document.getElementById('employeesDetails').innerHTML = `<p>Total Salary : ${totalsalary}</p>`;
    }

    function displayHREmployees(){
        const HREmployees = employees.filter((emp)=>emp.department==='HR');
        const HREmployee = HREmployees.map((emp,index)=>`<p>${emp.id} ${emp.name} ${emp.age} ${emp.department} ${emp.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML=HREmployee;
    }

    function findEmployeeById(id){
        const employeeID = employees.find(emp => emp.id === id);
        if (employeeID)
            document.getElementById('employeesDetails').innerHTML = `<p>${employeeID.id} ${employeeID.name} ${employeeID.age} ${employeeID.department} ${employeeID.salary}</p>`;
        else
            document.getElementById('employeesDetails').innerHTML = '<p>Employee not found.</p>';
    }

    function findEmployeeBySpecialization(special){
        const findEmployee = employees.find(emp => emp.specialization === special);
        if (findEmployee)
            document.getElementById('employeesDetails').innerHTML = `<p>${findEmployee.id} ${findEmployee.name} ${findEmployee.department} ${findEmployee.salary} ${findEmployee.specialization}</p>`;
        else
        document.getElementById('employeesDetails').innerHTML = '<p>Employee not found.</p>';
    }