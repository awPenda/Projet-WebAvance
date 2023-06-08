import fakepp from '../assets/img/fakePP.png';
import NotifBox from './NotifBox';

import toggleSideBar from '../Global'

const user_notifs = [
    {
      id: 0, 
      priority: "1", 
      title: "title of urgent notification",
      body: "body of notification",
    },
    {
      id: 1, 
      priority: "0", 
      title: "title of notification",
      body: "body of notification",
    },
    {
      id: 2, 
      priority: "0", 
      title: "title of notification",
      body: "body of notification",
    },
    {
      id: 2, 
      priority: "0", 
      title: "title of notification",
      body: "body of notification",
    },
    {
      id: 2, 
      priority: "0", 
      title: "title of notification",
      body: "body of notification",
    },
    {
      id: 2, 
      priority: "0", 
      title: "title of notification",
      body: "body of notification",
    },
    {
      id: 2, 
      priority: "0", 
      title: "title of notification",
      body: "body of notification",
    },
    {
      id: 2, 
      priority: "0", 
      title: "title of notification",
      body: "body of notification",
    },
    {
      id: 2, 
      priority: "0", 
      title: "title of notification",
      body: "body of notification",
    },
    {
      id: 2, 
      priority: "0", 
      title: "title of notification",
      body: "body of notification",
    },
    {
      id: 2, 
      priority: "0", 
      title: "title of notification",
      body: "body of notification",
    },
    {
      id: 2, 
      priority: "0", 
      title: "title of notification",
      body: "body of notification",
    },
    {
      id: 2, 
      priority: "0", 
      title: "title of notification",
      body: "body of notification",
    },
    {
      id: 2, 
      priority: "0", 
      title: "title of notification",
      body: "body of notification",
    },
  ]

export default function SideBar({user_data, hidden}) {
    let listNotifs = [];

    return (
      <div id="SideBar" className="SideBar" style={{visibility: hidden ? "hidden" : "visible"}}>
        <div className="SideBar-profile">
            <button onClick={toggleSideBar} className='button-pp'>
              {/* TODO -> replace the src by {user_data.pp} */}
              <img src={fakepp} className="User-pp" alt="user profile pic" />
            </button>
            <div className='profile-text'>
                <b>{user_data.name}</b>
                <br />                
                {user_data.description}
                <br />               
                <input type="button" value="Edit Profile" className="button-link-accent"/>
            </div>
        </div>
        <div className="SideBar-notifs">
            Notifications

            <div className='SideBar-notifList'>
                {user_notifs.forEach((notif)=>{
                    listNotifs.push(
                        <NotifBox id={notif.id} priority={notif.priority} title={notif.title} body={notif.body}/>
                    )
                })}
                {listNotifs}
            </div>
            


          <div>
        </div>
      </div>
    </div>
    )
  }