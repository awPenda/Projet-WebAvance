import Icons from './Icons';
import {toggleSideBarNotifs, toggleSideBarProfile, displayElement,displayRegisterPage} from '../Global'


export default function ConnectionPage({hidden}) {
    return (
      <div id="ConnectionPage" className="ConnectionPage" style={{display:"flex"}}>

        <form action="submit" className='card_form'>

          <h2 className='page_title'>Connection</h2>

          <input type="email" id="email" pattern=".+@globex\.com" size="30" placeholder='Email' required/> 
          <input type="password" name="" id="" placeholder='password'/>
          
          <button type="submit" className='main_color_btn'>Connection</button>

          <div className='switchConnectRegister'>
            No account ?
            <input type="button" value="Register here" className='button-link-main' onClick={displayRegisterPage}/>
          </div>
        </form>
      </div>
    )
  }