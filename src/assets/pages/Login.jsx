import { useState } from "react";

 const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        onLogin({ username, email, password });
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Nombre:
                    <input type="name" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label>
                    Email:
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                    Password:
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button type="submit">Login</button>
            </form>
        </div>
    );

 };

    export default Login;