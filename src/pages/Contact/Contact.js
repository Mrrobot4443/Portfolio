import { useState } from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import './Contact.css'
import React from "react";

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    function submit(e) {
        e.preventDefault();
        if (name.length > 2) {
            emailjs.send("service_tfm8coj", "template_cc7mlqq", {
                'from_name': name,
                'from_email': email,
                'from_subject': subject,
                'from_message': message
            }, 'oEeQLm0a7ljYzq1xW');

            setName('')
            setEmail('')
            setSubject('')
            setMessage('')

            toast("Votre message a été envoyé avec succès", {
                duration: 5000,
                position: "bottom-left",
                icon: "✅"
            })
        } else {
            setError("Nom est obligatoire")
        }
    }

    function change(e) {
        const name = e.target.name;

        if (name === "name") {
            setName(e.target.value)
        } else if (name === "email") {
            setEmail(e.target.value)
        } else if (name === "subject") {
            setSubject(e.target.value)
        } else {
            setMessage(e.target.value)
        }
    }


    return (
        <>
            <Toaster />
            <div className="container">
                <div className="row all position-relative d-flex">
                    <div className="col-md-6 mb-5 position-relative">
                        <div className="">
                            <div className="card-body">
                                <h5 className="text-center my-3 font">Contactez-nous et nous vous répondrons dans les prochains 24h</h5>
                                <form onSubmit={submit}>

                                    <div className="form-group mb-3">
                                        <label htmlFor="name" className="font " >Nom complet</label>
                                        <hr />
                                        <input type="text" className="form-control border-0" value={name} id="name" name="name" onChange={change} />
                                        <span className="text-danger">{error}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="email" className="font">Adresse e-mail</label>
                                        <hr />
                                        <input type="email" className="form-control border-0" value={email} id="email" name="email" onChange={change} />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="subject">Sujet</label>
                                        <hr />
                                        <input type="text" className="form-control border-0" value={subject} id="subject" name="subject" onChange={change} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="message">Message</label>
                                        <hr />
                                        <textarea name="message" id="message" rows={5} value={message} className="form-control border-0" onChange={change}></textarea>
                                    </div>

                                    <div className="form-group mb-3">
                                        <button className="btn btn-black w-100 bg-black opacity-60 text-white">Envoyer le message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                                <div className="col-md-6 mb-5 position-relative">
                                <div className="position-absolute long1"></div>
                                <img src="images/robot.png" alt="" className="imgrobot" />
                                 </div>
                                 
                </div>
            </div>
        </>
    )
}
export default Contact