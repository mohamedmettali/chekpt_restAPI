import Modal from 'react-modal';
import { useState } from "react"
import { updateContact } from '../Redux/actions';
import { useDispatch } from "react-redux";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EditContact = ({el}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const [fullName, setFullName] = useState(el.fullName)
    const [email, setEmail] = useState(el.email)
    const [phoneNumber, setPhoneNumber] = useState(el.phoneNumber)
    const [birthdate, setBirthdate] = useState(el.birthdate)

    const dispatch = useDispatch()
  

    function openModal() {
      setIsOpen(true);
    }
  
  
    function closeModal() {
      setIsOpen(false);
    }

const updateC = () => {
 
    const updatedContact = {
        fullName,
        email,
        phoneNumber,
        birthdate
    }
    dispatch(updateContact(el._id, updatedContact))
  alert("Contact updated succefully")  
  closeModal()


}    


return(
    <div>
    <Button variant="success"  onClick={openModal}>update contact</Button>
    <Modal
      isOpen={modalIsOpen}
    >
     
      
      <div><h1>update Contact</h1></div>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="full name" onChange={(e)=> {setFullName(e.target.value)}}
        value={fullName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" onChange={(e)=> {setEmail(e.target.value)}} 
          value={email}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="number" placeholder="phone number" onChange={(e)=> {setPhoneNumber(e.target.value)}}
          value={phoneNumber} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>birthdate</Form.Label>
        <Form.Control type="number" placeholder="birthdate" onChange={(e)=> {setBirthdate(e.target.value)}}
          value={birthdate} />
      </Form.Group>

      <Button variant="success" onClick={updateC} >Update Contact Contact</Button>

     
    </Form>

    <Button variant="danger" onClick={closeModal}>close</Button>
    </Modal>
  </div>

)





}

export default EditContact