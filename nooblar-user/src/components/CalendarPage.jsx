import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"  // needed for dayClick

// import { Calendar } from '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import listPlugin from '@fullcalendar/list';

import { Calendar } from '@fullcalendar/core';
// import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

// list of events, should be received by backend
const events = [
    { title: 'Meeting', start: new Date() },
    { title: 'event 1', date: '2023-06-20' },
    { title: 'event 2', date: '20223-07-02' }
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

  function addCalendar(){
        let calendarEl = document.getElementById('calendar');
        let calendar = new Calendar(calendarEl, {
            plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin ],
            customButtons: {
                FindSession: {
                  text: 'Find a session',
                  click: function() {
                    alert('clicked the custom button!');
                  }
                }
              },
            headerToolbar: {
                left: 'title', // will normally be on the left. if RTL, will be on the right
                right: 'prev,next today'// will normally be on the right. if RTL, will be on the left
            },
            footerToolbar: {
                center: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek FindSession',
            },
            buttonText: {
                today:    'Today',
                month:    'Month',
                week:     'Week',
                day:      'Day',
                list:     'List'
            },
            initialDate: new Date(),
            titleFormat: {
                month: 'long'
            },
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            dayMaxEvents: true, // allow "more" link when too many events
            events: events,
            eventColor: '#6ACD74',
            eventTextColor: '#18180c',
            themeSystem: 'standard',
            height: "30rem",
        });

        //adjust calendar size
        
        const x = window.matchMedia("(max-width: 481px)")
        if (x.matches) { // If media query matches = smaller than 481px
            calendar.setOption('height', "29rem");
        } else { //bigger than 481px
            calendar.setOption('height', "40rem");
        }
        



        calendar.render();
  }


  export default function CalendarPage() {
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
      
    

    return(<>
        <div style={{display: 'none'}}>
            <input type="button" value="find a session" className="main_color_btn"/>

            <a href="https://fullcalendar.io/docs">ressource calendar</a>
            <a href="https://github.com/fullcalendar/fullcalendar-react">link for their github</a>
        </div>

        <div id='calendar'>
        </div>
        {renderCalendar}
    </>);
}