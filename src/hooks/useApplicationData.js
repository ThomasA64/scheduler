import React, { useState, useEffect } from "react";
import axios from "axios"

const useApplicationData = function () {

// This hook deals with all the functions that manage the state used in the Application.js file.

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
  });


  // This function updates all the spots available on the sidebar for the scheduler app. 
  const upDateSpots = function (dayID, action) {
    const oldDay = state.days.find(day => day.id === dayID)
    let newSpots = action === 'increment' ? oldDay.spots+1 : oldDay.spots-1
   
    const day = {
      ...oldDay,
      spots: newSpots
    };
    const days = [...state.days]
    const dayIndex = state.days.findIndex((dayEl) => dayEl.id === dayID)
    days.splice(dayIndex, 1, day)
    return days
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
    const dayID = state.days.find(day => day.appointments.includes(id)).id
    const days = upDateSpots(dayID, 'decrement')
  return axios.put(`/api/appointments/${id}`, body)
    .then(() => setState({
      ...state,
      appointments,
      days
    }))
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
    const dayID = state.days.find(day => day.appointments.includes(id)).id
    const days = upDateSpots(dayID, 'increment')
   return axios.delete(`/api/appointments/${id}`)
    .then(() => setState({
      ...state,
      appointments,
      days
   }))
  }
  
  // This function calls to the API and stores gets all of the info from the API to show up on the schedule. 
  const setDay = (day) => setState({ ...state, day });
  useEffect(() => {
    console.log("Use Effect is working");
  
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
      console.log(res);
    });
  }, []);

  return {state, bookInterview, deleteData, setDay}
}

export default useApplicationData