import React from 'react'
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  // const classNames = require('classnames')
  return (
    <li className="interviewers__item">
    <img
      className="interviewers__item-image"
      src="https://i.imgur.com/LpaY82x.png"
      alt="Sylvia Palmer"
    />
    {props.name}
  </li>
  )
}
// export default function DayListItem(props) {
//   const classNames = require('classnames');
// return (
//   <li onClick={() => props.setDay(props.name)}>
//     <h2 className={itemClass}>{props.name}</h2>
//     <h3 className={itemClass}>{formatSpots(props.spots)}</h3>
//   </li>
// );