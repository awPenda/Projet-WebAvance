import Icons from './Icons';

export default function NotifBox({id, priority, title, body}) {
    function Icon({priority}) {
        if (priority === "0") {
          return (<Icons type={"info_ico"}/>);
        }
        return (<Icons type={"warning_ico"}/>);
    }

    function BorderColor({priority}){
        if (priority === "0") {
            return "info_color_notif";
        }
        return "warning_color_notif";
    }

    return (
      <div className={"NotifBox Notif"+ id.toString() + " " + BorderColor({priority})}>
        <Icon priority={priority}/>
        <div>
          {title}
          <div className={"hidden notif_body Notif"+ id.toString()}>
            {body}
          </div>
        </div>
        <Icons type={"trash_ico"}/>

      </div>
    )
  }