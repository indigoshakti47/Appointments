import React, { Fragment , useState } from "react";
import uuid from 'uuid/v4'

const Form = () => {
    const [appointment, updateAppointment] = useState({
        pet:'',
        owner:'',
        date:'',
        time:'',
        symptoms:''

    });

    const [error, updateError] = useState (false)

    const updateState = e =>{
        updateAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }
    const submitAppointment = e => {
        e.preventDefault();
        if (pet.trim()==='' || owner.trim()==='' || date.trim()==='' || time.trim()==='' || symptoms.trim()===''){
            updateError(true)
            return;
        }
        updateError(false)
        appointment.id = uuid();
        console.log(appointment)

    }

    const {pet, owner, date, time, symptoms} = appointment;
  return (
    <Fragment>
      <h2>Create appointment</h2>
      {error ? <p className="alert-error">All the fields are mandatory, please fill them out!</p> : null}
      <form
      onSubmit={submitAppointment}>
        <label>Pet's name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet's name"
          onChange={updateState}
          value={pet}
        />

        <label>Owner's name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner's name"
          onChange={updateState}
          value={owner}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={updateState}
          value={date}
        />

        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={updateState}
          value={time}
        />

        <label>Symptoms</label>
        <textarea
        name="symptoms"
        className="u-full-width"
        onChange={updateState}
        value={symptoms}>
        

        </textarea>

        <button
        type="submit"
        className="u-full-width button-primary">
            CREATE
        </button>

      </form>
    </Fragment>
  );
};
export default Form;
