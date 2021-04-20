import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './Login.css';
import {Container, Row} from "react-bootstrap";

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return(
        <div className="login-wrapper">
            <Container>
                <Row>
            <h1 class="intro" >Please log in to modify sticky notes</h1>
                </Row>
        <form onSubmit={handleSubmit}>
            <Row>

            <label>
                <p>Username</p>
                <input class="input-box" type="text" onChange={e => setUserName(e.target.value)}/>
            </label>

            <label>
                <p>Password</p>
                <input class="input-box" type="password" />
            </label>
            </Row>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
            </Container>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}