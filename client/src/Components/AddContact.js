import { useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addContact } from "../Redux/actions";
import { Link } from "react-router-dom";

const AddContact=() => {

const [fullName, setFullName] = useState("")
const [email, setEmail] = useState("")
const [phoneNumber, setPhoneNumber] = useState()
const [birthdate, setBirthdate] = useState()

const dispatch = useDispatch()
const navigate= useNavigate()

const add = () => {
    const newContact = {
 fullName,
 email,
 phoneNumber,
 birthdate

    }
dispatch(addContact(newContact))
alert ("contact added")
navigate("/")
}

return (

    <>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="full name" onChange={(e)=> {setFullName(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" onChange={(e)=> {setEmail(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="number" placeholder="phone number" onChange={(e)=> {setPhoneNumber(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>birthdate</Form.Label>
        <Form.Control type="number" placeholder="birthdate" onChange={(e)=> {setBirthdate(e.target.value)}} />
      </Form.Group>

      <Button variant="success" onClick={add}>Add Contact</Button>

     <Link to ={"/"}>
      <Button variant="danger">Cancel</Button>
      </Link>
    </Form>
    </>
    )
}

export default AddContact;