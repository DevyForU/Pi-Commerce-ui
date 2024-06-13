import React from 'react'
import { Create, SimpleForm, TextInput, required, DateInput } from 'react-admin'

export default function UserCreate() {
  return (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} fullWidth />
            <TextInput source="email" validate={[required()]} />
            <TextInput source="password" validate={[required()]} />
        </SimpleForm>
    </Create>
  )
}
