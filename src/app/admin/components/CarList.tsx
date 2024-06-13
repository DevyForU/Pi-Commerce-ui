import { Datagrid, ImageField, List, ReferenceField, SearchInput, TextField } from 'react-admin'


const CarFilter=[
    <SearchInput  placeholder="search"source="brand" resettable={true}alwaysOn/>,

]
export default function CarList(props:any) {

  return (
    <List{...props} filters={CarFilter}>
        <Datagrid>
            <TextField source='id'/>
            <TextField source='brand'/>
            <TextField source='model'/>
            <TextField source='color'/>
            <TextField source='price'/>
            <TextField source='engine'/>
            <TextField source='place_number'/>
            <TextField source='power'/>
            <ReferenceField source='id' reference='images' label='image'>
                <ImageField source='url'/>
            </ReferenceField>
        </Datagrid>
    </List>

  )
}

