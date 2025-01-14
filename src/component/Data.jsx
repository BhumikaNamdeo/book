import React from 'react'
import { useState } from 'react';

const Data = () => {

const [CurrentContact, setCurrentContact] = useState({name: "",email:'',phone:'',file:''})
const [contacts, setContacts] = useState([]);

// form handling
const submitHandler =(e)=>{
  e.preventDefault();
addContact();
if (CurrentContact.id) {
  updateContact(CurrentContact);
} else {
  addContact();
}
}

const handleChange=(e)=>{
  const{value,name}=e.target;
  setCurrentContact({...CurrentContact,[name]:value})
}

// for add contact
const addContact=()=>{
  const newContact = { ...CurrentContact, id: Date.now() }; 
 setContacts([...contacts,newContact])
 setCurrentContact({name: "",email:'',phone:'',file:''})
 console.log(setCurrentContact)
 console.log(contacts)
}

// for edit contact
const handleEdit=(Contact)=>{
  setCurrentContact(Contact)
}

// for update
const updateContact = (contactToUpdate) => {
  setContacts(
    contacts.map((contact) =>
      contact.id === contactToUpdate.id ? contactToUpdate: contact
    )
  );
  setCurrentContact({ name: '', email: '', phone: '', file: '' });
};

// for delete contact
const handleDelete = (deleteContact) => {
  setContacts((e) =>
    e.filter((contact) => contact.id !== deleteContact.id)
  );
};


  return (
    <div className='p-2 w-1/3' >
  <form onSubmit={submitHandler} className='border-2 border-black p-10 flex flex-col gap-4 rounded'>
   <input onChange={handleChange} name='name' value={CurrentContact.name || ''} className=' border-2 border-black text-xl px-2' type="text"  placeholder='Enter Name'/>
   <input onChange={handleChange} name='email' value={CurrentContact.email ||''} className=' border-2 border-black text-xl px-2' type="email" placeholder='Enter Email'/>
   <input onChange={handleChange} name='phone' value={CurrentContact.phone ||''} className=' border-2 border-black text-xl px-2' type="phone" placeholder='Enter Number'/>
    <button   className='rounded bg-blue-500 p-2 text-xl'> {CurrentContact.id ? 'Update Contact' : 'Add Contact'}</button>
  </form>

  <div className='m-6 w-full'>
    <h2 className='text-3xl font-bold'>Contact list :-</h2>
    {contacts.map((contact, index)=>(
      <div key={index} className='h-28 flex'>
        <div className='p-2'>
        <h3 className="text-lg font-semibold"> Name : {contact.name}</h3>
              <p className='text-lg font-semibold' >Email : {contact.email}</p>
              <p className='text-lg font-semibold'>Phone : {contact.phone}</p>
        </div>
        <div className='flex flex-col gap-3 p-4 ml-10'>
         <button onClick={()=>{handleEdit(contact)}}  className='bg-yellow-400 text-black rounded hover:bg-yellow-500'>Edit</button>
         <button  onClick={()=>{handleDelete(contact)}} className='bg-red-500 text-black rounded hover:bg-red-600'>Delete</button>
        </div>
      </div>
    ))
    }
  </div>


    </div>
  )
}

export default Data