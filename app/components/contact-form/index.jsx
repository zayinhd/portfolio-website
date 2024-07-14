import React, { useState } from 'react';
import axios from "axios";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {

                console.log('Response:', await response.json());
                setSubmitted(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                console.error('Error sending email:', await response.text());
            }
        }
        catch (error) {
            console.error('Error sending email:', error);
        }

    };

    return (
        <form onSubmit={ handleSubmit } method='POST' className="max-w-lg mx-auto p-4 rounded-lg" >
            <h1 className='font-bold mb-4'>Write me a message:</h1>
            <input
                type="text"
                id="name"
                name="name"
                value={ formData.name }
                onChange={ handleChange }
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                placeholder='Name'
                autoComplete='on'
                required
            />

            <input
                type="email"
                id="email"
                name="email"
                value={ formData.email }
                onChange={ handleChange }
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                placeholder='Email'
                autoComplete='on'
                required
            />
            <input
                type="text"
                id="subject"
                name="subject"
                value={ formData.subject }
                onChange={ handleChange }
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                placeholder='Subject'
                autoComplete='on'
                required
            />
            <textarea
                id="message"
                name="message"
                value={ formData.message }
                className="w-full p-2 mb-4 border rounded-md resize-none"
                placeholder="Your message..."
                onChange={ handleChange }
                rows={ 6 }
                required
            ></textarea>
            {
                submitted ? (
                    <p className="text-black dark:text-white font-bold">Message submitted successfully!</p>
                ) :
                    <button
                        type="submit"
                        className="form-send-btn"
                    >
                        Send Message
                    </button>
            }

        </form>
    );
};

export default ContactForm;
