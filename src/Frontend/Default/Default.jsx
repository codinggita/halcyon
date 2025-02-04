import { useNavigate } from 'react-router-dom';
import './Default.css'

function Default() {
    const navigate = useNavigate();

    return (
        <>
        <div className="default">
            <h2>ERROR</h2>
            <h1>404</h1>
            <h2>Oops! The page you are looking for doesn't exist.</h2>
            <div onClick={() => navigate('/')}>Go Home</div>
        </div>
        </>
    );
}

export default Default