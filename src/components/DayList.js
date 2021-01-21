import React from 'react'
import DayListItem from 'components/DayListItem'

export default function DayList(props) {
  const days = props.days
  return (
     (
      <ul>
        {days.map((day) => {
          return <DayListItem key={day.id} selected={day.name === props.day} setDay={props.setDay} {...day} />;
        })}
      </ul>
    )
  )
}
