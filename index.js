let homeEl = document.getElementById("home");
 let home = parseInt(homeEl.textContent);
 
let guestEl = document.getElementById("guest");
 let guest = parseInt(guestEl.textContent);
 
// HOME Functions
function home1(){
 home += 1;
 homeEl.textContent = home;
}

function home2(){
 home += 2;
 homeEl.textContent = home;
}

function home3(){
 home += 3;
 homeEl.textContent = home;
}


//GUEST Fuctions

function guest1(){
 guest += 1;
 guestEl.textContent = guest;
}

function guest2(){
 guest += 2;
 guestEl.textContent = guest;
}

function guest3(){
 guest += 3;
 guestEl.textContent = guest;
}