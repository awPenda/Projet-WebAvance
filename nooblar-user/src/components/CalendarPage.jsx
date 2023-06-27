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
import { addEvent } from '../Global'






// list of events, should be received by backend
const events = [
  { title: 'Meeting', start: new Date() },
  { title: 'event 1', date: '2023-06-20' },
  { title: 'event 2', date: '2023-07-02' },
  {
    id: 1,
    allDay: false, //or true
    start: new Date('2023-06-22T13:00:00'),
    end: new Date('2023-06-22T15:30:00'),
    //daysOfWeek: [0, 1], //for recurring events [0,1] for recurring sunday and mondays
    title: 'meeting with Jean',
    url: '/session', //send to link when visited, can be controlled with eventClick
    interactive: true, // eventInteractive
    className: 'mockclassname', //or classNames pour 
    //for more https://fullcalendar.io/docs/event-parsing
    status: 'pending', // can be pending, accepted, refused, replanned or canceled (each render a color for the notification)
    color: 'lightblue', //for background and border
  },
  {
    id: 2,
    allDay: false, //or true
    //date: new Date('2023-06-25'),
    start: '2023-06-01T12:30:00-05:00',
    end: '2023-06-01T15:30:00-05:00',
    slotDuration: '02:00',
    // startRecur: new Date('2023-06-25'),
    // endRecur: new Date('2024-06-25'),
    //daysOfWeek: [0, 1], //for recurring events [0,1] for recurring sunday and mondays
    title: 'meeting with Julien',
    url: '/session', //send to link when visited, can be controlled with eventClick
    interactive: true, // eventInteractive
    className: 'mockclassname', //or classNames pour 
    //for more https://fullcalendar.io/docs/event-parsing
    color: 'red', //for background and border
  },
  {
    id: 3,
    allDay: true, //or true
    start: new Date(),
    end: new Date(),
    daysOfWeek: [3], //for recurring events [0,1] for recurring sunday and mondays
    title: 'meeting with Juliette',
    url: '/session/3', //send to link when visited, can be controlled with eventClick
    eventClick: (e) => {
      e.jsEvent.preventDefault();
      console.log('Event: ' + e.event.title);
      console.log('Coordinates: ' + e.jsEvent.pageX + ',' + e.jsEvent.pageY);
      console.log('View: ' + e.view.type);

      // change the border color just for fun
      e.el.style.borderColor = 'red';
      if (e.event.url) {
        window.open(e.event.url);
      }
    },
    interactive: true, // eventInteractive
    className: 'mockclassname', //or classNames pour 
    //for more https://fullcalendar.io/docs/event-parsing
    color: 'olive', //for background and border
    extendedProps: {
      priority: 'high'
    },
    description: 'Lecture'
  },
  { 'title': 'Successful', 'allDay': false, 'start': 1687252357212, 'end': 1687252385729, 'url': '/shlk/cgi-bin/getshlkrunlog.pl?i=21' }

]
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
    events: 'https://fullcalendar.io/api/demo-feeds/events.json',
    eventSources: [
      {
        events: events
      }
    ],
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




  calendar.render();
}

function getEvents() {

}

export default function CalendarPage() {
  // get session events from back-end and store it into local storage
  getEvents();


  //render calendar after dom has finished rendering components
  const [renderCalendar, doRenderCalendar] = useState(false);
  useEffect(() => {
    const onPageLoad = () => {
      addCalendar();
      doRenderCalendar(true);
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

    <div id='calendar'>
    </div>
    {renderCalendar}
  </>);
}