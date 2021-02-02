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

export function getInterviewersForDay(state, day) {
  if (state.days.length === 0) {
    return [];
  }
  let correctDayArray = state.days.filter((indDay) => indDay.name === day);
  if (correctDayArray.length === 0) {
    return [];
  }
  let arrOfInterviewers = correctDayArray[0].interviewers;
  let interview = arrOfInterviewers.map((interV) => state.interviewers[interV]);
  return interview;
}

