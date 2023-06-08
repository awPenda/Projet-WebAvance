export default function toggleSideBar(){
    const e = document.getElementById('SideBar');
    if(e.style.visibility == "visible"){
      e.style.visibility = "hidden";
    } else {
      e.style.visibility = "visible";
    }
}

export function displayElement(e){
    
}

export function makeBubbles(){
    console.log('BUBBLEEES!');
}

