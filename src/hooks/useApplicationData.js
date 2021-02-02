import React, { useState, useEffect } from "react";
import axios from "axios"

const useApplicationData = function () {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
  });

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
  return axios.put(`/api/appointments/${id}`, body).then(() => setState({
    ...state,
    appointments,
  }))};
  
  function deleteData(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
   return axios.delete(`/api/appointments/${id}`).then(() => setState({
    ...state,
    appointments,
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