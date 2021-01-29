export function getAppointmentsForDay(state, day) {
  if ((state.days.length = 0)) {
    return [];
  }

  let CorrectDay = state.days.filter(
    (IndividualDay) => IndividualDay.name === day
  );
  if (CorrectDay.length === 0) {
    return [];
  }
  let ArrayAppoint = CorrectDay[0].appointments;
  let IndividualApp = ArrayAppoint.map(
    (appointment) => state.appointments[appointment]
  );
  return IndividualApp;
}
