import ProfilePage from "./ProfilePage";

export default function ListUsers({ isTutor, date, other_users_data }) {
    let listUsers = [];
    return (
        <div className="List">
            <h2>List of {isTutor ? "tutor" : "student"} avaible for {date}</h2>
            {other_users_data.forEach((user) => {
                listUsers.push(
                    <ProfilePage other_user_data={user} />
                )
            })}
            {listUsers}

        </div>
    );
}