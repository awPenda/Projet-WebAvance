import defaultPP from '../assets/img/defaultPP.png'
import { useParams } from "react-router-dom";
import ProfilePage from "./ProfilePage";


import axios from 'axios';

// infor des events que j'ai besoin
// events = [
//     {
//         id: int,
//         allDay: bool,
//         start: date avec un format '2023-06-28T09:30:00+02:00',
//         end: date avec un format '2023-06-28T09:30:00+02:00',
//         slotDuration: durée de la session avec un format '02:00', //pas encore prit en compte dans le front, pour plus tard
//         daysOfWeek: si levenement se repète, jours ou il se repète avec un format [3, 1], //pas encore prit en compte dans le front
//         title: 'string',
//         url: 'string',
//         interactive: bool,
//         className: 'string', // pas encore prit en charge dans le front
//         color: 'string', //pas encore prit en charge dans le front
//         extendedProps: {

//             description: 'string', //or long text
//             status: 'string' or bool, //if is still pending, or accepted 
//             priority: 'string',
//         }
//     },
// ]

// infos des events strictement necessaires
// events = [
//     {
//         id: int,
//         allDay: bool,
//         start: date avec un format '2023-06-28T09:30:00+02:00',
//         end: date avec un format '2023-06-28T09:30:00+02:00',
//         title: 'string',
//         url: 'string',
//         interactive: bool,
//         extendedProps: {
//             description: 'string', //or long text
//             status: 'string' or bool, //if is still pending, or accepted 
//             priority: 'string',
//         }
//     },
// ]

/**
 * 
 * Sur la page calendrier on get tous les events
 * sur la page de confirmation on envoie un nouveau event au back, puis redirection vers la page d'acceuil, calendrier
 * lui refait une requete et donc notre boucle est bouclée, pas besoin de faire de trucs compliqués, pas besoin de récupérer d'events entre les pages
 * 
 * mais comme on a pas l'id, doit il faut récuperer le tout dernier id de la db
 * soit ? 
 * 
 * 
 */

function getSpecificUser(id) {
    return {
        id: 1,
        username: "David",
        imageBuffer: "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCALMAswDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwChp+mmOTgFiTyT3r4ly5ndnDKVzstKg2oMrWsIpmDZri1yAduPpXVFIm5J9k4ztruhYdird2YIztxWkoaGqOT1u0OxhivJrwKbPOtUgaGcsoya8mWhBTXWZbfj0rNS1ILFtrbztznNbqQ0jQjvWdec8963i7lNWJLW5/fgHp71…",
        isstudent: false,
        email: "david@gmail.com"
    };
}


function confirmBooking() {
    console.log('booking confirmed');
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
    let { date, user, askedUser } = useParams();

    let dateString = new Date(date).toLocaleDateString('en-us', { weekday: "long", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false })

    let session_infos = {
        date: '',
        time: '',
    };

    let askedUser_info = getSpecificUser(askedUser);


    return (
        <div>


            <h2>
                Session scheduled the {dateString} with {askedUser_info.username}

            </h2>
            <form action="">
                <div>
                    <label htmlFor="start-time">Start time : </label>
                    <input type="date" name="start-time" id="start-time" />
                    <input type="time" name="start-time" id="start-time" />
                </div>
                <div>
                    <label htmlFor="end-time">End time : </label>
                    <input type="date" name="end-time" id="end-time" />
                    <input type="time" name="end-time" id="end-time" />
                </div>

                <div>
                    <label htmlFor="allDay">Duration all day : </label>
                    <input type="checkbox" name="allDay" id="allDay" />
                </div>

                <div>
                    <input type="text" name="title" id="" placeholder='Session title' />
                    <input type="text" name="url" id="" placeholder='/session/zoom/:id' />
                    <textarea name="description" id="" cols="30" rows="10" placeholder='Session description'></textarea>
                </div>

                <div>
                    participants
                    <ProfilePage key={askedUser_info.username} other_user_data={askedUser_info} session_infos={session_infos} is_booked={true} />
                </div>
            </form>

            {/* //tutors: [1],
            //student: [2], //id du tuteur /student, possibilité de mettre plusiers */}


            <input type="button" value="Confirm booking" onClick={() => confirmBooking()} />

        </div>
    );
}