import s from "./Loading.module.css";

export default function Loader() {
  return (
    <div className={s.shell}>
      <div className={s.loading}></div>
    </div>
  );
}
