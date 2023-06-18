import ProfilePage from "./ProfilePage";
import Icons from "./Icons";
import axios from "axios";

import fakeppdidi from '../assets/img/fakeppdidiane.jpeg';
import fakeppalex from '../assets/img/fakeppalex.jpeg';
import fakepplundy from '../assets/img/fakepplunndy.jpeg';

export default function ListUsers({ isStudent, date }) {
    let listUsers = [];

    let other_users_data = [];

    let date_pick = date;

    function getUsersForSessionDate(e) {

        e.preventDefault();
        // get all users that are avaible for {date} and are {isStudent}
        //axios.get(`src/users/${isStudent}/${date}`)

        // should get a list of tutors like that : (if isStudent = 0 send all the students from db, otherwise send all the tutors )
        const other_users_data_fetched = [
            {
                name: "Didiane Brunelle",
                description: "Excellent German teacher ;)",
                teaching_subject: "German language",
                student: 0,
                pp: fakeppdidi
            },
            {
                name: "Alexandre Chalifour",
                description: "Math expert",
                teaching_subject: "Mathematics",
                student: 0,
                pp: fakeppalex
            },
            {
                name: "Lundy Lépicier",
                description: "Front-end, Back-end, Week-end",
                teaching_subject: "Programmation",
                student: 0,
                pp: fakepplundy
            },

        ]
        alert("aaaaaaaaaaaaa");

        other_users_data = other_users_data_fetched;

        console.log(other_users_data);
    }

    function onLoadGetUsersForSessionDate(params) {
        const other_users_data_fetched = [
            {
                name: "Didiane Brunelle",
                description: "Excellent German teacher ;)",
                teaching_subject: "German language",
                student: 0,
                pp: fakeppdidi
            },
            {
                name: "Alexandre Chalifour",
                description: "Math expert",
                teaching_subject: "Mathematics",
                student: 0,
                pp: fakeppalex
            },
            {
                name: "Lundy Lépicier",
                description: "Front-end, Back-end, Week-end",
                teaching_subject: "Programmation",
                student: 0,
                pp: fakepplundy
            },

        ]
        alert("aaaaaaaaaaaaa");

        other_users_data = other_users_data_fetched;

        console.log(other_users_data);
    }

    return (
        <div className="List">
            <form onSubmit={(e) => getUsersForSessionDate(e)} action="get-users-for-session-date" method="get" className="search-bar">

                <input type="date" name="date-pick-session" id="date-pick-session" />
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


            <h2>List of {isStudent ? "tutor" : "student"} avaible for {date_pick}</h2>
            {other_users_data.forEach((user) => {
                listUsers.push(
                    <ProfilePage other_user_data={user} />
                )
            })}
            {listUsers}

        </div>
    );
}