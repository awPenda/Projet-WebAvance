import Icons from './Icons';
import {expand} from '../Global';

export default function NotifBox({ id, priority, title, body }) {
  function Icon({ priority }) {
    if (priority === "0") {
      return (<Icons type={"info_ico"} />);
    }
    return (<Icons type={"warning_ico"} />);
  }

  function BorderColor({ priority }) {
    if (priority === "0") {
      return "info_color_notif";
    }
    return "warning_color_notif";
  }

  const key_name = "Notif" + id.toString();

  return (
  <button type="button" onClick={(e) => expand(e,key_name)}  key={key_name} id={key_name} className={"NotifBox " + key_name + " " + BorderColor({ priority })}>
    <div>
      <Icon priority={priority} />
        {title}
      <Icons type={"trash_ico"} />
    </div>
    <div id={`notif_body${key_name}`} className={`notif_body ${key_name}`} style={{display:"none"}}>
      {body}
    </div>

  </button>
  )
}