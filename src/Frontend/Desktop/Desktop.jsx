import account_icon from '../../assets/account.png'
import settings_icon from '../../assets/settings.png'
import help_icon from '../../assets/help.png'
import log_out from '../../assets/logout.png'
import chat from '../../assets/chat.jpg'
import diary from '../../assets/diary01.jpg'
import './Desktop.css'
import { useNavigate } from 'react-router-dom';

function Desktop() {
    const navigate = useNavigate();
    
    return (
        <>
            <div className="desktop">
                <div className="desktop-left">
                    <h1>Halcyon</h1>
                    <div className="contents">
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
                            Help and Feedback
                        </div>
                        <div>
                            <img src={log_out} alt="log-out icon" />
                            Log out
                        </div>
                    </div>
                </div>

                <div className="desktop-right">
                    <h1>Halcyon</h1>
                    <h3>Your space for connection and reflection</h3>

                    <div className="desktop-options">
                        <div className="desktop-converse">
                            <div>
                                <img src={chat} alt="two people chatting" onClick={() => navigate('/desktop/converse')}/>
                            </div>
                            <div>Converse</div>
                        </div>

                        <div className="desktop-diary">
                            <div>
                                <img src={diary} alt="diary" onClick={() => navigate('/desktop/diary')}/>
                            </div>
                            <div>Diary</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Desktop