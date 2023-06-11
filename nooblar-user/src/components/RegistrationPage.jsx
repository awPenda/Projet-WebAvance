import Icons from './Icons';
import {makeBubbles, toggleSideBarNotifs, toggleSideBarProfile, displayElement,displayConnectionPage} from '../Global'

export default function RegistrationPage({hidden}) {


    return (
      <div id="RegistrationPage" className="RegistrationPage" style={{display:"none"}}>

        <form action="submit" className='card_form'>

            <h2 className='page_title'>Registration</h2>

            <input type="text" placeholder="name"/>
            <select name="student" id="student">
                <option value="true">Student</option>
                <option value="false">Tutor</option>
            </select>
            <input type="email" id="email" pattern=".+@globex\.com" size="30" placeholder='Email' required/> 
            <input type="password" name="" id="" placeholder='password'/>
          
            <button type="submit" className='main_color_btn'>Registration</button>

            <div className='switchConnectRegister'>
            Already have an account ?
            <input type="button" value="Connect here" className='button-link-main' onClick={displayConnectionPage}/>
          </div>
        </form>
      </div>
    )
  }