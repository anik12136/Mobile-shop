import { FaFacebookMessenger, FaLocationArrow } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { FiPhoneCall } from 'react-icons/fi';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const notify = () => toast.success('Email sent successfully!');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_rm5ikbq', 'template_mcdp8yn', form.current, {
                publicKey: 'M3wjAQFzDAXoav-Xb',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    notify();
                    form.current.reset(); // Clear input fields after success
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Failed to send email. Please try again.');
                },
            );
    };

    return (
        <div id='contact' className='md:lg:my-10 md:mx-40 mx-2 pt-2'>
            <div className='mb-10'>
                <h2 className='flex justify-center md:text-5xl text-3xl font-extrabold'>Contact With Us</h2>
            </div>

            <div className="pb-20">
                <div className="md:lg:flex md:lg:flex-row-reverse items-center gap-10">
                    <div className="text-center lg:text-left md:ms-10 md:lg:grid gap-y-24">
                        <h1 className="text-5xl font-bold text-sky-400">Feel free to drop a message.</h1>
                        <div className='text-base-500'>
                            <div className='flex gap-6'>
                                <h2 className='mt-1'><FaLocationArrow /></h2>
                                <h2>Dhaka, Bangladesh</h2>
                            </div>
                            <div className='flex gap-6'>
                                <h2 className='mt-1'><FiPhoneCall /></h2>
                                <h2>+8801721383204</h2>
                            </div>
                            <div className='flex gap-6'>
                                <h2 className='mt-1'><GrMail /></h2>
                                <h2>anikbiswas431@gmail.com</h2>
                            </div>
                        </div>
                        <div className='flex gap-4 my-5'>
                            <a href="https://www.linkedin.com/in/anik-biswas-aa1586282/"><img className='h-10 w-10' src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="LinkedIn" /></a>
                            <a href="https://www.facebook.com/anickbiswas.antor/"><img className='h-10 w-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="Facebook" /></a>
                            <a href="https://www.instagram.com/a_nto_r/"><img className='h-10 w-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png" alt="Instagram" /></a>
                            <a href="https://github.com/anik12136"><img className='h-10 w-10' src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" alt="GitHub" /></a>
                            <a href="https://api.whatsapp.com/send?phone=+8801721383204"><img className='h-10 w-10' src="https://cdn.icon-icons.com/icons2/1195/PNG/512/1490889687-whats-app_82529.png" alt="WhatsApp" /></a>
                            <a href="https://m.me/anickbiswas.antor"><FaFacebookMessenger className='h-10 w-10' /></a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full max-w-sm shadow-2xl border-2 rounded-sm">
                        <Toaster />
                        <form ref={form} onSubmit={sendEmail} className='grid px-5'>
                            <label className='pt-5 pb-1 text-black'>Name</label>
                            <input type="text" name="user_name" className='p-2 rounded-md h-10 border-2' required />
                            
                            <label className='pt-3 pb-1 text-black'>Email</label>
                            <input type="email" name="user_email" className='p-2 rounded-md h-10 border-2' required />
                        
                            <label className='pt-3 pb-1 text-black'>Message</label>
                            <textarea name="message" className='h-40 p-2 rounded-md text-sm border-2' required />
                         
                            <input type="submit" value="Send" className='btn hover:bg-white my-3 hover:text-black' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
