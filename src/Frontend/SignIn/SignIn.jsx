import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pink from "../../assets/image02.jpeg";
import "./SignIn.css";

function SignIn() {
    const navigate = useNavigate();
    const [position, setPosition] = useState(0);

    const moveDiv = () => {
        const screenWidth = window.innerWidth - 730; // Account for div width
        let newPosition = 0;
        const speed = 8;

        const interval = setInterval(() => {
            if (newPosition >= screenWidth) {
                clearInterval(interval);
                navigate("/sign_up"); // Navigate when div reaches the end
            } else {
                newPosition += speed;
                setPosition(newPosition);
            }
        }, 10);
    };

    return (
        <>
            <div className="sign-in">
                <div
                    className="sign-in-left"
                    style={{ transform: `translateX(${position}px)`, transition: "transform 0.1s linear" }}
                >
                    <img src={pink} alt="green background" />
                </div>

                <div className="sign-in-right">
                    <h1>Create Account</h1>
                    <div className="sign-in-form">
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
                    <div className="sign-in-btn">
                        Sign In
                    </div>
                    <div className="sign-in-option">
                        Already have an account? <span id="sign-up" onClick={moveDiv}>Sign up</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;
