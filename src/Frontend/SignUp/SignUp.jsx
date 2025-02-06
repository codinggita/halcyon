import pink from '../../assets/image02.jpeg';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SignUp() {
    const navigate = useNavigate();
    const [moveLeft, setMoveLeft] = useState(false);

    const handleAnimation = () => {
        setMoveLeft(true);
        setTimeout(() => {
            navigate('/sign_in');  // Navigate after animation completes
        }, 1000);  // Match CSS animation duration
    };

    return (
        <div className="sign-up">
            <div className="sign-up-left">
                <h1>Welcome Back!</h1>
                <div className="sign-up-form">
                    <form>
                        <label htmlFor="name">Name:</label><br />
                        <input type="text" name="name" id="name" required />
                        <br /><br />

                        <label htmlFor="email">Email:</label><br />
                        <input type="email" name="email" id="email" required />
                        <br /><br />

                        <label htmlFor="password">Password:</label> <br />
                        <input type="password" name="password" id="password" required />
                        <br /><br />
                    </form>
                </div>
                <div className="sign-up-btn">
                    Sign Up
                </div>
                <div className="sign-up-option">
                    Don't have an account? <span onClick={handleAnimation}>Sign in</span>
                </div>
            </div>

            <div className={`sign-up-right ${moveLeft ? 'move-left' : ''}`}>
                <img src={pink} alt="pink background" />
            </div>
        </div>
    );
}

export default SignUp;
