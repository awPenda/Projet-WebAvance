import defaultPP from '../assets/img/defaultPP.png'

function bookSession() {

    console.log('test');

    //display popup
}
export default function ProfilePage({ other_user_data, session_infos, is_booked }) {
    const imgSrc = "data:image/png;base64," + other_user_data.imageBuffer;
    console.log(imgSrc);
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

            {!is_booked ? (
                <div>
                    {/* <input id={`click-session-user-${other_user_data.id}`} type="button" value="Book a session" className='main_color_btn' onClick={window.location.href = "/"} /> */}
                    {/* <input id={`click-session-user-${other_user_data.id}`} type="button" value="Book a session" className='main_color_btn' onClick={bookSession} /> */}
                    <button className="main_color_btn" onClick={() => { console.log('oskour') }}>
                        book a session
                    </button>
                </div>
            ) : ('')}
        </div>
    );
}