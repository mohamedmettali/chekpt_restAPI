import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { deleteContact } from '../Redux/actions';
import EditContact from './EditContact';
 

const ContactCard = ({ el }) => {
   
const dispatch = useDispatch()
const deleteC = () => {
const confirmDelete =window.confirm("are you sure?")
if (confirmDelete){
  dispatch(deleteContact(el._id))
}
}
    return (
      <div>
        
      
      <Card.Body>
        <Card.Title>{el.fullName}</Card.Title>
        <Card.Text>
        {el.email}
        {el.phoneNumber}
        {el.birthdate}
        </Card.Text>
        <EditContact el={el}/>
        <Button variant="danger" onClick={deleteC}>Delete contact</Button>
      </Card.Body>
  
      
      </div>
    );
  };
  
  export default ContactCard;