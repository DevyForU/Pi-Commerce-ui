import {
    Admin,
    Resource,
    ListGuesser,
    EditGuesser,
    ShowGuesser,
  } from "react-admin";
  import { authProvider } from "./authProvider";
  import lb4Provider from "react-admin-lb4";
  import CarList from "./CarList";
  import AppointmentList from "./AppointmentList";
  import UserCreate from ".//UserCreate";
  import CarPost from "./CarPost";
  
  const provider = lb4Provider('http://localhost:3000')
  export const AdminApp = () =>
     <Admin
    dataProvider={provider}
    authProvider={authProvider}>
    <Resource name="users" list={ListGuesser} show={ShowGuesser} edit={EditGuesser} create={UserCreate} />
    <Resource name="cars" list={CarList} create={CarPost} />
    <Resource name="appointments" list={AppointmentList} />
    /</Admin>;
  