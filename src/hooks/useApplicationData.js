import { useState, useEffect } from "react";
import axios from "axios"

const useApplicationData = function () {

// This hook deals with all the functions that manage the state used in the Application.js file.

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
  });

  // This function updates all the spots available on the sidebar for the scheduler app. 

  const upDateRemainingSpots = function (state) {
    const days = state.days.map(day => ({...day, spots: day.appointments.map(id => state.appointments[id]).filter(appointment => !appointment.interview).length}))
    return {...state, days}
  }

  // This function allows the interview's Student name and Interviewer to be sent to the API and book a New Interview
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const body = {interview}

  return axios.put(`/api/appointments/${id}`, body)
    .then(() => setState({
      ...state,
      appointments,
    })).then(() => setState(upDateRemainingSpots))
  };

  // This function allows the deletion of an interview.
  function deleteData(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

   return axios.delete(`/api/appointments/${id}`)
    .then(() => setState({
      ...state,
      appointments,
   })).then(() => setState(upDateRemainingSpots))
  }
  
  // This function calls to the API and stores gets all of the info from the API to show up on the schedule. 
  const setDay = (day) => setState({ ...state, day });
  useEffect(() => {
  
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((res) => {
      setState((prev) => ({
        ...prev,
        days: res[0].data,
        appointments: res[1].data,
        interviewers: res[2].data,
      }));
    });
  }, []);

  return {state, bookInterview, deleteData, setDay}
}

export default useApplicationData