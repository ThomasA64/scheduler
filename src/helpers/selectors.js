export function getAppointmentsForDay(state, day) {
  if (state.days.length === 0) {
    return [];
  }
  let correctDayArray = state.days.filter((indDay) => indDay.name === day);
  if (correctDayArray.length === 0) {
    return [];
  }
  let arrOfAppointments = correctDayArray[0].appointments;
  let indAppointment = arrOfAppointments.map((app) => state.appointments[app]);
  return indAppointment;
}

export function getInterview(state, interview) {
  const result = {};
  if (!interview) {
    return null;
  } else {
    result.student = interview.student;
    result.interviewer = state.interviewers[interview.interviewer];
    return result;
  }
}

// {
//   "student": "Lydia Miller-Jones",
//   "interviewer": {
//     "id": 1,
//     "name": "Sylvia Palmer",
//     "avatar": "https://i.imgur.com/LpaY82x.png"
//   }
// }
