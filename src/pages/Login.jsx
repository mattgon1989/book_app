//login page
import { useNavigate } from "react-router-dom";


const Login = ({ setUser }) => {
    const navigate = useNavigate();
    const handleLogin =(e) => {
        e.preventDefault();
        setUser ({
            email: "",
            password: ""
        });
        navigate('/profile');
    };
    return (
        <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="password">password</label>
        <input type="password" id="password"/>
        <button type="submit">Login</button>
        </form>
        </div>
    );
}

export default Login;