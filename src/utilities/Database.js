
const addToDb = (name, email, password, details, file) => {
    let usersInfo = new Array();

    // get the users Info from local storage
    usersInfo = JSON.parse(localStorage.getItem('users-info')) ? JSON.parse(localStorage.getItem('users-info')) : [];
    if (usersInfo.some(value => {return value.email == email})) {
       alert("Already Registered!")
    }
    else {
        usersInfo.push({
            "name" : name,
            "email" : email,
            "password" : password,
            "details" : details,
            "file" : file
        })
    }
    localStorage.setItem('users-info', JSON.stringify(usersInfo))

}

const loginFromDb = (email, password) =>{
    let userRecord = new Array();
   userRecord = JSON.parse(localStorage.getItem('users-info')) ? JSON.parse(localStorage.getItem('users-info')) : [];

    if(userRecord.some((value) => { return value.email == email && value.password === password})){
        alert('login Successful')
    }
    else
    {
        alert('Please check Email and password')
    }
}


export {
    addToDb,
    loginFromDb
}
