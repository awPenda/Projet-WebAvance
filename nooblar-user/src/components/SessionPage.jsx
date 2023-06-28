import Icons from './Icons'

import { useParams } from "react-router-dom";

function getSession(id) {

    return {
        allDay: false,
        start: "2023-06-29T08:30:00-03:00",
        // '2023-06-29T08:00:00-03:00'
        end: "2023-06-29T09:30:00-03:00",
        slotDuration: "01:00",
        title: "Maths - Graphs",
        url: "/session/5",
        interactive: true,
        extendedProps: {
            description: "Math course, we're going to talk about graphs.",
            status: "pending",
            priority: "normal",
            tutors: [{ id: 1 },],
            student: [{ id: 1 },],

        }
    }

}

export default function SessionPage() {


    let { id } = useParams();

    const session_data = getSession(id);

    const start_date = new Date(session_data.start);
    const id_tuteur = session_data.extendedProps.tutors[0].id





    return (<>
        <h2>You are on a session with {session_data.extendedProps.tutors[0].id}</h2>
        <input type="button" value="Edit session" onClick={() => { window.location.href = `/booksession/${start_date}/${id_tuteur}/true` }} />
        <a href="https://learn.microsoft.com/en-us/graph/api/application-post-onlinemeetings?view=graph-rest-1.0&tabs=http#permissions"> Teams api ressource </a>
        <a href="https://latitudetechnolabs.com/how-can-we-integrate-zoom-in-react-js/">or zoom</a>
    </>);
}