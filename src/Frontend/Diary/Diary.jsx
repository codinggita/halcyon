import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import home_icon from '../../assets/home.png';
import account_icon from '../../assets/account.png';
import settings_icon from '../../assets/settings.png';
import help_icon from '../../assets/help.png';
import goal_icon from '../../assets/goal.png';
import add from '../../assets/add.png';
import diary03 from '../../assets/diary03.png';
import './Diary.css';

function Diary() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [diaries, setDiaries] = useState([]);

    // Fetch diaries from backend when component mounts
    useEffect(() => {
        fetchDiaries();
    }, []);

    const fetchDiaries = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/diaries');
            const data = await response.json();
            setDiaries(data);
        } catch (error) {
            console.error('Error fetching diaries:', error);
        }
    };

    const handleCreateDiary = async () => {
        if (!title.trim() || !description.trim()) {
            alert('Title and Description cannot be empty');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/diaries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, description }),
            });

            if (response.ok) {
                const newDiary = await response.json();
                setDiaries([...diaries, newDiary]); // Update UI with new diary
                setShowModal(false); // Close modal
                setTitle('');
                setDescription('');
            } else {
                console.error('Failed to create diary');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="diary">
            <div className="diary-left">
                <h1>Halcyon</h1>
                <div className="contents">
                    <div onClick={() => navigate('/desktop')}>
                        <img src={home_icon} alt="home icon" /> Home
                    </div>
                    <div>
                        <img src={goal_icon} alt="goal icon" /> Goal Tracker
                    </div>
                    <div>
                        <img src={account_icon} alt="account icon" /> Accounts
                    </div>
                    <div>
                        <img src={settings_icon} alt="setting icon" /> Settings
                    </div>
                    <div>
                        <img src={help_icon} alt="help icon" /> Help and feedback
                    </div>
                </div>
            </div>

            <div className="diary-right">
                <div className="diary-navbar">
                    <div className="title">
                        <h1>Diary</h1>
                        <h3>A collection of notes from your life.</h3>
                    </div>

                    <div className="create" onClick={() => setShowModal(true)}>
                        <img src={add} alt="add icon" /> Create
                    </div>
                </div>

                <div className="container">
                    {diaries.length === 0 ? (
                        <p>No diaries yet.</p>
                    ) : (
                        diaries.map((diary) => (
                            <div className="diaries" key={diary._id}>
                                <div>
                                    <img src={diary03} alt="diary" />
                                </div>
                                <div className="entry">
                                    <h3>{diary.title}</h3>
                                    <p>{diary.description}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Create Diary</h2>
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <div className="modal-buttons">
                            <button onClick={() => setShowModal(false)}>Cancel</button>
                            <button onClick={handleCreateDiary}>Create</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Diary;
