import React from "react";
import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  const interviewers = props.interviewers;
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers.map((interviewer) => {
          return (
            <div>
              <InterviewerListItem
                key={interviewer.id}
                name={interviewer.name}
                avatar={interviewer.avatar}
              />
              <InterviewerListItem
                key={interviewer.id}
                name={interviewer.name}
                avatar={interviewer.avatar}
              />
            </div>
          );
        })}
      </ul>
    </section>
  );
}

// import React from 'react'
// import DayListItem from 'components/DayListItem'

// export default function DayList(props) {
//   const days = props.days
//   return (
//      (
//       <ul>
//         {days.map((day) => {
//           return <DayListItem key={day.id} selected={day.name === props.day} setDay={props.setDay} {...day} />;
//         })}
//       </ul>
//     )
//   )
// }

// const interviewers = [
//   { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
//   { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
//   { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
//   { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
//   { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
// ];

// storiesOf("InterviewerList", module)
//   .addParameters({
//     backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
//   })
//   .add("Initial", () => (
//     <InterviewerList
//       interviewers={interviewers}
//       setInterviewer={action("setInterviewer")}
//     />
//   ))
//   .add("Preselected", () => (
//     <InterviewerList
//       interviewers={interviewers}
//       interviewer={3}
//       setInterviewer={action("setInterviewer")}
//     />
//   ));
