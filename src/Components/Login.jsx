import React from 'react';
import { useState } from 'react';
import styles from "./Login.module.css";
import Cart from './Cart';
import Navbar from './Navbar';

function Login() {
    const initState = {
        username: "",
        password:""
     }
    
    const [text, setText] = useState(initState);
    const [isAuth, setIsAuth] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setText({
            ...text,
            [name]: value
        })
    }

    const handleClick = () => {
        const { username, password } = text;
        if (username == "admin" && password == "admin") {
            setIsAuth(true);
        } else {
            alert("incorrect details entered");
        }
    }

    if (isAuth) {
        return <Navbar />
    }
    
    return (
        <div>
            <h2>Login Page</h2>
            <div className={styles.main}>
                <input type="text" placeholder="Enter Username" name="username" onChange={handleChange}/>
                <br />
                <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} />
                <br />
                <button onClick={handleClick}>Login</button>
            </div>
        </div>
    )
}

export default Login
