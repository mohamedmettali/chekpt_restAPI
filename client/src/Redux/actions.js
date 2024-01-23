import { GET_CONTACTS } from "./actionTypes";
import axios from 'axios'


export const getContacts = () =>  (dispatch) => {
   axios.get("/contacts/getContacts")
   .then((res) => dispatch({type: GET_CONTACTS, payload: res}))
   .catch((err)=> console.error(err))
   
    };

export const addContact = (newContact) =>  (dispatch) => {
      axios.post("/contacts/addContact", newContact)
      .then((res) => dispatch(getContacts()))
      .catch((err)=> console.error(err))
      
       };

export const deleteContact = (idContact) =>  (dispatch) => {
        axios.delete(`/contacts/deleteContact/${idContact}`)
        .then((res) => dispatch(getContacts()))
        .catch((err)=> console.error(err))
        
     };

export const updateContact = (idContact, updatedContact) =>  (dispatch) => {
      axios.put(`/contacts/updateContact/${idContact}`, updatedContact)
      .then((res) => dispatch(getContacts()))
      .catch((err)=> console.error(err))
      
   };     
