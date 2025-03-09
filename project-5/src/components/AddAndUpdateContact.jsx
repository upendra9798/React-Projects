import React from 'react'
import Modal from './Modal'  // Ensure the Modal component properly handles closing on successful form submission.
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../confing/firebase"; // Check if the path is correct, "confing" might be a typo for "config".
import { toast } from 'react-toastify';
import * as Yup from "yup"

// Validation schema using Yup
const contactSchemeValidation = Yup.object().shape({
    name: Yup.string().required("Name is Required"),  // Consider adding a minimum length validation.
    email: Yup.string().email("Invalid email").required("Email is Required")  // Could enhance email validation with stricter rules.
});

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
    
    // Function to add a new contact to Firestore
    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact);
            onClose(); // Closes modal after pressing the add button
            toast.success('Contact Added Successfully'); // Displays success message
        } catch (error) {
            console.log(error);  // Consider using toast.error() to notify the user of an issue.
        }
    };

    // Function to update an existing contact in Firestore
    const updateContact = async (contact, id) => {
        try {
            const contactRef = doc(db, "contacts", id);
            await updateDoc(contactRef, contact);
            onClose(); // Closes modal after pressing the update button
            toast.success('Contact Updated Successfully');
        } catch (error) {
            console.log(error);  // Logging is useful, but consider handling errors more gracefully.
        }
    };

    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <Formik 
                    validationSchema={contactSchemeValidation}
                    initialValues={
                        isUpdate ? {
                            name: contact.name || "", // Ensure fallback values to prevent errors.
                            email: contact.email || "",
                        } : {
                            name: "",
                            email: "",
                        }
                    }
                    onSubmit={(values, { setSubmitting }) => { // Use setSubmitting to manage button state.
                        console.log(values);
                        isUpdate ? updateContact(values, contact.id) : addContact(values);
                        setSubmitting(false); // Prevent multiple submissions.
                    }}
                >
                    <Form className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="name">Name</label>
                            <Field name="name" className="h-10 border" />
                            <div className='text-xs text-red-500'>
                                <ErrorMessage name="name" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email">Email</label>
                            <Field name="email" className="h-10 border" />
                            <div className='text-xs text-red-500'>
                                <ErrorMessage name="email" />
                            </div>
                        </div>

                        {/* Consider disabling the button when the form is submitting */}
                        <button type="submit" className='border bg-orange-500 px-3 py-1.5'>
                            {isUpdate ? "Update" : "Add"} Contact
                        </button>
                    </Form>
                </Formik>
            </Modal>
        </div>
    );
}

export default AddAndUpdateContact;
