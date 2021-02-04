import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm"
import Error from "components/Appointment/Error"

// This is the Appointment Component and it deals with useVisual mode and changing between modes for the functionality of the app. 

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE"
const ERROR_DELETE = "ERROR_DELETE"

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  // This function allows an interview to be saved.
  const save = function (name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    console.log(interview);

    transition(SAVING)

    props
    .bookInterview(props.id, interview)
    .then(() => transition(SHOW))
    .catch(() => transition(ERROR_SAVE, true))
  };

  // This function allows an interview to be deleted. 
  const del = function () {
    const id = props.id
    
    transition(DELETING, true)
    
    props
    .deleteData(id)
    .then(() => transition(EMPTY))
    .catch(() => transition(ERROR_DELETE, true))
  }

  return (
    <article className="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && props.time !== '5pm' && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && (
        <Form interviewers={props.interviewers} onCancel={back} onSave={save} />
      )}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === SAVING && <Status saving={'SAVING'}/>}
      {mode === CONFIRM && <Confirm onConfirm ={del} onCancel={back}/>}
      {mode === DELETING && <Status deleting={'DELETING'}/>}
      {mode === EDIT && (
        <Form interviewers={props.interviewers} name={props.interview.student} interviewer={props.interview.interviewer.id} onCancel={back} onSave={save} />
      )}
      {mode === ERROR_SAVE && <Error couldNotSave={'Could not save appointment'} onClose={back}/>}
      {mode === ERROR_DELETE && <Error couldNotDelete={'Could not delete appointment'} onClose={back}/>}
    </article>
  );
}
