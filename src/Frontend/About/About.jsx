import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import './About.css'

function About() {
    const navigate = useNavigate();

    return (
        <>
            <div className="navbar">
                <div className="navbar_left">
                    <div><img src={logo} alt="Halcyon" id='logo' /></div>
                    <div onClick={() => navigate('/')}>Home</div>
                    <div onClick={() => navigate('/contact_us')}>Contact Us</div>
                    <div>About Us</div>
                </div>
                <div className="navbar_right">
                    <div className="sign_in_btn" onClick={() => navigate('/sign_in')}>Sign In</div>
                </div>
            </div>

            <div className="journey">
                <h1>Our Inspiring Journey</h1>
                <p>
                    Embark on the captivating journey of Halcyon, where innovation meets connection. Our mission is to redefine digital interactions and empower self-expression globally.
                </p>
            </div>

            <div className="mission">
                <h1>Our Mission</h1>
                <div className="mission-1">
                    <h2>Connect Globally</h2>
                    <p>
                        Empower individuals to connect across borders and cultures through innovative digital platforms.
                    </p>
                </div>

                <div className="mission-2">
                    <div>
                        <h2>Inspire Creativity</h2>
                        <p>
                            Encourage creative self-expression through interactive storytelling and digital journal experiences.
                        </p>
                    </div>

                    <div>
                        <h2>Empower Engagement</h2>
                        <p>
                            Facilitate meaningful engagement and communication among users, fostering a sense of community and belonging.
                        </p>
                    </div>
                </div>
            </div>

            <div className="vision">
                <h1>Our Vision</h1>
                <p>
                    To revolutionize digital interactions by creating immerse and engaging platforms that empower individuals to express, connect, and grow.
                </p>
            </div>

            <div className="different">
                <h1>What makes us Different from others?</h1>
                <div className="different-4">
                    <div>
                        <h2>Global Connectivity</h2>
                        <p>
                            Connecting people worldwide
                        </p>
                    </div>

                    <div>
                        <h2>Secure Journaling</h2>
                        <p>
                            Protecting your memories
                        </p>
                    </div>

                    <div>
                        <h2>Creative Interactions</h2>
                        <p>
                            Enhancing user engagement
                        </p>
                    </div>

                    <div>
                        <h2>Goal Tracking</h2>
                        <p>
                            Empowering personal growth
                        </p>
                    </div>
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

export default About