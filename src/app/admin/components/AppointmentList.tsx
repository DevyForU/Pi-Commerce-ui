import { List, Datagrid, TextField, SearchInput } from "react-admin";
const AppointmentFilter=[
    <SearchInput  placeholder="date"source="appointment_date" resettable={true}alwaysOn/>,

]
export default function AppointmentList(props:any) {

    return (
      <List{...props} >
          <Datagrid>
              <TextField source='id'/>
              <TextField source='contact'/>
              <TextField appointment_date='appointment_date'/>
              <TextField appointment_date='status'/>
          </Datagrid>
      </List>
  
    )
  }
  0