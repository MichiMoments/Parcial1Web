import './Home.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const routeChange = () =>{ 
        let path = "/about"; 
        navigate(path);
    }


    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    
    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email.includes('@')) {
            alert('Email invalido, forma incorrecta');
            return;
        }
        else if (!formData.password > 8) {
            alert('Contrasenia invalida, menor a 8 caracteres');
            return;
        }
        else {
            routeChange();
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
            <h2>Log in</h2>

            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            
            </div>
        </div>
    );
}




export default Home;