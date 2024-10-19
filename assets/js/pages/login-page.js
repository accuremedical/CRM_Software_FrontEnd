document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault(event);

    //get the values from the input field

    const role = document.getElementById('role').value;
    const userid = document.getElementById('userid').value;
    const password = document.getElementById('password').value;

    //define credentials for different roles

    const credentials ={
        admin : {userid:'admin@admin.com',password:'admin'},
        employee : { userid :'employee@employee.com', password:'employee'},
        dealer : {userid : 'dealer@dealer.com', password: 'dealer'},
        manager :{ userid : 'manager@manager.com', password : 'manager'},
        stock:{ userid: 'stock@manager.com', password: 'stockmanager'},
        
    };
    //validate role selection and credentials
    if(!role){
        document.getElementById('error-message').textContent ='Please Select a Role!';
        return ;
    }
    if(credentials[role].userid === userid && credentials[role].password === password){
        if(role === 'admin'){
            window.location.href = '../AdminDashboard/index.html';
        }
        else if(role === 'employee'){
           window.location.href = '../EmployeeDashboard/employee-dashboard.html';
        }
        else if(role === 'dealer'){
            window.location.href = '../DealerDashboard/dealer-dashboard.html';
        }
        else if(role === 'manager'){
            window.location.href ='../SystemManagerDashboard/index.html';
        }
        else if(role ==='stock'){
            window.location.href ='../StockManagerDashboard/index.html';
        }
    }
    else if(!userid){
        document.getElementById('error-message').textContent ='invalid UserId'
    }
    else{
        document.getElementById('error-message').textContent = 'invalid UserId Or Password!';
    }
});