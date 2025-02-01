// import { NavLink } from "react-router-dom";

function ScheduleBtn({ children, btnPrimary, scheduleBtn, className }) {
  return (
    <button className={`${btnPrimary} ${scheduleBtn} ${className} `}>
      {children}
    </button>
  );
}

export default ScheduleBtn;
