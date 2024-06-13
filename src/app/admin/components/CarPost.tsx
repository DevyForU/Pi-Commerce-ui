import React from 'react'
import { Create, SimpleForm,TextInput, required } from 'react-admin'

export default function CarPost() {
  return (
    <Create>
        <SimpleForm>
            <TextInput source='brand' validate={[required()]} fullWidth/>
            <TextInput source='model'validate={[required()]} fullWidth/>
            <TextInput source='color'validate={[required()]} fullWidth/>
            <TextInput source='price'validate={[required()]} fullWidth/>
            <TextInput source='engine'validate={[required()]} fullWidth/>
            <TextInput source='place_number'validate={[required()]} fullWidth/>
            <TextInput source='power'validate={[required()]} fullWidth/>
        </SimpleForm>
    </Create>  )
}
