import React from "react";
import "components/InterviewerListItem.scss";

const classNames = require("classnames");

export default function InterviewerListItem(props) {
  let interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}

// <li className="interviewers__item">
//   <img
//     className="interviewers__item-image"
//     src="https://i.imgur.com/LpaY82x.png"
//     alt="Sylvia Palmer"
//   />
//   Sylvia Palmer
// </li>;
// export default function DayListItem(props) {
//   const classNames = require('classnames');
// return (
//   <li onClick={() => props.setDay(props.name)}>
//     <h2 className={itemClass}>{props.name}</h2>
//     <h3 className={itemClass}>{formatSpots(props.spots)}</h3>
//   </li>
// );

// return (
//   <li className="interviewers__item">
//     <img
//       className="interviewers__item-image"
//       src={props.avatar}
//       alt="Sylvia Palmer"
//     />
//     {props.name}
//   </li>
// );
