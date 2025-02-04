import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import './Contact.css'

function Contact() {
    const navigate = useNavigate();

    return (
        <>
            <div className="navbar">
                <div className="navbar_left">
                    <div><img src={logo} alt="Halcyon" id='logo' /></div>
                    <div onClick={() => navigate('/')}>Home</div>
                    <div>Contact Us</div>
                    <div onClick={() => navigate('/about_us')}>About Us</div>
                </div>
                <div className="navbar_right">
                    <div className="sign_in_btn" onClick={() => navigate('/sign_in')}>Sign In</div>
                </div>
            </div>

            <div className="discover">
                <h1>Discover Halcyon: Your Ultimate Conversational Place and Personal Diary</h1>
                <p>
                    Halcyon offers two enticing platforms: Converse and Diary, providing a unique social experience wrapped in elegance and convenience.
                </p>

                <div className="discover-content">
                    <div>
                        <h2>1. What is the Converse Platform about ?</h2>
                        <p>
                            Converse is a vibrant chatting space connecting you with a global community. Send messages, gift boxes, share moods, and exchange stories effortlessly.
                        </p>
                    </div>

                    <div>
                        <h2>2. Tell me more about the diary feature.</h2>
                        <p>
                            Halcyon's Diary, serves as your digital sanctuary to write, protect entries with passwords, add media, categorize and track goals seamlessly.
                        </p>
                    </div>
                </div>
            </div>

            <div className="get-in-touch">
                <h1>Get in Touch with Halcyon</h1>
                <p>
                    Connect with us to explore the world of Converse and Diary platforms. Reach out to us for any queries or feedback!
                </p>

                <div className="feedback-form">
                    <form>
                        <label htmlFor="first-name">First Name:</label><br/>
                        <input type="text" name="first-name" value="John" id="first-name" required/>
                        <br/><br/>

                        <label htmlFor="last-name">Last Name:</label><br/>
                        <input type="text" name="last-name" value="Doe" id="last-name" required/> 
                        <br/><br/>

                        <label htmlFor="email-id">Email id:</label><br/>
                        <input type="email" name="email" value="xyz@example.com" id="email-id" required/>
                        <br/><br/>

                        <label htmlFor="message">Message:</label><br/>
                        <textarea name="message" id="message" required>
                            Write your message here
                        </textarea> <br/><br/>

                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>

            <div className="footer">
                <h3>HALCYON</h3>
                <div className="footer-list">
                    <div>
                        <ul>
                            <li>HOME</li>
                            <li>ABOUT US</li>
                            <li>CONTACT US</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>PRIVACY POLICY</li>
                            <li>TERMS AND CONDITIONS</li>
                        </ul>
                    </div>
                </div>
                <div className="last">
                    Copyright 2024, All Rights Reserved by Halcyon
                </div>
            </div>
        </>
    );
}

export default Contact