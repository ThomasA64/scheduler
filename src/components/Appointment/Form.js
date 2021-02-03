import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [error, setError] = useState("")
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = function () {
    setName("");
    setInterviewer(null);
  };
  const cancel = function () {
    reset();
    props.onCancel();
  };

  const validate = function () {
    if (name === '') {
      return setError("Cannot save because student name is missing.")
    } 
    if (interviewer === null) {
      return setError("Please select an interviewer.")
    }
    setError("")
    props.onSave(name, interviewer)
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </form>
        <section className="appointment__validation"> 
          {error}
        </section>
        <InterviewerList
          interviewers={props.interviewers}
          interviewer={interviewer}
          onChange={setInterviewer}
          setInterviewer={setInterviewer}
          data-testid="student-name-input"
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>
            Cancel
          </Button>

          <Button confirm onClick={validate}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
