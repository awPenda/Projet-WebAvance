import NotifBox from './NotifBox';
import Icons from './Icons';
import { toggleSideBarNotifs } from '../Global'
import axios from 'axios';
import { useEffect, useState } from 'react';

function getUsersNotifs() {
  const hmtl_elm = document.getElementById('div-notif');
  const test = hmtl_elm.dataset.listenotifs;
  let list = JSON.parse(test);

  return list;
}

export default function SideBarNotifs(user_data, hidden) {
  //use state false
  let listNotifs = [];
  let user_notifs = [];//= getUsersNotifs();
  const [userslist, setUserslist] = useState(user_notifs);

  const par = localStorage.getItem('id');
  let par2 = { user_id: par };


  axios
    .get('http://localhost:8070/api/getAllNotif', { params: par2 })
    .then((response) => {
      //console.log(response.data);
      // displayFetchedUsers(response.data);
      console.log(response.data);
      const hmtl_elm = document.getElementById('div-notif');
      console.log(hmtl_elm);

      localStorage.setItem('notifs', JSON.stringify(response.data))
      setUserslist(response.data);

      hmtl_elm.setAttribute('data-listenotifs', JSON.stringify(response.data));
      user_notifs = getUsersNotifs();

      // useEffect(() => { dorenderListnotifs(true) }, []);
      //console.log('Successfully fetched user data');
    })
    .catch((error) => {
      console.error('Error fetching user data:', error);
    });


  //render calendar after dom has finished rendering components
  // const [listnotifs, dorenderListnotifs] = useState(false);


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


      {/* if use stage */}
      <div className='SideBar-notifList' id='div-notif' data-listnotifs>


        {userslist.forEach((notif) => {
          listNotifs.push(
            <NotifBox key={notif.id} id={notif.id} priority={notif.priority} title={notif.title} body={notif.body} url={notif.url} />
          )
        })}

        {listNotifs}
      </div>
      <div>
      </div>

    </div>

  );
}