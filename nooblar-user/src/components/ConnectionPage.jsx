import Icons from './Icons';

export default function ConnectionPage({id, priority, title, body}) {


    return (
      <div className="ConnectionPage">

        <form action="submit" className='card_form'>

          <h2 className='page_title'>Connection</h2>

          <input type="email" id="email" pattern=".+@globex\.com" size="30" placeholder='Email' required/> 
          <input type="password" name="" id="" placeholder='password'/>
          
          <button type="submit" className='main_color_btn'>Connection</button>

        </form>
      </div>
    )
  }