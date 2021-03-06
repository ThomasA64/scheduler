import React from "react";
import Button from "components/Button";

export default function Confirm(props) {
  const deleteMessage = 'ARE YOU SURE YOU WOULD LIKE TO DELETE?'
  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">{deleteMessage}</h1>
      <section className="appointment__actions">
        <Button danger onClick={props.onCancel}>
          Cancel
        </Button>
        <Button danger onClick={props.onConfirm}>
          Confirm
        </Button>
      </section>
    </main>
  );
}
