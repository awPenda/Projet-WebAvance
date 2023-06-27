import NotifBox from './NotifBox';

import Icons from './Icons';
import { toggleSideBarNotifs } from '../Global'


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
    id: 3,
    priority: "0",
    title: "title of notification",
    body: "body of notification",
  },
  {
    id: 4,
    priority: "0",
    title: "title of notification",
    body: "body of notification",
  },
  {
    id: 5,
    priority: "0",
    title: "title of notification",
    body: "body of notification",
  },
  {
    id: 6,
    priority: "0",
    title: "title of notification",
    body: "body of notification",
  },
  {
    id: 13,
    priority: "0",
    title: "title of notification",
    body: "body of notification",
  },
  {
    id: 12,
    priority: "0",
    title: "title of notification",
    body: "body of notification",
  },
  {
    id: 7,
    priority: "0",
    title: "title of notification",
    body: "body of notification",
  },
  {
    id: 8,
    priority: "0",
    title: "title of notification",
    body: "body of notification",
  },
  {
    id: 9,
    priority: "0",
    title: "title of notification",
    body: "body of notification",
  },
  {
    id: 10,
    priority: "0",
    title: "title of notification",
    body: "body of notification",
  },
  {
    id: 11,
    priority: "0",
    title: "title of notification",
    body: "body of notification",
  },
]


export default function SideBarNotifs(user_data, hidden) {
  let listNotifs = [];
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

      <div className='SideBar-notifList'>
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