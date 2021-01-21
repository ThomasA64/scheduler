import React from "react";
import "components/DayListItem.scss";


export default function DayListItem(props) {
  const classNames = require('classnames');
  const formatSpots = function (spots) {
    
    if (spots === 0) {
      return "no spots remaining"
    } 
    if (spots === 1) {
      return `${spots} spot remaining`
    }
    return `${spots} spots remaining`
  }
  
  const itemClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots,
  });
  return (
    <li onClick={() => props.setDay(props.name)}>
      <h2 className={itemClass}>{props.name}</h2>
      <h3 className={itemClass}>{formatSpots(props.spots)}</h3>
    </li>
  );

  // return (
  //   <button
  //     className={buttonClass}
  //     onClick={props.onClick}
  //     disabled={props.disabled}
  //   >
  //     {props.children}
  //   </button>
  // );
}
