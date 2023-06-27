import defaultPP from '../assets/img/defaultPP.png'

function bookSession(date, askedUser) {
    localStorage.setItem('askedUser', JSON.stringify(askedUser));
    window.location.href = `/booksession/${date}/${askedUser.id}`;


}
export default function ProfilePage({ other_user_data, date, is_booked }) {
    const imgSrc = "data:image/png;base64," + other_user_data.imageBuffer;
    //console.log(imgSrc);
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
                    <button className="main_color_btn" onClick={() => bookSession(date, other_user_data)}>
                        book a session
                    </button>
                </div>
            ) : ('')}
        </div>
    );
}