import defaultPP from '../assets/img/defaultPP.png'

export default function ProfilePage({ other_user_data, session_infos }) {

    function bookSession() {

        console.log('test');
        console.log(session_infos);
    }

    const imgSrc = "data:image/png;base64," + other_user_data.imageBuffer;
    return (
        <div className="other-user-box">
            <div className="profile-box">
                <img src={(imgSrc).substring(22, 26) == 'null' ? defaultPP : imgSrc} alt="user profile pic" className="User-pp" />
                <div className="profile-text">
                    {other_user_data.username}
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