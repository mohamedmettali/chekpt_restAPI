import {getContacts} from "../Redux/actions"
import ContactCard from "./ContactCard"
import { useDispatch,useSelector } from 'react-redux';
import {React,useEffect} from 'react';

const ListContact = () => {
const dispatch = useDispatch()
const contacts = useSelector((state)=> state.contacts.data)
 
useEffect(()=>{
    dispatch(getContacts())
}, [])

return(
<div style={{display: "flex", texWrap: "wrap"}}>
{
contacts && 
contacts.map((el)=> <ContactCard el={el}/>)

}
</div>
)
}
export default ListContact;