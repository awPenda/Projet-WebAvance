import NotifBox from './NotifBox';

import Icons from './Icons';
import { toggleSideBarNotifs } from '../Global'
import axios from 'axios';



export default function SideBarNotifs(user_data, hidden) {
  let listNotifs = [];
  let user_notifs = [];
const par = localStorage.getItem('id');
let par2={user_id:par};


axios
                .get('http://localhost:8070/api/getAllNotif', { params: par2  })
                .then((response) => {
                    //console.log(response.data);
                    // displayFetchedUsers(response.data);
                    console.log(response.data);
                    const hmtl_elm = document.getElementById('div-notif');
                    console.log(hmtl_elm);
                    hmtl_elm.setAttribute('data-listenotifs', JSON.stringify(response.data));
                    //console.log('Successfully fetched user data');
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                });

  return (
    <div id="SideBarNotifs" className="SideBar-notifs SideBar" style={{ visibility: hidden ? "hidden" : "visible" }}>
      {/* Notifications */}
      <div className='notif-header'>
        <button onClick={toggleSideBarNotifs} className='button-close'>
          <Icons type="close_ico" />
          Close
        </button>
        <Icons type="notif_ico" />
      </div>

      <div className='SideBar-notifList' id='div-notif' data-listnotifs>
        {user_notifs.forEach((notif) => {
          listNotifs.push(
            <NotifBox key={notif.id} id={notif.id} priority={notif.priority} title={notif.title} body={notif.body} />
          )
        })}
        {listNotifs}
      </div>
      <div>
      </div>

    </div>

  );
}