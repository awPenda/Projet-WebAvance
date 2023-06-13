import fakepp from '../assets/img/fakePP.png';
import Icons from './Icons';
import { makeBubbles, toggleSideBarNotifs, displayEditProfile, toggleSideBarProfile } from '../Global'


export default function SideBarProfile({ user_data, hidden }) {
    return (
        <div id="EditProfile" className='EditProfile' style={{ display: "none" }}>
            <form action="editprofile" className='editProfile-form'>

                <label htmlFor="edit-profilepic">profile picture</label>
                <input type="file" name="edit-profilepic" id="edit-profilepic" />
                <input type="text" placeholder="name" />
                <select name="student" id="student">
                    <option value="true">Student</option>
                    <option value="false">Tutor</option>
                </select>
                <input type="email" id="email" pattern=".+@globex\.com" size="30" placeholder='Email' required />
                <input type="password" name="" id="" placeholder='password' />
                <input type="password" name="" id="" placeholder='new password' />

                <div className='buttons-box'>
                    <button type="submit" className='main_color_btn'>Save</button>
                    <input type="button" value="Cancel" className='accent_color_btn' onClick={displayEditProfile} />

                </div>
            </form>
        </div>
    );
}