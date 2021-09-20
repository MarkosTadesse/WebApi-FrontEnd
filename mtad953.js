staffLoad = false;

const showHome = () => {
    document.getElementById('Home').style.display='block';
    document.getElementById('Staff').style.display='none';
    document.getElementById('InstituteShop').style.display='none';
    document.getElementById('UserRegistration').style.display='none';
    document.getElementById('GuestBook').style.display='none';
    const fetchPromise= fetch(" http://localhost:5000/api/GetVersion");
    const streamPromise= fetchPromise.then((response) => response.text());
    streamPromise.then((data) => alert(data));
}

const showStaff = () => {

    document.getElementById('Home').style.display='none';
    document.getElementById('Staff').style.display='block';
    document.getElementById('InstituteShop').style.display='none';
    document.getElementById('UserRegistration').style.display='none';
    document.getElementById('GuestBook').style.display='none';
    const fetchPromise= fetch("http://localhost:5000/api/GetAllStaff");
    const streamPromise= fetchPromise.then((data) => data.json());
    const a = streamPromise.then(data => obj = data)
    const b = a.then(() => displayStaff(obj))


}
const showShop = () => {
    document.getElementById('Home').style.display='none';
    document.getElementById('Staff').style.display='none';
    document.getElementById('InstituteShop').style.display='block';
    document.getElementById('UserRegistration').style.display='none';
    document.getElementById('GuestBook').style.display='none';
    const fetchPromise= fetch("http://localhost:5000/api/GetItems");
    const streamPromise= fetchPromise.then((data) => data.json());
    const a = streamPromise.then(data => obj = data)
    const b = a.then(() => displayItems(obj))
    
}
const showRegistration = () => {
    document.getElementById('Home').style.display='none';
    document.getElementById('Staff').style.display='none';
    document.getElementById('InstituteShop').style.display='none';
    document.getElementById('UserRegistration').style.display='block';
    document.getElementById('GuestBook').style.display='none';
}
const showGuest = () => {
    document.getElementById('Home').style.display='none';
    document.getElementById('Staff').style.display='none';
    document.getElementById('InstituteShop').style.display='none';
    document.getElementById('UserRegistration').style.display='none';
    document.getElementById('GuestBook').style.display='block';
}

function displayStaff(staffMembers){
    console.log(staffMembers)
    for (var i = 0; i < staffMembers.length;i++){
        //Image
        var img = document.createElement('img');
        img.src = "http://localhost:5000/api/GetStaffPhoto/" + staffMembers[i]['id'];
        //div
        var div = document.createElement('div');
        div.id = 'container';
        div.innerHTML = staffMembers[i]['id'];
        div.className = 'border pad';
        div.append(img)
        document.getElementById("Staff").append(div)

    }
}
function displayItems(items){
    document.getElementById("InstituteShop").innerHTML="";
    for (var i = 0; i < items.length;i++){
        //Image
        var image = document.createElement('img');
        image.src = "http://localhost:5000/api/GetItemPhoto/" + items[i]['id']; 
        image.width= 200;
        //div
        var div = document.createElement('div');
        div.id = 'container';
        div.innerHTML = items[i]['id'];
        div.className = 'border pad';
        div.append(image)
        document.getElementById("InstituteShop").append(div)

    }
}


