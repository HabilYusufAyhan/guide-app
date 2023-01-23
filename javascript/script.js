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
  if (kontrol == 0) {
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
       <i class="fa-solid fa-pen"></i>
     </div>

     `;
      userdiv.appendChild(adduser);
    }
   else{
        window.alert("Lütfen boş alan bırakmayınız");
    }
  } else if (kontrol == 1) {
    if (name2.value != '' && surname.value != '' && phonenumber.value != ''&& email.value != '') {
      
   
    tick.parentElement.parentElement.firstElementChild.firstElementChild.textContent =
      name2.value;
    tick.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.textContent =
      surname.value;
    tick.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.textContent =
      phonenumber.value;
    tick.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent =
      email.value;
    submit.textContent = "Save";
    kontrol = 0;
    name2.value = "";
    surname.value = "";
    phonenumber.value = "";
    email.value = "";
  }
  else{
    window.alert("lütfen boşta input bırakmayın");
    
  }
  }

};
userdiv.addEventListener("click", removeordesign);
function removeordesign(e) {
  tick = e.target;
  if (tick.classList.contains("fa-trash")) {
    tick.parentElement.parentElement.remove();

    const silinenkisiphone =
      tick.parentElement.parentElement.firstElementChild.firstElementChild
        .nextElementSibling.nextElementSibling.textContent;
    sil(silinenkisiphone);
  } else if (tick.classList.contains("fa-pen")) {
   
    name2.value =
      tick.parentElement.parentElement.firstElementChild.firstElementChild.textContent;
    surname.value =
      tick.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.textContent;
    phonenumber.value =
      tick.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.textContent;
    email.value =
      tick.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
    submit.textContent = "Update";
    kontrol = 1;
  }
}
function search() {
  const search = document.querySelector(".searchinput");
  console.log(search.value);
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
       <i class="fa-solid fa-pen"></i>
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





