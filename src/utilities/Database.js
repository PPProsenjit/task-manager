
const addToDb = (name, email, password, details) => {
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
            "details" : details
        })
    }
    localStorage.setItem('users-info', JSON.stringify(usersInfo))

}


export {
    addToDb,
}
