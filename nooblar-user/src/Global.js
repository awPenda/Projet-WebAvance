function displayHideElement(e){
  if(e.style.visibility == "visible"){
    e.style.visibility = "hidden";
  } else {
    e.style.visibility = "visible";
  }
}

export function toggleSideBarProfile(){
  const e = document.getElementById('SideBarProfile');
  displayHideElement(e);
}
export function toggleSideBarNotifs(){
  const e = document.getElementById('SideBarNotifs');
  displayHideElement(e);
}

export function displayConnectionPage(){
  const e = document.getElementById('ConnectionPage');
  
  const f = document.getElementById('RegistrationPage')
  f.style.display = "none";
  e.style.display = "flex";

}

export function displayRegisterPage(){
  const e = document.getElementById('RegistrationPage');

  const f = document.getElementById('ConnectionPage');
  f.style.display = "none";
  e.style.display = "flex";
}

export function displayEditProfile() {
  const e = document.getElementById('EditProfile');
  const f = document.getElementById('Profile-box');
  if ( e.style.display ==  "flex") {
    e.style.display = "none";
    f.style.display = "flex";
    
  } else {
    e.style.display = "flex";
    f.style.display = "none";
    
  }
  
}
