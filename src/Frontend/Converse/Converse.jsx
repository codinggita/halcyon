import home_icon from '../../assets/home.png'
import account_icon from '../../assets/account.png'
import settings_icon from '../../assets/settings.png'
import help_icon from '../../assets/help.png'
import './Converse.css'
import { useNavigate } from 'react-router-dom';

function Converse() {
    const navigate = useNavigate();

    return (
        <>
            <div className="converse">
                <div className="converse-left">
                    <h1>Halcyon</h1>
                    <div className="contents">
                        <div onClick={() => navigate('/desktop')}>
                            <img src={home_icon} alt="home icon" />
                            Home
                        </div>
                        <div>
                            <img src={account_icon} alt="account icon" />
                            Accounts
                        </div>
                        <div>
                            <img src={settings_icon} alt="setting icon" />
                            Settings
                        </div>
                        <div>
                            <img src={help_icon} alt="help icon" />
                            Help and feedback
                        </div>
                    </div>
                </div>

                <div className="converse-right">
                    <div className="converse-navbar">
                        <div>Connections</div>
                        <div>Groups</div>
                        <div>Global</div>
                    </div>

                    <div className="converse-container">
                        <div className="converse-container-left">
                            <div>Smita</div>
                            <div>Darshita</div>
                            <div>Khushbu</div>
                            <div>Rajesh</div>
                        </div>

                        <div className="converse-container-right">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Converse