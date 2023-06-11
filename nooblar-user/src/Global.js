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

