import React, { useState, useEffect } from "react";
import axios from "axios"

const useApplicationData = function () {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
  });


  const upDateSpots = function (dayID, action) {
    const oldDay = state.days.find(day => day.id === dayID)
    let newSpots = action === 'increment' ? oldDay.spots+1 : oldDay.spots-1
    // oldDay.appointments.forEach((appID) => {
    //   if (state.appointments[appID].interview === null) {
    //     newSpots += 1
    //   }
    // })
    const day = {
      ...oldDay,
      spots: newSpots
    };
    const days = [...state.days]
    const dayIndex = state.days.findIndex((dayEl) => dayEl.id === dayID)
    days.splice(dayIndex, 1, day)
    // setState({...state, days})
    return days
//TODO: Need to get the Spots key out of the Days object and update that
//TODO: There has to be a maximum of 5 spots. 
//* Possibly count how many ids.
//* Should a ForIn be used to loop throught the object? 
// const ds = days.spots
// * Should that value change when the state is changed?

  }

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
    // .then(() => upDateSpots(dayID))
  };
  //* Revisit function
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