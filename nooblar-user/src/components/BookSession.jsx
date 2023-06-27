import defaultPP from '../assets/img/defaultPP.png'
import { useParams } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import axios from 'axios';

import { useEffect, useState } from 'react';




const confirmBooking = (e) => {
    if (!e.target.start_time.value) {
        alert('You must insert a time.')
        return;
    }
    let timezone = new Date().getTimezoneOffset();
    timezone = `${`${-((parseInt(timezone) / 60))}`.padStart(2, '0')}:00`;
    const plusorminus = timezone.substring(0, 1) != '0' ? '' : '+';
    const start_date = `${e.target.start_date.value}T${e.target.start_time.value}:00${plusorminus}${timezone}`;
    const end_date = `${e.target.end_date.value}T${e.target.end_time.value}:00${plusorminus}${timezone}`;

    if(localStorage.getItem('student')=='true')
    {
        const infos_session = {
            allDay: e.target.allDay.checked,
            start: start_date,
            end: end_date,
            slotDuration: '01:00',
            title: e.target.title.value,
            url: e.target.url.value,
            interactive: true,
            extendedProps: {
                description: e.target.description.value,
                status: 'pending',
                priority: 'normal',
                tutors: 1,
                student: localStorage.getItem('id'),
            }
        }
        console.log(infos_session);
        console.log('booking confirmed');
    
        axios
            .post('http://localhost:8080/api/booksession', infos_session)
            .then((response) => {
                window.alert('This session is been booked :D');
                // Traitement de la réponse du backend (si nécessaire)
                console.log(response.data);
                window.location.href = "/";
            })
            .catch((error) => {
                console.log(infos_session);
                // Traitement de l'erreur en cas d'échec
                window.alert('There have been an error in the booking :c');
                console.error(error);
            });
    }
    else
    {
        const infos_session = {
            allDay: e.target.allDay.checked,
            start: start_date,
            end: end_date,
            slotDuration: '01:00',
            title: e.target.title.value,
            url: e.target.url.value,
            interactive: true,
            extendedProps: {
                description: e.target.description.value,
                status: 'pending',
                priority: 'normal',
                tutors: localStorage.getItem('id'),
                student:1,
            }
        }
    
        console.log(infos_session);
        console.log('booking confirmed');
    
        axios
            .post('http://localhost:8080/api/booksession', infos_session)
            .then((response) => {
                window.alert('This session is been booked :D');
                // Traitement de la réponse du backend (si nécessaire)
                console.log(response.data);
                window.location.href = "/";
            })
            .catch((error) => {
                console.log(infos_session);
                // Traitement de l'erreur en cas d'échec
                window.alert('There have been an error in the booking :c');
                console.error(error);
            });
    }
    

}


const event = {
    //id: int, intégré dans la db direct
    allDay: false,
    start: '2023-06-28T09:30:00+02:00',
    end: '2023-06-28T10:30:00+02:00',
    slotDuration: '01:00', // default 1h
    title: 'Laplace + nom des participants',
    url: '/session/id',
    interactive: true,
    extendedProps: {
        description: 'Seance approfondissement du cours de Laplace', //or long text
        status: 'pending',
        priority: 'high',
        tutors: [1],
        student: [2], //id du tuteur /student, possibilité de mettre plusiers
    }
}



export default function BookSession({ }) {
    //get date from url parameters
    let { date, askedUser } = useParams();

    // if a date has  been passed through parameters, transform it into correct format to display in the search input
    let timezone, dateInput, timeHourInput, dateString, starttimeInput, endTimeInput;
    if (date) {
        timezone = new Date(date).getTimezoneOffset(); //get the offset (timezone) then add it to the date to get local
        dateInput = new Date(date).toISOString().substring(0, 10);

        timeHourInput = new Date(date).toISOString().substring(11, 13);
        starttimeInput = `${String((parseInt(timeHourInput) - (parseInt(timezone) / 60))).padStart(2, '0')}:${new Date(date).toISOString().substring(14, 16)}`;
        endTimeInput = `${String((parseInt(timeHourInput) - (parseInt(timezone) / 60)) + 1).padStart(2, '0')}:${new Date(date).toISOString().substring(14, 16)}`;


        dateString = new Date(date).toLocaleDateString('en-us', { weekday: "long", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false })
    }

    //let dateString = new Date(date).toLocaleDateString('en-us', { weekday: "long", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false })

    let session_infos = {
        date: '',
        time: '',
    };

    const askedUser_info = JSON.parse(localStorage.getItem('askedUser'));

    let listUsersComponents = [];
    return (
        <div>
            <h2>Confirm session</h2>
            <form onSubmit={confirmBooking} >
                <div className='form-section'>
                    <label htmlFor="start-time">Start time : </label>
                    <br />
                    <input type="date" name="start_date" id="start_date" defaultValue={dateInput} />
                    <input type="time" name="start_time" id="start_time" defaultValue={starttimeInput} />
                </div>
                <div className='form-section'>
                    <label htmlFor="end-time">End time : </label>
                    <br />
                    <input type="date" name="end_date" id="end_date" defaultValue={dateInput} />
                    <input type="time" name="end_time" id="end_time" defaultValue={endTimeInput} />
                </div>

                <div className='form-section'>
                    <label htmlFor="allDay">Duration all day : </label>
                    <input type="checkbox" name="allDay" id="allDay" />
                </div>

                <div className='form-section'>
                    <input type="text" name="title" id="title" placeholder='Session title' />
                    <input type="text" name="url" id="url" placeholder='/session/zoom/:id' />
                    <textarea name="description" id="description" cols="30" rows="10" placeholder='Session description'></textarea>
                </div>

                <div id="list-participants">
                    participants
                    <ProfilePage key={askedUser_info.username} other_user_data={askedUser_info} session_infos={session_infos} is_booked={true} />
                </div>
                <button type="submit" className='main_color_btn'>
                    Confirm booking
                </button>
            </form>

            {/* //tutors: [1],
            //student: [2], //id du tuteur /student, possibilité de mettre plusiers */}


            {/* <input type="button" value="Confirm booking" onClick={() => confirmBooking()} /> */}

        </div>
    );
}