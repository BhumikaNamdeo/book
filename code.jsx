
// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [contacts, setContacts] = useState([]);
//   const [currentContact, setCurrentContact] = useState(null);
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
//   const [currentPage, setCurrentPage] = useState(1);
//   const contactsPerPage = 5;

//   // Load contacts from localStorage on initial render
//   useEffect(() => {
//     const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
//     setContacts(savedContacts);
//   }, []);

//   // Save contacts to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   }, [contacts]);

//   // Pagination logic
//   const indexOfLastContact = currentPage * contactsPerPage;
//   const indexOfFirstContact = indexOfLastContact - contactsPerPage;
//   const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (currentContact) {
//       // Update existing contact
//       setContacts(
//         contacts.map((contact) =>
//           contact.id === currentContact.id ? { ...formData, id: contact.id } : contact
//         )
//       );
//     } else {
//       // Add new contact
//       setContacts([...contacts, { ...formData, id: Date.now() }]);
//     }
//     setFormData({ name: "", email: "", phone: "" });
//     setCurrentContact(null);
//   };

//   // Handle editing a contact
//   const handleEdit = (contact) => {
//     setCurrentContact(contact);
//     setFormData(contact);
//   };

//   // Handle deleting a contact
//   const handleDelete = (id) => {
//     setContacts(contacts.filter((contact) => contact.id !== id));
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-6">Contact Management System</h1>
      
//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded shadow-md mb-6 space-y-4"
//       >
//         <div>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter Name"
//             className="w-full p-3 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter Email"
//             className="w-full p-3 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Enter Phone Number"
//             className="w-full p-3 border rounded"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
//         >
//           {currentContact ? "Update Contact" : "Add Contact"}
//         </button>
//       </form>

//       {/* Contact List */}
//       <div className="space-y-4">
//         {currentContacts.map((contact) => (
//           <div
//             key={contact.id}
//             className="flex justify-between items-center p-4 bg-gray-100 rounded shadow"
//           >
//             <div>
//               <h2 className="text-lg font-bold">{contact.name}</h2>
//               <p>Email: {contact.email}</p>
//               <p>Phone: {contact.phone}</p>
//             </div>
//             <div className="space-x-2">
//               <button
//                 onClick={() => handleEdit(contact)}
//                 className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(contact.id)}
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-6">
//         {Array.from({ length: Math.ceil(contacts.length / contactsPerPage) }).map(
//           (_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentPage(index + 1)}
//               className={`px-4 py-2 mx-1 rounded ${
//                 currentPage === index + 1
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200 hover:bg-gray-300"
//               }`}
//             >
//               {index + 1}
//             </button>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;
