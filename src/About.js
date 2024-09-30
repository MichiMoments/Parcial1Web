import React from 'react';
import './About.css';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const About = () => {
    
    const { t } = useTranslation();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch('https://my.api.mockaroo.com/users.json?key=380c9c30')
            .then((response) => response.json())
            .then((data) => setUserData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const SessionCard = ({ title, desc, time, imageUrl }) => {
        const [showDetail, setShowDetail] = useState(false);

        const handleCardClick = () => {
            setShowDetail(!showDetail);
        };

        return (
            <div>
            <Card onClick={handleCardClick} style={{ width: '18rem', position: 'relative', marginBottom: '10px', cursor: 'pointer' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.ImgOverlay>
            <Card.Title>{title}</Card.Title>
            <Card.Text style={{ fontWeight: 'bold', color: 'black' }}>
                {desc}
            </Card.Text>
            <Card.Text style={{ fontWeight: 'bold', color: 'black' }}>
                {time}
            </Card.Text>
            </Card.ImgOverlay>
            </Card>
            {showDetail && (
            <div 
            onClick={handleCardClick} 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000
            }}
            >
            <Card onClick={handleCardClick} style={{ width: '18rem', position: 'relative', marginBottom: '10px', cursor: 'pointer' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.ImgOverlay>
            <Card.Title>{title}</Card.Title>
            <Card.Text style={{ fontWeight: 'bold', color: 'black' }}>
                {desc}
            </Card.Text>
            <Card.Text style={{ fontWeight: 'bold', color: 'black' }}>
                {time}
            </Card.Text>
            </Card.ImgOverlay>
            </Card>
            </div>
            )}
            </div>
        );
    };

    const ProfileCard = ({ name, times, picture }) => (
        <div className="profile-card" style={{ display: 'flex', alignItems: 'center', margin: '20px 0', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <div className="profile-icon" style={{ marginRight: '15px' }}>
                <img src={picture} alt={name} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
            </div>
            <div className="profile-info" style={{ flex: 1 }}>
                <h2 style={{ margin: '0 0 10px 0', fontSize: '1.5em', color: '#333' }}>{name}</h2>
                <div className="activity-times" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p>{t("running")}: {times.running.substring(0, 4)}</p>
                    <p>{t("swimming")}: {times.swimming.substring(0, 4)}</p>
                    <p>{t("cycling")}: {times.cycling.substring(0, 4)}</p>
                </div>
            </div>
        </div>
    );

    const sessions = {
        cycling: Array(10).fill({ title: t("cS"), desc: t("cD"), time: '40k - 2:10h' }),
        running: Array(10).fill({ title: t("rS"), desc: t("rD"), time: '10k - 1:05h' }),
        swimming: Array(10).fill({ title: t("sS"), desc: t("sD"), time: '5k - 1:00h' })
    };

    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const renderSessionColumns = (sessions, imageUrl) => {
        const chunks = chunkArray(sessions, 5);
        return (
            <Row>
                {chunks.map((chunk, index) => (
                    <Col key={index}>
                        {chunk.map((session, idx) => (
                            <SessionCard key={idx} {...session} imageUrl={imageUrl} />
                        ))}
                    </Col>
                ))}
            </Row>
        );
    };

    return (
        
        <div className="about-container" style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <LanguageSwitcher></LanguageSwitcher>
            <div className="session-grid" style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                <div className="activity-column" style={{ flex: 1, margin: '10px' }}>
                    <h2>{t("cycling")}:</h2>
                    {renderSessionColumns(sessions.cycling, "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Oenone_Wood_2006_Bay_Cycling_Classic.jpg/240px-Oenone_Wood_2006_Bay_Cycling_Classic.jpg")}
                </div>

                <div className="activity-column" style={{ flex: 1, margin: '10px' }}>
                    <h2>{t("running")}:</h2>
                    {renderSessionColumns(sessions.running, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKVx2Ztn46Pygbd6CDA4QnFQcsIy4Ira4_Q&s")}
                </div>

                <div className="activity-column" style={{ flex: 1, margin: '10px' }}>
                    <h2>{t("swimming")}:</h2>
                    {renderSessionColumns(sessions.swimming, "https://static.wixstatic.com/media/5d5b83_b5109362459840c98b881489113a3411~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5d5b83_b5109362459840c98b881489113a3411~mv2.jpg")}
                </div>
            </div>

            {userData && <ProfileCard name={userData.name} times={{ running: userData.run, swimming: userData.swim, cycling: userData.cycle }} picture={userData.pic} />}
            
        </div>

    );
};

export default About;
