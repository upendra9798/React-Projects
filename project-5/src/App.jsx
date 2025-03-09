import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { FiSearch } from "react-icons/fi"; // Icon for the search bar
import { AiFillPlusCircle } from "react-icons/ai"; // Icon for adding contacts
import { collection, getDocs, onSnapshot } from "firebase/firestore"; // Firebase Firestore functions
import { db } from "./confing/firebase"; // Import Firebase configuration
import ContactCard from './components/ContactCard'; // Component to display each contact
import AddAndUpdateContact from './components/AddAndUpdateContact'; // Modal for adding/updating contacts
import UseDisclose from './hooks/useDisclose'; // Custom hook to manage modal open/close state
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundContact from './components/NotFoundContact';

function App() {
  const [contacts, setContacts] = useState([]) // State to store contacts

  // Custom hook for handling modal state
  const { isOpen, onClose, onOpen } = UseDisclose();

  // Fetch contacts from Firestore and enable real-time updates
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts"); // Reference to "contacts" collection

        // Firestore real-time listener - automatically updates UI on changes
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => ({
            id: doc.id,  // Assign Firestore document ID to each contact
            ...doc.data(), // Spread remaining document fields (name, email, etc.)
          }));

          setContacts(contactLists); // Update state with new contact list
          return contactLists
        });
      } catch (error) {
        console.log(error); // Handle errors
      }
    };

    getContacts(); // Call function when the component mounts
  }, []); // Empty dependency array ensures this runs only once

    const filterContacts = (e) => {
      const value = e.target.value;

      const contactsRef = collection(db, "contacts"); // Reference to "contacts" collection

      // Firestore real-time listener - automatically updates UI on changes
      onSnapshot(contactsRef, (snapshot) => {
        const contactLists = snapshot.docs.map((doc) => ({
          id: doc.id,  // Assign Firestore document ID to each contact
          ...doc.data(), // Spread remaining document fields (name, email, etc.)
        }));

          const filteredContacts = contactLists.filter((contact)=> contact.name.toLowerCase().includes(value.toLowerCase()))

        setContacts(filteredContacts); // Update state with new contact list
        return filteredContacts
      });
    }

   

  return (
    <>
      <div className='mx-auto max-w-[370px] px-4'>
        {/* Centering container with max width of 370px and horizontal padding */}
        
        <Navbar /> {/* Top navigation bar */}

        {/* Search bar and add contact button */}
        <div className='flex gap-2'>
          <div className='relative flex items-center'>
            <FiSearch className='absolute ml-1 text-3xl text-white'/> {/* Search icon */}
            <input 
            onChange={filterContacts}
              type='text'
              className='h-10 flex-grow rounded-md border border-white bg-transparent 
              text-white pl-9' 
              placeholder='Search Contact' 
            /> 
            {/* Search input with left padding to accommodate the icon */}
          </div>
          
          <AiFillPlusCircle onClick={onOpen} className='cursor-pointer text-5xl text-white'/>
          {/* Floating button to add a new contact, opens modal */}
        </div>

        {/* Contact list display */}
        <div className='mt-4 flex gap-3 flex-col'>
          
          {contacts.length <= 0 ? <NotFoundContact/> :contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>

      {/* Modal for adding or updating contacts */}
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
      <ToastContainer position='bottom-center'/>
    </>
  );
}

export default App;
