const userdiv = document.querySelector(".useruserdiv");
const name2 = document.querySelector(".name");
const surname = document.querySelector(".surname");
const phonenumber = document.querySelector(".phone-number");
const email = document.querySelector(".email");
const submit = document.querySelector(".submit");
const number = document.querySelector(".usernumbersspan");
var valuename;
var valuesurname;
var valuephone;
var valuemail;
var kontrol = 0;

oku();
submit.onclick = function () {

    valuename = name2.value;
    valuesurname = surname.value;
    valuephone = phonenumber.value;
    valuemail = email.value;
    if (valuename != '' && valuesurname != ''&&  valuephone != ''&&  valuemail != '') {
      localstorage();
    
      const adduser = document.createElement("div");
      adduser.classList.add("usermain");
      adduser.innerHTML = `
     
     <div class="user">
       <p class="user-name">${name2.value}</p>
       <p class="user-surname">${surname.value}</p>
       <p class="user-phone-number">${phonenumber.value}</p>
       <p class="user-E-Mail">${email.value}</p>
     </div>
     <div class="userbutton">
       <i class="icon fa-solid fa-trash"></i>
     </div>

     `;
      userdiv.appendChild(adduser);
    }
   else{
        window.alert("Lütfen boş alan bırakmayınız");
    }
  } 

userdiv.addEventListener("click", removeordesign);
function removeordesign(e) {
  tick = e.target;
  if (tick.classList.contains("fa-trash")) {
    tick.parentElement.parentElement.remove();

    const silinenkisiphone =
      tick.parentElement.parentElement.firstElementChild.firstElementChild
        .nextElementSibling.nextElementSibling.textContent;
    sil(silinenkisiphone);
  } 
}


function localstorage() {
  let kisiad;
  let kisisoyad;
  let kisiphone;
  let kisimail;
  if (localStorage.getItem("kisiad") === null) {
    kisiad = [];
    kisisoyad = [];
    kisiphone = [];
    kisimail = [];
  } else {
    kisiad = JSON.parse(localStorage.getItem("kisiad"));
    kisisoyad = JSON.parse(localStorage.getItem("kisisoyad"));
    kisiphone = JSON.parse(localStorage.getItem("kisiphone"));
    kisimail = JSON.parse(localStorage.getItem("kisimail"));
  }
  kisiad.push(valuename);
  kisisoyad.push(valuesurname);
  kisiphone.push(valuephone);
  kisimail.push(valuemail);
  localStorage.setItem("kisiad", JSON.stringify(kisiad));
  localStorage.setItem("kisisoyad", JSON.stringify(kisisoyad));
  localStorage.setItem("kisiphone", JSON.stringify(kisiphone));
  localStorage.setItem("kisimail", JSON.stringify(kisimail));
  number.textContent = kisiad.length;
}
function oku() {
  let kisiad;
  let kisisoyad;
  let kisiphone;
  let kisimail;
  
  if (localStorage.getItem("kisiad") === null) {
    kisiad = [];
    kisisoyad = [];
    kisiphone = [];
    kisimail = [];
  } else {
    kisiad = JSON.parse(localStorage.getItem("kisiad"));
    kisisoyad = JSON.parse(localStorage.getItem("kisisoyad"));
    kisiphone = JSON.parse(localStorage.getItem("kisiphone"));
    kisimail = JSON.parse(localStorage.getItem("kisimail"));
  }
  for (let kisisayac = 0; kisisayac < kisiad.length; kisisayac++) {
    const adduser = document.createElement("div");
    adduser.classList.add("usermain");
    adduser.innerHTML = `
     
     <div class="user">
       <p class="user-name">${kisiad[kisisayac]}</p>
       <p class="user-surname">${kisisoyad[kisisayac]}</p>
       <p class="user-phone-number">${kisiphone[kisisayac]}</p>
       <p class="user-E-Mail">${kisimail[kisisayac]}</p>
     </div>
     <div class="userbutton">
       <i class="icon fa-solid fa-trash"></i>
     </div>

     `;
    userdiv.appendChild(adduser);
  }
  number.textContent = kisiad.length;
}
function sil(silinenad) {
  let kisiad;
  let kisisoyad;
  let kisiphone;
  let kisimail;
  if (localStorage.getItem("kisiad") === null) {
    kisiad = [];
    kisisoyad = [];
    kisiphone = [];
    kisimail = [];
  } else {
    kisiad = JSON.parse(localStorage.getItem("kisiad"));
    kisisoyad = JSON.parse(localStorage.getItem("kisisoyad"));
    kisiphone = JSON.parse(localStorage.getItem("kisiphone"));
    kisimail = JSON.parse(localStorage.getItem("kisimail"));
  }

  const silinecekelemanindex = kisiphone.indexOf(silinenad);
  kisiad.splice(silinecekelemanindex, 1);
  kisisoyad.splice(silinecekelemanindex, 1);
  kisiphone.splice(silinecekelemanindex, 1);
  kisimail.splice(silinecekelemanindex, 1);
  localStorage.setItem("kisiad", JSON.stringify(kisiad));
  localStorage.setItem("kisisoyad", JSON.stringify(kisisoyad));
  localStorage.setItem("kisiphone", JSON.stringify(kisiphone));
  localStorage.setItem("kisimail", JSON.stringify(kisimail));

  number.textContent = kisiad.length;
}




if (user.energy == 0) {
  while (user.energy == 100) {
    drinkcoffee();
    listentomusic();
  }
  
}
if (user.energy == 100) {
  backtowork();
}





