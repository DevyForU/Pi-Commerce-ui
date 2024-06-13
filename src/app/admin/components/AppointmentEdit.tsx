import React from 'react'
import { DateInput, Edit, SimpleForm, TextInput, minValue, required } from 'react-admin'

export default function AppointmentEdit() {
    function now():String  {
        return new Date().toISOString().split("T")[0];
    }

  return (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="status" validate={required()}   />
            <DateInput source="date" label="date" validate={minValue(now())} />
        </SimpleForm>
    </Edit>
  )
}
