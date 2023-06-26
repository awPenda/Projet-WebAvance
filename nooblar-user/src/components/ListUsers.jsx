import ProfilePage from "./ProfilePage";
import Icons from "./Icons";
import axios from "axios";
import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { useEffect, useState } from 'react';

import fakeppdidi from '../assets/img/fakeppdidiane.jpeg';
import fakeppalex from '../assets/img/fakeppalex.jpeg';
import fakepplundy from '../assets/img/fakepplunndy.jpeg';

import { useParams } from "react-router-dom";

export default function ListUsers({ isStudent }) {

    //define variables
    //get date from url parameters
    let { date } = useParams();
    let session_infos = {
        date: '',
        time: '',
    };

    // if a date has  been passed through parameters, transform it into correct format to display in the search input
    let timezone, dateInput, timeHourInput, timeInput, dateString;
    if (date) {
        timezone = new Date(date).getTimezoneOffset(); //get the offset (timezone) then add it to the date to get local
        dateInput = new Date(date).toISOString().substring(0, 10);

        timeHourInput = new Date(date).toISOString().substring(11, 13);
        timeInput = `${String((parseInt(timeHourInput) - (parseInt(timezone) / 60))).padStart(2, '0')}:${new Date(date).toISOString().substring(14, 16)}`;

        dateString = new Date(date).toLocaleDateString('en-us', { weekday: "long", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false })
    }

    //render userlist after dom has finished rendering components
    const [renderUserList, dorenderUserList] = useState(false);
    useEffect(() => {
        const onPageLoad = () => {
            if (date) {
                getUsersForSessionDate();
            }
            dorenderUserList(true);
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


    function displayFetchedUsers(other_users_data_fetched) {
        const hmtl_elm = document.getElementById('list-users');
        hmtl_elm.innerHTML = "";

        other_users_data_fetched.forEach((user) => {
            console.log(user);
            const html = renderToString(<ProfilePage key={user.username} other_user_data={user} session_infos={session_infos} is_booked={false} />);
            hmtl_elm.innerHTML += html;
        })
    }

    /**
     * Display the list of Students/Tutors available for a specific date 
     * @param {*} e 
     */
    function getUsersForSessionDate(e) {
        if (e) {
            e.preventDefault();
        }
        const getstudent = localStorage.getItem('student');
        console.log(getstudent);
        if (getstudent == 'true') {
            const student = '0';
            axios
                .get('http://localhost:8000/getAllUser', { params: { student } })
                .then((response) => {
                    console.log(response.data);
                    displayFetchedUsers(response.data);
                    console.log('Successfully fetched user data');
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                });
        }
        else {
            const student = '1';
            axios
                .get('http://localhost:8000/getAllUser', { params: { student } })
                .then((response) => {
                    console.log(response.data);
                    displayFetchedUsers(response.data);
                    console.log('Successfully fetched user data');
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                });
        }
    }

    function bookSession(date, user, askedUser) {

        console.log('test');

        //display popup

        window.location.href = `/booksession/${date}/${user}/${askedUser}`;


    }

    return (
        <div className="List">
            <form onSubmit={(e) => getUsersForSessionDate(e)} action="get-users-for-session-date" method="get" className="search-bar">

                <input type="date" name="date-pick-session" id="date-pick-session" defaultValue={dateInput} />
                <input type="time" name="time-pick-session" id="time-pick-session" defaultValue={timeInput} />
                {/* link tutor to a subject */}
                {/* need to get all sujbetcs from database  */}
                <select name="session-subject" id="session-subject">
                    <option value="subject-maths" default>Maths</option>
                </select>
                <button type="submit" className="main_color_btn">
                    <Icons type={"search_ico"} />
                </button>

                {/* when form is submitted, send get request */}
            </form>

            <input type="button" value="Book a session" className="accent_color_btn" onClick={() => { bookSession('2023-07-01T10:00:00+02:00', '5', '1') }} />


            <h2>List of {isStudent ? "tutor" : "student"} avaible for <i>{dateString ? dateString : 'choose a date'}</i></h2>
            <div id="list-users">
            </div>

        </div>
    );
}