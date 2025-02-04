import pink from '../../assets/image02.jpeg'
import './SignIn.css'
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate();

    return (
        <>
            <div className="sign-in">
                <div className="sign-in-left">
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
                            <input type="password" name="password" id="password" req />
                            <br /><br />
                        </form>
                    </div>
                    <div className="sign-in-btn">
                        Sign In
                    </div>
                    <div className="sign-in-option">
                        Already have an account? <span onClick={() => navigate('/sign_up')}>Sign up</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn