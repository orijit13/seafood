import { useState } from "react";
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
    const [message, setMessage] = useState("");
    const [userName, setuserName] = useState("");
    const [userEmail, setuserEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <>
            <Head>
                <title>Contact | Sea Food A Hotal and Restaurants</title>
            </Head>
            <Header />
            <div className="contact">
                <div className="contact-main">
                    <div className="container">
                        <div className="contact-top">
                            <h3>CONTACT US</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>
                        <div className="contact-bottom">
                            <form>
                            <div className="col-md-7 contact-left">
                                <p>Name</p>
                                <input type="text" value={userName} onChange={(e)=> setuserName(e.target.value)} autoComplete="" required />
                                <p>E-mail</p>
                                <input type="text" value={userEmail} onChange={(e) => setuserEmail(e.target.value)} autoComplete="" required />
                                <p>Subject</p>
                                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} autoComplete="" required />
                                <p>Phone Number</p>
                                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="" required />
                            </div>
                            <div className="col-md-5 contact-right">
                                <p>Messages</p>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                <button type='submit'>Send</button>
                            </div>
                            </form>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map">
                <div className="container">
                    <div className="col-md-6 map-left">
                        <h3>CONTACT INFO</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <div className="addre">
                            <h4>ADDRESS</h4>
                            <p>Address : Richard McClintock</p>
                            <p>New Street : Letraset sheets </p>
                            <p>ph : +123 859 6050</p>
                        </div>
                    </div>
                    <div className="col-md-6 map-right">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387144.007583421!2d-73.97800349999999!3d40.7056308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1415253431785" frameBorder="0" style={{ border: 0 }}></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}
export default Contact