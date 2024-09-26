import React from 'react';
import './About.css';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';



const About = () => {

    const SessionCard = ({ title, desc, time, imageUrl }) => (
        <Card style={{ width: '18rem', position: 'relative' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.ImgOverlay>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Text>
                    {time}
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
      
    const ProfileCard = ({ name, times, picture }) => (
        <div className="profile-card">
            <div className="profile-icon">
            <img src= {picture} alt={name} />
            </div>
            <div className="profile-info">
            <h2>{name}</h2>
            <div className="activity-times">
                <p><i className="fas fa-running"></i> {times.running}</p>
                <p><i className="fas fa-swimmer"></i> {times.swimming}</p>
                <p><i className="fas fa-bicycle"></i> {times.cycling}</p>
            </div>
            </div>
        </div>
    );

    const sessions = {
        cycling: Array(5).fill({ title: 'Cycling Session', desc: 'Montar cicla', time: '40k - 2:10h' }),
        running: Array(10).fill({ title: 'Running Session', desc: 'Correr rapido', time: '10k - 1:05h' }),
        swimming: Array(10).fill({ title: 'Swimming Session', desc: 'Nadar resto', time: '5k - 1:00h' })
    };

   

return (
    <div className="about-container" style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="session-grid" style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            <div className="activity-column" style={{ flex: 1, margin: '10px' }}>
                <h2>Cycling</h2>
                <Col>
                    {sessions.cycling.map((session, index) => (
                        <SessionCard key={index} {...session} imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Oenone_Wood_2006_Bay_Cycling_Classic.jpg/240px-Oenone_Wood_2006_Bay_Cycling_Classic.jpg" />
                    ))}
                </Col>
                <Col>
                    {sessions.cycling.map((session, index) => (
                        <SessionCard key={index} {...session} imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Oenone_Wood_2006_Bay_Cycling_Classic.jpg/240px-Oenone_Wood_2006_Bay_Cycling_Classic.jpg" />
                    ))}
                </Col>
            </div>

            <div className="activity-column" style={{ flex: 1, margin: '10px' }}>
                <h2>Running</h2>
                {sessions.running.map((session, index) => (
                    <SessionCard key={index} {...session} imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKVx2Ztn46Pygbd6CDA4QnFQcsIy4Ira4_Q&s" />
                ))}
            </div>

            <div className="activity-column" style={{ flex: 1, margin: '10px' }}>
                <h2>Swimming</h2>
                {sessions.swimming.map((session, index) => (
                    <SessionCard key={index} {...session} imageUrl="https://static.wixstatic.com/media/5d5b83_b5109362459840c98b881489113a3411~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5d5b83_b5109362459840c98b881489113a3411~mv2.jpg" />
                ))}
            </div>
        </div>

        <ProfileCard name="Camilo Escobar" times={{ running: '1:05', swimming: '1:05', cycling: '1:05' }} />
    
    </div>
);
};

export default About;
