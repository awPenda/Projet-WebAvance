export function addEvent(infos) {
  console.log('dateClick');
  console.log(infos);
  console.log(infos.dateStr);

  window.location.href = `findsession/${infos.dateStr}`;

  // date 	    // a Date for the clicked day/time.
  // dateStr 	  // An ISO8601 string representation of the date. Will have a time zone offset according to the calendar’s timeZone like 2018-09-01T12:30:00-05:00. If clicked on an all-day cell, won’t have a time part nor a time zone part, like 2018-09-01.
  // allDay 	  // true or false whether the click happened on an all-day cell.
  // dayEl 	    // An HTML element that represents the whole-day that was clicked on.
  // jsEvent    // The native JavaScript event with low-level information such as click coordinates.
  // view 	    // The current View Object.
  // resource 	// If the current view is a resource-view, the Resource Object that owns this date. Must be using one of the resource plugins.
}

function displayHideElement(e) {
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

  if (e.style.visibility === "visible") {
    e.style.width = minWidth;
    e.style.visibility = "hidden";
  } else {
    e.style.visibility = "visible";
    e.style.width = maxWidth;
  }
}

export function toggleSideBarProfile() {
  const e = document.getElementById('SideBarProfile');
  displayHideElement(e);
}
export function toggleSideBarNotifs() {
  const e = document.getElementById('SideBarNotifs');
  displayHideElement(e);
}

export function displayConnectionPage() {
  const e = document.getElementById('ConnectionPage');

  const f = document.getElementById('RegistrationPage')
  f.style.display = "none";
  e.style.display = "flex";

}

export function displayRegisterPage() {
  const e = document.getElementById('RegistrationPage');

  const f = document.getElementById('ConnectionPage');
  f.style.display = "none";
  e.style.display = "flex";
}

export function displayEditProfile() {
  const e = document.getElementById('EditProfile');
  const f = document.getElementById('Profile-box');
  if (e.style.display == "flex") {
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