import fakepp from '../assets/img/fakePP.png';
import Icons from './Icons';
import EditProfile from './EditProfile';
import { makeBubbles, toggleSideBarNotifs, displayEditProfile, toggleSideBarProfile } from '../Global'


export default function SideBarProfile({ user_data, hidden }) {
    return (

        <div id="SideBarProfile" className="SideBar SideBar-profile" style={{ visibility: hidden ? "hidden" : "visible" }}>
            <button onClick={toggleSideBarProfile} className='button-close'>
                <Icons type="close_ico" />
                Close
            </button>

            {/* TODO -> replace the src by {user_data.pp} */}
            <div className='Profile-box' id="Profile-box">
                <img src={fakepp} className="User-pp" alt="user profile pic" />

                <div className='profile-text'>
                    <b>{user_data.name}</b>
                    <div>
                        {user_data.description}
                    </div>
                    <input type="button" value="Edit Profile" className="button-link-accent" onClick={displayEditProfile} />
                </div>


            </div>

            <EditProfile />
        </div>
    );
}