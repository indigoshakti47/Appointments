import React, {Fragment , useState, useEffect} from "react";
import Form from './components/Form'
import Appointment from './components/Appointment'

function App() {

  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if (!initialAppointments){
    initialAppointments = [];
  } 

  const [appointments, saveAppointments] = useState(initialAppointments)

  useEffect(()=> {
    if(initialAppointments){
      localStorage.setItem('appointments', JSON.stringify(appointments))
    } else {
      localStorage.setItem('appointments', JSON.stringify([]))
    }
  }, [appointments , initialAppointments]);

  const createAppointment = appointment => {
    saveAppointments([ ...appointments, appointment])
  }

  const deleteAppointment = id => {
    const newAppointments = appointments.filter(appointment => appointment.id !== id)
    saveAppointments(newAppointments)
  }

  const title = appointments.length === 0 ? 'There are no appointments in the system' : 'List them all!'

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
            createAppointment={createAppointment}/>
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map(appointment => (
              <Appointment
              key={appointment.id}
              appointment={appointment}
              deleteAppointment={deleteAppointment}/>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
