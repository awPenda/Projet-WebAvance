import Icons from './Icons';

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

  function expand(key_name) {
    document.getElementsByClassName(`.notif_body .${key_name}`);
    alert('fesse');

  }

  return (
    <div key={key_name} id={key_name} className={"NotifBox " + key_name + " " + BorderColor({ priority })}>
      <button type="button" onClick={expand(key_name)} >
        fesse
      </button>
      <Icon priority={priority} />
      <div>
        {title}
        <div className={"hidden notif_body Notif" + id.toString()}>
          {body}
        </div>
      </div>
      <Icons type={"trash_ico"} />

    </div>
  )
}