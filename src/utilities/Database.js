
const addToDb = (name, email, password, details, file) => {
    let usersInfo = new Array();

    // get the users Info from local storage
    usersInfo = JSON.parse(localStorage.getItem('users-info')) ? JSON.parse(localStorage.getItem('users-info')) : [];
    if (usersInfo.some(value => { return value.email === email })) {
        alert("Already Registered!")
    }
    else {
        usersInfo.push({
            "name": name,
            "email": email,
            "password": password,
            "details": details,
            "file": file
        })
        alert('submit Compleat!')
    }
    localStorage.setItem('users-info', JSON.stringify(usersInfo))

}

const loginFromDb = (email, password, navigate) => {
    let userRecord = new Array();
    userRecord = JSON.parse(localStorage.getItem('users-info')) ? JSON.parse(localStorage.getItem('users-info')) : [];
    if (userRecord.some((value) => { console.log(value.email, email); return value.email === email && value.password === password })) {

        alert('login Successful')
        navigate('/userTask')
    }
    else {
        alert('invalid email or password')
    }
}

const addToTasks = (email, title, description, start_date, end_date) => {
    let tasksInfo = new Array();

    // get the users Info from local storage
    tasksInfo = JSON.parse(localStorage.getItem('tasks-Details')) ? JSON.parse(localStorage.getItem('tasks-Details')) : [];
    if (tasksInfo.some(value => { return value.title === title })) {
        alert("Already Registered!")
    }
    else {
        tasksInfo.push({
            "email": email,
            "title": title,
            "description": description,
            "start_date": start_date,
            "end_date": end_date
        })
    }
    localStorage.setItem('tasks-Details', JSON.stringify(tasksInfo))

}



export {
    addToDb,
    loginFromDb,
    addToTasks,
}
