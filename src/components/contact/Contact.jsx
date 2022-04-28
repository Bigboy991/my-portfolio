import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

    //Magsesend ng message sa email
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mgnl1ct', 'template_l7s3lhq', form.current, 'DvKROL_3gJZhIHdKF')
          e.target.reset()
      };


    return(
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
        <div className='container contact__container'>
            <div className='contact__options'>
                <article className='contact__option'>
                    <MdOutlineMail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>sample.mail@gmailcom</h5>
                    <a href="mailto:cristobal.gulliver13@gmail.com" target="_blank">Send a Message</a>
                </article>

                
                <article className='contact__option'>
                    <RiMessengerLine className='contact__option-icon'/>
                    <h4>Messenger</h4>
                    <h5>Gulliver Cristobal</h5>
                    <a href="https://m.me/gulliver.cristobal" target="_blank">Your Message</a>
                </article>

               
                <article className='contact__option'>
                    <BsWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+123456789</h5>
                    <a href="https://api.whatsap.com/send?phone=09212185098" target="_blank">Send a Message</a>
                </article>
            </div>
            {/**END OF CONTACT OPTION */}
            
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder='Your Full Name' required />
                <input type="email" name="email" placeholder='Your Email' required />
                <textarea name="message" row="7" placeholder='Your Message' required></textarea>
                <button type="submit" className='btn btn-primary'>Send Message</button>
                
            </form>
        </div>

        </section>
    )
}

export default Contact