
const getDataFromServer= ()=>{
    fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then(data => data = this.formatData(data))
    .then(formatData => this.setState(
    {usersInfo: formatData}
    ))
}

const formatData = data => {
        debugger;
        const listUsers = []
        const newUsers = data.results;
    // console.log(newUsers)
        for (let i=0; i<newUsers.length;i++){
        let newUserName = newUsers[i].name.first + " " + newUsers[i].name.last;
        let newUserPic = newUsers[i].picture.medium;
        let newUserCity = newUsers[i].location.city;
        let newUserAge = newUsers[i].dob.age;
        let newUserGender = newUsers[i].gender;
        let newUserContent ={
            name: newUserName,
            pic: newUserPic,
            city: newUserCity,
            age: newUserAge,
            gender: newUserGender,
        }
        listUsers.push(newUserContent);
        }
        console.log(listUsers);
        return listUsers
}
       

