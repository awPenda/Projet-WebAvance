import Icons from './Icons';

export default function RegistrationPage({id, priority, title, body}) {


    return (
      <div className="RegistrationPage">

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

        </form>
      </div>
    )
  }