export default function ProfilePage(other_user_data, session_infos) {

    function bookSession() {

        console.log('test');
        console.log(session_infos);
    }

    return (
        <div className="other-user-box">
            <div className="profile-box">
                <img src={other_user_data.pp} alt="user profile pic" className="User-pp" />
                <div className="profile-text">
                    {other_user_data.name}
                    <br />
                    {other_user_data.description}
                </div>
            </div>
            <div>
                <button className="main_color_btn" onClick={bookSession}>
                    book a session
                </button>
            </div>
        </div>
    );
}