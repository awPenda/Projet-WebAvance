function displayHideElement(e){
  const x = window.matchMedia("(max-width: 481px)")
  let minWidth, maxWidth;

  if (x.matches) { // If media query matches = smaller than 481px
    minWidth = "0%";
    maxWidth = "90%";
    console.log("smaller" + maxWidth + minWidth);
  } else { //bigger than 481px
    minWidth = "0%";
    maxWidth = "50%";
    console.log("smaller" + maxWidth + minWidth);
  }

  if(e.style.visibility === "visible"){
    e.style.width = minWidth;
    e.style.visibility = "hidden";
  } else {
    e.style.visibility = "visible";
    e.style.width = maxWidth;
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

export function expand(e, key_name) {
  const elm = document.getElementById(`notif_body${key_name}`);
  if (elm.style.display != "none") {
    elm.style.display = "none"; 
  } else { 
    elm.style.display = "block"; 
  }
  
}