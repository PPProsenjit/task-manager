
const addToDb = (team, name, email, password, details ,navigate) => {
    let usersInfo = new Array();

    // get the users Info from local storage
    usersInfo = JSON.parse(localStorage.getItem('users-info')) ? JSON.parse(localStorage.getItem('users-info')) : [];
    if (usersInfo.some(value => { return value.email === email })) {
        alert("Already Registered!")
    }
    else {
        usersInfo.push({
            "team": team,
            "name": name,
            "email": email,
            "password": password,
            "details": details,
        })
        alert('submit Compleat!')
        navigate('/tasks')
    }
    localStorage.setItem('users-info', JSON.stringify(usersInfo))

}

const loginFromDb = (email, password, navigate) => {
    let userRecord = new Array();
    let user = {};
    userRecord = JSON.parse(localStorage.getItem('users-info')) ? JSON.parse(localStorage.getItem('users-info')) : [];
    user = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    if (userRecord.some((value) => { return value.email === email && value.password === password })) {
        user.push({
            "email": email
        })
        alert('login Successful')
        if (email === "admin@gmail.com") {
            navigate('/tasks');
        }
        else {
            navigate('/userTask')
        }
        //    return trueData = true
    }
    else {
        alert('invalid email or password')
    }
    localStorage.setItem('user', JSON.stringify(user))
}

const addToTasks = (team,email, title, description, start_date, end_date) => {
    let tasksInfo = new Array();

    // get the users Info from local storage
    tasksInfo = JSON.parse(localStorage.getItem('tasks-Details')) ? JSON.parse(localStorage.getItem('tasks-Details')) : [];
    if (tasksInfo.some(value => { return value.title === title })) {
        alert("Already Registered!")
    }
    else {
        tasksInfo.push({
            "team": team,
            "email": email,
            "title": title,
            "description": description,
            "start_date": start_date,
            "end_date": end_date
        })
    }
    localStorage.setItem('tasks-Details', JSON.stringify(tasksInfo))

}

const getUserLoginEmail = () => {
    const userJSON = localStorage.getItem('user');
    if (userJSON) {
        const users = JSON.parse(userJSON);
        if (Array.isArray(users) && users.length > 0) {
            const user = users[0]; // Assuming you want the first user in the array
            if (user.email) {
                // const email = user.email;
                // // Now you can use the 'email' variable to access the email address.
                // return email;
                return user.email;
            }
        }

    }
}


export {
    addToDb,
    loginFromDb,
    addToTasks,
    getUserLoginEmail
}
