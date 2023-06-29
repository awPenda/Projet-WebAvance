import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"  // needed for dayClick
// import timeGridPlugin from '@fullcalendar/timegrid'

// import { Calendar } from '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import listPlugin from '@fullcalendar/list';


import { Calendar } from '@fullcalendar/core';
// import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { addEvent, postnotif } from '../Global'
import axios from 'axios';





let events = [];

// // list of events, should be received by backend
/*
let events = [
  {
    id: 1,
    allDay: false, //or true
    start: new Date(),
    end: new Date(),
    daysOfWeek: [3], //for recurring events [0,1] for recurring sunday and mondays
    title: 'meeting with Juliette',
    url: '/session/3', //send to link when visited, can be controlled with eventClick
    interactive: true, // eventInteractive
    className: 'mockclassname', //or classNames pour 
    //for more https://fullcalendar.io/docs/event-parsing
    color: 'olive', //for background and border
    extendedProps: {
      priority: 'high'
    },
    description: 'Lecture'
  }, {
    id: 2,
    allDay: false,
    start: "2023-06-06T08:30:00-03:00",
    end: "2023-06-06T09:30:00-03:00",
    slotDuration: "01:00",
    title: "fghjkl",
    url: "/",
    interactive: true,
    extendedProps: {
      description: "gh",
      status: "pending",
      priority: "normal",
      student: 7,
      tutors: 1
    }
  }
]
*/

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}



function addCalendar() {
  let array_events = [];

  if (Array.isArray(events)) {
    array_events = events
  } else {
    array_events.push(events);
  }

  let calendarEl = document.getElementById('calendar');
  let calendar = new Calendar(calendarEl, {
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    customButtons: {
      FindSession: {
        text: 'Find a session',
        click: () => { window.location.href = "/findsession" }
      }
    },
    views: {
      timeGridFourDay: {
        type: 'timeGrid',
        duration: { days: 3 },
      },
      month: {
        dayHeaderFormat: {
          weekday: 'short'
        },
      }
    },
    headerToolbar: {
      left: 'title', // will normally be on the left. if RTL, will be on the right
      right: 'prev,next today'// will normally be on the right. if RTL, will be on the left
    },
    footerToolbar: {
      center: 'dayGridMonth,timeGridWeek,timeGridFourDay,timeGridDay,listWeek FindSession',
    },
    buttonText: {
      timeGridFourDay: '3days',
      today: 'Today',
      month: 'Month',
      week: 'Week',
      day: 'Day',
      list: 'List'
    },
    initialDate: new Date(),
    initialView: 'timeGridFourDay',
    titleFormat: {
      month: 'long',
      year: 'numeric'
    },
    dayHeaderFormat: {
      weekday: 'short', day: 'numeric'
    },
    nowIndicator: true,
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    // selectMirror: true,
    dateClick: (info) => { addEvent(info) }, //can add selectable true and select: (info)=>{} for several 
    dayMaxEvents: true, // allow "more" link when too many events
    // events: events,
    events: array_events,
    //events: 'https://fullcalendar.io/api/demo-feeds/events.json',
    // eventSources: [
    //   {
    //     events: events
    //   }
    // ],
    eventTimeFormat: { // like '14:30:00'
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    },
    eventColor: '#6ACD74',
    eventTextColor: '#18180c',
    themeSystem: 'standard',
    height: "30rem",
    //allDayDefault: false,
  });

  //adjust calendar size

  const x = window.matchMedia("(max-width: 481px)")
  if (x.matches) { // If media query matches = smaller than 481px
    calendar.setOption('height', "29rem");

  } else { //bigger than 481px
    calendar.setOption('height', "40rem");
    calendar.changeView('timeGridWeek');

  }


  calendar.refetchEvents();
  // events.forEach((event) => {
  //   calendar.addEvent(event, 'back-en');
  // })



  calendar.render();
}

function axiosGetEvents(user_id, is_student) {
  //transform data so it can be passed in the body
  let par;
  if (is_student=='true') {
    par = {
      extendedProps: {
        student: user_id
      }
    }
    axios
  .get('http://localhost:8080/api/getSessionStudent', { params: par})
  .then((response) => {
    console.log("reponse:"+response.data);
    // displayFetchedUsers(response.data);
    const hmtl_elm = document.getElementById('calendar');
    hmtl_elm.setAttribute('data-listevents', JSON.stringify(response.data));

    rerenderListEvents();
    //console.log('Successfully fetched user data');
})
.catch((error) => {
    console.error('Error fetching user data:', error);
});
  } else {
    par = {
      extendedProps: {
        tutors: user_id
      }
    }
    axios
    .get('http://localhost:8080/api/getSessionTutors', { params: par})
    .then((response) => {
      console.log("reponse:"+response.data);
      // displayFetchedUsers(response.data);
      const hmtl_elm = document.getElementById('calendar');
      hmtl_elm.setAttribute('data-listevents', JSON.stringify(response.data));
  
      rerenderListEvents();
      //console.log('Successfully fetched user data');
  })
  .catch((error) => {
      console.error('Error fetching user data:', error);
  });
  }


  // function must return data in that form
  return [{
    id: 1,
    allDay: false,
    start: "2023-06-29T08:30:00-03:00",
    end: "2023-06-29T09:30:00-03:00",
    slotDuration: "01:00",
    title: "fghjkl",
    url: "/session/12",
    interactive: true,
    extendedProps: {
      description: "gh",
      status: "pending",
      priority: "normal",
      student: 7,
      tutors: 1
    }
  }, {
    id: 2,
    allDay: false,
    start: "2023-07-01T11:30:00-03:00",
    end: "2023-07-001T12:30:00-03:00",
    slotDuration: "01:00",
    title: "fghjkl",
    url: "/session/14",
    interactive: true,
    extendedProps: {
      description: "gh",
      status: "pending",
      priority: "normal",
      student: 7,
      tutors: 1
    }
  }]
}


function rerenderListEvents() {

  const hmtl_elm = document.getElementById('calendar');
  const list_hmtl = JSON.parse(hmtl_elm.dataset.listevents);
  events = list_hmtl;
  console.log(events);

  // forceUpdate();

}

export default function CalendarPage({ }) {
  // get session events from back-end and store it into local storage
  events = axiosGetEvents(localStorage.getItem('id'),localStorage.getItem('student'));
  console.log(events);
  
  //alert('You dont have any session planned, lets scedule one !');



  //render calendar after dom has finished rendering components
  const [renderCalendar, doRenderCalendar] = useState(false);
  useEffect(() => {
    const onPageLoad = () => {
      addCalendar();
      doRenderCalendar(true);
      if (Array.isArray(events) && !events.length) {
        const id = localStorage.getItem('id');
        console.log(id);
        postnotif("Your account have been created","No You can add session in your calendar ","",id);
        alert('You dont have any session planned yet, let schedule one ! \n First click on the calendar, the day and time you want.')
      }
    };
    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);



  return (<>
    <div style={{ display: 'none' }}>
      <input type="button" value="find a session" className="main_color_btn" />

      <a href="https://fullcalendar.io/docs">ressource calendar</a>
      <a href="https://github.com/fullcalendar/fullcalendar-react">link for their github</a>
    </div>

    <div id='calendar' data-listevents>
    </div>
    {renderCalendar}
  </>);
}