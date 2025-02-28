import Button from '../Button/Button'
import styles from './Contact.module.css'
import {MdMessage} from "react-icons/md"
import {FaPhoneAlt} from "react-icons/fa"
import {HiMail} from "react-icons/hi"
import { useState } from 'react'

const ContactForm = () => {
  // const onViaCallSubmit = () => {
  //   console.log("I am from call");
  // }

  // let name ="vxbad"  //It not works as it not rerenders in all places of name
  // let email ="fsghd"
  // let text ="fg"

  // So useState is used as it rerenders everywhere where name is written
  const [name, setName] = useState("Upendra");
  const [email, setEmail] = useState("upendra9452@gmail.com"); //will work only when here is a valid email
  const [text, setText] = useState("Subscrribe to my channel");
  
  
  const onSubmit = (event) => {
    event.preventDefault(); //without this on submit page will reload(which we don't want)
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  }
    return (
       <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

<form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>

       <div>{name + " " + email + " " + text}</div>
       </form>
       </div>
       <div >
        <img src="/images/contact.svg" alt="service" />
       </div>
       </section>
    )
}

export default ContactForm