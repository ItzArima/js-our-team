const team = [
    {
        name : 'user1',
        role : 'studente1',
        image : 'https://picsum.photos/200'       
    },
    {
        name : 'user2',
        role : 'studente2',
        image : 'https://picsum.photos/200'       
    },
    {
        name : 'user3',
        role : 'studente3',
        image : 'https://picsum.photos/200'       
    }
]

console.log(team[1].name);
console.log(team[2]['image']);


for(const key in team){
    console.log(key ,team[key]);;
}

/* const user = {
    username : 'username1',
    userrole : 'userstudente1',
    userimage : 'https://picsum.photos/200'
} */

/* console.log(user.userimage + "aaaaaaaaaaaa");
const img = document.createElement('img');
img.src = user['userimage'];
document.querySelector(".container").append(img)
for(const key in user){
    console.log(key , user[key]);
    document.querySelector(".container").innerHTML += "<br>" + key +" == " + user[key] + "<br>"; 
} */
/* let counter = 0; */
const userSelector = ["'name'","'role'","'image'"]

for(let i=0;i<team.length;i++){
    const img = document.createElement('img');
    img.src = team[i]['image'];
    document.querySelector(".container").append(img)
    /* for(const key in team){
        console.log(key , team[key]);
        document.querySelector(".container").innerHTML += "<br>" + key +" == " + team[i] + "<br>";
        counter++; 
    } */
    document.querySelector(".container").innerHTML += "<br>"+"nome " + team[i].name + "<br>";
    document.querySelector(".container").innerHTML += "<br>"+"ruolo " + team[i].role + "<br>";
    document.querySelector(".container").innerHTML += "<br>"+"immagine " + team[i].image + "<br>";
}

